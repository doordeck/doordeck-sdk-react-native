// App.tsx

import {Button, SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {
  initDoordeck,
  showUnlock,
  unlockTileID,
} from '@doordeck/react-native-doordeck-sdk';

let token = '(Add your token here)';
initDoordeck(token);

const App: React.FC = () => {
  const [uuid, setUuid] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Unlock"
          onPress={() => {
            showUnlock(false);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={uuid}
          onChangeText={setUuid}
          placeholder="Enter tile ID (UUID)"
          keyboardType="default"
        />
        <Button
          title="Submit"
          onPress={() => {
            unlockTileID(uuid);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
  },
});

export default App;
