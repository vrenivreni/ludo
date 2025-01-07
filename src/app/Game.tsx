'use client';

import { HomeArea } from '@/app/components/HomeArea';
import { FieldArea } from '@/app/components/FieldArea';
import { useCallback, useState } from 'react';
import { PlayerContext } from '@/app/contexts/PlayerContext';
import { allFiguresHome } from '@/app/utils';
import {
  allColors,
  defaultFirstPlayer,
  defaultState,
  startFields,
} from '@/app/consts';

export const Game = () => {
  const [players, setPlayers] = useState(defaultState);
  const [currentPlayer, setCurrentPlayer] = useState(defaultFirstPlayer);
  const [dice, setDice] = useState<number | null>(null);

  const selectFigure = (index: number) => {
    const current = players[currentPlayer][index];
    move(current);
  };
  const throwDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDice(newValue);
    console.log('Please select your figure!');
  };

  const move = useCallback(
    (current: string) => {
      const finishTurn = (): void => {
        setCurrentPlayer(allColors[(allColors.indexOf(currentPlayer) + 1) % 4]);
        console.log(
          'Next Player: ',
          allColors[(allColors.indexOf(currentPlayer) + 1) % 4]
        );
        console.log('Please throw the dice!');
      };

      const fields: string[] = players[currentPlayer];
      console.log('Dice: ', dice);
      let newField;
      if (dice) {
        if (current.startsWith(currentPlayer)) {
          newField = startFields[currentPlayer] + dice;
        } else {
          newField = parseInt(current) + dice;
        }
        fields[fields.indexOf(current)] = newField.toString();
        setPlayers({
          ...players,
          [currentPlayer]: fields,
        });
      }
      finishTurn();
    },
    [currentPlayer, dice, players]
  );

  //useEffect(() => console.log('Next Player: ', currentPlayer), [currentPlayer]);
  const turn = () => {
    let throws = 1;
    if (allFiguresHome(currentPlayer, players)) throws = 3;
    /*    let n = 0;
    while (n <= throws && dice !== 6) {
      throwDice();
      n++;
    }*/
    throwDice();
  };

  /*useEffect(() => {
    if (turnState === TurnState.THROW_DICE) throwDice();
    else if (turnState === TurnState.MOVE) move(currentPlayer + '-1');
  }, [turnState]);

  useEffect(() => {}, [dice]);

  useEffect(() => {
    setTurnState(TurnState.THROW_DICE);
  }, [currentPlayer]);*/

  /*  const getOptions = () => {
    if (allFiguresHome(currentPlayer, players) && dice !== 6) {
      console.log('no options');
      finishTurn();
    }
  };*/

  return (
    <PlayerContext.Provider value={players}>
      <div className='m-3 flex flex-row justify-center'>
        <div className='m-3'>{dice}</div>
        <button
          className='m-2 rounded-sm border-2 border-black p-1'
          onClick={turn}
        >
          throw
        </button>
      </div>
      <div className='m-3 flex flex-row justify-center'>
        <button
          className='m-2 rounded-sm border-2 border-black p-1'
          onClick={() => selectFigure(0)}
        >
          1
        </button>
        <button
          className='m-2 rounded-sm border-2 border-black p-1'
          onClick={() => selectFigure(1)}
        >
          2
        </button>
        <button
          className='m-2 rounded-sm border-2 border-black p-1'
          onClick={() => selectFigure(2)}
        >
          3
        </button>
        <button
          className='m-2 rounded-sm border-2 border-black p-1'
          onClick={() => selectFigure(3)}
        >
          4
        </button>
      </div>
      <div className='flex flex-row justify-evenly'>
        <HomeArea color={Object.keys(players)[0]} />
        <HomeArea color={Object.keys(players)[1]} />
      </div>
      <div className='flex justify-center'>
        <FieldArea colors={Object.keys(players)} />
      </div>
      <div className='flex flex-row justify-evenly'>
        <HomeArea color={Object.keys(players)[3]} />
        <HomeArea color={Object.keys(players)[2]} />
      </div>
    </PlayerContext.Provider>
  );
};
