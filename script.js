// Tanggal acara pernikahan (atur sesuai rencana kamu)
const weddingDate = new Date("2025-08-30T08:00:00"); // contoh: 30 Agustus 2025, jam 08:00

function updateCountdown() {
  const now = new Date();
  const timeDiff = weddingDate - now;

  if (timeDiff <= 0) {
    document.getElementById("countdown").innerHTML =
      "<p>Hari Bahagia Telah Tiba!</p>";
    return;
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Jalankan setiap 1 detik
setInterval(updateCountdown, 1000);

// Jalankan sekali di awal supaya langsung tampil
updateCountdown();

//autoplay musik
// Unmute setelah pengguna klik di mana saja
document.addEventListener(
  "click",
  function () {
    const musik = document.getElementById("musikLatar");
    musik.muted = false;
    musik.play();
  },
  { once: true }
);

const scriptURL =
  "https://script.google.com/u/0/home/projects/19JNZHmSly3T-8atsUawM08v3Yb9wSxejT9IStBw7gVqorXHVj2Rzsk55/edit";
