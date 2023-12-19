import React from "react";
import axios from "axios";

interface ICategory {
  id: number;
  name: string;
  description: string;
  image: string;
}

const api = process.env.API;

const page = async () => {
  const res: ICategory[] = await axios
    .get(`${api}api/categories`, {
      headers: {
        "Content-Type": ["application/json"],
        Accept: ["application/json"],
      },
    })
    .then((res: any) => {
      return res.data;
    })
    .catch((err: any) => {
      console.log(err.message);
    });

  return (
    <>
      <div className="w-full justify-center items-center">
        <h1 className="text-3xl font-bold">Category</h1>
        <div className="grid grid-cols-5 gap-4 ">
          {res?.map((item: any) => (
            <div key={item.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
