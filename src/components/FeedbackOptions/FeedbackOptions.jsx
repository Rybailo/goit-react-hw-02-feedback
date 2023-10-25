import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.wrap}>
      {options.map(option => {
        return (
          <ul>
            <li
              className={css.btn}
              type="button"
              key={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </li>
          </ul>
        );
      })}
    </div>
  );
};
