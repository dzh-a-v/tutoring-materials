/* ============== SLIDES 10-14 — Subtraction with exchanging ============== */

const Slides2 = [];

/* ============== SLIDE 10: Chapter 2 opener — story setup ============== */
Slides2.push(function Slide10() {
  return (
    <div className="slide-flex bg-night" style={{ height: "100%", position: "relative", padding: "120px 120px" }}>
      <SnowField count={50} />
      <div style={{ position: "relative", zIndex: 3, textAlign: "center", marginTop: 40 }}>
        <div className="kicker" style={{ color: "#fff5e0", opacity: 0.8 }}>Chapter 2 — Taking away</div>
        <h1 style={{ fontSize: 130, marginTop: 20, marginBottom: 30, color: "#fff5e0" }}>
          Then, in walks a <span style={{ color: "#f4c2c0" }}>HUGE crowd</span>…
        </h1>
        <div className="subtitle" style={{ fontSize: 44, color: "#fff5e0", maxWidth: 1500, margin: "0 auto" }}>
          Bo had baked exactly <strong style={{ color: "#e8b94e" }}>103 buns</strong> for the morning.<br/>
          A whole school of penguins came in and gobbled up <strong style={{ color: "#e8b94e" }}>95 buns</strong>!
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 120, left: 200, zIndex: 4 }}>
        <PolarBear size={220} expression="wow" />
      </div>
      <div style={{ position: "absolute", bottom: 120, right: 200, zIndex: 4 }}>
        <Panda size={200} expression="wow" />
      </div>
      <div style={{ position: "absolute", bottom: 220, left: "50%", transform: "translateX(-50%)", zIndex: 4 }}>
        <div className="bubble" style={{ fontSize: 36, padding: "28px 40px" }}>
          "Oh no, Penny… how many buns are LEFT?"
        </div>
      </div>
    </div>
  );
});

/* ============== SLIDE 11: Try the easy way (hits the wall) ============== */
Slides2.push(function Slide11() {
  return (
    <div className="slide-pad bg-cream" style={{ height: "100%" }}>
      <div className="kicker">Let's set up the column subtraction…</div>
      <h2 style={{ fontSize: 56, marginTop: 16, marginBottom: 30, maxWidth: 1600 }}>
        103 − 95. Big number on top, small number under it.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <PVHeaders cols={3} />
          <ColMath cols={3} rows={[
            { kind: "top", op: "", digits: [1, 0, 3] },
            { kind: "bot", op: "−", digits: [null, 9, 5] },
            { kind: "rule" },
            { kind: "ans", op: "", digits: ["?", "?", "?"] },
          ]} />
        </div>
        <div>
          <div className="card" style={{ background: "#ffeae0", borderColor: "#d99794" }}>
            <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 36, marginBottom: 18, color: "#6a2828" }}>
              Wait a second…
            </div>
            <div style={{ fontSize: 30, lineHeight: 1.5 }}>
              <strong style={{ color: "#4a7a4a" }}>Ones:</strong> we need <strong>3 − 5</strong>.<br/>
              But 3 is <strong>smaller</strong> than 5! 😟<br/><br/>
              You can't take 5 buns from a box that only has 3.
            </div>
            <div style={{ marginTop: 24, display: "flex", gap: 16, alignItems: "center" }}>
              <Panda size={100} expression="thinking" />
              <div style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: 30, color: "#4a3c2e" }}>
                "What now, Bo?"
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 40, textAlign: "center", fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: 36, color: "#4a3c2e" }}>
        We need to <strong style={{ color: "#b85c5c" }}>BORROW</strong> from a neighbour. Penny knows what to do…
      </div>
    </div>
  );
});

