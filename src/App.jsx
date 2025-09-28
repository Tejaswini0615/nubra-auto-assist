// src/App.jsx
import { useState } from "react";
import OptionChain from "./components/OptionChain";
import StrategyRecorder from "./components/StrategyRecorder";
import AlgoModal from "./components/AlgoModal";

function App() {
  const [trades, setTrades] = useState([]);

  const addTrade = (trade) => setTrades([...trades, trade]);
  const removeTrade = (idx) =>
    setTrades(trades.filter((_, i) => i !== idx));

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 p-4 gap-4">
        <OptionChain addTrade={addTrade} />
        <StrategyRecorder trades={trades} removeTrade={removeTrade} />
      </div>
      <AlgoModal />
    </div>
  );
}

export default App;
