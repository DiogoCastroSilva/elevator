import { createContext, ReactNode, useEffect, useState } from 'react';
import wait from '../utils/wait';

const FLOOR_SIZE = 15;
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
    return !isMoving;
  };

  const goUp = () => {
    if (currentFloor < numOfFloors - 1) {
      setCurrentFloor((prev) => prev + 1);
    }
  };

  const goDown = () => {
    if (currentFloor > MIN_FLOOR) {
      setCurrentFloor((prev) => prev - 1);
    }
  };

  const handleOnFloorButtonClick = (floor: number) => {
    if (!queus.includes(floor)) {
      setQueus((prev) => [...prev, floor]);
    }
  };

  const moveElevator = async () => {
    const queu = queus[0];
    const isSameFloor = queu === currentFloor;

    setQueus((prev) => {
      let localQues = [...prev];

      if (isSameFloor) {
        localQues.shift();
      }

      if (queus.includes(currentFloor)) {
        localQues = localQues.filter((q) => q !== currentFloor);
      }

      return localQues;
    });

    if (isSameFloor) {
      return;
    }

    setIsMoving(true);

    await wait(5000);

    if (currentFloor > queu) {
      goDown();
    } else {
      goUp();
    }

    setIsMoving(false);
  };

  useEffect(() => {
    if (isIddle() && queus.length > 0) {
      moveElevator();
    }
  }, [currentFloor, queus]);

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
