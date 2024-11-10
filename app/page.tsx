import { Terminal } from "@/components/terminal";
import { TerminalProvider } from "@/components/terminal/provider";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-[1.065rem] text-neutral-100 px-4 py-3 font-mono">
      <TerminalProvider>
        <Terminal />
      </TerminalProvider>
    </main>
  );
}
