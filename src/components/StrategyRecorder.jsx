// src/components/StrategyRecorder.jsx
export default function StrategyRecorder({ trades, removeTrade }) {
  return (
    <div className="flex-1 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl shadow p-4">
      <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
        📝 Strategy Recorder
      </h2>
      <div className="space-y-2">
        {trades.length === 0 ? (
          <div className="text-gray-500">No trades recorded yet.</div>
        ) : (
          trades.map((t, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-white rounded-md shadow px-3 py-2 hover:bg-violet-50"
            >
              <span>{t}</span>
              <button
                className="text-red-500 font-bold hover:text-red-700"
                onClick={() => removeTrade(idx)}
              >
                ❌
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
