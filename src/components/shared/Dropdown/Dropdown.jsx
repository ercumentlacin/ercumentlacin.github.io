import styles from './Dropdown.module.css';

const Dropdown = (props) => {
  const { title, children } = props;
  return (
    <div className={styles.dropdownWrapper}>
      <input
        type='checkbox'
        id='input'
        className='absolute transform scale-0'
      />
      <label htmlFor='input' className={styles.dropdownButton}>
        <span className='text text-base'> {title} </span>
        <span className={styles.icon} />
      </label>
      <div className={styles.dropdownContent}>
        <ul>{children}</ul>
      </div>
    </div>
  );
};

export default Dropdown;
