import css from '../../css/Widget.module.css';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ feedback }) => {
  return (
    <div onClick={feedback}>
      <ul className={css.feedbackList}>
        <li className={css.feedbackItem}>
          <button type="button" name="good" className={css.emojiBtn}>
            &#128525;
          </button>
        </li>
        <li>
          <button type="button" name="neutral" className={css.emojiBtn}>
            &#128528;
          </button>
        </li>
        <li>
          <button type="button" name="bad" className={css.emojiBtn}>
            &#128545;
          </button>
        </li>
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  feedback: PropTypes.func.isRequired,
};
