import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
} from 'react-native';

export function Input({ style, ...rest }: TextInputProps) {
  return <TextInput style={[styles.input, style]} {...rest}></TextInput>;
}

const styles = StyleSheet.create({
  input: {
    height: 54,
    backgroundColor: '#E4ECF3',
    borderRadius: 7,
    padding: 16,
  },
});
