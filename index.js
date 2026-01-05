// index.js

// Add an element to the DOM
function addElementToDOM(id, content) {
  let element = document.getElementById(id);

  if (!element) {
    element = document.createElement("div");
    element.id = id;
    document.body.appendChild(element);
  }

  element.textContent = content;
}

// Remove an element from the DOM
function removeElementFromDOM(id) {
  const element = document.getElementById(id);
  if (element) {
    element.remove();
  }
}

// Simulate a button click and update the DOM
function simulateClick(id, content) {
  addElementToDOM(id, content);
}

// Handle form submission and update the DOM
function handleFormSubmit(formId, targetId) {
  const form = document.getElementById(formId);
  const input = form.querySelector("input");
  const errorMessage = document.getElementById("error-message");

  if (!input.value.trim()) {
    errorMessage.textContent = "Input cannot be empty";
    errorMessage.classList.remove("hidden");
    return;
  }

  errorMessage.classList.add("hidden");
  addElementToDOM(targetId, input.value);
  input.value = "";
}

/* 
  IMPORTANT:
  Expose functions globally so Jest can access them
*/
window.addElementToDOM = addElementToDOM;
window.removeElementFromDOM = removeElementFromDOM;
window.simulateClick = simulateClick;
window.handleFormSubmit = handleFormSubmit;

// Export functions for Jest (Node.js/CommonJS style)
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};