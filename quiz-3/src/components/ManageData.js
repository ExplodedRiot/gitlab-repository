import React from 'react';
import GameForm from './GameForm';
import GameList from './GameList';

const ManageData = ({ addGame, updateGame, games, currentGame, setCurrentGame, deleteGame }) => {
  return (
    <div>
      <GameForm 
        addGame={addGame} 
        updateGame={updateGame} 
        currentGame={currentGame} 
        setCurrentGame={setCurrentGame} 
      />
      
      <GameList 
        games={games} 
        setCurrentGame={setCurrentGame} 
        deleteGame={deleteGame} 
      />
    </div>
  );
};

export default ManageData;
