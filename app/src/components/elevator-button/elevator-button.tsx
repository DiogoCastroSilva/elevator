import { ReactNode } from 'react';

import styles from './elevator-button.module.css';

interface IElevatorButton {
  children: ReactNode;
}

function ElevatorButton({ children }: IElevatorButton) {
  return (
    <button className={styles['elevator-button']}>
      {children}
    </button>
  );
}

export type { IElevatorButton };
export default ElevatorButton;
