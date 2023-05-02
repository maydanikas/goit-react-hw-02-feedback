import PropTypes from 'prop-types';
// import { Notification } from '../Notification/Notification';
import css from '../../css/Widget.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  // console.log(total);
  return (
    <>
      <ul className={css.statList}>
        <li>
          <b> Good:</b> <span>{good}</span>
        </li>
        <li>
          <b> Neutral:</b> <span>{neutral}</span>
        </li>
        <li>
          <b> Bad:</b> <span>{bad}</span>
        </li>
      </ul>

      <ul className={css.totalStats}>
        <li>
          <b>Total: </b>
          <span>{total}</span>
        </li>
        <li>
          <b>Positive feedback: </b>
          <span>{positivePercentage + '%'}</span>
        </li>
      </ul>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
