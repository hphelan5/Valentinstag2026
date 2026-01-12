const result = document.getElementById("result");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

function spawnHearts(count = 22) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";

    const x = Math.random() * (window.innerWidth - 20);
    const y = window.innerHeight - 50;
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.fontSize = `${14 + Math.random() * 18}px`;

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }
}

function accept() {
  result.textContent = "Yesss! 😍 Dann ist es offiziell. Ich freu mich auf unser Date 💘";
  spawnHearts(30);
  yesBtn.disabled = true;
  noBtn.disabled = true;
  yesBtn.textContent = "💖";
  noBtn.textContent = "💖";
}

yesBtn.addEventListener("click", accept);

// “Nein”-Button weicht aus (harmlos & witzig)
noBtn.addEventListener("click", () => {
  spawnHearts(10);
  result.textContent = "Nice try 😄";
});

noBtn.addEventListener("pointerenter", () => {
  if (yesBtn.disabled) return;

  const maxX = Math.min(window.innerWidth - 120, 260);
  const maxY = Math.min(window.innerHeight - 70, 200);

  const x = (Math.random() * maxX) - maxX / 2;
  const y = (Math.random() * maxY) - maxY / 2;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("pointerleave", () => {
  if (yesBtn.disabled) return;
  noBtn.style.transform = "translate(0, 0)";
});
