import { ApiResponse, BugReport, CookieReport } from './types';

// API endpoints
const API_BASE_URL = 'https://reject-cookies-api.bymitch.com/api';
const BUG_REPORT_ENDPOINT = `${API_BASE_URL}/reports/bug`;
const COOKIE_REPORT_ENDPOINT = `${API_BASE_URL}/reports/cookies`;

// Constants
const REQUEST_TIMEOUT = 10000; // 10 seconds

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

// Function to make API request with timeout
async function makeApiRequest<T>(endpoint: string, data: T): Promise<ApiResponse> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    console.error('API request failed:', error);

    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return {
          success: false,
          error: 'Request timed out. Please try again.',
        };
      }
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: false,
      error: 'Unknown error occurred',
    };
  }
}

// Add click handlers
reportCookiesButton.addEventListener('click', async () => {
  try {
    const currentUrl = await getCurrentTabUrl();
    const reportData: CookieReport = { website: currentUrl };

    // Disable button while request is in progress
    reportCookiesButton.setAttribute('disabled', 'true');
    reportCookiesButton.textContent = 'Reporting...';

    const response = await makeApiRequest<CookieReport>(COOKIE_REPORT_ENDPOINT, reportData);

    if (response.success) {
      showMessage('Successfully reported unblocked cookies. Thank you for your feedback!');
    } else {
      showMessage(response.error || 'Failed to report unblocked cookies. Please try again.', true);
    }
  } catch (error) {
    showMessage('An error occurred. Please try again.', true);
  } finally {
    // Re-enable button
    reportCookiesButton.removeAttribute('disabled');
    reportCookiesButton.textContent = 'Cookies not rejected on current page';
  }
});

reportBugButton.addEventListener('click', async () => {
  const description = bugDescriptionTextarea.value.trim();
  const currentUrl = await getCurrentTabUrl();

  if (!description) {
    showMessage('Please enter a description of the bug', true);
    return;
  }

  try {
    const reportData: BugReport = {
      website: currentUrl,
      description: description,
    };

    // Disable button while request is in progress
    reportBugButton.setAttribute('disabled', 'true');
    reportBugButton.textContent = 'Submitting...';

    const response = await makeApiRequest<BugReport>(BUG_REPORT_ENDPOINT, reportData);

    if (response.success) {
      showMessage('Thank you for reporting the bug! We will look into it.');
      // Clear the textarea after successful submission
      bugDescriptionTextarea.value = '';
    } else {
      showMessage(response.error || 'Failed to submit bug report. Please try again.', true);
    }
  } catch (error) {
    showMessage('An error occurred. Please try again.', true);
  } finally {
    // Re-enable button
    reportBugButton.removeAttribute('disabled');
    reportBugButton.textContent = 'Submit Bug Report';
  }
});
