import buddy from './buddy.webp';
import './App.css';
import budgets from './AirBudgets.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={budgets} className="App-logo" alt="logo" />
        <p>
          the <del>dog</del> budget is in the house.
        </p>
        <img src={buddy} className="bud" alt="logo" />


        <p>thx NIMA for the photoshop</p>
        <p>thx BRYAN for the idea</p>
        <p>thx DAN A. for the tech</p>
      </header>
    </div>
  );
}

export default App;
