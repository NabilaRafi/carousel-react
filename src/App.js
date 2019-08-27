import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import './App.css';
import CarouselComponent from './components/carouselContainer';

const store = configureStore;

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <h1 className="app-heading" >Carousel Test</h1>
          <CarouselComponent />
        </Provider>
    </div>
  );
}

export default App;
