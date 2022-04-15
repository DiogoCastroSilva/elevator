import { ReactNode, MouseEvent } from 'react';

import styles from './elevator-button.module.css';

interface IElevatorButton {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

function ElevatorButton({ children, onClick }: IElevatorButton) {
  return (
    <button className={styles['elevator-button']} onClick={onClick}>
      {children}
    </button>
  );
}

export type { IElevatorButton };
export default ElevatorButton;
