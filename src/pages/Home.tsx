import Character from "components/Character";
import Search from "components/Search";
import { useEffect, useState } from "react";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const request = await fetch("https://rickandmortyapi.com/api/character");
      const { results } = await request.json();

      setCharacters(results);
    };

    getData();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="">
        <div className="flex flex-col text-center w-full my-20">
          <h1 className="text-5xl font-medium title-font mb-4 text-gray-900">
            Rick and Morty
          </h1>
        </div>
        <Search />
        <div className="bg-slate-700">
          <div className="container px-5 py-10 mx-auto flex flex-wrap ">
            {characters.length ? (
              characters.map((character: any) => (
                <Character key={character.id} character={character} />
              ))
            ) : (
              <div className="text-white">Loading...</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
