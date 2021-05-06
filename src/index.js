// react
import React from "react";
import ReactDOM from "react-dom";
import { v4 } from "uuid";

// style
import "bootstrap/dist/css/bootstrap.css";
import "./custom.scss";

// components
import NoteDisplay from "components/NoteDisplay";
import MarkdownInput from "components/MarkdownInput";
import NotesMenu from "components/NotesMenu";

const App = () => {
  const [notes, setNotes] = React.useState(() => {
    const data = localStorage.getItem("blocNote");
    if (!data) {
      return [];
    }
    const parsedData = JSON.parse(data);
    return parsedData;
  });
  const [selectedNote, setSelectedNote] = React.useState({
    title: "",
    content: "",
    id: null,
  });

  const onNoteChanged = (note) => {
    setSelectedNote(note);
  };

  const selectNote = (note) => {
    if (note) {
      setSelectedNote(note);
    } else {
      setSelectedNote({ title: "", content: "", id: null });
    }
  };

  const saveAllNotes = () => {
    let notesToSave = [];
    if (!selectedNote.id) {
      const newNote = { ...selectedNote, id: v4() };
      setSelectedNote(newNote);
      notesToSave = [...notes, newNote];
    } else {
      const foundIndex = notes.findIndex((note) => note.id === selectedNote.id);
      notesToSave = notes;
      notesToSave[foundIndex] = selectedNote;
    }
    setNotes(notesToSave);
    localStorage.setItem("blocNote", JSON.stringify(notesToSave));
  };

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-4">
        <NotesMenu
          notes={notes}
          onSelectNote={selectNote}
          onCreate={selectNote}
        />
      </div>
      <div className="col-8">
        <NoteDisplay markdownInput={selectedNote} />
        <MarkdownInput
          onNoteChange={onNoteChanged}
          note={selectedNote}
          onSave={saveAllNotes}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
