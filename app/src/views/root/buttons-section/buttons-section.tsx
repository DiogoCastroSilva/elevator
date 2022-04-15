import ElevatorButton from '../../../components/elevator-button';

import styles from './buttons-section.module.css';

function ButtonsSection() {
  return (
    <div className={[styles.section, styles['left-section']].join(' ')}>
      <div className={styles.col}>
        <ElevatorButton>6</ElevatorButton>
        <ElevatorButton>5</ElevatorButton>
      </div>
      <div className={styles.col}>
        <ElevatorButton>4</ElevatorButton>
        <ElevatorButton>3</ElevatorButton>
      </div>
      <div className={styles.col}>
        <ElevatorButton>2</ElevatorButton>
        <ElevatorButton>1</ElevatorButton>
      </div>
      <div className={styles.col}>
        <ElevatorButton>T</ElevatorButton>
      </div>
    </div>
  );
}

export default ButtonsSection;
