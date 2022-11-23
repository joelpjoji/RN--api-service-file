import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import api from './src/api';

const App = () => {

  const {isLoading, data, error} = api();
  console.log(data)

  return (
    <SafeAreaView>
      <Text>Hello</Text>
      <FlatList 
      data={data}
      renderItem={({item})=>(
        <View>
          <Text>{item.properties.title}</Text>
        </View>
      )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
