import Link from "next/link";
import NavMenu from "@/components/NavMenu";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
        <div className="container mx-auto flex h-16 items-center px-4">
          <div className="flex gap-8">
            <Link href="/" className="group flex items-center gap-3">
              <svg
                className="h-9 w-9 fill-slate-400 transition-colors group-hover:fill-rose-500"
                viewBox="0 0 5834 5834"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M3074.6,2701.86l-378.04,378.04l378.04,378.04l378.04,-378.04l-378.04,-378.04Z" />
                  <rect
                    x="2533.97"
                    y="1895.37"
                    width="1070.92"
                    height="531.558"
                  />
                  <path d="M2273.14,51.652l1596.59,-0l-257.189,1584.94l-1072.02,-0l-267.379,-1584.94Z" />
                  <path d="M3553.82,4290.71l757.254,-757.254l-375.868,-375.868l-757.254,757.254l375.868,375.868Z" />
                  <path d="M5799.21,4652.73l-1128.96,1128.96l-938.865,-1302.59l758.031,-758.03l1309.79,931.659Z" />
                  <path d="M1877.84,2550.46l0,1070.92l531.558,-0l0,-1070.92l-531.558,-0Z" />
                  <path d="M34.123,3882.21l-0,-1596.59l1584.94,257.189l-0,1072.02l-1584.94,267.379Z" />
                </g>
              </svg>
              <span className="text-xl font-black transition-colors group-hover:text-rose-500">
                Rust Meta
              </span>
            </Link>
            <NavMenu />
          </div>
        </div>
      </header>
    </>
  );
}
