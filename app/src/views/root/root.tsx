import { ElevatorProvider } from '../../states/elevator';

import BuildingSection from './building-section';
import ButtonsSection from './buttons-section';
import styles from './root.module.css';

const NUMBER_FLOORS = 7;

function Root() {
  return (
    <ElevatorProvider numOfFloors={NUMBER_FLOORS}>
      <div className={styles.container}>
        <ButtonsSection />
        <BuildingSection />
      </div>
    </ElevatorProvider>
  );
}

export default Root;
