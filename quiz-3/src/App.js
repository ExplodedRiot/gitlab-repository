import React from 'react';

const App = () => {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Quiz 3 | Muhammad Alif Ananda</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page">Home</a>
              </li>
              <li>
                <a href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Manage
                  Data</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Content Section */}
      <section className="bg-gray-200 p-5">
        <div className="container mx-auto mt-10">
          <h1 className="text-xl font-bold">Find your data that you need!</h1>
        </div>
        <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">
          {/* Card Section */}
          <div className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S1_2560x1440-73702d11161b29a0b7c40a8b489b1808?h=270&resize=1&w=480"
              className="w-1/3 bg-cover bg-center bg-landscape" />
            <div className="w-2/3 p-4">
              <h1 className="text-gray-900 font-bold text-2xl">Marvel's Spider-Man: Game of the Year Edition</h1>
              <small>2019</small>
              <p className="mt-2 text-gray-600 text-sm">Dalam event State of Play, Sony mengumumkan game Marvel's Spider-Man: Remastered akan meluncur pada 12 Agustus 2022.</p>
              <div className="item-center mt-2 text-gray-500">
                <span>FPS</span>
                <span>2GB</span>
                <span>, Android & Ios</span>
              </div>
              <div className="flex item-center justify-between mt-3">
                <h1 className="text-gray-700 font-bold text-xl">Rp 200.000</h1>
                <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">5 Ratings</button>
              </div>
            </div>
          </div>
          {/* End of Card Section */}
        </div>
      </section>
    </div>
  );
};

export default App;
