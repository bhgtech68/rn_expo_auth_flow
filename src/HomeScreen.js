import * as React from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import { AuthContext } from "./utils";

export function HomeScreen({navigation}) {
  const { signOut, userToken } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Signed in with token:: {userToken}</Text>
      <Button title='Goto Profile' onPress={()=> navigation.navigate('Profile')}></Button>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
