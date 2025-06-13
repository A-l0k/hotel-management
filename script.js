// Rotate background on login page
const backgrounds = [
  "assets/hotel1.jpg",
  "assets/hotel2.jpg",
  "assets/hotel3.jpg"
];
let current = 0;
function rotateBackground() {
  document.body.style.backgroundImage = `url('${backgrounds[current]}')`;
  current = (current + 1) % backgrounds.length;
}
if (document.body.classList.contains('login-page')) {
  rotateBackground();
  setInterval(rotateBackground, 4000);
}

// Dummy login
function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const error = document.getElementById('error');

  if (user === "dev" && pass === "1234") {
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Invalid credentials!";
  }
}

// Dashboard section logic
function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.style.display = "none");
  document.getElementById(id).style.display = "block";
}

// Booking form logic
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const list = document.getElementById("bookingList");

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("bname").value;
      const inDate = document.getElementById("checkin").value;
      const outDate = document.getElementById("checkout").value;
      const type = document.getElementById("roomtype").value;

      const item = document.createElement("li");
      item.textContent = `${name} - ${type} Room from ${inDate} to ${outDate}`;
      list.appendChild(item);

      form.reset();
    });
  }
});
// Show selected section
function showSection(id) {
  document.querySelectorAll(".section").forEach(section => {
    section.style.display = "none";
  });
  const selected = document.getElementById(id);
  if (selected) {
    selected.style.display = "block";
  }
}

// Booking form logic
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const list = document.getElementById("bookingList");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("bname").value;
      const checkin = document.getElementById("checkin").value;
      const checkout = document.getElementById("checkout").value;
      const roomtype = document.getElementById("roomtype").value;

      const entry = document.createElement("li");
      entry.textContent = `${name} - ${roomtype} room from ${checkin} to ${checkout}`;
      list.appendChild(entry);

      form.reset();
    });
  }
});
