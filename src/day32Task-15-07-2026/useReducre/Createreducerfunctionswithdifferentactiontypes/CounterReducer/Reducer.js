
export const initialState = {
  count: 0,
};

export function reducer(state, action) {
  switch (action.type) {

    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    case "RESET":
      return {
        ...state,
        count: 0,
      };

    case "INCREMENT_BY_VALUE":
      return {
        ...state,
        count: state.count + action.payload,
      };

    case "DECREMENT_BY_VALUE":
      return {
        ...state,
        count: state.count - action.payload,
      };

    default:
      return state;
  }
}
export default initialState;