/* Reusable SVG illustrations for the lesson */

/* ============== PANDA (Penny) ============== */
window.Panda = function Panda({ size = 220, expression = "happy", style = {} }) {
  const eyes = expression === "thinking"
    ? <>
        <ellipse cx="44" cy="58" rx="6" ry="7" fill="#1a1410" />
        <ellipse cx="76" cy="58" rx="6" ry="7" fill="#1a1410" />
      </>
    : expression === "wow"
    ? <>
        <circle cx="44" cy="58" r="8" fill="#1a1410" />
        <circle cx="76" cy="58" r="8" fill="#1a1410" />
        <circle cx="46" cy="56" r="2.5" fill="#fff" />
        <circle cx="78" cy="56" r="2.5" fill="#fff" />
      </>
    : <>
        <ellipse cx="44" cy="58" rx="5" ry="6" fill="#1a1410" />
        <ellipse cx="76" cy="58" rx="5" ry="6" fill="#1a1410" />
        <circle cx="45" cy="56" r="2" fill="#fff" />
        <circle cx="77" cy="56" r="2" fill="#fff" />
      </>;

  const mouth = expression === "wow"
    ? <ellipse cx="60" cy="80" rx="6" ry="8" fill="#3a2018" />
    : expression === "thinking"
    ? <path d="M52 82 Q60 80 68 82" stroke="#1a1410" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    : <path d="M52 78 Q60 88 68 78" stroke="#1a1410" strokeWidth="3" fill="none" strokeLinecap="round" />;

  return (
    <svg viewBox="0 0 120 130" width={size} height={size * 130/120} style={style}>
      {/* ears */}
      <ellipse cx="28" cy="28" rx="14" ry="14" fill="#1a1410" />
      <ellipse cx="92" cy="28" rx="14" ry="14" fill="#1a1410" />
      {/* head */}
      <ellipse cx="60" cy="65" rx="44" ry="42" fill="#fffaf0" stroke="#1a1410" strokeWidth="2" />
      {/* eye patches */}
      <ellipse cx="44" cy="58" rx="13" ry="16" fill="#1a1410" transform="rotate(-15 44 58)" />
      <ellipse cx="76" cy="58" rx="13" ry="16" fill="#1a1410" transform="rotate(15 76 58)" />
      {/* eyes */}
      {eyes}
      {/* nose */}
      <ellipse cx="60" cy="72" rx="6" ry="4" fill="#1a1410" />
      {/* mouth */}
      {mouth}
      {/* cheek blush */}
      <circle cx="28" cy="78" r="5" fill="#f4c2c0" opacity="0.7" />
      <circle cx="92" cy="78" r="5" fill="#f4c2c0" opacity="0.7" />
      {/* tiny bow on Penny */}
      <path d="M82 22 L92 18 L92 28 Z" fill="#d99794" />
      <path d="M102 22 L92 18 L92 28 Z" fill="#d99794" />
      <circle cx="92" cy="23" r="3" fill="#b85c5c" />
    </svg>
  );
};

