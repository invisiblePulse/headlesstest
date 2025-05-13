import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to My Website</h1>
      </header>
      <main>
        <p>This is a simple React + TypeScript website.</p>
        <button onClick={() => alert('Hello!')}>Click Me</button>
      </main>
    </div>
  );
}

export default App;