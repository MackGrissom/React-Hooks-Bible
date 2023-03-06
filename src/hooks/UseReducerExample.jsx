import React from 'react'

const UseReducerExample = () => {

  const reducer = (state, actions) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1, showText: state.showText }
      case "toggleShowText":
        return { count: state.count, showText: !state.showText }
      default:
        return state
    }}

    const [state, dispatch] = useReducer(reducer,
      { count: 0, showText: true })

    return (
      <div>
        <h1> {state.count}</h1>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT"});
            dispatch({ type: "toggleShowText"});
          }}>
          Click Here

        </button>
        {state.showText && <p> This is text </p>}
      </div>
    );
  };

export default UseReducerExample