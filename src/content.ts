import { commonCookiePopupChecks } from './providers';

const MAX_ATTEMPTS = 5;
let currentAttempt = 0;

// Function to find and click reject buttons
function findAndClickRejectButtons(): void {
  if (currentAttempt > MAX_ATTEMPTS) {
    return;
  }

  commonCookiePopupChecks.forEach(({ check, rejectOrClose, successful }) => {
    if (check() && !successful) {
      successful = rejectOrClose();
    }
  });

  currentAttempt++;
}

// Run the functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
  findAndClickRejectButtons();
});

// Also run periodically to catch dynamically loaded popups
setInterval(() => {
  findAndClickRejectButtons();
}, 501);
