import React from "react";

const NotesMenu = ({ notes, onSelectNote, onCreate }) => {
  return (
    <div>
      <button onClick={() => onCreate(null)}>Ajouter</button>
      {notes.map((note, index) => (
        <div key={index} onClick={() => onSelectNote(note)}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NotesMenu;
