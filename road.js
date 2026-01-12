/* ================= CAR SCROLL MOTION ================= */
const car = document.getElementById("car");

function updateCar() {
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const scrollHeight = doc.scrollHeight - doc.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) : 0;

  const start = 82;
  const end = 20;
  const y = start + (end - start) * progress;

  const wobble = Math.sin(progress * Math.PI * 10) * 2;
  car.style.top = `${y}%`;
  car.style.transform = `translate(-50%, -50%) translateX(${wobble}px)`;
}

window.addEventListener("scroll", updateCar, { passive: true });
window.addEventListener("resize", updateCar);
updateCar();

/* ================= HEART EXPLOSION ================= */
function hearts(count = 26) {
  for (let i = 0; i < count; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.textContent = Math.random() > 0.25 ? "💖" : "💘";

    const size = 14 + Math.random() * 18;
    h.style.fontSize = `${size}px`;

    // spawn around center-ish of viewport
    const x = window.innerWidth * (0.35 + Math.random() * 0.30);
    const y = window.innerHeight * (0.55 + Math.random() * 0.20);
    h.style.left = `${x}px`;
    h.style.top = `${y}px`;
    h.style.opacity = "1";

    const dx = (Math.random() - 0.5) * 240;
    const dy = -140 - Math.random() * 220;
    const rot = (Math.random() - 0.5) * 90;

    h.style.transition = "transform 1.25s ease-out, opacity 1.25s ease-out";
    document.body.appendChild(h);

    requestAnimationFrame(() => {
      h.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg)`;
      h.style.opacity = "0";
    });

    setTimeout(() => h.remove(), 1300);
  }
}

/* ================= NOW STORY ================= */
const nowText = document.getElementById("nowText");
const nowNext = document.getElementById("nowNext");
const questionButtons = document.getElementById("questionButtons");
const threeYesRow = document.getElementById("threeYesRow");
const yesBtn = document.getElementById("yesBtn");
const twoYesBtn = document.getElementById("twoYesBtn");
const threeYesBtn = document.getElementById("threeYesBtn");
const result = document.getElementById("result");
const toFuture = document.getElementById("toFuture");

const steps = [
  "Die letzten 3,5 Monate mit dir waren die schönsten in meinem Leben.",
  "Unser erstes Weihnachten liegt hinter uns – und jetzt steht Valentinstag vor der Tür.",
  "Möchtest du mein Valentinstags-Date sein? 💐"
];

let stepIndex = 0;
let locked = false;

function renderStep() {
  nowText.textContent = steps[stepIndex];
  result.textContent = "";
  toFuture.classList.add("hidden");
  threeYesRow.classList.add("hidden");

  if (stepIndex < steps.length - 1) {
    nowNext.classList.remove("hidden");
    questionButtons.classList.add("hidden");
  } else {
    nowNext.classList.add("hidden");
    questionButtons.classList.remove("hidden");
  }
}

nowNext.addEventListener("click", () => {
  if (locked) return;
  stepIndex = Math.min(stepIndex + 1, steps.length - 1);
  renderStep();
});

function acceptYes(msg) {
  locked = true;
  // remove/hide buttons to avoid overlap
  questionButtons.classList.add("hidden");
  threeYesRow.classList.add("hidden");

  result.textContent = msg;
  hearts(34);
  toFuture.classList.remove("hidden");
}

yesBtn.addEventListener("click", () => {
  acceptYes("Dann halt dir den 14.02. frei – weitere Infos kommen 💌");
});

twoYesBtn.addEventListener("click", () => {
  // hide the first row so nothing overlaps
  questionButtons.classList.add("hidden");
  threeYesRow.classList.remove("hidden");
  result.textContent = "Okay… aber nur wenn du es wirklich meinst 😄";
  hearts(14);
});

threeYesBtn.addEventListener("click", () => {
  acceptYes("Ich liebe dich ❤️ Halt dir den 14.02. frei – weitere Infos kommen 💌");
});

renderStep();

/* ================= COUNTDOWN ================= */
const cdDays = document.getElementById("cdDays");
const cdHours = document.getElementById("cdHours");
const cdMins = document.getElementById("cdMins");
const cdSecs = document.getElementById("cdSecs");

function nextValentines() {
  const now = new Date();
  let target = new Date(now.getFullYear(), 1, 14, 0, 0, 0);
  if (now > target) target = new Date(now.getFullYear() + 1, 1, 14, 0, 0, 0);
  return target;
}

const target = nextValentines();

function pad2(n){ return String(n).padStart(2, "0"); }

function updateCountdown() {
  const diff = target - new Date();
  if (diff <= 0) {
    cdDays.textContent = "0";
    cdHours.textContent = "00";
    cdMins.textContent = "00";
    cdSecs.textContent = "00";
    return;
  }

  const s = Math.floor(diff / 1000);
  const days = Math.floor(s / 86400);
  const hours = Math.floor((s % 86400) / 3600);
  const mins = Math.floor((s % 3600) / 60);
  const secs = s % 60;

  cdDays.textContent = String(days);
  cdHours.textContent = pad2(hours);
  cdMins.textContent = pad2(mins);
  cdSecs.textContent = pad2(secs);
}

updateCountdown();
setInterval(updateCountdown, 1000);
