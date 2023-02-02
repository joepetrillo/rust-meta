import Link from "next/link";
import { buttonVariants } from "./ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/">
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
              className: "font-bold text-slate-700 dark:text-slate-400",
            })}
          >
            rustmeta.guide
          </div>
        </Link>
        <nav className="space-x-2">
          <Link href="/raiding/calculator">
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
                className: "text-slate-700 dark:text-slate-400",
              })}
            >
              Raiding
            </div>
          </Link>
          <Link href="/building">
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
                className: "text-slate-700 dark:text-slate-400",
              })}
            >
              Building
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
