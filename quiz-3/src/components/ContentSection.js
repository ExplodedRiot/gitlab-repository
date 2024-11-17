import React from 'react';

const ContentSection = () => {
  return (
    <section className="bg-gray-200 p-5">
      <div className="container mx-auto mt-10">
        <h1 className="text-xl font-bold">Find your data that you need!</h1>
      </div>

      <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">
        <div className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S1_2560x1440-73702d11161b29a0b7c40a8b489b1808?h=270&resize=1&w=480"
            alt="Marvel's Spider-Man Remastered"
            className="w-1/3 bg-cover bg-center bg-landscape"
          />
          <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-2xl">
              Marvel's Spider-Man: Game of the Year Edition
            </h1>
            <small>2019</small>
            <p className="mt-2 text-gray-600 text-sm">
              Dalam event State of Play, Sony mengumumkan game Marvel's Spider-Man: Remastered akan meluncur pada
              12 Agustus 2022.
            </p>
            <div className="item-center mt-2 text-gray-500">
              <span>FPS</span>
              <span>2GB</span>
              <span>, Android & Ios</span>
            </div>
            <div className="flex item-center justify-between mt-3">
              <h1 className="text-gray-700 font-bold text-xl">Rp 200.000</h1>
              <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                5 Ratings
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
