import BuildingSection from './building-section';
import ButtonsSection from './buttons-section';
import styles from './root.module.css';

const NUM_FLOORS = 7;

function Root() {
  return (
    <div className={styles.container}>
      <ButtonsSection />
      <BuildingSection />
    </div>
  );
}

export default Root;
