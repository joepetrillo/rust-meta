import { Separator } from "@/components/ui/Seperator";

export default function Footer() {
  return (
    <footer>
      <Separator />
      <p className="p-10 text-center text-sm text-slate-500 dark:text-slate-400">
        Built and maintained by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://steamcommunity.com/id/perfect119"
          className="font-medium underline underline-offset-4 transition-colors dark:hover:text-slate-50"
        >
          Perfect
        </a>
        .
      </p>
    </footer>
  );
}
