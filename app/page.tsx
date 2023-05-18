import Inner from "./_components/Inner";
import Sub from "./_components/Sub";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>API vs Server Action</h1>
      <Inner><Sub /></Inner>
      <div />
    </main>
  )
}
