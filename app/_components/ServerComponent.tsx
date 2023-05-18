export default function Inner({ children }: { children: React.ReactElement }) {
  return (
    <fieldset className='w-[80vw] h-[40vh]'>
      <legend>Server Component</legend>
      {children}
    </fieldset>
  );
}
