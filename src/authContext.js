// process and dispatch function to update state, and store state

export const authContext = (store, dispatch) => ({
  signIn: async (data) => {
    // In a production app, we need to send some data (usually username, password) to server and get a token
    // We will also need to handle errors if sign in failed
    // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
    // In the example, we'll use a dummy token
    // console.log("signIn data::", data);
    dispatch({ type: "SIGN_IN", token: "TOKEN_DUMMY_FROM_SIGNIN" });
  },
  signOut: () => dispatch({ type: "SIGN_OUT" }),
  signUp: async (data) => {
    // In a production app, we need to send user data to server and get a token
    // We will also need to handle errors if sign up failed
    // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
    // In the example, we'll use a dummy token
    // console.log("signUp data::", data);
    dispatch({ type: "SIGN_IN", token: "TOKEN_DUMMY_FROM_SIGNUP" });
  },
  store
})