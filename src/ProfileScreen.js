import * as React from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import { AuthContext } from "./utils";

export function ProfileScreen({navigation}) {
  const { userToken } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Profile with token:: {userToken}</Text>
      <Button title='Go Back' onPress={()=>{navigation.goBack()}}/>
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
