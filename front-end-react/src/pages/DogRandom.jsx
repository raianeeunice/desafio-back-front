import { useState } from "react";
import { RandomDogAPI } from "../utils/axios";

import Loading from "../components/loading/Loading"

export default function DogRandom() {
  const [dogRandom, setDogRandom] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadRandomDog() {
    setLoading(true);
    const res = await RandomDogAPI.get(
      "https://random.dog/woof.json?include=jpg,gif"
    );
    setDogRandom(res.data.url);
    setLoading(false);
  }

  return (
    <section className="container my-24 px-6 mx-auto mb-32 text-center">
      <h2 className="text-3xl text-white font-bold mb-12 pb-4 text-center">
        Random Dog API
      </h2>

      <div className="max-w-lg mx-auto">
        <div className="relative block bg-neutral-800 rounded-lg shadow-lg">
          <div className="flex justify-center">
            <Loading loading={loading} loadingStyle="mt-5">
              <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4">
                {dogRandom && (
                  <img src={dogRandom} className="max-h-[400px]" alt="" />
                )}
              </div>
            </Loading>
          </div>
          <div className="p-6">
            <p className="font-bold text-lg mb-3 text-white">Doguinho</p>
            <p className="mb-4 pb-2 text-white">
              Estudos recentes comprovam que ver um doguinho melhora seu dia em
              100%.
            </p>
            <button
              onClick={() => loadRandomDog()}
              className="inline-block px-6 py-2.5 bg-white text-neutal-800 font-medium text-sm leading-tight uppercase rounded-full shadow-md hover:bg-neutral-500 hover:shadow-lg focus:outline-none transition duration-150 ease-in-out"
            >
              <i class="bi bi-arrow-clockwise"></i> Refresh
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
