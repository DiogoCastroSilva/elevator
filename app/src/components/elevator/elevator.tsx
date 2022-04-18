import styles from './elevator.module.css';

interface IELevator {
  position: number | string;
}

function Elevator({ position = 0 }: IELevator) {
  return (
    <div className={styles.elevator} style={{ top: position }}>
      <div className={styles.top}>
        <div className={styles.light} />
      </div>
    </div>
  );
}

export default Elevator;
