import Counter from './components/Counter';
import SongList from './components/SongList';
import SongDisplay from './components/SongDisplay';

const App = () => {
  return (
    <div>
      <Counter />
      <div style={{
        display: "flex",
        justifyContent: "space-around"
      }}>
        <SongList />
        <SongDisplay />
      </div>
      
    </div>
  );
}

export default App;
