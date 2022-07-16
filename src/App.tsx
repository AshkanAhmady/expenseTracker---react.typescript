import "./App.css";
import ExpenceApp from "./Components/ExpenseApp";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1>Expense Tracker</h1>
        <ExpenceApp />
      </header>
    </div>
  );
}

export default App;
