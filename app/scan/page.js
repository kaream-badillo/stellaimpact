"use client";

import { useState, useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import Image from "next/image";
import Link from "next/link";

export default function ScanPage() {
  const [scanning, setScanning] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [error, setError] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const scannerRef = useRef(null);

  useEffect(() => {
    // Cleanup function to stop scanner when component unmounts
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear();
      }
    };
  }, []);

  const startScanner = () => {
    setError(null);
    setScanResult(null);
    setScanning(true);

    try {
      const scanner = new Html5QrcodeScanner(
        "qr-reader",
        {
          qrbox: {
            width: 250,
            height: 250,
          },
          aspectRatio: 1.0,
        },
        false
      );

      scanner.render(
        (decodedText, decodedResult) => {
          // Success callback
          setScannedData(decodedText);
          setScanResult(decodedResult);
          setScanning(false);
          scanner.clear();
          scannerRef.current = null;
          
          // Process the scanned data
          processScannedData(decodedText);
        },
        (errorMessage) => {
          // Error callback
          console.log(errorMessage);
        }
      );

      scannerRef.current = scanner;
    } catch (err) {
      setError("Error starting scanner: " + err.message);
      setScanning(false);
    }
  };

  const stopScanner = () => {
    if (scannerRef.current) {
      scannerRef.current.clear();
      scannerRef.current = null;
    }
    setScanning(false);
    setError(null);
  };

  const processScannedData = (data) => {
    // Process different types of QR codes
    try {
      // Check if it's a Stellar address
      if (data.startsWith("G") && data.length === 56) {
        // Stellar public key
        handleStellarAddress(data);
      } else if (data.startsWith("stellar:")) {
        // Stellar URI scheme
        handleStellarURI(data);
      } else if (data.includes("recycling") || data.includes("ecobeca")) {
        // Recycling verification code
        handleRecyclingCode(data);
      } else {
        // Generic QR code data
        handleGenericData(data);
      }
    } catch (err) {
      setError("Error processing scanned data: " + err.message);
    }
  };

  const handleStellarAddress = (address) => {
    // Handle Stellar public key
    console.log("Stellar address scanned:", address);
    // You can implement wallet integration here
  };

  const handleStellarURI = (uri) => {
    // Handle Stellar URI scheme
    console.log("Stellar URI scanned:", uri);
    // Parse and handle Stellar payment requests
  };

  const handleRecyclingCode = (code) => {
    // Handle recycling verification codes
    console.log("Recycling code scanned:", code);
    // Implement recycling verification logic
  };

  const handleGenericData = (data) => {
    // Handle generic QR code data
    console.log("Generic data scanned:", data);
  };

  const resetScanner = () => {
    setScannedData(null);
    setScanResult(null);
    setError(null);
    if (scannerRef.current) {
      scannerRef.current.clear();
      scannerRef.current = null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Wallet
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            QR Scanner
          </h1>
          <p className="text-gray-600">
            Scan QR codes for payments, recycling verification, and more
          </p>
        </div>

        {/* Scanner Container */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          {!scanning && !scannedData && (
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V6a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1zm12 0h2a1 1 0 001-1V6a1 1 0 00-1-1h-2a1 1 0 00-1 1v1a1 1 0 001 1zM5 20h2a1 1 0 001-1v-1a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1z" />
                </svg>
              </div>
              <button
                onClick={startScanner}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 transition-colors"
              >
                Start Scanner
              </button>
            </div>
          )}

          {/* Scanner */}
          {scanning && (
            <div>
              <div id="qr-reader" className="w-full"></div>
              <button
                onClick={stopScanner}
                className="w-full mt-4 bg-red-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-red-700 transition-colors"
              >
                Stop Scanner
              </button>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-800 text-sm">{error}</span>
              </div>
            </div>
          )}

          {/* Scan Result */}
          {scannedData && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-green-800 font-semibold">Scan Successful!</span>
              </div>
              <div className="bg-white p-3 rounded-lg border">
                <p className="text-sm text-gray-600 mb-1">Scanned Data:</p>
                <p className="text-xs font-mono text-gray-800 break-all">{scannedData}</p>
              </div>
              <div className="mt-3 flex space-x-2">
                <button
                  onClick={resetScanner}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
                >
                  Scan Again
                </button>
                <button
                  onClick={() => {
                    // Handle the scanned data (e.g., process payment, verify recycling)
                    console.log("Processing scanned data:", scannedData);
                  }}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Process
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            What can you scan?
          </h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Stellar addresses for payments and transfers</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Recycling verification codes from campus bins</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Micro-scholarship transaction codes</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Wallet-to-wallet transfer requests</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 