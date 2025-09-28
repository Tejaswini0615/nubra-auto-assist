# Nubra Auto-Assist (Product Intern Project)

This project is a prototype feature module designed for Nubra’s trading platform.  
It demonstrates how manual traders can transition smoothly into algo-trading.

---

## 🔗 Live Demo
[https://auto-assist-48lfseif5-tejaswinis-projects-3f887d61.vercel.app](https://auto-assist-48lfseif5-tejaswinis-projects-3f887d61.vercel.app)

---

## 🛠️ Tech Stack
- React (Vite)
- TailwindCSS
- Vercel (deployment)

---

## 📂 Project Structure

auto-assist-ui/
├─ src/
│ ├─ components/ # UI components (modals, option chain, recorder)
│ ├─ App.jsx # Root app
│ └─ main.jsx # Entry point
├─ package.json
├─ index.html
└─ README.md


---

## 🌟 Features
- **Option Chain** → Click strikes to record trades  
- **Strategy Recorder** → View and manage recorded trades  
- **Backtest** → View simulated PnL, drawdown, and win-rate in a results popup  
- **Sandbox** → Watch trades stream in live as a simulation  
- **Go Live** → Prompts broker API connection for real deployment  

---

## 🚀 Running Locally
1. Clone this project or extract the zip  
2. Open the folder in VS Code  
3. Install dependencies:  
   ```bash
   npm install
4. Start the development server:

npm run dev


The app runs at http://localhost:5173/

🌐 Deployment

Deploy easily using Vercel
:

npm i -g vercel
vercel --prod

📖 Notes

This is a UI/UX prototype only — no real market data or broker APIs are integrated.
The goal is to demonstrate a smooth flow from manual trades → strategy → testing → automation.

