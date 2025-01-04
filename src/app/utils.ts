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
