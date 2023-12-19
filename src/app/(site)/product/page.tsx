import React from "react";
import Video from "@/components/Video";

const page = () => {
  return (
    <>
      <div className="w-full justify-center items-center">
        <div className="grid grid-cols-5 gap-4">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Video />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
