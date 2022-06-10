import buddy from './buddy.webp';
import './App.css';
import budgets from './AirBudgets.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={budgets} className="App-logo" alt="logo" />
        <img src={buddy} className="bud" alt="logo" />
      </header>
    </div>
  );
}

export default App;
