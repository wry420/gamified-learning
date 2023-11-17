import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <main className="">
      <nav className="flex flex-row-reverse top-0 p-4 bg-muted">
        <ModeToggle className="flex-shrink" />

        <text className="mx-auto text-3xl font-semibold">Learn</text>
      </nav>
    </main>
  );
}
