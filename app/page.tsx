import ServerComponent from "./_components/ServerComponent";
import LeafComponent from "./_components/LeafComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <fieldset>
        <legend>Root Page</legend>
        <h1 className='m-4'>API vs Server Action</h1>
        <ServerComponent>
          <LeafComponent />
        </ServerComponent>
      </fieldset>
      <div />
    </main>
  );
}
