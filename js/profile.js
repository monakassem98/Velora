document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".sidebar-link");
  const sections = document.querySelectorAll(".profile-section");

  // Function to hide all sections
  function hideAllSections() {
    sections.forEach((section) => {
      section.style.display = "none";
    });
  }

  // Add click event listeners to sidebar links
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      hideAllSections(); // Hide all sections
      if (target) {
        target.style.display = "block"; // Show the clicked section
      }
    });
  });

  // Initially hide all sections except account details
  hideAllSections();
  document.querySelector("#account-details").style.display = "block";
});
// pasword proceses
document.addEventListener("DOMContentLoaded", () => {
  const editProfileForm = document.getElementById("editProfileForm");
  const changePasswordForm = document.getElementById("changePasswordForm");
  const deleteProfileBtn = document.getElementById("deleteProfileBtn");

  // Simulate data in localStorage
  const userProfileKey = "userProfile";

  // Load user profile (Read)
  function loadUserProfile() {
    const userProfile = JSON.parse(localStorage.getItem(userProfileKey));
    if (userProfile) {
      document.getElementById("firstName").value = userProfile.firstName || "";
      document.getElementById("lastName").value = userProfile.lastName || "";
      document.getElementById("email").value = userProfile.email || "";
    }
  }

  // Save/Update Profile (Create/Update)
  editProfileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    const userProfile = {
      firstName,
      lastName,
      email,
    };

    localStorage.setItem(userProfileKey, JSON.stringify(userProfile));

    alert("Profile saved successfully!");
  });

  // Delete Profile (Delete)
  deleteProfileBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete your profile?")) {
      localStorage.removeItem(userProfileKey);
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("email").value = "";

      alert("Profile deleted successfully!");
    }
  });

  // Change Password
  changePasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmNewPassword =
      document.getElementById("confirmNewPassword").value;

    // In a real app, you would verify the current password from the backend
    if (newPassword !== confirmNewPassword) {
      alert("New passwords do not match!");
      return;
    }

    alert("Password changed successfully!");
  });

  // Load the profile when the page is loaded
  loadUserProfile();
});
