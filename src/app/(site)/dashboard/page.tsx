import React from "react";

export default function page() {
  return (
    <>
      <div className="w-full justify-center items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="grid grid-cols-5 gap-4 ">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
