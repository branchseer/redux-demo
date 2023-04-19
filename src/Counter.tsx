import { useDispatch, useSelector } from "react-redux";
import { State, decrement, increment } from "./reducer";

export function Counter(props: {
  value: number;
  increment: (n: number) => void;
  decrement: (n: number) => void;
}) {
  return (
    <div>
      <button onClick={() => props.decrement(1)}>-</button>
      <span> {props.value} </span>
      <button onClick={() => props.increment(1)}>+</button>
    </div>
  );
}

export function ConnectedCounter() {
  const dispatch = useDispatch();
  const value = useSelector<State, number>((state) => state.count);
  return (
    <Counter
      value={value}
      increment={(n) => dispatch(increment(n))}
      decrement={(n) => dispatch(decrement(n))}
    />
  );
}
