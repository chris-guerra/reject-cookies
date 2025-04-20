import {
  checkForCookieBot,
  checkForDidomi,
  checkForOneTrust,
  checkForTranscend,
  checkForTrustArc,
  checkForUserCentrics,
} from './checks';
import {
  closeOrRejectDidomi,
  closeOrRejectOneTrust,
  closeOrRejectTrustArc,
  closeTranscend,
  rejectCookieBot,
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
];