/* ============== POLAR BEAR (Bo) ============== */
window.PolarBear = function PolarBear({ size = 220, expression = "happy", style = {} }) {
  const eyes = expression === "thinking"
    ? <>
        <ellipse cx="42" cy="56" rx="5" ry="6" fill="#1a1410" />
        <ellipse cx="78" cy="56" rx="5" ry="6" fill="#1a1410" />
      </>
    : expression === "wow"
    ? <>
        <circle cx="42" cy="56" r="7" fill="#1a1410" />
        <circle cx="78" cy="56" r="7" fill="#1a1410" />
        <circle cx="44" cy="54" r="2.2" fill="#fff" />
        <circle cx="80" cy="54" r="2.2" fill="#fff" />
      </>
    : <>
        <ellipse cx="42" cy="56" rx="4.5" ry="5.5" fill="#1a1410" />
        <ellipse cx="78" cy="56" rx="4.5" ry="5.5" fill="#1a1410" />
        <circle cx="43" cy="54" r="1.8" fill="#fff" />
        <circle cx="79" cy="54" r="1.8" fill="#fff" />
      </>;

  const mouth = expression === "wow"
    ? <ellipse cx="60" cy="82" rx="6" ry="7" fill="#3a2018" />
    : <path d="M52 80 Q60 88 68 80" stroke="#1a1410" strokeWidth="3" fill="none" strokeLinecap="round" />;

  return (
    <svg viewBox="0 0 120 130" width={size} height={size * 130/120} style={style}>
      {/* ears */}
      <ellipse cx="28" cy="28" rx="13" ry="13" fill="#fffaf0" stroke="#9aaab8" strokeWidth="2" />
      <ellipse cx="92" cy="28" rx="13" ry="13" fill="#fffaf0" stroke="#9aaab8" strokeWidth="2" />
      <ellipse cx="28" cy="29" rx="6" ry="6" fill="#f4c2c0" opacity="0.5" />
      <ellipse cx="92" cy="29" rx="6" ry="6" fill="#f4c2c0" opacity="0.5" />
      {/* head */}
      <ellipse cx="60" cy="65" rx="46" ry="44" fill="#fffaf0" stroke="#9aaab8" strokeWidth="2" />
      {/* snout */}
      <ellipse cx="60" cy="78" rx="22" ry="18" fill="#f5ede0" stroke="#c8d2dc" strokeWidth="1.5" />
      {/* eyes */}
      {eyes}
      {/* nose */}
      <ellipse cx="60" cy="72" rx="7" ry="5" fill="#1a1410" />
      {/* mouth */}
      {mouth}
      {/* cheek blush */}
      <circle cx="22" cy="74" r="5" fill="#b9d6e8" opacity="0.6" />
      <circle cx="98" cy="74" r="5" fill="#b9d6e8" opacity="0.6" />
      {/* little earmuff/scarf hint */}
      <rect x="32" y="108" width="56" height="14" rx="6" fill="#7eaecb" />
      <rect x="32" y="108" width="56" height="6" rx="3" fill="#b9d6e8" />
    </svg>
  );
};

/* ============== ROUND BUN ============== */
window.Bun = function Bun({ size = 56, style = {} }) {
  return (
    <div className="bun" style={{ width: size, height: size, ...style }} />
  );
};

/* ============== TRAY OF 10 BUNS ============== */
window.TrayOfTen = function TrayOfTen({ filled = 10, label = true, scale = 1 }) {
  const buns = [];
  for (let i = 0; i < 10; i++) {
    buns.push(
      <div key={i} className="bun" style={{
        opacity: i < filled ? 1 : 0.15,
        width: 44 * scale,
        height: 44 * scale,
      }} />
    );
  }
  return (
    <div style={{ display: "inline-block", textAlign: "center" }}>
      <div style={{
        display: "inline-grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 6 * scale,
        padding: 14 * scale,
        background: "#d8a978",
        borderRadius: 14 * scale,
        border: `${4*scale}px solid #a87545`,
        boxShadow: "0 4px 12px rgba(60,40,20,0.15)",
      }}>
        {buns}
      </div>
      {label && (
        <div style={{
          fontFamily: "Fraunces, serif",
          fontWeight: 800,
          fontSize: 24 * scale,
          color: "#6e4a28",
          marginTop: 8,
        }}>tray of 10</div>
      )}
    </div>
  );
};

/* ============== BIG BAKERY BOX OF 100 (10 trays) ============== */
window.BoxOfHundred = function BoxOfHundred({ scale = 0.5, label = true }) {
  const trays = [];
  for (let i = 0; i < 10; i++) {
    trays.push(<TrayOfTen key={i} scale={scale} label={false} />);
  }
  return (
    <div style={{ display: "inline-block", textAlign: "center" }}>
      <div style={{
        display: "inline-grid",
        gridTemplateColumns: "repeat(5, auto)",
        gap: 8,
        padding: 16,
        background: "#b85c5c",
        borderRadius: 18,
        border: "4px solid #6a2828",
        boxShadow: "0 6px 16px rgba(60,40,20,0.2)",
      }}>
        {trays}
      </div>
      {label && (
        <div style={{
          fontFamily: "Fraunces, serif",
          fontWeight: 800,
          fontSize: 28,
          color: "#6a2828",
          marginTop: 10,
        }}>BIG BOX of 100</div>
      )}
    </div>
  );
};

