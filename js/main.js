// Function to save contacts to localStorage
function saveContactsToLocalStorage() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

// Function to load contacts from localStorage
function loadContactsFromLocalStorage() {
  const storedContacts = localStorage.getItem("contacts");
  if (storedContacts) {
    contacts = JSON.parse(storedContacts);
    displayContacts(); // Display contacts when loaded from storage
  }
}

// Initialize an empty array to store contacts
let contacts = [];

// CRUD Operations
function addContact(contact) {
  contacts.push(contact);
  saveContactsToLocalStorage();
  displayContacts();
  console.log("Contact added:", contact);
}

function updateContact(contactId, updatedContact) {
  contacts = contacts.map((contact) =>
    contact.id === contactId ? updatedContact : contact
  );
  saveContactsToLocalStorage();
  displayContacts();
}

function deleteContact(contactId) {
  const deletedContact = contacts.find((contact) => contact.id === contactId);
  contacts = contacts.filter((contact) => contact.id !== contactId);
  saveContactsToLocalStorage();
  displayContacts();
}

// Function to display contacts in a list
function displayContacts() {
  const contactList = document.querySelector("#contactList");
  contactList.innerHTML = "";

  contacts.forEach((contact) => {
    contactList.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${contact.firstName} ${contact.lastName} - ${contact.email} (${contact.phone})
        <div>
          <button onclick="editContact('${contact.id}')" class="btn btn-sm btn-primary">Edit</button>
          <button onclick="deleteContact('${contact.id}')" class="btn btn-sm btn-danger">Delete</button>
        </div>
      </li>
    `;
  });
}

// Function to handle form submission (Create/Update)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const contactId = document.getElementById("contactId").value;
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  const subject = document.querySelector('input[name="subject"]:checked').value;

  console.log("Form submitted with values:", {
    firstName,
    lastName,
    email,
    phone,
    subject,
    message,
  });

  const newContact = {
    id: contactId || Date.now().toString(),
    firstName,
    lastName,
    email,
    phone,
    message,
    subject,
  };

  if (contactId) {
    // Update existing contact
    updateContact(contactId, newContact);
  } else {
    // Create new contact
    addContact(newContact);
  }

  // Reset form after submission
  this.reset();
  document.getElementById("contactId").value = "";
});

// Function to populate the form for editing
function editContact(contactId) {
  const contact = contacts.find((contact) => contact.id === contactId);

  if (contact) {
    document.getElementById("contactId").value = contact.id;
    document.getElementById("first-name").value = contact.firstName;
    document.getElementById("last-name").value = contact.lastName;
    document.getElementById("email").value = contact.email;
    document.getElementById("phone").value = contact.phone;
    document.getElementById("message").value = contact.message;

    // Select the appropriate subject radio button
    document.querySelector(
      `input[name="subject"][value="${contact.subject}"]`
    ).checked = true;
  }
}

// Load contacts from localStorage when the page loads
window.onload = function () {
  loadContactsFromLocalStorage();
};
