import styles from './elevator.module.css';

function Elevator() {
  return (
    <div className={styles.elevator}>
      <div className={styles.top}>
        <div className={styles.light} />
      </div>
    </div>
  );
}

export default Elevator;
