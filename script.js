:root{
  --bg:#0b0b10;
  --text:rgba(255,255,255,0.92);
  --muted:rgba(255,255,255,0.70);
  --card:rgba(255,255,255,0.07);
  --border:rgba(255,255,255,0.12);
  --line:rgba(255,255,255,0.20);
  --accent:rgba(255,105,180,0.95);
}

*{ box-sizing:border-box; }
html{ scroll-behavior:smooth; }
body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
  color:var(--text);
  background:
    radial-gradient(1100px 700px at 15% 10%, rgba(255,105,180,0.18), transparent 60%),
    radial-gradient(900px 700px at 85% 90%, rgba(140,160,255,0.14), transparent 55%),
    var(--bg);
}

/* Fixed road + car */
.road-layer{
  position:fixed;
  inset:0;
  pointer-events:none;
  z-index:0;
}
.road{
  position:absolute;
  left:50%;
  top:0;
  transform:translateX(-50%);
  width:10px;
  height:100%;
  border-radius:999px;
  background: linear-gradient(to bottom, transparent, var(--line), transparent);
  box-shadow: 0 0 30px rgba(255,255,255,0.06);
}
.car{
  position:absolute;
  left:50%;
  transform:translate(-50%, -50%);
  top:82%;
  filter: drop-shadow(0 10px 16px rgba(0,0,0,0.45));
}
.car-emoji{
  display:inline-block;
  font-size: 34px;
  /* “Red car”: we tint with a subtle overlay using text-shadow vibe */
  text-shadow: 0 0 0 rgba(0,0,0,0.0);
}

/* Main route layout */
.route{
  position:relative;
  z-index:1;
  width:min(980px, 100%);
  margin:0 auto;
  padding: 24px 16px 80px;
}

.hero{
  min-height: 85vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:14px;
  padding: 24px 10px;
  text-align:center;
}
.hero h1{
  margin:0;
  font-size: clamp(1.9rem, 5vw, 3rem);
}
.hero p{
  margin:0;
  color:var(--muted);
  font-size:1.05rem;
  line-height:1.55;
}

.chip{
  display:inline-block;
  width: fit-content;
  margin: 10px auto 0;
  text-decoration:none;
  color: var(--text);
  background: rgba(255,255,255,0.07);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 10px 14px;
}

/* Stops */
.stop{
  position:relative;
  min-height: 78vh;
  display:flex;
  align-items:center;
  padding: 18px 0;
}

/* marker aligned to road center */
.marker{
  position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  border-radius:999px;
  background: var(--accent);
  box-shadow: 0 0 26px rgba(255,105,180,0.40);
  border: 1px solid rgba(255,255,255,0.18);
}

.card{
  width: min(420px, 92%);
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 18px 18px;
  backdrop-filter: blur(10px);
}
.card.big{
  width: min(560px, 94%);
  padding: 22px 20px;
}

.stop.left .card{ margin-right:auto; }
.stop.right .card{ margin-left:auto; }

.card h2{
  margin:0 0 8px 0;
  font-size: 1.25rem;
}
.card p{
  margin:0;
  color:var(--muted);
  line-height:1.55;
  font-size:1.02rem;
}

.now-text{
  margin-top: 6px;
  font-size: 1.08rem;
  color: rgba(255,255,255,0.88);
}

.row{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  margin-top: 14px;
  align-items:center;
}

.btn{
  appearance:none;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.08);
  color: var(--text);
  padding: 12px 16px;
  border-radius: 14px;
  font-size: 1rem;
  cursor:pointer;
  transition: transform 0.08s ease, background 0.2s ease;
  touch-action: manipulation;
}
.btn:hover{ background: rgba(255,255,255,0.12); transform: translateY(-1px); }
.btn:active{ transform: translateY(0) scale(0.99); }
.btn.primary{
  border-color: rgba(255,105,180,0.35);
  background: rgba(255,105,180,0.16);
}
.btn.ghost{ background: rgba(255,255,255,0.06); }

.hidden{ display:none !important; }

.result{
  margin-top: 10px;
  color: rgba(255,255,255,0.88);
  min-height: 1.4em;
}

/* Countdown */
.countdown{
  display:grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  gap: 10px;
  margin-top: 14px;
}
.cd-box{
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 12px 10px;
  text-align:center;
}
.cd-num{
  font-size: clamp(1.3rem, 4vw, 2.0rem);
  font-weight: 700;
}
.cd-lbl{
  margin-top: 2px;
  font-size: 0.9rem;
  color: var(--muted);
}

.muted{ color: var(--muted); }
.small{ font-size: 0.95rem; }

.footer{
  padding-top: 30px;
  text-align:center;
}

@media (max-width: 560px){
  .countdown{ grid-template-columns: repeat(2, minmax(0,1fr)); }
  .stop{ min-height: 72vh; }
}
