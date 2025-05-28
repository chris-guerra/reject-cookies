export const checkForOneTrust = (): boolean => !!document.getElementById('onetrust-consent-sdk');
export const checkForTranscend = (): boolean =>
  !!document.getElementById('transcend-consent-manager');
export const checkForCookieBot = (): boolean => !!document.getElementById('CybotCookiebotDialog');
export const checkForUserCentrics = (): boolean =>
  !!document.getElementById('usercentrics-root') ||
  !!document.getElementById('usercentrics-cmp-ui');
export const checkForDidomi = (): boolean =>
  !!document.getElementById('didomi-popup') || !!document.getElementById('didomi-host');
export const checkForTrustArc = (): boolean => !!document.getElementById('truste-consent-track');
export const checkForCookieYes = (): boolean =>
  !!document.querySelector<HTMLDivElement>('.cky-consent-container');
export const checkForDrCookie = (): boolean =>
  !!document.getElementById('dr_cookie_banner_container');
export const checkForUCGDPR = (): boolean => !!document.getElementById('uc-gdpr-notification');
export const checkForCC = (): boolean => !!document.getElementById('cc--main');
export const checkForGeneric = (): boolean => !!document.getElementById('gdpr-banner-container');
export const checkForTrustee = (): boolean => !!document.getElementById('truste-consent-track');
export const checkForCmplz = (): boolean =>
  !!document.getElementById('cmplz-cookiebanner-container');
export const checkForACookie = (): boolean => !!document.getElementById('a-cookie--message');
