import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import AddToHomescreen from 'react-add-to-homescreen';

function connectInsta() {
  alert('lets connect to insta');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="primary btn-lg" onClick={() => connectInsta()}>Connect to Instagram</Button>
        <form>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="customFile" />
            <label class="custom-file-label" for="customFile">Choose file</label>
          </div>
        </form>
        <Button variant="primary btn-lg">Start Screen Recording</Button>
        <Button variant="primary btn-lg">Stop Screen Recording</Button>
      </header>
      <AddToHomescreen title="Download Hiomi Kids"></AddToHomescreen>
    </div>
      );
}

    export default App;
