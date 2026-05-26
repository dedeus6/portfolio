export default function PixPulse() {
  return (
    <div className="pix-vis" aria-hidden="true">
      <svg viewBox="0 0 300 100" className="pix-pulse">
        <line x1="0" y1="50" x2="120" y2="50" stroke="var(--border-strong)" strokeWidth="1" strokeDasharray="3 4" />
        <line x1="180" y1="50" x2="300" y2="50" stroke="var(--border-strong)" strokeWidth="1" strokeDasharray="3 4" />
        <text x="14" y="46" fill="var(--text-faint)" fontFamily="var(--font-mono)" fontSize="9">payer</text>
        <text x="244" y="46" fill="var(--text-faint)" fontFamily="var(--font-mono)" fontSize="9">payee</text>
        <g transform="translate(150 50)">
          <circle className="ring" r="6" />
          <circle className="ring ring2" r="6" />
          <circle className="ring ring3" r="6" />
          <circle className="core" r="5" />
        </g>
      </svg>
    </div>
  );
}
