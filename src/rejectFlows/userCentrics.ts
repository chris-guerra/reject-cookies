export const rejectUserCentricsPrimaryFlow = () => {
  const shadowDOMHost = document.getElementById('usercentrics-root');
  if (!shadowDOMHost) {
    return false;
  }

  const rejectBtn = shadowDOMHost.shadowRoot?.querySelector<HTMLButtonElement>(
    '[data-testid="uc-deny-all-button"]'
  );
  if (rejectBtn) {
    rejectBtn.click();
    return true;
  }
  shadowDOMHost.remove();
  return true;
};

export const rejectUserCentricsSecondaryFlow = () => {
  const shadowDOMHost = document.getElementById('usercentrics-cmp-ui');
  if (!shadowDOMHost) {
    return false;
  }

  const rejectBtn = shadowDOMHost.shadowRoot?.getElementById('deny');
  if (rejectBtn) {
    rejectBtn.click();
    return true;
  }
  shadowDOMHost.remove();
  return true;
};

export const rejectUserCentricsTertiaryFlow = () => {
  const shadowDOMHost = document.getElementById('usercentrics-root');
  if (!shadowDOMHost) {
    return false;
  }
  // go into a menu
  const adjustBtn = document.querySelector<HTMLButtonElement>(
    '[data-testid="gdpr-banner-decline-button"]'
  );
  if (!adjustBtn) {
    return false;
  }
  adjustBtn.click();
  // click on the reject all button
  const rejectBtn = shadowDOMHost.shadowRoot?.querySelector<HTMLButtonElement>(
    '[data-testid="uc-deny-all-button"]'
  );
  if (rejectBtn) {
    rejectBtn.click();
    return true;
  }
  return false;
};
