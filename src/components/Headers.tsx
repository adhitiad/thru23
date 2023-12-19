import Link from "next/link";
import React from "react";

/**
 *  buat header di layout page yang menggunakan tailwind seperti navbar dan sidebar
 * @returns
 */
export default function Headers() {
  return (
    <>
      <header className="bg-slate-300 p-4 shadow">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-black">
            React Tailwind Sidebar
          </h1>
        </div>
      </header>
    </>
  );
}
