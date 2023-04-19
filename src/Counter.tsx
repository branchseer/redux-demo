import { connect } from "react-redux";
import { State, decrement, increment } from "./reducer";

export function Counter(props: {
  value: number;
  increment: () => void;
  decrement: () => void;
}) {
  return (
    <div>
      <button onClick={props.decrement}>-</button>
      <span> {props.value} </span>
      <button onClick={props.increment}>+</button>
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
