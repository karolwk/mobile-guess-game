import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log('Pressed!');
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={pressHandler}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
  },

  buttonInnerContainer: {
    backgroundColor: '#72063c',

    paddingVertical: 8,
    paddingHorizontal: 16,

    // android
    elevation: 2,
  },

  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});

export default PrimaryButton;
