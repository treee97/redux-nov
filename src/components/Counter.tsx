import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../state/store";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "../state/counter/counterSlice";
// useSelector access the store state.

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  // AppDispatch is needed for async actions.

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment by Amount
        </button>
        <button onClick={() => dispatch(incrementAsync(10))}>
          Increment by Amount Asynchronously
        </button>
      </div>
    </div>
  );
};
