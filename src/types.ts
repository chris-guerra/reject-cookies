export interface CookiePopupCheck {
  name: string;
  // TODO: in the future this check can return a DOM element
  //so we don't just look it up again in the rejectOrClose function
  check: () => boolean;
  rejectOrClose: () => boolean;
  successful: boolean;
}

export interface BugReport {
  website: string;
  description: string;
}

export interface CookieReport {
  website: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}
