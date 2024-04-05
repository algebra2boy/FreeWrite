import './App.css';
import Editor from './Editor';

function App() {

  return (
    <div className='flex flex-col items-center justify-center text-center p-5 gap-5'>
      <h1 className='text-xl font-bold'>Free Write</h1>
      <div className="text-sm text-gray-600">
        <p>To use rich text features, select the text you wish to format and choose an option from the toolbar.</p>
        <p>To undo, press Ctrl + Z (Cmd + Z on macOS).</p>
      </div>
      <Editor />
    </div>

  );
}

export default App;
