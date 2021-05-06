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
  const [markdownValue, setMarkdownValue] = React.useState("");
  const [notes, setNotes] = React.useState(() => {
    const data = localStorage.getItem("blocNote");
    if(!data) {
      return [];
    }
    const parsedData = JSON.parse(data);
    console.log(parsedData);
    return parsedData;
  });
  const [selectedNote, setSelectedNote] = React.useState({
    title: "",
    content: "",
    id: null,
  });

  const onNoteChanged = (note) => {
    setSelectedNote(note);
    setMarkdownValue(note.content);
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
      const foundIndex = notes.findIndex(note => note.id === selectedNote.id);
      notesToSave = notes;
      notesToSave[foundIndex] = selectedNote;
    }
    setNotes(notesToSave);
    localStorage.setItem("blocNote", JSON.stringify(notesToSave));
  };

  return (
    <div className="container-fluid row">
      <div className="col-3">
        <NotesMenu notes={notes} onSelectNote={selectNote} onCreate={selectNote} />
      </div>
      <div className="col-9">
        <NoteDisplay markdownInput={markdownValue} />
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
