interface BadgeProps {
  type: string;
  earned?: boolean;
  description?: string;
}

export function Badge({ type, earned = false, description }: BadgeProps) {
  return (
    <div className={`
      badge ${earned ? 'badge-earned' : 'badge-locked'}
      ${earned ? 'cursor-pointer hover:scale-105' : 'cursor-default'}
      transition-all duration-200
    `}>
      <span className="mr-2 text-lg">{earned ? '⭐' : '○'}</span>
      <span className="font-medium">{type}</span>
      {description && earned && (
        <span className="ml-2 text-xs opacity-75">({description})</span>
      )}
    </div>
  );
} 