/* ============== SLIDE 12: The bundling-back idea (visual) ============== */
Slides2.push(function Slide12() {
  return (
    <div className="slide-pad bg-mint" style={{ height: "100%" }}>
      <div className="kicker" style={{ color: "#2c4a2c" }}>The Golden Rule — backwards! ✨</div>
      <h2 style={{ fontSize: 54, marginTop: 12, marginBottom: 24, maxWidth: 1700 }}>
        If we don't have enough ones, we <strong style={{ color: "#b85c5c" }}>UN-BUNDLE one tray</strong> from the tens.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 30, alignItems: "center", marginTop: 20 }}>
        {/* Before */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "Nunito", fontWeight: 800, fontSize: 24, color: "#2c4a2c", marginBottom: 16 }}>BEFORE</div>
          <div style={{ display: "flex", gap: 30, justifyContent: "center", alignItems: "flex-end" }}>
            <TrayOfTen scale={0.9} label={false} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div style={{ display: "flex", gap: 6 }}>
                <div className="bun" style={{ width: 44, height: 44 }} />
                <div className="bun" style={{ width: 44, height: 44 }} />
                <div className="bun" style={{ width: 44, height: 44 }} />
              </div>
            </div>
          </div>
          <div style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: 28, marginTop: 18 }}>
            <span style={{ color: "#6a8fb0" }}>1 tray</span> + <span style={{ color: "#4a7a4a" }}>3 buns</span> = 13 buns total
          </div>
        </div>
        {/* arrow */}
        <div style={{ fontSize: 80, color: "#b85c5c" }}>→</div>
        {/* After */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "Nunito", fontWeight: 800, fontSize: 24, color: "#2c4a2c", marginBottom: 16 }}>UN-BUNDLED</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, auto)", gap: 6, justifyContent: "center", maxWidth: 460, margin: "0 auto" }}>
            {Array.from({ length: 13 }).map((_, i) => (
              <div key={i} className="bun" style={{ width: 44, height: 44 }} />
            ))}
          </div>
          <div style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: 28, marginTop: 18, color: "#4a7a4a" }}>
            13 single buns — same amount, just rearranged!
          </div>
        </div>
      </div>
      <div style={{ marginTop: 36, textAlign: "center", fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: 34, color: "#2c4a2c", maxWidth: 1500, margin: "36px auto 0" }}>
        ✨ It's the SAME number of buns. We just opened a tray so we can hand out single ones. ✨
      </div>
    </div>
  );
});

/* ============== SLIDE 13: 103 — first we have to un-bundle a HUNDRED ============== */
Slides2.push(function Slide13() {
  return (
    <div className="slide-pad bg-cream" style={{ height: "100%" }}>
      <div className="kicker">But wait — 103 is even trickier!</div>
      <h2 style={{ fontSize: 50, marginTop: 12, marginBottom: 16, maxWidth: 1700 }}>
        103 has a <strong style={{ color: "#6a8fb0" }}>0</strong> in the tens. There's no tray to un-bundle yet!
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 60, alignItems: "center", marginTop: 16 }}>
        <div>
          <div className="card card-warm" style={{ padding: 40 }}>
            <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 34, marginBottom: 18, color: "#4a3c2e" }}>
              Two-step un-bundling:
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 18 }}>
              <div className="step-num" style={{ width: 56, height: 56, fontSize: 32 }}>1</div>
              <div style={{ fontSize: 26, lineHeight: 1.45, paddingTop: 8 }}>
                Open the <strong style={{ color: "#b85c5c" }}>big box</strong> (1 hundred) → it becomes <strong style={{ color: "#6a8fb0" }}>10 trays</strong>.
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 18 }}>
              <div className="step-num" style={{ width: 56, height: 56, fontSize: 32 }}>2</div>
              <div style={{ fontSize: 26, lineHeight: 1.45, paddingTop: 8 }}>
                Then open <strong>1 of those trays</strong> → 9 trays + <strong style={{ color: "#4a7a4a" }}>10 single buns</strong>.
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <div className="step-num" style={{ width: 56, height: 56, fontSize: 32 }}>3</div>
              <div style={{ fontSize: 26, lineHeight: 1.45, paddingTop: 8 }}>
                Now we have <strong style={{ color: "#b85c5c" }}>0 hundreds</strong>, <strong style={{ color: "#6a8fb0" }}>9 tens</strong>, <strong style={{ color: "#4a7a4a" }}>13 ones</strong> — STILL 103 buns!
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", alignItems: "flex-end", flexWrap: "wrap" }}>
            {/* 9 trays */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, auto)", gap: 8 }}>
              {Array.from({ length: 9 }).map((_, i) => (
                <TrayOfTen key={i} scale={0.32} label={false} />
              ))}
            </div>
            {/* 13 single buns */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, auto)", gap: 4, padding: 10, border: "3px dashed #4a7a4a", borderRadius: 16, background: "#f0f6e8" }}>
              {Array.from({ length: 13 }).map((_, i) => (
                <div key={i} className="bun" style={{ width: 28, height: 28 }} />
              ))}
            </div>
          </div>
          <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 26, marginTop: 24, color: "#4a3c2e" }}>
            <span style={{ color: "#6a8fb0" }}>9 trays</span> + <span style={{ color: "#4a7a4a" }}>13 single buns</span> = 103 ✓
          </div>
        </div>
      </div>
    </div>
  );
});

