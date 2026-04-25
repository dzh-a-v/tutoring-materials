/* ============== SLIDES — Milana's Maths Adventure ============== */
/* This file defines window.Slides — an array of slide-render functions. */

const Slides = [];

/* ---------- helper: column math digits ---------- */
function ColMath({ cols = 3, rows }) {
  // rows: array of { kind: 'top'|'bot'|'ans'|'carry'|'borrow'|'rule', op, digits }
  const style = { "--cols": cols };
  return (
    <div className="column-math" style={style}>
      {rows.map((row, i) => {
        if (row.kind === "rule") {
          return <div key={i} className="rule" />;
        }
        const cells = [];
        // op cell
        cells.push(<div key="op" className="op">{row.op || ""}</div>);
        // digit cells
        const colors = cols === 3 ? ["h", "t", "o"] : ["t", "o"];
        for (let c = 0; c < cols; c++) {
          const d = row.digits[c];
          if (d === undefined || d === null) {
            cells.push(<div key={c} className="digit ghost">0</div>);
          } else if (typeof d === "object") {
            // { val, strike, borrowed, color }
            const cls = ["digit", colors[c]];
            if (d.strike) cls.push("strike");
            cells.push(<div key={c} className={cls.join(" ")}>{d.val}</div>);
          } else {
            cells.push(<div key={c} className={`digit ${colors[c]} ${row.kind === "ans" ? "answer" : ""}`}>{d}</div>);
          }
        }
        if (row.kind === "carry" || row.kind === "borrow") {
          // small overlay row
          return (
            <React.Fragment key={i}>
              {cells.map((cell, idx) => {
                if (idx === 0) return <div key="op" className="op" />;
                const c = idx - 1;
                const d = row.digits[c];
                return (
                  <div key={c} className={row.kind === "carry" ? "carry-tiny" : "borrowed"}>
                    {d === undefined || d === null ? "" : (typeof d === "object" ? d.val : d)}
                  </div>
                );
              })}
            </React.Fragment>
          );
        }
        return <React.Fragment key={i}>{cells}</React.Fragment>;
      })}
    </div>
  );
}

function PVHeaders({ cols = 3 }) {
  return (
    <div className="pv-headers" style={{ "--cols": cols }}>
      <div></div>
      {cols === 3 && <div className="h-h">Hundreds</div>}
      <div className="h-t">Tens</div>
      <div className="h-o">Ones</div>
    </div>
  );
}

/* ============== SLIDE 1: Cover ============== */
Slides.push(function Slide1() {
  return (
    <div className="slide-flex bg-snow" style={{ height: "100%", padding: "100px 120px", justifyContent: "center", alignItems: "center", textAlign: "center", position: "relative" }}>
      <SnowField count={40} />
      <div style={{ display: "flex", gap: 80, alignItems: "flex-end", marginBottom: 40, position: "relative", zIndex: 3 }}>
        <Panda size={300} expression="happy" />
        <PolarBear size={320} expression="happy" />
      </div>
      <div className="kicker" style={{ marginBottom: 16 }}>A Maths Adventure</div>
      <h1 className="title" style={{ color: "#2b2118", marginBottom: 16, fontSize: 130 }}>Penny &amp; Bo</h1>
      <div className="subtitle" style={{ marginBottom: 32 }}>
        and the Big Day at the Igloo Bakery
      </div>
      <div style={{ fontFamily: "Nunito", fontWeight: 700, fontSize: 28, color: "#4a3c2e", opacity: 0.7 }}>
        Chapter 1 — Adding things up &nbsp;·&nbsp; Chapter 2 — Taking them away
      </div>
    </div>
  );
});

/* ============== SLIDE 2: Meet the friends ============== */
Slides.push(function Slide2() {
  return (
    <div className="slide-pad bg-cream" style={{ height: "100%" }}>
      <div className="kicker">Once upon a snowy morning…</div>
      <h2 style={{ fontSize: 80, marginTop: 24, marginBottom: 60, maxWidth: 1700 }}>
        Meet <span style={{ color: "#b85c5c", whiteSpace: "nowrap" }}>Penny the Panda</span> and her best friend <span style={{ color: "#7eaecb", whiteSpace: "nowrap" }}>Bo the Polar Bear</span>.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", marginTop: 40 }}>
        <div style={{ textAlign: "center" }}>
          <Panda size={340} />
          <div className="bubble" style={{ display: "inline-block", marginTop: 32, textAlign: "left" }}>
            "I came all the way from the bamboo forest to visit Bo today!"
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <PolarBear size={360} />
          <div className="bubble right" style={{ display: "inline-block", marginTop: 32, textAlign: "left" }}>
            "And I just opened my very own igloo bakery! Want to help me count buns?"
          </div>
        </div>
      </div>
    </div>
  );
});

