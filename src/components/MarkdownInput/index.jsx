import React from "react";

const MarkdownInput = ({ onNoteChange, note, onSave }) => {
  const onContenChange = (event) => {
    onNoteChange({ ...note, content: event.target.value });
  };

  const onTitleChange = (event) => {
    onNoteChange({ ...note, title: event.target.value });
  };

  return (
    <>
      <div className="MarkdownInput px-4 py-2">
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
        <div className="d-flex justify-content-center m-0 p-0">
          <button onClick={onSave} className="btn btn-outline-primary btn-lg">
            Sauvegarder
          </button>
        </div>
      </div>
    </>
  );
};

export default MarkdownInput;