/* ============== SLIDE 14: The full column working — 103 - 95 ============== */
Slides2.push(function Slide14() {
  return (
    <div className="slide-pad bg-cream" style={{ height: "100%" }}>
      <div className="kicker">Now in the column — written down:</div>
      <h2 style={{ fontSize: 56, marginTop: 12, marginBottom: 16 }}>
        103 − 95 — together, step by step
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 40, alignItems: "center", marginTop: 20 }}>
        <div style={{ textAlign: "center" }}>
          <PVHeaders cols={3} />
          <ColMath cols={3} rows={[
            { kind: "borrow", op: "", digits: [{ val: "0" }, { val: "9" }, { val: "13" }] },
            { kind: "top", op: "", digits: [{ val: 1, strike: true }, { val: 0, strike: true }, { val: 3, strike: true }] },
            { kind: "bot", op: "−", digits: [null, 9, 5] },
            { kind: "rule" },
            { kind: "ans", op: "", digits: [null, null, 8] },
          ]} />
          <div style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: 28, marginTop: 24, color: "#b85c5c" }}>
            Final answer: <strong style={{ fontSize: 56, color: "#2b2118" }}>8 buns left!</strong>
          </div>
        </div>
        <div>
          <div className="card card-warm" style={{ padding: 36 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
              <div className="step-num" style={{ width: 50, height: 50, fontSize: 28 }}>1</div>
              <div style={{ fontSize: 24, lineHeight: 1.4, paddingTop: 8 }}>
                Ones: 3 − 5? Too small. <strong style={{ color: "#b85c5c" }}>Borrow!</strong>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
              <div className="step-num" style={{ width: 50, height: 50, fontSize: 28 }}>2</div>
              <div style={{ fontSize: 24, lineHeight: 1.4, paddingTop: 8 }}>
                Tens are 0. Borrow from the <strong style={{ color: "#b85c5c" }}>hundred</strong> first → hundred becomes 0, tens become <strong>10</strong>.
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
              <div className="step-num" style={{ width: 50, height: 50, fontSize: 28 }}>3</div>
              <div style={{ fontSize: 24, lineHeight: 1.4, paddingTop: 8 }}>
                Now borrow 1 ten → tens become <strong>9</strong>, ones become <strong>13</strong>.
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
              <div className="step-num" style={{ width: 50, height: 50, fontSize: 28 }}>4</div>
              <div style={{ fontSize: 24, lineHeight: 1.4, paddingTop: 8 }}>
                <strong style={{ color: "#4a7a4a" }}>Ones:</strong> 13 − 5 = <strong>8</strong> ✓
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
              <div className="step-num" style={{ width: 50, height: 50, fontSize: 28 }}>5</div>
              <div style={{ fontSize: 24, lineHeight: 1.4, paddingTop: 8 }}>
                <strong style={{ color: "#6a8fb0" }}>Tens:</strong> 9 − 9 = <strong>0</strong> ✓
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div className="step-num" style={{ width: 50, height: 50, fontSize: 28 }}>6</div>
              <div style={{ fontSize: 24, lineHeight: 1.4, paddingTop: 8 }}>
                <strong style={{ color: "#b85c5c" }}>Hundreds:</strong> 0 − 0 = nothing to write.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

/* ============== SLIDE 15: A simpler practice — 52 - 28 ============== */
Slides2.push(function Slide15() {
  return (
    <div className="slide-pad bg-cream" style={{ height: "100%", position: "relative" }}>
      <div className="kicker">Practise without the tricky zero 🌟</div>
      <h2 style={{ fontSize: 60, marginTop: 12, marginBottom: 24, maxWidth: 1600 }}>
        Bo had <strong style={{ color: "#b85c5c" }}>52 buns</strong>. A walrus family ate <strong style={{ color: "#7eaecb" }}>28 buns</strong>.
      </h2>
      <div className="subtitle" style={{ fontSize: 36, marginBottom: 16 }}>
        How many buns are left? Try the column method!
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", marginTop: 10 }}>
        <div style={{ textAlign: "center" }}>
          <PVHeaders cols={2} />
          <ColMath cols={2} rows={[
            { kind: "top", op: "", digits: [5, 2] },
            { kind: "bot", op: "−", digits: [2, 8] },
            { kind: "rule" },
            { kind: "ans", op: "", digits: ["?", "?"] },
          ]} />
        </div>
        <div>
          <div className="card card-blue">
            <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 34, marginBottom: 22, color: "#244660" }}>
              Think:
            </div>
            <ul style={{ fontSize: 28, lineHeight: 1.6, listStyle: "none", paddingLeft: 0 }}>
              <li style={{ marginBottom: 14 }}>🟢 Ones: 2 − 8? Can we? <em>(no!)</em></li>
              <li style={{ marginBottom: 14 }}>🔵 Borrow 1 ten from the 5 → tens become 4, ones become 12.</li>
              <li>🟢 12 − 8 = ? &nbsp; 🔵 4 − 2 = ?</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="reveal-15" style={{ display: "none", position: "absolute", inset: 0, background: "rgba(250,244,232,0.96)", zIndex: 10, alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <StarBurst count={5} style={{ position: "relative", marginBottom: 20 }} />
        <h2 style={{ fontSize: 140, color: "#b85c5c" }}>24!</h2>
        <div style={{ fontSize: 38, fontFamily: "Fraunces, serif", fontStyle: "italic", color: "#4a3c2e", marginTop: 20, textAlign: "center" }}>
          Borrow 1 ten: 5 → 4, &nbsp; 2 → 12.<br/>
          12 − 8 = 4. &nbsp; 4 − 2 = 2. <br/>
          <strong>Bo has 24 buns left! Penny is so proud. 🐼✨</strong>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 60, right: 80, fontSize: 26, color: "#4a3c2e", opacity: 0.5 }}>
        (click to reveal)
      </div>
      <script dangerouslySetInnerHTML={{ __html: `
        document.currentScript.parentElement.addEventListener('click', () => {
          const r = document.getElementById('reveal-15');
          if (r) r.style.display = r.style.display === 'flex' ? 'none' : 'flex';
        });
      ` }} />
    </div>
  );
});

