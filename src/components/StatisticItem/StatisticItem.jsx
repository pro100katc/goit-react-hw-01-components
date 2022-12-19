import PropTypes from 'prop-types';
import css from './StaticItem.module.css';

export default function Statistics({ label, percentage }) {
  return (
    <li
      className={css.item}
      style={{
        backgroundColor: `#${Math.floor(Math.random() * 12782215).toString(16)}`,
      }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};