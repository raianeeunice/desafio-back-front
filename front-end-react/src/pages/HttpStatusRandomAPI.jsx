import { useState } from "react";

import Search from "../components/search/Search";

export default function HttpStatusRandom() {
  const [codeStatus, setCodeStatus] = useState(200);

  const loadStatusCat = (codeStatus) => {
    setCodeStatus(codeStatus);
  };

  return (
    <div className="container my-24 px-6 mx-auto space-y-12">
      <h2 className="text-3xl text-white font-bold mb-12 pb-4 text-center">
        Http Status Cat
      </h2>

      <Search dataSearch={loadStatusCat} />

      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-neutral-800 flex justify-center items-center p-4">
          <img
            className="rounded-lg h-full"
            src={`https://http.cat/${codeStatus}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
