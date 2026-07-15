import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        name: action.payload,
      };

    case "EMAIL":
      return {
        ...state,
        email: action.payload,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function FormHandling() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Form Handling using useReducer</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "NAME",
            payload: e.target.value,
          })
        }
      />
      <br />
      <br />

      <input
        type="email"
        placeholder="Enter Email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "EMAIL",
            payload: e.target.value,
          })
        }
      />

      <br />
      <br />
      <button onClick={() => dispatch({ type: "RESET" })}>
        Submit
      </button> 
      
      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
      

      <hr />

      <h3>Name: {state.name}</h3>
      <h3>Email: {state.email}</h3>
    </div>
  );
}

export default FormHandling;