/* ============== SLIDE 16: One more — back to the 3-digit one ============== */
Slides2.push(function Slide16() {
  return (
    <div className="slide-pad bg-cream" style={{ height: "100%", position: "relative" }}>
      <div className="kicker">Champion challenge 🏆</div>
      <h2 style={{ fontSize: 58, marginTop: 12, marginBottom: 20, maxWidth: 1700 }}>
        Penny brought <strong style={{ color: "#b85c5c" }}>120 buns</strong> from the bamboo forest. The bakery sold <strong style={{ color: "#7eaecb" }}>76 buns</strong>.
      </h2>
      <div className="subtitle" style={{ fontSize: 36, marginBottom: 12 }}>
        How many are left? Watch out — you'll need to borrow twice!
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", marginTop: 16 }}>
        <div style={{ textAlign: "center" }}>
          <PVHeaders cols={3} />
          <ColMath cols={3} rows={[
            { kind: "top", op: "", digits: [1, 2, 0] },
            { kind: "bot", op: "−", digits: [null, 7, 6] },
            { kind: "rule" },
            { kind: "ans", op: "", digits: ["?", "?", "?"] },
          ]} />
        </div>
        <div>
          <div className="card card-warm">
            <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 32, marginBottom: 18, color: "#4a3c2e" }}>
              Plan of attack:
            </div>
            <ol style={{ fontSize: 26, lineHeight: 1.6, paddingLeft: 32 }}>
              <li>Ones: 0 − 6? <strong style={{ color: "#b85c5c" }}>Borrow!</strong></li>
              <li>Borrow 1 ten from the 2 → tens = 1, ones = 10.</li>
              <li>10 − 6 = <strong>4</strong>.</li>
              <li>Tens: 1 − 7? Borrow from hundred!</li>
              <li>Hundred → 0, tens → 11. &nbsp; 11 − 7 = <strong>4</strong>.</li>
            </ol>
          </div>
        </div>
      </div>
      <div id="reveal-16" style={{ display: "none", position: "absolute", inset: 0, background: "rgba(250,244,232,0.96)", zIndex: 10, alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <StarBurst count={5} style={{ position: "relative", marginBottom: 20 }} />
        <h2 style={{ fontSize: 140, color: "#b85c5c" }}>44!</h2>
        <div style={{ fontSize: 38, fontFamily: "Fraunces, serif", fontStyle: "italic", color: "#4a3c2e", marginTop: 20, textAlign: "center" }}>
          120 − 76 = <strong>44</strong> buns left!<br/>
          Two borrows in a row — that's a real maths champion! 🏆
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 60, right: 80, fontSize: 26, color: "#4a3c2e", opacity: 0.5 }}>
        (click to reveal)
      </div>
      <script dangerouslySetInnerHTML={{ __html: `
        document.currentScript.parentElement.addEventListener('click', () => {
          const r = document.getElementById('reveal-16');
          if (r) r.style.display = r.style.display === 'flex' ? 'none' : 'flex';
        });
      ` }} />
    </div>
  );
});

