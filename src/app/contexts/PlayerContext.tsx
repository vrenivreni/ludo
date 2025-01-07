import { createContext } from 'react';

export type PlayerContextType = {
  [index: string]: string[];
};
export const PlayerContext: React.Context<PlayerContextType> = createContext(
  {}
);
