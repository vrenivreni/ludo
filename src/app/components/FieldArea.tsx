import { Dot } from '@/app/components/Dot';

export const FieldArea = ({ colors }: { colors: string[] }) => {
  return (
    <div className='flex flex-col justify-center gap-4'>
      <div className='flex flex-row justify-center'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-4'>
            <Dot color={colors[0]} />
            <Dot />
            <Dot />
          </div>
          <div className='flex flex-row gap-4'>
            <Dot />
            <Dot color={colors[0]} />
            <Dot />
          </div>
          <div className='flex flex-row gap-4'>
            <Dot />
            <Dot color={colors[0]} />
            <Dot />
          </div>
          <div className='flex flex-row gap-4'>
            <Dot />
            <Dot color={colors[0]} />
            <Dot />
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-4'>
        <div className='flex flex-row'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-4'>
              <Dot />
              <Dot />
              <Dot />
              <Dot />
              <Dot />
              <Dot color={colors[0]} />
            </div>
            <div className='flex flex-row gap-4'>
              <Dot />
              <Dot color={colors[3]} />
              <Dot color={colors[3]} />
              <Dot color={colors[3]} />
              <Dot color={colors[3]} />
            </div>
            <div className='flex flex-row gap-4'>
              <Dot color={colors[3]} />
              <Dot />
              <Dot />
              <Dot />
              <Dot />
              <Dot color={colors[2]} />
            </div>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-4'>
              <Dot />
              <Dot />
              <Dot />
              <Dot />
              <Dot color={colors[1]} />
            </div>
            <div className='flex flex-row gap-4'>
              <Dot color={colors[1]} />
              <Dot color={colors[1]} />
              <Dot color={colors[1]} />
              <Dot color={colors[1]} />
              <Dot />
            </div>
            <div className='flex flex-row gap-4'>
              <Dot />
              <Dot />
              <Dot />
              <Dot />
              <Dot />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-4'>
            <Dot />
            <Dot color={colors[2]} />
            <Dot />
          </div>
          <div className='flex flex-row gap-4'>
            <Dot />
            <Dot color={colors[2]} />
            <Dot />
          </div>
          <div className='flex flex-row gap-4'>
            <Dot />
            <Dot color={colors[2]} />
            <Dot />
          </div>
          <div className='flex flex-row gap-4'>
            <Dot />
            <Dot />
            <Dot color={colors[2]} />
          </div>
        </div>
      </div>
    </div>
  );
};
