import React from "react";
import NoteEditor from "./NoteEditor";
import { ListItem, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const NoteItem = ({ note, deleteNote, updateNote }) => {
  const handleDelete = () => {
    deleteNote(note.id);
  };

  const handleUpdate = (content) => {
    updateNote(note.id, content);
  };

  return (
    <ListItem>
      <NoteEditor content={note.content} onUpdate={handleUpdate} />
      <IconButton edge="end" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default NoteItem;