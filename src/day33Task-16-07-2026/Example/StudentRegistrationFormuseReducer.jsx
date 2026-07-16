import { useReducer } from "react";

const initialState = {
  name: "",
  course: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };

    case "COURSE":
      return { ...state, course: action.payload };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function Student() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Student Registration</h2>

      <input
        placeholder="Enter Name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "NAME",
            payload: e.target.value,
          })
        }
      />

      <br /><br />

      <input
        placeholder="Enter Course"
        value={state.course}
        onChange={(e) =>
          dispatch({
            type: "COURSE",
            payload: e.target.value,
          })
        }
      />

      <h3>Name: {state.name}</h3>
      <h3>Course: {state.course}</h3>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}

export default Student;