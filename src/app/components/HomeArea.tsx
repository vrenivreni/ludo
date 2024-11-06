import { Dot } from '@/app/components/Dot';

type HomeAreaProps = {
  color?: string;
};

export const HomeArea = ({ color }: HomeAreaProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-row gap-4'>
        <Dot color={color} />
        <Dot color={color} />
      </div>
      <div className='flex flex-row gap-4'>
        <Dot color={color} />
        <Dot color={color} />
      </div>
    </div>
  );
};
