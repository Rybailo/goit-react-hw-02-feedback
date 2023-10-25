import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={css.wrap}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
