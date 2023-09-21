import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src2/redux/Store';
import Hello2 from './src/Hello2';
// import store from './src/Store';
// import Herllo from './src/Herllo';

const App = () => {
  return (
    <Provider store={store}>
      <Hello2 />
    </Provider>
  );
};

export default App;
