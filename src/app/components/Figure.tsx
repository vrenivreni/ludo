export const Figure = ({ color }: { color: string }) => {
  return (
    <div
      className='m-[3px] size-6 rounded-xl border border-neutral-300'
      style={{ backgroundColor: color }}
    ></div>
  );
};
