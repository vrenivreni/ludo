'use client';

import { HomeArea } from '@/app/components/HomeArea';
import { FieldArea } from '@/app/components/FieldArea';
import { useContext, useState } from 'react';
import { PlayerContext } from '@/app/contexts/PlayerContext';

const defaultState = {
  red: ['red-0', 'red-1', 'red-2', 'red-3'],
  green: ['green-0', 'green-1', 'green-2', 'green-3'],
  blue: ['blue-0', 'blue-1', 'blue-2', 'blue-3'],
  yellow: ['yellow-0', 'yellow-1', 'yellow-2', 'yellow-3'],
};

export const Game = () => {
  const [players, setPlayers] = useState(defaultState);
  return (
    <PlayerContext.Provider value={players}>
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
