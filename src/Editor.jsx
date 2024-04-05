import ReactQuill from 'react-quill';
import { useState } from 'react';
import { modules } from './EditorToolbar';

import './index.css'
import "react-quill/dist/quill.snow.css";

const Editor = () => {

    const [value, setValue] = useState("");

    return (
        <ReactQuill
            className='text-editor'
            theme='snow'
            value={value}
            modules={modules}
            setValue={setValue}
            placeholder='Write something creative...'
        ></ReactQuill>
    )
};


export default Editor;