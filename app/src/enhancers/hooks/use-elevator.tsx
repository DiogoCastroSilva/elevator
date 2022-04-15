import { useContext } from 'react';
import { IElevatorContext, ElevatorContext } from '../../states/elevator';

const useElevator = (): IElevatorContext => {
  const context = useContext(ElevatorContext);

  if (!context) {
    throw new Error('useElevator must be used within ElevatorProvider');
  }

  return context;
};

export default useElevator;
