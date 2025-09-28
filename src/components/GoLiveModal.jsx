// src/components/GoLiveModal.jsx
export default function GoLiveModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[26rem]">
        <h2 className="text-xl font-bold mb-4 text-center">⚠️ Go Live</h2>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          To execute live trades, please connect your broker API credentials
          (e.g., Zerodha, AngelOne, Upstox).  
          <br />
          This feature is restricted in the demo environment.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-lg bg-gray-300 text-gray-800 font-bold shadow hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            className="flex-1 px-4 py-2 rounded-lg bg-green-600 text-white font-bold shadow hover:bg-green-700"
          >
            Connect Broker
          </button>
        </div>
      </div>
    </div>
  );
}
