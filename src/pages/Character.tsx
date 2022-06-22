import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Character = () => {
  let { id } = useParams();
  const [character, setCharacter] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const request = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const result = await request.json();

      setCharacter(result);
    };

    getData();
  }, [id]);

  return (
    <div className="bg-slate-700 w-full py-10 px-10">
      {character ? (
        <div>
          <div className="sm:flex space-x-7 md:items-start items-center">
            <div className="mb-4">
              <img
                className="rounded-md md:w-80"
                src={character.image}
                alt="character"
              />
            </div>
            <div>
              <h1 className="text-slate-100 text-4xl font-bold my-2">
                {character.name}
              </h1>
              <div>
                <div className="mt-8 sm:grid grid-cols-3 sm:space-x-4">
                  <div className="bg-slate-600 p-6 rounded-md mb-4">
                    <span className="text-slate-400 text-md">Location</span>
                    <h2 className="text-slate-100 text-2xl font-semibold">
                      {character.location.name}
                    </h2>
                  </div>
                  <div className="bg-slate-600 p-6 rounded-md mb-4">
                    <span className="text-slate-400 text-md">Gender</span>
                    <h2 className="text-slate-100 text-2xl font-semibold">
                      {character.gender}
                    </h2>
                  </div>
                  <div className="bg-slate-600 p-6 rounded-md mb-4">
                    <span className="text-slate-400 text-md">Species</span>
                    <h2 className="text-slate-100 text-2xl font-semibold">
                      {character.species}
                    </h2>
                  </div>
                </div>
                <div className="sm:grid lg:grid-cols-4 grid-cols-2 sm:gap-x-4">
                  <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
                    <div>
                      <span className="text-md text-slate-400">Status</span>
                      <h1 className="text-3xl font-bold text-slate-100">
                        {character.status}
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
                    <div>
                      <span className="text-md text-slate-400">Episodes</span>
                      <h1 className="text-3xl font-bold text-slate-100">
                        {character.episode.length}
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
                    <div>
                      <span className="text-md text-slate-400">Origin</span>
                      <h1 className="text-3xl font-bold text-slate-100">
                        {character.origin.name}
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
                    <div>
                      <span className="text-md text-slate-400">Type</span>
                      <h1 className="text-3xl font-bold text-slate-100">
                        {character.type}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <Link to={"/"}>
                <button className="border-2 bg-white px-6 py-4 rounded-md hover:opacity-80 text-gray-900  transition duration-75">
                  BACK
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white">Loading...</div>
      )}
    </div>
  );
};

export default Character;
