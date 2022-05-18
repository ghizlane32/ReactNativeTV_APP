import React from 'react';
import { View, StyleSheet, Text } from "react-native";



const App = () => {
  return (
        <View style={styles.app}>
          <Text>Demo</Text>
        </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'row',
  },
});
