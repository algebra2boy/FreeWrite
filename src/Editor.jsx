import ReactQuill from 'react-quill';
import { useEffect, useState } from 'react';
import { modules } from './EditorToolbar';

import './index.css'
import "react-quill/dist/quill.snow.css";
import { loadContent, saveContent } from './localForage';

const Editor = () => {

    const [value, setValue] = useState("");

    useEffect(() => {
        const load = async () => {
            const content = await loadContent();
            setValue(content);
        };
        load();
    }, []);

    useEffect(() => {
        const save = async () => await saveContent(value);
        setTimeout(save, 500); // Save every 500ms
    }, [value]);

    return (
        <ReactQuill
            theme='snow'
            value={value}
            modules={modules}
            onChange={setValue}
            placeholder='Write something creative...'
        ></ReactQuill>
    )
};


export default Editor;