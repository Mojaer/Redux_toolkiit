import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { decrease, increase, reset } from './Redux-service/Redux_action/Redux_action';

const App = () => {
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch()

  const handleButton = () => {
    dispatch(increase())
  }
  const handleDecrease = () => {
    dispatch(decrease())
  }
  const handleReset = () => {
    dispatch(reset())
  }
  return (
    <div>

      <h1>count : {count}</h1>
      <button onClick={handleButton}> increase</button>
      <button onClick={handleDecrease}> decrease</button>
      <button onClick={handleReset}> Reset</button>

    </div>
  );
};

export default App;