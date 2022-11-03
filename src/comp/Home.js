import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
  const change = (e) => {
    setText(e.target.value);
  };

  const ToUpperCase = () => {
    const newText = text.toUpperCase();
    setText(newText.trim());
    toast.success(`Uppercase`);
  };
  const ToLowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText.trim());
    toast.success(`Lowercase`);
  };
  const ToCapital = () => {
    const newText = text.replace(/\b./g, (e) => e.toUpperCase());
    const newtext = newText.replace(/\B./g, (s) => s.toLowerCase());
    setText(newtext.trim());
    toast.success(`Capital`);
  };
  const removeExtraSpace = () => {
    const newText = text.replace(/\s+/g, " ");
    setText(newText.trim());
    toast.success(`Extra Spaces Removed`);
  };
  const Clear = () => {
    setText("");
    toast.success(`Clear Text`);
  };
  const copyClipboard = () => {
    var copyText = document.getElementById("text");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  toast.success(`Copied the text`);
  };

  const [text, setText] = useState("");

  return (
    <div className="textedit">
       <ToastContainer  position="top-center" autoClose={2000} />
        <div className="toolArea">
            <h1 style={{ margin: "20px" }}>Home</h1>
    
            <textarea name="textarea" id="text" onChange={change} value={text} placeholder="Enter here your text"></textarea>
    
            <div className="btn">
                <button onClick={ToUpperCase}>UpperCase</button>
                <button onClick={ToLowerCase}>LowerCase</button>
                <button onClick={ToCapital}>Capitalization </button>
                <button onClick={removeExtraSpace}>Remove Extra Space </button>
                <button onClick={copyClipboard}>Copy Text </button>
                <button onClick={Clear}>Clear </button>
            </div><br />
            <div className="preview">

            <h3>Total Words - {text && text.split(" ").length}</h3>
            <h3>Totla Character - {text && text.length}</h3>
            <h3>Totla Sentence - {text && text.split('. ').length}</h3>
            <h2>Preview</h2>
            <p>{text}</p>
            </div>

        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
  );
}

export default Home;
