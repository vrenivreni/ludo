import { useCallback, useContext, useMemo, useState } from 'react';
import { PlayerContext } from '@/app/contexts/PlayerContext';
import { Figure } from '@/app/components/Figure';
import { findFigure } from '@/app/utils';

type DotProps = {
  color?: string;
  updateFigure?: string;
  id: string;
};

export const Dot = ({ color, id }: DotProps) => {
  const players = useContext(PlayerContext);
  const figure = useMemo(() => findFigure(players, id), [id, players]);
  return (
    <>
      <div
        className={`size-8 rounded-2xl border border-neutral-300`}
        style={{ backgroundColor: color ?? 'grey' }}
      >
        {figure !== null && <Figure color={figure} />}
      </div>
    </>
  );
};