/* ============== SLIDE 17: Certificate / ending ============== */
Slides2.push(function Slide17() {
  return (
    <div className="slide-flex bg-snow" style={{ height: "100%", position: "relative", padding: "80px" }}>
      <SnowField count={50} />
      <div style={{
        position: "relative",
        zIndex: 3,
        margin: "auto",
        background: "#fffaf0",
        border: "8px double #e8b94e",
        borderRadius: 24,
        padding: "70px 100px",
        textAlign: "center",
        boxShadow: "0 16px 40px rgba(60,40,20,0.18)",
        maxWidth: 1400,
      }}>
        <div style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: 32, color: "#b85c5c", letterSpacing: "0.2em", marginBottom: 12 }}>★ ★ ★ &nbsp; OFFICIAL &nbsp; ★ ★ ★</div>
        <h1 style={{ fontSize: 110, marginBottom: 16, color: "#2b2118" }}>Maths Hero</h1>
        <div style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: 38, color: "#4a3c2e", marginBottom: 24 }}>
          presented to
        </div>
        <div style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: 96, color: "#b85c5c", marginBottom: 28 }}>A Brilliant Mathematician</div>
        <div style={{ fontSize: 30, lineHeight: 1.5, color: "#4a3c2e", maxWidth: 1100, margin: "0 auto" }}>
          for bravely learning to <strong>add with carrying</strong> and <strong>subtract with borrowing</strong>,<br/>
          for helping Penny &amp; Bo at the Igloo Bakery,<br/>
          and for being the smartest 7-year-old in the whole Arctic.
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 60, marginTop: 36 }}>
          <Panda size={170} expression="happy" />
          <PolarBear size={180} expression="happy" />
        </div>
        <div style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: 28, color: "#4a3c2e", marginTop: 20 }}>
          Signed: Penny 🐼 &nbsp; &amp; &nbsp; Bo 🐻‍❄️
        </div>
      </div>
    </div>
  );
});

window.Slides2 = Slides2;
