import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

const NoteEditor = ({ content = "", onUpdate }) => {
  const [currentContent, setCurrentContent] = useState(content);

  useEffect(() => {
    setCurrentContent(content);
  }, [content]);

  const handleChange = (e) => {
    setCurrentContent(e.target.value);
    onUpdate(e.target.value);
  };

  return (
    <TextField
      value={currentContent}
      onChange={handleChange}
      multiline
      fullWidth
    />
  );
};

export default NoteEditor;