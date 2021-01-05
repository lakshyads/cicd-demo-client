import { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [data, setData] = useState('backend is not connected');

  useEffect(() => {
    const url = 'https://cicd-backend.herokuapp.com/';
    Axios.get(url)
      .then((response) => {
        // console.log(response);
        setData(response.data);
      })
      .catch((err) => {
        setData('error from backend: ' + err.message);
      });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          cicd-demo-frontend
        </a>
        <p>Message from backend: {data}</p>
      </header>
    </div>
  );
}

export default App;
