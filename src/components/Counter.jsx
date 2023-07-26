import { useDispatch, useSelector } from "react-redux";
import { decremented, incremented } from "../State Provider/CounterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="counter">
      <div className="counter__action-buttons">
        <button
          onClick={() => {
            dispatch(incremented());
          }}
        >
          Increment
        </button>
        <h3>Count {count}</h3>
        <button
          onClick={() => {
            dispatch(decremented());
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