/* ============== SNOW SPRINKLES ============== */
window.SnowField = function SnowField({ count = 30 }) {
  const flakes = [];
  // deterministic positions, kept around the edges so they don't overlap centered text
  for (let i = 0; i < count; i++) {
    let left = 2 + ((i * 137.5) % 96);
    // push out of central 25..75% band
    if (left > 25 && left < 75) left = left < 50 ? left - 23 : left + 23;
    if (left < 2) left = 2;
    if (left > 96) left = 96;
    const top = 2 + ((i * 73.3) % 92);
    const size = 28 + (i % 4) * 8;
    flakes.push(
      <div key={i} style={{
        position: "absolute",
        left: `${left}%`,
        top: `${top}%`,
        fontSize: size,
        color: "rgba(255,255,255,0.55)",
        pointerEvents: "none",
      }} aria-hidden="true">❄</div>
    );
  }
  return <div style={{ position: "absolute", inset: 0, zIndex: 1 }} aria-hidden="true">{flakes}</div>;
};

/* ============== STAR BURST (for cheer moments) ============== */
window.StarBurst = function StarBurst({ count = 5, style = {} }) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<span key={i}>⭐</span>);
  }
  return <div className="stars" style={style}>{stars}</div>;
};

/* ============== IGLOO BAKERY (background scene) ============== */
window.IglooBakery = function IglooBakery() {
  return (
    <svg viewBox="0 0 1920 600" width="100%" style={{ position: "absolute", bottom: 0, left: 0, zIndex: 1 }}>
      {/* ground */}
      <rect x="0" y="450" width="1920" height="200" fill="#f0f5f7" />
      <ellipse cx="960" cy="470" rx="900" ry="40" fill="#dde7ed" opacity="0.6" />
      {/* far trees */}
      {[180, 320, 1620, 1780].map((x, i) => (
        <g key={i}>
          <polygon points={`${x-40},460 ${x},340 ${x+40},460`} fill="#5a7a6a" />
          <polygon points={`${x-32},420 ${x},320 ${x+32},420`} fill="#6a8a7a" />
        </g>
      ))}
      {/* igloo */}
      <ellipse cx="960" cy="480" rx="380" ry="200" fill="#fffaf0" stroke="#9aaab8" strokeWidth="3" />
      <ellipse cx="960" cy="480" rx="380" ry="200" fill="url(#iglooBricks)" opacity="0.3" />
      {/* doorway */}
      <path d="M820 480 Q820 380 920 380 L920 480 Z" fill="#3a4a5a" />
      <ellipse cx="870" cy="380" rx="50" ry="20" fill="#fffaf0" stroke="#9aaab8" strokeWidth="3" />
      {/* sign */}
      <rect x="1020" y="320" width="240" height="80" rx="12" fill="#d99794" stroke="#1a1410" strokeWidth="3" />
      <text x="1140" y="370" textAnchor="middle" fontFamily="Fraunces, serif" fontWeight="800" fontSize="36" fill="#fff5e0">BAKERY</text>
      {/* chimney with steam */}
      <rect x="1100" y="260" width="40" height="60" fill="#9aaab8" />
      <circle cx="1120" cy="240" r="20" fill="#fff" opacity="0.8" />
      <circle cx="1140" cy="220" r="16" fill="#fff" opacity="0.6" />
      <circle cx="1110" cy="200" r="12" fill="#fff" opacity="0.5" />
      <defs>
        <pattern id="iglooBricks" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
          <line x1="0" y1="20" x2="80" y2="20" stroke="#c8d2dc" strokeWidth="1.5" />
          <line x1="0" y1="0" x2="0" y2="40" stroke="#c8d2dc" strokeWidth="1.5" />
          <line x1="40" y1="20" x2="40" y2="40" stroke="#c8d2dc" strokeWidth="1.5" />
        </pattern>
      </defs>
    </svg>
  );
};
