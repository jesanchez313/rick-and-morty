import { Link } from "react-router-dom";

const Character = ({ character }: any) => {
  return (
    <div key={character.id} className="lg:w-1/2 sm:w-1/2 p-4">
      <Link to={`/characters/${character.id}`}>
        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <img
              src={character.image}
              alt="tailwind logo"
              className="rounded-xl"
            />
          </div>
          <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <div className="flex justify-between item-center">
              <p className="text-gray-500 font-medium hidden md:block">
                {character.species}
              </p>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-gray-600 font-bold text-sm ml-1">
                  {character.episode.length}
                  <span className="text-gray-500 font-normal">(Episodes)</span>
                </p>
              </div>
              <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                {character.status}
              </div>
            </div>
            <h3 className="font-black text-gray-800 md:text-3xl text-xl">
              {character.name}
            </h3>
            <p className="md:text-lg text-gray-500 text-base">
              {character.location.name}
            </p>
            <p className="text-xl font-black text-gray-800">
              {character.gender}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Character;
