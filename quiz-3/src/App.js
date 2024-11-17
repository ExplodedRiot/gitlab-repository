import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios'; 

import Home from './components/Home';
import ManageData from './components/ManageData';
import Navbar from './components/Navbar'; 

const App = () => {
  const [games, setGames] = useState([]);
  const [currentGame, setCurrentGame] = useState(null);

  useEffect(() => {
    axios.get('https://backendexample.sanbercloud.com/api/mobile-apps')
      .then(response => {
        setGames(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the games data!', error);
      });
  }, []);

  const addGame = (game) => {
    axios.post('https://backendexample.sanbercloud.com/api/mobile-apps', game)
      .then(response => {
        setGames([...games, response.data]); 
      })
      .catch(error => {
        console.error('There was an error adding the game!', error);
      });
  };

  const updateGame = (updatedGame) => {
    axios.put(`https://backendexample.sanbercloud.com/api/mobile-apps/${updatedGame.id}`, updatedGame)
      .then(response => {
        const updatedGames = games.map(game =>
          game.id === updatedGame.id ? response.data : game
        );
        setGames(updatedGames); 
      })
      .catch(error => {
        console.error('There was an error updating the game!', error);
      });
  };

  const deleteGame = (id) => {
    axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${id}`)
      .then(response => {
        setGames(games.filter(game => game.id !== id)); 
      })
      .catch(error => {
        console.error('There was an error deleting the game!', error);
      });
  };

  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route 
            path="/manage-data" 
            element={
              <div className="container mx-auto p-4">
                <ManageData 
                  addGame={addGame} 
                  updateGame={updateGame} 
                  games={games}
                  currentGame={currentGame} 
                  setCurrentGame={setCurrentGame}
                  deleteGame={deleteGame}
                />
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
