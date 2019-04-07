import Alert from 'react-s-alert';

/**
 * Timeout in mlliseconds
 */
const TIMEOUT = 2000;

const SuccessAlert =  (message) => (
  Alert.success(message, {
    position: 'bottom',
    effect: 'slide',
    timeout: TIMEOUT
  })
);

const ErrorAlert =  (message) => (
  Alert.error(message, {
    position: 'bottom',
    effect: 'slide',
    timeout: TIMEOUT
  })
);

export { SuccessAlert, ErrorAlert }