import { connect, useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { Component } from "react";

const Counter = () => {
  const counter = useSelector((state) => state.counter); //useSelector is to get data from redux store
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch(); // useDispatch is to dispatch an action to redux store so that reducer can execute.

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increse by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   incrementHandler = () => {
//     this.props.increment();
//   };

//   decrementHandler = () => {
//     this.props.decrement();
//   };

//   toggleCounterHandler = () => {};

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   //alternative to useSelector in class based component to get data from redux store
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   //alternative to useDispatch to dispatch an action to store
//   return {
//     increment: dispatch({ type: "increment" }),
//     decrement: dispatch({ type: "decrement" }),
//   };
// };

export default Counter; //this is how we do it with func components

// export default connect(mapStateToProps, mapDispatchToProps)(Counter); //this is how e do it with class based components, we use connect to connect component to redux store.
