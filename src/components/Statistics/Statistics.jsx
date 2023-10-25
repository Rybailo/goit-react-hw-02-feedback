import css from './Statistics.module.css';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>

        {total() > 0 && <li>Total: {total()}</li>}
        {total() > 0 && <li>Positive feedback: {positivePercentage()}%</li>}
      </ul>
    </div>
  );
};
