import Elevator from '../../../components/elevator';
import Floor from '../../../components/floor';

import styles from './building-section.module.css';

function BuildingSection() {
  return (
    <div className={[styles.section, styles['right-section']].join(' ')}>
      <div className={styles.building}>
        <div className={[styles['building-section'], styles['b-right']].join(' ')}>
          <Floor />
          <Floor />
          <Floor />
          <Floor />
          <Floor />
          <Floor />
          <Floor />
        </div>
        <div className={styles['building-section']}>
          <Elevator />
        </div>
        <div className={[styles['building-section'], styles['b-left']].join(' ')}>
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
