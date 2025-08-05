import { Html5Qrcode } from "html5-qrcode";
import { useEffect } from "react";

const QrScanner = ({ onScanSuccess }) => {
  useEffect(() => {
    const html5QrCode = new Html5Qrcode("qr-reader");

    Html5Qrcode.getCameras().then((devices) => {
      if (devices && devices.length) {
        const cameraId = devices[0].id;
        html5QrCode.start(
          cameraId,
          { fps: 10, qrbox: 250 },
          (decodedText) => {
            onScanSuccess(decodedText);
            html5QrCode.stop();
          }
        );
      }
    });

    return () => {
      html5QrCode.stop();
    };
  }, []);

  return <div id="qr-reader" style={{ width: "300px" }} />;
};

export default QrScanner;
