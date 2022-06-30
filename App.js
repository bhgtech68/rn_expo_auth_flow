import * as React from "react";
// import { Button, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { SplashScreen, HomeScreen, SignInScreen, ProfileScreen } from "./src";
import { AuthContext } from "./src/authContext";
import { authState, authReducer } from "./src/authReducer";
import { authContextValue } from "./src/authContext";

const Stack = createStackNavigator();

export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(authReducer, authState);

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync("userToken");
        userToken = "TOKEN_BOOTSTRAP_SUCCESS";
      } catch (e) {
        // Restoring token failed
        userToken = "TOKEN_BOOTSTRAP_FAILED";
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      setTimeout(() => {
        // dispatch({ type: "RESTORE_TOKEN", token: userToken });
        dispatch({ type: "RESTORE_TOKEN", token: null });
      }, 2000);
    };

    bootstrapAsync();
  }, []);

  const value = React.useMemo(() => {
    const store = {
      userToken: state.userToken,
    };
    return authContextValue(store, dispatch);
  }, [state.userToken]);

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <AuthContext.Provider value={value}>
          <NavigationContainer>
            <Stack.Navigator>
              {state.isLoading ? (
                // We haven't finished checking for the token yet
                <Stack.Screen name="Splash" component={SplashScreen} />
              ) : state.userToken == null ? (
                // No token found, user isn't signed in
                <Stack.Screen
                  name="SignIn"
                  component={SignInScreen}
                  options={{
                    title: "Sign in",
                    // When logging out, a pop animation feels intuitive
                    animationTypeForReplace: state.isSignout ? "pop" : "push",
                  }}
                />
              ) : (
                // User is signed in
                <>
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="Profile" component={ProfileScreen} />
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </AuthContext.Provider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
