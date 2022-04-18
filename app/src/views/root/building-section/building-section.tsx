import Elevator from '../../../components/elevator';
import Floor from '../../../components/floor';
import useElevator from '../../../enhancers/hooks/use-elevator';

import styles from './building-section.module.css';

function BuildingSection() {
  const { currentFloor, floorSize } = useElevator();

  const position = `${(6 - currentFloor) * floorSize}%`;

  return (
    <div className={[styles.section, styles['right-section']].join(' ')}>
      <div className={styles.building}>
        <div
          className={[styles['building-section'], styles['b-right']].join(' ')}
        >
          <Floor />
          <Floor />
          <Floor />
          <Floor />
          <Floor />
          <Floor />
          <Floor />
        </div>
        <div className={styles['building-section']}>
          <Elevator position={position} />
        </div>
        <div
          className={[styles['building-section'], styles['b-left']].join(' ')}
        >
          <Floor />
          <Floor />
          <Floor />
          <Floor />
          <Floor />
          <Floor />
          <Floor />
        </div>
      </div>
    </div>
  );
}

export default BuildingSection;
