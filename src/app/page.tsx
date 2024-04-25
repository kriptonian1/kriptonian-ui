import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="w-[40rem] bg-gradient-to-br from-black to-black/50 bg-clip-text text-center text-6xl font-semibold text-transparent drop-shadow-xl dark:from-slate-200 dark:to-slate-200/50">
          Launch Great UI Fast with Kriptonian UI
        </h1>
        <h2 className="w-[30rem] text-center text-black/70 drop-shadow-xl dark:text-white/70">
          Ship beautiful UIs faster with Kriptonian UI, a collection of free and
          open-source UI components.
        </h2>
        <Link
          href="/ui"
          className="rounded-full border border-blue-500 bg-blue-200/40 px-4 py-2 text-blue-500 shadow-md dark:text-white transition-colors hover:border-white/30 hover:bg-blue-500 hover:text-white hover:shadow-lg dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/80 dark:hover:text-black"
        >
          Browse Components
        </Link>
      </div>
    </main>
  );
}
