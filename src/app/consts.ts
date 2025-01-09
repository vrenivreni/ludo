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
  [allColors[0]]: 2,
  [allColors[1]]: 12,
  [allColors[2]]: 22,
  [allColors[3]]: 32,
};

export const endFields = {
  [allColors[0]]: 1,
  [allColors[1]]: 11,
  [allColors[2]]: 21,
  [allColors[3]]: 31,
};
