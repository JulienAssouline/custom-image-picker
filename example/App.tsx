import { StyleSheet, Text, View } from 'react-native';

import * as CustomImagePicker from 'custom-image-picker';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{CustomImagePicker.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
