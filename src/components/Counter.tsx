import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { increment, decrement } from "../state/counter/counterSlice";
// useSelector access the store state.

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};
