import Link from "next/link";
import { StaggerRoll } from "@/components/ui/text/staggerRoll";

export default function Home(): JSX.Element {
  return (
    <main className="flex h-[93vh] flex-col items-center bg-white bg-gradient-to-br from-transparent via-white to-blue-200 p-12 md:p-24 dark:bg-black dark:via-black dark:to-blue-600/20">
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="md:w-[40rem] bg-gradient-to-br from-black to-black/50 bg-clip-text text-center text-2xl md:text-6xl font-semibold text-transparent drop-shadow-xl dark:from-slate-200 dark:to-slate-200/50">
          Launch Great UI Fast with Kriptonian UI
        </h1>
        <h2 className="md:w-[30rem] text-center text-black/70 drop-shadow-xl dark:text-white/70">
          Ship beautiful UIs faster with Kriptonian UI, a collection of free and
          open-source UI components.
        </h2>
        <Link href="/ui">
          <StaggerRoll
            text="Browse Components"
            className="rounded-full border border-blue-500 bg-blue-200/40 px-4 py-2 text-blue-500 shadow-md transition-colors hover:border-white/30 hover:bg-blue-500 hover:text-white hover:shadow-lg dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/80 dark:hover:text-black"
          />
        </Link>
      </div>
    </main>
  );
}
