import { Dot } from '@/app/components/Dot';
import { useContext } from 'react';
import { PlayerContext } from '@/app/contexts/PlayerContext';

export const FieldArea = ({ colors }: { colors: string[] }) => {
  const players = useContext(PlayerContext);

  return (
    <div className='flex flex-col justify-center gap-4'>
      <div className='flex flex-row justify-center'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-4'>
            <Dot color={colors[0]} id='0' />
            <Dot id='1' />
            <Dot id='2' />
          </div>
          <div className='flex flex-row gap-4'>
            <Dot id='39' />
            <Dot color={colors[0]} id={`goal-${colors[0]}-0`} />
            <Dot id='3' />
          </div>
          <div className='flex flex-row gap-4' id='7'>
            <Dot id='38' />
            <Dot color={colors[0]} id={`goal-${colors[0]}-1`} />
            <Dot id='4' />
          </div>
          <div className='flex flex-row gap-4' id='11'>
            <Dot id='37' />
            <Dot color={colors[0]} id={`goal-${colors[0]}-2`} />
            <Dot id='5' />
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-4'>
        <div className='flex flex-row'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-4'>
              <Dot id='32' />
              <Dot id='33' />
              <Dot id='34' />
              <Dot id='35' />
              <Dot id='36' />
              <Dot color={colors[0]} id={`goal-${colors[0]}-3`} />
            </div>
            <div className='flex flex-row gap-4'>
              <Dot id='31' />
              <Dot color={colors[3]} id={`goal-${colors[3]}-0`} />
              <Dot color={colors[3]} id={`goal-${colors[3]}-1`} />
              <Dot color={colors[3]} id={`goal-${colors[3]}-2`} />
              <Dot color={colors[3]} id={`goal-${colors[3]}-3`} />
            </div>
            <div className='flex flex-row gap-4'>
              <Dot color={colors[3]} id='30' />
              <Dot id='29' />
              <Dot id='28' />
              <Dot id='27' />
              <Dot id='26' />
              <Dot color={colors[2]} id={`goal-${colors[2]}-3`} />
            </div>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-4'>
              <Dot id='6' />
              <Dot id='7' />
              <Dot id='8' />
              <Dot id='9' />
              <Dot color={colors[1]} id='10' />
            </div>
            <div className='flex flex-row gap-4'>
              <Dot color={colors[1]} id={`goal-${colors[1]}-3`} />
              <Dot color={colors[1]} id={`goal-${colors[1]}-2`} />
              <Dot color={colors[1]} id={`goal-${colors[1]}-1`} />
              <Dot color={colors[1]} id={`goal-${colors[1]}-0`} />
              <Dot id='11' />
            </div>
            <div className='flex flex-row gap-4'>
              <Dot id='16' />
              <Dot id='15' />
              <Dot id='14' />
              <Dot id='13' />
              <Dot id='12' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-4'>
            <Dot id='25' />
            <Dot color={colors[2]} id={`goal-${colors[2]}-2`} />
            <Dot id='17' />
          </div>
          <div className='flex flex-row gap-4'>
            <Dot id='24' />
            <Dot color={colors[2]} id={`goal-${colors[2]}-1`} />
            <Dot id='18' />
          </div>
          <div className='flex flex-row gap-4'>
            <Dot id='23' />
            <Dot color={colors[2]} id={`goal-${colors[2]}-0`} />
            <Dot id='19' />
          </div>
          <div className='flex flex-row gap-4' id='57'>
            <Dot id='22' />
            <Dot id='21' />
            <Dot color={colors[2]} id='20' />
          </div>
        </div>
      </div>
    </div>
  );
};
