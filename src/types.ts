export interface CookiePopupCheck {
  name: string;
  // TODO: in the future this check can return a DOM element
  //so we don't just look it up again in the rejectOrClose function
  check: () => boolean;
  rejectOrClose: () => boolean;
  successful: boolean;
}
