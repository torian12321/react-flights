import React, { useEffect } from 'react';
import { Props, State } from './App.interfaces';
// import logo from './logo.svg';
// import './App.css';

const App: React.FunctionComponent<Props & State> = ({ onLoad }) => {
  useEffect(() => {
    onLoad && onLoad();
  }, [onLoad]);

  return (
    <div className="App">
      my page ocntent
    </div>
  );
}

export default App;
