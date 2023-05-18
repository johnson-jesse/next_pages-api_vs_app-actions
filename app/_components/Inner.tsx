export default function Inner({ children }: { children: React.ReactElement }) {
  return (
    <fieldset className='w-[80vw] h-[40vh]'>
      <legend>Inner</legend>
      {children}
    </fieldset>
  );
}
