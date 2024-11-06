type DotProps = {
  color?: string;
};

export const Dot = ({ color }: DotProps) => {
  return (
    <>
      <div
        className={`size-8 rounded-2xl border border-neutral-300`}
        style={{ backgroundColor: color ?? 'grey' }}
      />
    </>
  );
};
