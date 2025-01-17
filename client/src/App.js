import React, { useState } from 'react';
import ttlogo from './components/images/ttlogo.png';
import TopTrumpsBox from './containers/TopTrumpsBox';

function App() {

  const [gameStarted, setGameStarted] = useState(false)
  const [aiDifficulty, setAiDifficulty] = useState(2)

  const handleStartGameButtonClick = () => {
    setGameStarted(true)
  }

  function chooseDifficulty(event) {
    setAiDifficulty(parseInt(event.target.value))
  }

  return (
    <>
      {gameStarted ? <TopTrumpsBox aiDifficulty={aiDifficulty} setGameStarted={setGameStarted} />
        :
        <main className="home-page">
          <img className="home-start-button" onClick={handleStartGameButtonClick} src={ttlogo} alt="" />
          
          <div className="custom-select" >
            <select className="select" onChange={chooseDifficulty} required>
              <option value="default" selected disabled>Select Difficulty</option>
              <option value={2}>Easy</option>
              <option value={1}>Moderate</option>
              <option value={0}>Hard</option>
            </select>
          </div>
        </main>}
    </>
  );
};

export default App;
