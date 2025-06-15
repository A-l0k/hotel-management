window.onload = () => {
  // Slideshow image list
  const images = ["assets/hotel1.jpg", "assets/hotel2.jpg", "assets/hotel3.jpg"];
  let currentIndex = 0;
  const imageSide = document.getElementById("imageSide");

  // Function to rotate image
  function rotateImage() {
    if (imageSide) {
      imageSide.style.backgroundImage = `url('${images[currentIndex]}')`;
      currentIndex = (currentIndex + 1) % images.length;
    }
  }

  // Start slideshow
  rotateImage(); // Show the first image
  setInterval(rotateImage, 3000); // Rotate every 3 seconds

  // Login handling
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const errorDisplay = document.getElementById("error");

      if (username === "Dev" && password === "1234") {
        window.location.href = "dashboard.html";
      } else {
        errorDisplay.textContent = "Invalid credentials";
      }
    });
  }
};
