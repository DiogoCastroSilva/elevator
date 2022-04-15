import { createContext, ReactNode, useEffect, useState } from 'react';

import wait from '../utils/wait';

const FLOOR_SIZE = 14.1;
const MIN_FLOOR = 0;

interface IElevatorProvider {
  numOfFloors: number;
  children: ReactNode;
}

interface IElevatorContext {
  numOfFloors: number;
  isMoving: boolean;
  currentFloor: number;
  floorSize: number;
  onClick: (floor: number) => void;
}

const ElevatorContext = createContext<IElevatorContext>({} as IElevatorContext);

const ElevatorProvider = ({ numOfFloors, children }: IElevatorProvider) => {
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [currentFloor, setCurrentFloor] = useState<number>(0);
  const [queus, setQueus] = useState<number[]>([]);

  const isIddle = () => {
    return !isMoving && queus.length === 0;
  };

  const goUp = () => {
    if (currentFloor < numOfFloors - 1) {
      setCurrentFloor(currentFloor + 1);
    }
  };

  const goDown = () => {
    if (currentFloor > MIN_FLOOR) {
      setCurrentFloor(currentFloor - 1);
    }
  };

  const handleOnFloorButtonClick = (floor: number) => {
    if (!queus.includes(floor)) {
      setQueus((prev) => [...prev, floor]);
    }
  };

  const moveElevator = () => {
    setTimeout(() => {
      setIsMoving(true);

      const queu = queus[0];
      const isSameFloor = queu === currentFloor;

      if (isSameFloor) {
        queus.pop();
        setIsMoving(false);
        return false;
      }

      if (currentFloor > queu) {
        goDown();
      } else {
        goUp();
      }

      setIsMoving(false);
      moveElevator();
    }, 5000);
  };

  useEffect(() => {
    if (isIddle()) {
      moveElevator();
    }
  }, [queus]);

  return (
    <ElevatorContext.Provider
      value={{
        numOfFloors,
        currentFloor,
        isMoving,
        floorSize: FLOOR_SIZE,
        onClick: handleOnFloorButtonClick,
      }}
    >
      {children}
    </ElevatorContext.Provider>
  );
};

export type { IElevatorContext, IElevatorProvider };
export { ElevatorContext, ElevatorProvider };
