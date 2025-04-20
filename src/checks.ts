export const checkForOneTrust = (): boolean => !!document.getElementById('onetrust-consent-sdk');
export const checkForTranscend = (): boolean =>
  !!document.getElementById('transcend-consent-manager');
export const checkForCookieBot = (): boolean => !!document.getElementById('CybotCookiebotDialog');
export const checkForUserCentrics = (): boolean => !!document.getElementById('usercentrics-root');
export const checkForDidomi = (): boolean =>
  !!document.getElementById('didomi-popup') || !!document.getElementById('didomi-host');
export const checkForTrustArc = (): boolean => !!document.getElementById('truste-consent-track');
