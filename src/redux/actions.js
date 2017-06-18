import { RN_SHOW_NOTIFICATION, RN_HIDE_NOTIFICATION,
  RN_HIDE_ALL_NOTIFICATIONS } from './constants';

export function showNotification(options = {}) {
  return {
    type: RN_SHOW_NOTIFICATION,
    options,
  };
}

export function hideNotification(uid) {
  return {
    type: RN_HIDE_NOTIFICATION,
    uid,
  };
}

export function hideAllNotifications() {
  return {
    type: RN_HIDE_ALL_NOTIFICATIONS,
  };
}
