import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
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
    overflow: 'hidden',
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
  pressed: {
    // ripple effect for iOS
    opacity: 0.75,
  },
});

export default PrimaryButton;
