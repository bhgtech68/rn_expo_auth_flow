import * as React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { AuthContext } from "./utils";

export function SignInScreen() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.txtInput}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.txtInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txtInput: {
    height: 50,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 5,
  },
});
