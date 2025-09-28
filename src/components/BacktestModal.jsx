// src/components/BacktestModal.jsx
export default function BacktestModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4 text-center">📊 Backtest Results</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Net Profit</span>
            <span className="font-semibold text-green-600">+7.2%</span>
          </div>
          <div className="flex justify-between">
            <span>Max Drawdown</span>
            <span className="font-semibold text-red-500">-3.1%</span>
          </div>
          <div className="flex justify-between">
            <span>Win Rate</span>
            <span className="font-semibold">62%</span>
          </div>
          <div className="flex justify-between">
            <span>Trades Taken</span>
            <span className="font-semibold">24</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-5 w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-bold shadow hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
