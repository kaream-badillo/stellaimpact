interface ProgressBarProps {
  progress: number;
  total: number;
  showPercentage?: boolean;
  showText?: boolean;
}

export function ProgressBar({ progress, total, showPercentage = true, showText = true }: ProgressBarProps) {
  const percentage = Math.min((progress / total) * 100, 100);
  
  return (
    <div className="w-full">
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showText && (
        <div className="text-center text-sm text-gray-600 mt-2">
          <span className="font-medium">{progress}/{total} badges</span>
          {showPercentage && (
            <span className="ml-2">• {Math.round(percentage)}%</span>
          )}
        </div>
      )}
    </div>
  );
} 