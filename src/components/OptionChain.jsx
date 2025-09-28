// src/components/OptionChain.jsx
const strikes = [26700, 26750, 26800, 26850, 26900];

export default function OptionChain({ addTrade }) {
  return (
    <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow p-4">
      <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
        📈 Option Chain
      </h2>
      <div className="space-y-2">
        {strikes.map((strike) => (
          <div
            key={strike}
            className="flex justify-between items-center bg-white rounded-md shadow px-3 py-2 hover:bg-indigo-50 cursor-pointer"
            onClick={() => addTrade(`BUY NIFTY ${strike} CE`)}
          >
            <span>Strike {strike}</span>
            <span className="text-indigo-600 font-medium">Call / Put</span>
          </div>
        ))}
      </div>
    </div>
  );
}
