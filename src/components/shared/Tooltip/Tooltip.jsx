import styles from './Tooltip.module.css';

const Tooltip = ({ message, tooltipMessage }) => {
  return (
    <div className={styles.tooltip}>
      {message}
      <span className={styles.tooltipText}>{tooltipMessage}</span>
    </div>
  );
};

export default Tooltip;
