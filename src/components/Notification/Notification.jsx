import PropTypes from 'prop-types';

import styles from './notification.module.css';

const Notification = ({ message }) => (
  <p className={styles.notification}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
