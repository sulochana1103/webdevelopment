export const initialState = {
  email: "",
  password: "",
  loading: false,
  success: "",
  error: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case "EMAIL":
      return {
        ...state,
        email: action.payload,
      };

    case "PASSWORD":
      return {
        ...state,
        password: action.payload,
      };

    case "LOGIN_START":
      return {
        ...state,
        loading: true,
        error: "",
        success: "",
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Login Successful!",
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}