import { PlayerContextType } from '@/app/contexts/PlayerContext';

export const allColors = ['red', 'green', 'blue', 'yellow'];

export const defaultState: PlayerContextType = {
  [allColors[0]]: ['red-0', 'red-1', 'red-2', 'red-3'],
  [allColors[1]]: ['green-0', 'green-1', 'green-2', 'green-3'],
  [allColors[2]]: ['blue-0', 'blue-1', 'blue-2', 'blue-3'],
  [allColors[3]]: ['yellow-0', 'yellow-1', 'yellow-2', 'yellow-3'],
};

export const defaultFirstPlayer: string = allColors[0];

export const startFields = {
  [allColors[0]]: 0,
  [allColors[1]]: 10,
  [allColors[2]]: 20,
  [allColors[3]]: 30,
};
