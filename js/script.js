document.addEventListener("DOMContentLoaded", function() {
    // --- Update Welcome Message ---
    const setUserNameButton = document.getElementById("setUserName");
    setUserNameButton.addEventListener("click", function() {
      const userNameInput = document.getElementById("userName").value.trim();
      if (userNameInput !== "") {
        const welcomeMessage = document.getElementById("welcome-message");
        welcomeMessage.textContent = `Hi ${userNameInput}, Welcome To Website`;
      } else {
        alert("Please enter your name.");
      }
    });
  
    // --- Form Validation and Submission ---
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
  
      // Retrieve form field values
      const name = document.getElementById("contactName").value.trim();
      const dob = document.getElementById("dob").value;
      const genderElement = document.querySelector("input[name='gender']:checked");
      const gender = genderElement ? genderElement.value : "";
      const message = document.getElementById("contactMessage").value.trim();
  
      // Validate required fields
      if (!name || !dob || !gender || !message) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Get the current date and time
      const currentTime = new Date().toString();
  
      // Display submission details in the result container
      const submissionResultDiv = document.getElementById("submissionResult");
      submissionResultDiv.innerHTML = `
        <h3>Submission Details</h3>
        <p><strong>Current Time:</strong> ${currentTime}</p>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${dob}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
      `;
  
      // Optionally, reset the form
      contactForm.reset();
    });
  });
  