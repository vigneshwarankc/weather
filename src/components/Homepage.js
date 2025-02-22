// components/HomePage.js
import React, { useState, useEffect } from 'react';
import WeatherCard from './weathercard';

const HomePage = ({ username }) => {
  const [cardCount, setCardCount] = useState();
  const [cards, setCards] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem('cards')) || [];
    setCards(savedCards);
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem('cards', JSON.stringify(cards));
    }
  }, [cards]);

  const addCards = () => {
    const newCards = Array.from({ length: cardCount }, (_, i) => ({
      id: Date.now() + i,
    }));
    setCards([...cards, ...newCards]);
  };

  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const refreshPage = () => {
    localStorage.removeItem('cards');
    setCards([]);
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000); // Simulate refresh
  };

  return (
    <div className="home-container">
      <h1>Welcome, {username}</h1>
      <div className="controls">
        <input
          type="number"
          value={cardCount}
          onChange={(e) => setCardCount(Number(e.target.value))}
        />
        <button onClick={addCards}>Submit</button>
        <button onClick={refreshPage} disabled={refreshing}>
          {refreshing ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <WeatherCard
            key={card.id}
            id={card.id}
            username={username}
            onClose={removeCard}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
