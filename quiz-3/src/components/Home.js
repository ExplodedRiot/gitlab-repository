import React from 'react';

function Home() {
  const games = [
    {
      id: 1,
      name: "Marvel's Spider-Man: Game of the Year Edition",
      description: "Dalam event State of Play, Sony mengumumkan game Marvel's Spider-Man: Remastered akan meluncur pada 12 Agustus 2022.",
      category: "Action",
      size: 5000, 
      price: 200000, 
      rating: 5,
      platform: "PS5, PS4",
      image: "https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S1_2560x1440-73702d11161b29a0b7c40a8b489b1808?h=270&resize=1&w=480",
    },
    {
      id: 2,
      name: "The Witcher 3: Wild Hunt",
      description: "Game action RPG yang terkenal dengan dunia terbuka yang luas dan cerita yang mendalam.",
      category: "RPG",
      size: 15000, 
      price: 0, 
      rating: 4.5,
      platform: "PC, PS4, Xbox One, Switch",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/43/The_Witcher_3_Wild_Hunt_cover_art.jpg",
    },
  ];

  const convertSize = (sizeInMB) => {
    if (sizeInMB >= 1000) {
      const sizeInGB = (sizeInMB / 1000).toFixed(1);
      return `${sizeInGB} GB`;
    }
    return `${sizeInMB} MB`;
  };

  return (
    <section className="bg-gray-200 p-5">
      <div className="container mx-auto mt-10">
        <h1 className="text-xl font-bold">Find your data that you need!</h1>
      </div>

      <div className="container mx-auto mt-10 flex flex-wrap gap-10">
        {games.map((game) => (
          <div key={game.id} className="flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={game.image}
              alt={game.name}
              className="w-1/3 h-48 object-cover object-center"
            />

            <div className="w-2/3 p-4">
              <h1 className="text-gray-900 font-bold text-2xl">{game.name}</h1>
              <small className="text-gray-500">{game.category}</small>
              <p className="mt-2 text-gray-600 text-sm">{game.description}</p>
              <div className="mt-2 text-gray-500">
                <span>Size: {convertSize(game.size)}</span>
                <br />
                <span>Platform: {game.platform}</span>
              </div>

              <div className="flex items-center justify-between mt-3">
                <h1 className="text-gray-700 font-bold text-xl">
                  {game.price === 0 ? 'FREE' : `Rp ${game.price.toLocaleString()}`}
                </h1>
                <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                  {game.rating} Ratings
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
