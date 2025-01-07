import { PlayerContextType } from '@/app/contexts/PlayerContext';
import { Simulate } from 'react-dom/test-utils';

export const findFigure = (players, id) => {
  let returnValue = null;
  Object.keys(players).forEach((color) => {
    players[color].forEach((figure) => {
      if (figure === id) {
        returnValue = color;
      }
    });
  });
  return returnValue;
};

export const allFiguresHome = (
  player: string,
  players: PlayerContextType
): boolean => {
  return (
    players[player].includes(player + '-0') &&
    players[player].includes(player + '-1') &&
    players[player].includes(player + '-2') &&
    players[player].includes(player + '-3')
  );
};
