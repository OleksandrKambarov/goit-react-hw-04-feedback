import PropTypes from 'prop-types';

import styles from './statistic.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={styles.statistic}>
    <li>good: {good}</li>
    <li>neutral: {neutral}</li>
    <li>bad: {bad}</li>
    <li>total: {total}</li>
    <li>positive feedback: {positivePercentage}%</li>
  </ul>
);

Statistics.defaultProps = {
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
