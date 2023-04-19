import { connect } from "react-redux";
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

const mapStateToProps = (state: State) => ({
  value: state.count,
});

const mapDispatchToProps = { increment, decrement };

export const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
