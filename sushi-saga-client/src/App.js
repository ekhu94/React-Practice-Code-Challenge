import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

const App = () => {
  const [sushis, setSushis] = useState([]);

  useEffect(() => {
    const getSushis = async () => {
      const res = await axios.get(API);
      setSushis(res.data);
    };
    getSushis();
  }, []);

  return (
    <div className="app">
      <SushiContainer sushis={sushis} />
      <Table />
    </div>
  );
};

export default App;