import React from "react";
import { Container, Typography } from "@mui/material";
import NotesList from "./components/NotesList";

const App = () => {
  return (
    <div className="App">
      <Container maxWidth='vh'>
        <Typography variant='h4' component='h1' align='center' gutterBottom>
          Mis Notas
        </Typography>
        <NotesList />
      </Container>
    </div>
  );
};

export default App;
