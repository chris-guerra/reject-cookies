// Get the elements
const reportCookiesButton = document.getElementById('reportCookies');
const reportBugButton = document.getElementById('reportBug');
const bugDescriptionTextarea = document.getElementById('bugDescription') as HTMLTextAreaElement;

if (!reportCookiesButton || !reportBugButton || !bugDescriptionTextarea) {
  throw new Error('Required elements not found in the DOM');
}

// Function to show message to user
function showMessage(message: string, isError: boolean = false) {
  // Remove any existing message
  const existingMessage = document.querySelector('.message');
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create new message element
  const messageElement = document.createElement('div');
  messageElement.className = `message ${isError ? 'error' : 'success'}`;
  messageElement.textContent = message;

  // Add message to the page
  document.body.appendChild(messageElement);

  // Remove message after 5 seconds
  setTimeout(() => {
    messageElement.remove();
  }, 5000);
}

// Function to get current tab URL
async function getCurrentTabUrl(): Promise<string> {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab?.url || 'Unknown URL';
}

// Add click handlers
reportCookiesButton.addEventListener('click', async () => {
  try {
    const currentUrl = await getCurrentTabUrl();
    showMessage(`Cookies on ${currentUrl} have been reported for review. Thank you for your feedback!`);
  } catch (error) {
    showMessage('An error occurred. Please try again.', true);
  }
});

reportBugButton.addEventListener('click', async () => {
  const description = bugDescriptionTextarea.value.trim();

  if (!description) {
    showMessage('Please enter a description of the bug', true);
    return;
  }

  try {
    const currentUrl = await getCurrentTabUrl();
    showMessage('Thank you for reporting the bug! We will look into it.');
    // Clear the textarea after successful submission
    bugDescriptionTextarea.value = '';
  } catch (error) {
    showMessage('An error occurred. Please try again.', true);
  }
});
