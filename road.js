/* ================= CAR SCROLL MOTION ================= */

const car = document.getElementById("car");

function updateCar() {
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const scrollHeight = doc.scrollHeight - doc.clientHeight;
  const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

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

function renderStep() {
  nowText.textContent = steps[stepIndex];

  questionButtons.classList.add("hidden");
  threeYesRow.classList.add("hidden");
  toFuture.classList.add("hidden");
  result.textContent = "";

  if (stepIndex < steps.length - 1) {
    nowNext.classList.remove("hidden");
  } else {
    nowNext.classList.add("hidden");
    questionButtons.classList.remove("hidden");
  }
}

nowNext.addEventListener("click", () => {
  stepIndex = Math.min(stepIndex + 1, steps.length - 1);
  renderStep();
});

yesBtn.addEventListener("click", () => {
  result.textContent = "Dann halt dir den 14.02. frei – weitere Infos kommen 💌";
  questionButtons.classList.add("hidden");
  toFuture.classList.remove("hidden");
});

twoYesBtn.addEventListener("click", () => {
  threeYesRow.classList.remove("hidden");
  result.textContent = "Okay… aber nur wenn du es wirklich meinst 😄";
});

threeYesBtn.addEventListener("click", () => {
  result.textContent = "Ich liebe dich ❤️ Halt dir den 14.02. frei – weitere Infos kommen 💌";
  threeYesRow.classList.add("hidden");
  toFuture.classList.remove("hidden");
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

function updateCountdown() {
  const diff = target - new Date();
  if (diff <= 0) return;

  const s = Math.floor(diff / 1000);
  cdDays.textContent = Math.floor(s / 86400);
  cdHours.textContent = Math.floor((s % 86400) / 3600);
  cdMins.textContent = Math.floor((s % 3600) / 60);
  cdSecs.textContent = s % 60;
}

updateCountdown();
setInterval(updateCountdown, 1000);
