import React from "react";
import axios from "axios";
import "dotenv/config";

interface ICategory {
  id: number;
  name: string;
  description: string;
}

const api = process.env.API;

async function getData() {
  const res = await axios
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
  return res;
}

export default async function page() {
  const res: ICategory[] = await getData();
  return (
    <>
      <div className="w-full justify-center items-center">
        <h1 className="text-3xl font-bold">Kasir</h1>
        <div className="grid grid-cols-5 gap-4 ">
          {res?.map((item: any) => (
            <div key={item.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Tambah +</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* buat kasir sekarang disini di footer */}

        <div className="footer footer-center p-4 bg-base-300 text-base-content rounded">
          <div className="grid grid-flow-col gap-4">
            <p>jumlah item</p>
            <p>total bayar</p>
          </div>
        </div>

        <div className=""></div>
      </div>
    </>
  );
}
