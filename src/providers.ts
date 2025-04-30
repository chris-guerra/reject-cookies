import {
  checkForCookieBot,
  checkForCookieYes,
  checkForDidomi,
  checkForDrCookie,
  checkForOneTrust,
  checkForTranscend,
  checkForTrustArc,
  checkForUCGDPR,
  checkForUserCentrics,
} from './checks';
import {
  closeOrRejectCookieYes,
  closeOrRejectDidomi,
  closeOrRejectDrCookie,
  closeOrRejectOneTrust,
  closeOrRejectTrustArc,
  closeTranscend,
  rejectCookieBot,
  rejectOrCloseUCGDPR,
  rejectUserCentrics,
} from './rejects';
import { CookiePopupCheck } from './types';

export const commonCookiePopupChecks: CookiePopupCheck[] = [
  {
    name: 'onetrust',
    check: checkForOneTrust,
    rejectOrClose: closeOrRejectOneTrust,
    successful: false,
  },
  {
    name: 'transcend',
    check: checkForTranscend,
    rejectOrClose: closeTranscend,
    successful: false,
  },
  {
    name: 'cookieyes',
    check: checkForCookieYes,
    rejectOrClose: closeOrRejectCookieYes,
    successful: false,
  },
  {
    name: 'cookiebot',
    check: checkForCookieBot,
    rejectOrClose: rejectCookieBot,
    successful: false,
  },
  {
    name: 'usercentrics',
    check: checkForUserCentrics,
    rejectOrClose: rejectUserCentrics,
    successful: false,
  },
  {
    name: 'didomi',
    check: checkForDidomi,
    rejectOrClose: closeOrRejectDidomi,
    successful: false,
  },
  {
    name: 'trustarc',
    check: checkForTrustArc,
    rejectOrClose: closeOrRejectTrustArc,
    successful: false,
  },
  {
    name: 'dr',
    check: checkForDrCookie,
    rejectOrClose: closeOrRejectDrCookie,
    successful: false,
  },
  {
    name: 'uc-gdpr',
    check: checkForUCGDPR,
    rejectOrClose: rejectOrCloseUCGDPR,
    successful: false,
  },
];
