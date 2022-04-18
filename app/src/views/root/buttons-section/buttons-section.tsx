import ElevatorButton from '../../../components/elevator-button';
import useElevator from '../../../enhancers/hooks/use-elevator';

import styles from './buttons-section.module.css';

function ButtonsSection() {
  const { onClick } = useElevator();

  const handleOnFloorButtonClick = (floor: number) => {
    onClick(floor);
  };

  return (
    <div className={[styles.section, styles['left-section']].join(' ')}>
      <div className={styles.col}>
        <ElevatorButton onClick={() => handleOnFloorButtonClick(6)}>
          6
        </ElevatorButton>
        <ElevatorButton onClick={() => handleOnFloorButtonClick(5)}>
          5
        </ElevatorButton>
      </div>
      <div className={styles.col}>
        <ElevatorButton onClick={() => handleOnFloorButtonClick(4)}>
          4
        </ElevatorButton>
        <ElevatorButton onClick={() => handleOnFloorButtonClick(3)}>
          3
        </ElevatorButton>
      </div>
      <div className={styles.col}>
        <ElevatorButton onClick={() => handleOnFloorButtonClick(2)}>
          2
        </ElevatorButton>
        <ElevatorButton onClick={() => handleOnFloorButtonClick(1)}>
          1
        </ElevatorButton>
      </div>
      <div className={styles.col}>
        <ElevatorButton onClick={() => handleOnFloorButtonClick(0)}>
          T
        </ElevatorButton>
      </div>
    </div>
  );
}

export default ButtonsSection;
