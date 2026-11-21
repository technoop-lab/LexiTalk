/**
 * Free-access limit for the public launch.
 * Days above this number show a lock. No payment is wired yet.
 * Change this one number to move the lock.
 */
export const FREE_DAY_LIMIT = 3;

export const isDayLocked = (dayNum: number): boolean => dayNum > FREE_DAY_LIMIT;

/**
 * Show A2 lessons to learners. Off for the public launch: only A1 is released.
 * Turn on only when the A2 content is complete and reviewed.
 */
export const SHOW_A2_LEVEL = false;
