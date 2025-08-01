function changeName() {
  const newName = prompt("Nhập tên mới:");
  if (newName) {
    document.getElementById("name").textContent = newName;
  }
}

let isVietnamese = true;
function toggleLanguage() {
  isVietnamese = !isVietnamese;
  if (isVietnamese) {
    document.getElementById("job").textContent =
      "Sinh viên ngành Công nghệ thông tin trường HaUI";
    document.getElementById("description").textContent =
      "Yêu thích học lập trình, thích khám phá công nghệ - các thuật toán, chia sẻ và học hỏi kiến thức với mọi người";
  } else {
    document.getElementById("job").textContent =
      "Information Technology student at HaUI";
    document.getElementById("description").textContent =
      "Love learning programming, love exploring technology - algorithms, sharing and learning knowledge with everyone";
  }
}

function handleScrollAnimation() {
  const elements = document.querySelectorAll("[data-aos]");
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
}
window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);

// Hiệu ứng tuyết rơi
const canvas = document.getElementById("snow-canvas");
const ctx = canvas.getContext("2d");
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let snowflakes = [];
function createSnowflakes() {
  for (let i = 0; i < 100; i++) {
    snowflakes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 4 + 1,
      d: Math.random() * 2 + 1,
    });
  }
}
function drawSnowflakes() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let i = 0; i < snowflakes.length; i++) {
    const f = snowflakes[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moveSnowflakes();
}
function moveSnowflakes() {
  for (let i = 0; i < snowflakes.length; i++) {
    const f = snowflakes[i];
    f.y += f.d;
    f.x += Math.sin(f.y * 0.01);
    if (f.y > height) {
      f.y = 0;
      f.x = Math.random() * width;
    }
  }
}
function updateCanvas() {
  drawSnowflakes();
  requestAnimationFrame(updateCanvas);
}
createSnowflakes();
updateCanvas();
window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});

//Phóng to ảnh
function showImage(imgElement) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  modalImg.src = imgElement.src;
  modal.style.display = "flex";
}

function closeImage() {
  document.getElementById("image-modal").style.display = "none";
}
