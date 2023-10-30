import TodosContainer from './containers/TodosContainer';
import CounterContainer from './containers/CounterContainer';
import counter, {increase, decrease} from './modules/counter';

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr/>
      <TodosContainer />
    </div>
  );
}

export default App;
