// src/components/AlgoModal.jsx
import { useState } from "react";
import BacktestModal from "./BacktestModal";
import SandboxModal from "./SandboxModal";
import GoLiveModal from "./GoLiveModal";

export default function AlgoModal() {
  const [rule, setRule] = useState("Exit if Profit > 10% OR Loss > 5%");
  const [showBacktest, setShowBacktest] = useState(false);
  const [showSandbox, setShowSandbox] = useState(false);
  const [showGoLive, setShowGoLive] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-orange-50 to-yellow-100 border-t shadow p-4 flex justify-between items-center">
        <input
          value={rule}
          onChange={(e) => setRule(e.target.value)}
          className="flex-1 mr-4 px-3 py-2 rounded-md border border-gray-300 text-sm"
        />
        <div className="flex gap-3">
          <button
            onClick={() => setShowBacktest(true)}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-bold shadow hover:bg-blue-700"
          >
            ▶ Backtest
          </button>
          <button
            onClick={() => setShowSandbox(true)}
            className="px-4 py-2 rounded-lg bg-teal-600 text-white font-bold shadow hover:bg-teal-700"
          >
            ▶ Sandbox
          </button>
          <button
            onClick={() => setShowGoLive(true)}
            className="px-4 py-2 rounded-lg bg-green-600 text-white font-bold shadow hover:bg-green-700"
          >
            ▶ Go Live
          </button>
        </div>
      </div>

      <BacktestModal show={showBacktest} onClose={() => setShowBacktest(false)} />
      <SandboxModal show={showSandbox} onClose={() => setShowSandbox(false)} />
      <GoLiveModal show={showGoLive} onClose={() => setShowGoLive(false)} />
    </>
  );
}
