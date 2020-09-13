import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../utils/colors';

const { width, height } = Dimensions.get('window');

export default function TouchButton({
  children,
  onPress,
  disabled = 'false'
}) {
  const disabledButton = disabled ? styles.btnDisabled : {};
  const disabledButtonText = disabled ? styles.btnTextDisabled : {};
  return (
    <View style={styles.btnContainer}>

      <TouchableOpacity 
        style={[styles.btn, disabledButton]}
        disabled={disabled}
        onPress={onPress}>
        <Text
          style={[
            styles.btnText,
            disabledButtonText
          ]}
        >
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  btn: {
    width: '90%',
    height: 50,
    backgroundColor: colors.primaryPurple,
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDisabled: {
    backgroundColor: colors.disabledPurple,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primaryWhite,
    padding: 5
  },
  btnTextDisabled: {
    color: colors.primaryWhite
  }
});
