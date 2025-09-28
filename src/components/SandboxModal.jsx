// src/components/SandboxModal.jsx
import { useEffect, useState } from "react";

export default function SandboxModal({ show, onClose }) {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    if (show) {
      setLogs([]);
      let counter = 0;
      const interval = setInterval(() => {
        counter++;
        setLogs((prev) => [
          ...prev,
          `Executed trade #${counter}: BUY NIFTY 27000 CE @ ₹${145 + counter}`,
        ]);
        if (counter === 5) clearInterval(interval);
      }, 1200);
      return () => clearInterval(interval);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[28rem]">
        <h2 className="text-xl font-bold mb-4 text-center">🧪 Sandbox Execution</h2>
        <div className="bg-gray-100 rounded-md p-3 h-48 overflow-y-auto text-sm font-mono">
          {logs.length === 0 ? (
            <div className="text-gray-500">Starting simulation...</div>
          ) : (
            logs.map((log, idx) => (
              <div key={idx} className="mb-1">{log}</div>
            ))
          )}
        </div>
        <button
          onClick={onClose}
          className="mt-5 w-full px-4 py-2 rounded-lg bg-teal-600 text-white font-bold shadow hover:bg-teal-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
