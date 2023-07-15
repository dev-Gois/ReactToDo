import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form({ addTask }) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const taskCreate = (text) => {
    const taskObject = { text: text, id: id };
    setId(id + 1);
    addTask(taskObject);
    document.getElementById("outlined-basic").value = null;
  };

  return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          style={{marginTop: '1rem'}}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="text" onClick={() => taskCreate(text)}>
          Add
        </Button>
      </div>
  );
}