/* ============== SLIDE 3: The bakery scene ============== */
Slides.push(function Slide3() {
  return (
    <div className="slide-flex bg-snow" style={{ height: "100%", position: "relative" }}>
      <div style={{ padding: "100px 120px 0 120px", textAlign: "center", position: "relative", zIndex: 5, paddingBottom: 40 }}>
        <div className="kicker">Welcome to…</div>
        <h2 style={{ fontSize: 96, margin: "16px 0 24px" }}>Bo's Igloo Bakery</h2>
        <div className="body-big" style={{ margin: "0 auto", maxWidth: 1300, fontFamily: "Fraunces, serif", fontStyle: "italic", color: "#4a3c2e" }}>
          Bo bakes the warmest, fluffiest <strong>honey-bamboo buns</strong> in the whole Arctic.<br/>
          But today the bakery is BUSY — and Bo and Penny need a clever helper.<br/>
          <span style={{ color: "#b85c5c", fontWeight: 700 }}>That's where you come in!</span>
        </div>
      </div>
      <IglooBakery />
      <div style={{ position: "absolute", bottom: 100, left: 380, zIndex: 4 }}>
        <Panda size={180} />
      </div>
      <div style={{ position: "absolute", bottom: 100, right: 380, zIndex: 4 }}>
        <PolarBear size={200} />
      </div>
    </div>
  );
});

