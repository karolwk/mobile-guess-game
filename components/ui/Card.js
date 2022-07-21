import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../constatns/colors';

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 60,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Equivalent to boxshadow, works only on Android

    //Only for iOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
