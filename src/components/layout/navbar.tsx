import { Beef } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-10 mx-auto flex h-16 w-full max-w-[1000px] content-center items-center rounded-b-3xl border-b bg-[#FF724C] px-4 text-white shadow-sm md:px-6">
        <Link className="mx-auto flex items-center gap-2" href="#">
          {/* <MountainIcon className="h-6 w-6" /> */}
          <Beef className="h-6 w-6" />
          <span className="text-lg font-semibold">Meal Recipes</span>
        </Link>
      </header>
    </>
  );
}

export default Navbar;