/* ============== SLIDE 4: How buns are packed (place value intro) ============== */
Slides.push(function Slide4() {
  return (
    <div className="slide-pad bg-cream" style={{ height: "100%" }}>
      <div className="kicker">First — how Bo packs his buns</div>
      <h2 style={{ fontSize: 72, marginTop: 24, marginBottom: 40, maxWidth: 1500 }}>
        At the bakery, buns are <em>always</em> packed the same way:
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 60, marginTop: 40, alignItems: "end" }}>
        {/* ones */}
        <div style={{ textAlign: "center" }}>
          <div style={{ height: 320, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
            <div className="bun" style={{ width: 90, height: 90 }} />
          </div>
          <div className="label-pill tag-o" style={{ marginTop: 30 }}>1 single bun = 1 ONE</div>
        </div>
        {/* tens */}
        <div style={{ textAlign: "center" }}>
          <div style={{ height: 320, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
            <TrayOfTen scale={1.1} label={false} />
          </div>
          <div className="label-pill tag-t" style={{ marginTop: 30 }}>1 tray = 10 buns = 1 TEN</div>
        </div>
        {/* hundreds */}
        <div style={{ textAlign: "center" }}>
          <div style={{ height: 320, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
            <BoxOfHundred scale={0.42} label={false} />
          </div>
          <div className="label-pill tag-h" style={{ marginTop: 30 }}>1 big box = 10 trays = 1 HUNDRED</div>
        </div>
      </div>
      <div style={{ marginTop: 50, textAlign: "center", fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: 36, color: "#4a3c2e" }}>
        ✨ The Golden Rule: as soon as you have <strong>10 of something</strong>, you bundle it into the next size up. ✨
      </div>
    </div>
  );
});

/* ============== SLIDE 5: Addition review — easy one (no carry) ============== */
Slides.push(function Slide5() {
  return (
    <div className="slide-pad bg-cream" style={{ height: "100%" }}>
      <div className="kicker">Chapter 1 — Adding</div>
      <h2 style={{ fontSize: 64, marginTop: 16, marginBottom: 30, maxWidth: 1500 }}>
        Penny brought <strong style={{ color: "#b85c5c" }}>23 buns</strong> from home. Bo had <strong style={{ color: "#7eaecb" }}>14 buns</strong> on the shelf.
      </h2>
      <div className="subtitle" style={{ fontSize: 38, marginBottom: 30 }}>
        How many buns altogether? Let's stack them in columns.
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", marginTop: 20 }}>
        <div style={{ textAlign: "center" }}>
          <PVHeaders cols={2} />
          <ColMath cols={2} rows={[
            { kind: "top", op: "", digits: [2, 3] },
            { kind: "bot", op: "+", digits: [1, 4] },
            { kind: "rule" },
            { kind: "ans", op: "", digits: [3, 7] },
          ]} />
        </div>
        <div>
          <div className="card card-warm">
            <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 38, marginBottom: 20, color: "#4a3c2e" }}>
              Step by step:
            </div>
            <div style={{ fontSize: 30, lineHeight: 1.5 }}>
              <div style={{ marginBottom: 16 }}><strong style={{ color: "#4a7a4a" }}>Ones first:</strong> 3 + 4 = <strong>7</strong> ones ✓</div>
              <div><strong style={{ color: "#6a8fb0" }}>Then tens:</strong> 2 + 1 = <strong>3</strong> tens ✓</div>
            </div>
            <div style={{ marginTop: 24, fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: 32 }}>
              Easy peasy — <strong>37 buns</strong>! 🥖
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

/* ============== SLIDE 6: Addition WITH CARRY — setup ============== */
Slides.push(function Slide6() {
  return (
    <div className="slide-pad bg-cream" style={{ height: "100%" }}>
      <div className="kicker">But what about THIS one?</div>
      <h2 style={{ fontSize: 64, marginTop: 16, marginBottom: 30, maxWidth: 1600 }}>
        A grumpy walrus orders <strong style={{ color: "#b85c5c" }}>27 buns</strong>. Then a sleepy seal orders <strong style={{ color: "#7eaecb" }}>35 buns</strong>.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", marginTop: 20 }}>
        <div style={{ textAlign: "center" }}>
          <PVHeaders cols={2} />
          <ColMath cols={2} rows={[
            { kind: "top", op: "", digits: [2, 7] },
            { kind: "bot", op: "+", digits: [3, 5] },
            { kind: "rule" },
            { kind: "ans", op: "", digits: ["?", "?"] },
          ]} />
        </div>
        <div>
          <div className="card">
            <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 38, marginBottom: 16, color: "#4a3c2e" }}>
              Uh oh…
            </div>
            <div style={{ fontSize: 32, lineHeight: 1.5 }}>
              Ones: <strong>7 + 5 = 12</strong>.<br/><br/>
              But <strong style={{ color: "#b85c5c" }}>12 is too big</strong> to fit in the ones column — it has TWO digits!
            </div>
          </div>
          <div style={{ marginTop: 30, display: "flex", alignItems: "center", gap: 24, fontSize: 32, fontFamily: "Fraunces, serif", fontStyle: "italic" }}>
            <Panda size={120} expression="thinking" />
            <div className="bubble">"Hmm... what does Bo do when he has too many buns?"</div>
          </div>
        </div>
      </div>
    </div>
  );
});

/* ============== SLIDE 7: Addition WITH CARRY — bundling visual ============== */
Slides.push(function Slide7() {
  return (
    <div className="slide-pad bg-mint" style={{ height: "100%" }}>
      <div className="kicker" style={{ color: "#2c4a2c" }}>The Golden Rule in action ✨</div>
      <h2 style={{ fontSize: 60, marginTop: 16, marginBottom: 20, maxWidth: 1600 }}>
        12 buns? Bo grabs an empty tray and <strong style={{ color: "#b85c5c" }}>bundles 10 of them up!</strong>
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 40, alignItems: "center", marginTop: 30 }}>
        {/* Before */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "Nunito", fontWeight: 800, fontSize: 26, color: "#4a3c2e", marginBottom: 16 }}>BEFORE</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8, justifyItems: "center", maxWidth: 480, margin: "0 auto" }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bun" style={{ width: 56, height: 56 }} />
            ))}
          </div>
          <div style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: 32, marginTop: 16 }}>12 single buns</div>
        </div>
        {/* arrow */}
        <div style={{ fontSize: 80, color: "#b85c5c" }}>→</div>
        {/* After */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "Nunito", fontWeight: 800, fontSize: 26, color: "#4a3c2e", marginBottom: 16 }}>AFTER BUNDLING</div>
          <div style={{ display: "flex", gap: 40, justifyContent: "center", alignItems: "flex-end" }}>
            <TrayOfTen scale={1} label={false} />
            <div style={{ display: "flex", gap: 8 }}>
              <div className="bun" style={{ width: 56, height: 56 }} />
              <div className="bun" style={{ width: 56, height: 56 }} />
            </div>
          </div>
          <div style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: 32, marginTop: 16 }}>
            <span style={{ color: "#6a8fb0" }}>1 tray (1 TEN)</span> + <span style={{ color: "#4a7a4a" }}>2 buns (2 ONES)</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 40, textAlign: "center", fontFamily: "Fraunces, serif", fontSize: 36, fontStyle: "italic", color: "#2c4a2c" }}>
        We <strong>keep the 2 ones</strong> at the bottom, and <strong>carry the 1 ten</strong> up to the tens column. ⬆
      </div>
    </div>
  );
});

