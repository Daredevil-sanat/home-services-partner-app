import Icon from './Icon';

/**
 * TrustBanner — large banner for guarantee/trust messaging.
 * Accepts bg, badgeColor, badgeIcon, badge, title, description, buttonLabel, buttonStyle.
 */
export default function TrustBanner({
  bg = 'bg-white',
  badgeColor = 'text-primary',
  badgeIcon,
  badge,
  title,
  description,
  buttonLabel,
  buttonStyle = 'primary', // 'primary' | 'secondary'
}) {
  const btnClass =
    buttonStyle === 'primary'
      ? 'bg-[#5952e4] hover:bg-[#4640c4] text-white'
      : 'bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-800';

  return (
    <div
      className={`${bg} rounded-xl md:rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 border border-gray-100 shadow-sm`}
    >
      <div className="max-w-2xl">
        {badge && (
          <div className={`flex items-center gap-1 ${badgeColor} text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2`}>
            {badgeIcon && <Icon name={badgeIcon} className="text-xs md:text-sm" />}
            {badge}
          </div>
        )}
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">{title}</h2>
        <p className="text-gray-600 text-xs md:text-base leading-relaxed">{description}</p>
      </div>
      {buttonLabel && (
        <button
          className={`${btnClass} px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold transition-colors shrink-0`}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
}
