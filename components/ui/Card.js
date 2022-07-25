import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Colors from '../../constatns/colors';

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
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
