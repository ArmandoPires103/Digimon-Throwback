import DigimonHeader from './Components/DigimonHeader'
import DigimonHome from './Components/DigimonHome';
import './App.css'

function App() {
  return (
    <div className="App">
      {/* Render the DigimonHeader */}
      <DigimonHeader />
      <DigimonHome />

      {/* Other components go here */}
      {/* <main>
        <h2>Welcome to the Digital World!</h2>
        <p>Explore, battle, and discover your favorite Digimon.</p>
      </main> */}
    </div>
  );
}

export default App;
