import dynamic from "next/dynamic";
import { EditorState, convertToRaw } from "draft-js";
import { useState } from "react";
import styles from "./Editor.module.scss";

let htmlToDraft = null;
if (typeof window === "object") {
    htmlToDraft = require("html-to-draftjs").default;
}

const Editor = dynamic(
    () => import("react-draft-wysiwyg").then(mod => mod.Editor),
    { ssr: false }
);

export const ContentEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const handleEditorChange = data => {
        setEditorState(data);
    };

    return (
        <div>
            <Editor onEditorStateChange={handleEditorChange} />
            {/* <textarea */}
            {/*    disabled */}
            {/*    value={htmlToDraft( */}
            {/*        convertToRaw(editorState.getCurrentContent()) */}
            {/*    )} */}
            {/* /> */}
        </div>
    );
};
