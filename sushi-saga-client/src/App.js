import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

const App = () => {
  const [sushis, setSushis] = useState([]);
  const [money, setMoney] = useState(300);
  const [sushiIdx, setSushiIdx] = useState(0);
  const [eatenSushi, setEatenSushi] = useState([]);

  console.log(money)

  useEffect(() => {
    const getSushis = async () => {
      const res = await axios.get(API);
      setSushis(res.data);
    };
    getSushis();
  }, []);

  const onMoreClick = () => {
    setSushiIdx(sushiIdx + 4);
  };

  const onSushiClick = id => {
    const ateSushi = sushis.find(s => s.id === id);
    setMoney(money - ateSushi.price)
    setEatenSushi([...eatenSushi, ateSushi]);
  }

  const getNextSushis = () => {
    return sushis.slice(sushiIdx, sushiIdx + 4)
  };

  return (
    <div className="app">
      <SushiContainer
        sushis={getNextSushis()}
        onMoreClick={onMoreClick}
        onSushiClick={onSushiClick}
      />
      <Table
        money={money}
        plates={eatenSushi}
      />
    </div>
  );
};

export default App;