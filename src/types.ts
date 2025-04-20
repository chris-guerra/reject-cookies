export interface CookiePopupCheck {
  name: string;
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
