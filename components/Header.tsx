import Link from "next/link";
import NavMenu from "@/components/NavMenu";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:justify-start sm:gap-8">
          <Link href="/" className="flex items-center gap-3">
            <svg
              className="h-10 w-10 fill-slate-900 dark:fill-slate-500 dark:hover:fill-red-500"
              viewBox="0 0 1400 1400"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M749.749,664.096l-87.914,87.914l87.914,87.914l87.914,-87.914l-87.914,-87.914Z" />
                <rect
                  x="624.024"
                  y="448.444"
                  width="249.044"
                  height="123.615"
                />
                <path d="M563.367,19.685l371.289,0l-59.81,368.582l-249.3,-0l-62.179,-368.582Z" />
                <path d="M861.191,1033.59l176.101,-176.1l-87.409,-87.409l-176.101,176.101l87.409,87.408Z" />
                <path d="M1383.36,1117.77l-262.541,262.541l-218.335,-302.919l176.281,-176.281l304.595,216.659Z" />
                <path d="M445.398,647.953l-0,249.044l123.614,0l0,-249.044l-123.614,-0Z" />
                <path d="M16.638,957.654l0,-371.289l368.582,59.81l0,249.3l-368.582,62.179Z" />
              </g>
            </svg>
            <span className="text-xl font-black transition-colors">
              Rust Meta
            </span>
          </Link>
          <NavMenu />
        </div>
      </header>
    </>
  );
}
