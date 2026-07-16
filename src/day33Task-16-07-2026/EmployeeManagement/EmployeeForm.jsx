import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeeSlice";

const initialState = {
  id: "",
  name: "",
  department: "",
};

function reducer(state, action) {
  switch (action.type) {

    case "ID":
      return {
        ...state,
        id: action.payload,
      };

    case "NAME":
      return {
        ...state,
        name: action.payload,
      };

    case "DEPARTMENT":
      return {
        ...state,
        department: action.payload,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function EmployeeForm() {

  const dispatchRedux = useDispatch();

  const [state, dispatch] =
    useReducer(reducer, initialState);

  const submit = () => {

    dispatchRedux(addEmployee(state));

    dispatch({ type: "RESET" });
  };

  return (
    <>
      <input
        placeholder="ID"
        value={state.id}
        onChange={(e) =>
          dispatch({
            type: "ID",
            payload: e.target.value,
          })
        }
      />

      <input
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "NAME",
            payload: e.target.value,
          })
        }
      />

      <input
        placeholder="Department"
        value={state.department}
        onChange={(e) =>
          dispatch({
            type: "DEPARTMENT",
            payload: e.target.value,
          })
        }
      />

      <button onClick={submit}>
        Add Employee
      </button>
    </>
  );
}

export default EmployeeForm;