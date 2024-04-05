import './App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';

function App() {

  const [value, setValue] = useState("");

  return (
    <>
      <div>
        <h1>My editor</h1>
      </div>
      <ReactQuill theme='snow' value={value} setValue={setValue}></ReactQuill>
    </>

  );
}

export default App;