/* ============== SLIDE 8: Addition WITH CARRY — column method finished ============== */
Slides.push(function Slide8() {
  return (
    <div className="slide-pad bg-cream" style={{ height: "100%" }}>
      <div className="kicker">Now the column maths matches!</div>
      <h2 style={{ fontSize: 60, marginTop: 16, marginBottom: 20 }}>
        27 + 35 — solved together
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 60, alignItems: "center", marginTop: 20 }}>
        <div style={{ textAlign: "center" }}>
          <PVHeaders cols={2} />
          <ColMath cols={2} rows={[
            { kind: "carry", op: "", digits: [1, null] },
            { kind: "top", op: "", digits: [2, 7] },
            { kind: "bot", op: "+", digits: [3, 5] },
            { kind: "rule" },
            { kind: "ans", op: "", digits: [6, 2] },
          ]} />
          <div style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: 34, marginTop: 30, color: "#b85c5c" }}>
            That little <strong>1</strong> on top is the carried tray! 🥖
          </div>
        </div>
        <div>
          <div className="card card-warm">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 22 }}>
              <div className="step-num">1</div>
              <div style={{ fontSize: 28, lineHeight: 1.4, paddingTop: 10 }}>
                <strong style={{ color: "#4a7a4a" }}>Ones:</strong> 7 + 5 = 12. Write <strong>2</strong>, carry <strong>1</strong> ten.
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 22 }}>
              <div className="step-num">2</div>
              <div style={{ fontSize: 28, lineHeight: 1.4, paddingTop: 10 }}>
                <strong style={{ color: "#6a8fb0" }}>Tens:</strong> 2 + 3 + <strong>1 carried</strong> = <strong>6</strong> tens.
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
              <div className="step-num">3</div>
              <div style={{ fontSize: 28, lineHeight: 1.4, paddingTop: 10 }}>
                Answer: <strong style={{ fontSize: 38 }}>62 buns!</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

/* ============== SLIDE 9: Practice addition (your turn) ============== */
Slides.push(function Slide9() {
  return (
    <div className="slide-pad bg-cream" style={{ height: "100%", position: "relative" }}>
      <div className="kicker">Your turn!</div>
      <h2 style={{ fontSize: 64, marginTop: 16, marginBottom: 24, maxWidth: 1600 }}>
        A flock of penguins bought <strong style={{ color: "#b85c5c" }}>48 buns</strong>, and a polar fox bought <strong style={{ color: "#7eaecb" }}>26 buns</strong>.
      </h2>
      <div className="subtitle" style={{ fontSize: 36, marginBottom: 20 }}>
        Can you add them up? Remember to carry!
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", marginTop: 20 }}>
        <div style={{ textAlign: "center" }}>
          <PVHeaders cols={2} />
          <ColMath cols={2} rows={[
            { kind: "top", op: "", digits: [4, 8] },
            { kind: "bot", op: "+", digits: [2, 6] },
            { kind: "rule" },
            { kind: "ans", op: "", digits: ["?", "?"] },
          ]} />
        </div>
        <div>
          <div className="card card-blue">
            <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 34, marginBottom: 24, color: "#244660" }}>
              Hints:
            </div>
            <ul style={{ fontSize: 28, lineHeight: 1.6, listStyle: "none", paddingLeft: 0 }}>
              <li style={{ marginBottom: 14 }}>🟢 <strong>Ones first:</strong> 8 + 6 = ?</li>
              <li style={{ marginBottom: 14 }}>🔵 Is that more than 9? Then bundle a tray!</li>
              <li>🔴 <strong>Tens:</strong> 4 + 2 + carried = ?</li>
            </ul>
          </div>
        </div>
      </div>
      {/* cheering reveal — toggle by clicking */}
      <div id="reveal-9" style={{ display: "none", position: "absolute", inset: 0, background: "rgba(250,244,232,0.95)", zIndex: 10, alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <StarBurst count={5} style={{ position: "relative", marginBottom: 30 }} />
        <h2 style={{ fontSize: 140, color: "#b85c5c" }}>74!</h2>
        <div style={{ fontSize: 40, fontFamily: "Fraunces, serif", fontStyle: "italic", color: "#4a3c2e", marginTop: 20 }}>
          8 + 6 = 14 → write 4, carry 1.<br/>
          4 + 2 + 1 = 7 tens. <strong>Penny &amp; Bo cheer for you!</strong> 🐼🐻‍❄️
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 60, right: 80, fontSize: 26, color: "#4a3c2e", opacity: 0.5, fontFamily: "Nunito" }}>
        (click to reveal)
      </div>
      <script dangerouslySetInnerHTML={{ __html: `
        document.currentScript.parentElement.addEventListener('click', () => {
          const r = document.getElementById('reveal-9');
          if (r) r.style.display = r.style.display === 'flex' ? 'none' : 'flex';
        });
      ` }} />
    </div>
  );
});

window.Slides = Slides;
window.ColMath = ColMath;
window.PVHeaders = PVHeaders;
