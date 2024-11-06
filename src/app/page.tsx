import { HomeArea } from '@/app/components/HomeArea';
import { FieldArea } from '@/app/components/FieldArea';

const colors = ['red', 'green', 'blue', 'yellow', 'red'];

export default function Home() {
  return (
    <>
      <div className='flex flex-row justify-evenly'>
        <HomeArea color={colors[0]} />
        <HomeArea color={colors[1]} />
      </div>
      <div className='flex justify-center'>
        <FieldArea colors={colors} />
      </div>
      <div className='flex flex-row justify-evenly'>
        <HomeArea color={colors[3]} />
        <HomeArea color={colors[2]} />
      </div>
    </>
  );
}
