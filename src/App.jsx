import "docs_editor_test/dist/index.css";
import { Editor } from "docs_editor_test/dist/index.js";
import { useState } from "react";

const initialValue = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Hello World 🚀",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
};

function App() {
  const [editorState, setEditorState] = useState(initialValue);
  const [htmlContent, setHtmlContent] = useState("");
  console.log("HTML Content:", htmlContent);
  return (
    <div className=" p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Editor</h2>
        <Editor
          editorSerializedState={editorState}
          onSerializedChange={(value) => setEditorState(value)}
          onHtmlChange={(html) => {
            console.log("HTML Content:", html);
            setHtmlContent(html);
          }}
        />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Rendered HTML Preview</h2>
        <div className="border rounded p-4 bg-white">
          <div
            className="max-w-none prose prose-slate"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
