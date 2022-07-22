import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constatns/colors';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    // We need to use the wraper to make effect of borderRadius visible on iOS, because
    // when we use it on Text component it is shown only on Android
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.accent500,
    fontSize: 36,

    fontFamily: 'open-sans-bold',
  },
});
