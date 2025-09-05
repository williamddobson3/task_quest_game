// Utility functions for managing login status and date tracking

/**
 * Check if user has already logged in today
 * @returns {boolean} true if user already logged in today, false otherwise
 */
export const hasLoggedInToday = () => {
  const lastLoginDate = localStorage.getItem('lastLoginDate');
  const today = new Date().toDateString();
  
  return lastLoginDate === today;
};

/**
 * Mark user as logged in today
 */
export const markLoginToday = () => {
  const today = new Date().toDateString();
  localStorage.setItem('lastLoginDate', today);
};

/**
 * Get current day of the week
 * @returns {number} 0 = Sunday, 1 = Monday, ..., 6 = Saturday
 */
export const getCurrentDayOfWeek = () => {
  return new Date().getDay();
};

/**
 * Check if today is Sunday
 * @returns {boolean} true if today is Sunday, false otherwise
 */
export const isSunday = () => {
  return getCurrentDayOfWeek() === 0;
};

/**
 * Check if today is Monday through Saturday
 * @returns {boolean} true if today is Mon-Sat, false if Sunday
 */
export const isWeekday = () => {
  const day = getCurrentDayOfWeek();
  return day >= 1 && day <= 6; // Monday through Saturday
};

/**
 * Determine the redirect path after completing the 11th tutorial
 * @returns {string} path to redirect to
 */
export const getPostTutorialRedirect = () => {
  const alreadyLoggedInToday = hasLoggedInToday();
  
  if (alreadyLoggedInToday) {
    return '/home';
  }
  
  // Mark as logged in today since this is their first login
  markLoginToday();
  
  if (isSunday()) {
    return '/bonus-sun';
  } else {
    return '/bonus';
  }
};
