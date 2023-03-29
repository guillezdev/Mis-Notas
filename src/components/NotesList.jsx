import React, { useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import { Button, List } from "@mui/material";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  const addNote = () => {
    setNotes([...notes, { id: new Date().getTime(), content: "" }]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const updateNote = (id, content) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, content } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <Button onClick={addNote} variant="contained">
        Añadir nota
      </Button>
      <List>
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            updateNote={updateNote}
          />
        ))}
      </List>
    </div>
  );
};

export default NotesList;