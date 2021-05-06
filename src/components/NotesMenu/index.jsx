import React from "react";

const NotesMenu = ({ notes, onSelectNote, onCreate }) => {
  return (
    <div className="NotesMenu vertical-align-center p-5">
      <button
        onClick={() => onCreate(null)}
        className="btn btn-primary btn-lg col-12"
      >
        Ajouter une note
      </button>
      {notes.map((note, index) => (
        <div className="rounded-lg my-2 p-2 my-bg" key={index} onClick={() => onSelectNote(note)}>
          <h2>{note.title}</h2>
          <p className="truncate">{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NotesMenu;
