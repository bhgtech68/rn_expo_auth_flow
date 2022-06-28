// import * as React from "react";
import React, { useState, useEffect } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import { AuthContext } from "./utils";

export function HomeScreen({ navigation }) {
  const { signOut, store } = React.useContext(AuthContext);
  console.log("Here iam in home screen::", store);
  let userToken = store.userToken;
  
  // React.useEffect(() => {
  //   // Fetch the token from storage then navigate to our appropriate place
  //   // const bootstrapAsync = async () => {
  //   //   try {
  //   //   } catch (e) {
  //   //     userToken = "TOKEN_HomeScreen_FAILED";
  //   //   }
  //   // };

  //   // bootstrapAsync();
  //   let token = getToken();
  //   console.log('Here I am 1', token);
  //   setUserToken(token);
  // }, []);

  return (
    <View style={styles.container}>
      <Text>Signed in with token:: {userToken}</Text>
      <Button
        title="Goto Profile"
        onPress={() => navigation.navigate("Profile")}
      ></Button>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
