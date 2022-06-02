import { useSelector } from 'react-redux';
import './App.css';
import Counter from './components/Counter';

function App() {

  const counters=useSelector(state=>state.counters)
  return (
    <div className="App">
      {counters.map(el=><Counter el={el} />)}
    </div>
  );
}

export default App;
