document.addEventListener("DOMContentLoaded", function() {
  const modal = document.querySelector("#pdfModal");
  const btn = document.querySelector("#pdf-link");
  const closeBtn = document.querySelector(".close");
  const pdfFrame = document.querySelector("#pdfFrame");
  
  if (modal && btn && closeBtn) {
    // Ensure modal starts as hidden for screen readers
    modal.setAttribute("aria-hidden", "true");
    
    // Function to open the modal
    function openModal() {
      modal.style.display = "flex"; // Use flex for centering
      modal.setAttribute("aria-hidden", "false");
      closeBtn.focus(); // Move focus to close button for accessibility
    }
    
    // Function to close the modal
    function closeModal() {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
      btn.focus(); // Return focus to the button
    }
    
    // Open modal when button is clicked
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent page jump
      openModal();
    });
    
    // Close modal when close button is clicked
    closeBtn.addEventListener("click", closeModal);
    
    // Close modal when clicking outside modal content
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
    
    // Close modal with Escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.style.display === "flex") {
        closeModal();
      }
    });
  }
});