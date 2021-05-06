import React from "react";

const MarkdownInput = ({ onNoteChange, note, onSave }) => {
  /* const [content, setContent] = React.useState(note.content);
  const [title, setTitle] = React.useState(note.title);
 */
  const onContenChange = (event) => {
    /* setContent(event.target.value); */
    onNoteChange({ ...note, content: event.target.value });
  };

  const onTitleChange = (event) => {
    onNoteChange({ ...note, title: event.target.value });
    /*     setTitle(event.target.value);
     */
  };

  return (
    <>
      <div className="MarkdownInput">
        <input
          type="text"
          value={note.title}
          onChange={onTitleChange}
          className="form-control"
        />
        <textarea
          value={note.content}
          onChange={onContenChange}
          className="form-control"
        ></textarea>
        <button onClick={onSave}>Sauvegarder</button>
      </div>
    </>
  );
};

export default MarkdownInput;
