document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".nav-btn");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalBody = document.querySelector(".modal-body");
  const closeBtn = document.querySelector(".close-btn");

  const contentMap = {
    home: `
      <h2>Welcome to Shubham's Portfolio</h2>
      <p>This is the home section. You can explore projects, skills, and more about Shubham from here.</p>
    `,
    about: `
      <h2>About Shubham</h2>
      <p>Shubham Shanker Tiwary is a Web Developer currently in the 4th year of the MCA Integrated program. He has experience in front-end development, digital marketing, and modern web technologies.</p>
    `,
    contact: `
      <h2>Contact Shubham</h2>
      <ul>
        <li><strong>Email:</strong> shubhamtiwary650@gmail.com</li>
        <li><strong>Phone:</strong> 9711754554</li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shubham-t-ba0b1921a" target="_blank">Visit Profile</a></li>
        <li><strong>Location:</strong> Greater Noida, Uttar Pradesh</li>
      </ul>
    `
  };

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const section = button.getAttribute("data-modal");
      modalBody.innerHTML = contentMap[section] || "<p>No content available.</p>";
      modalOverlay.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    modalBody.innerHTML = "";
  });

  // Optional: Close modal on outside click
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
      modalBody.innerHTML = "";
    }
  });
});
