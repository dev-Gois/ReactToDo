import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditTaskDialog from "./EditDialog";

export default function TaskItem({ task, deleteTask, editTask }) {
  const [openDialog, setOpenDialog] = React.useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <EditTaskDialog editTask={editTask} open={openDialog} dialogHandler={dialogHandler} task={task} />
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(task.id)}>
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox edge="start" tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText primary={task.text} onClick={() => setOpenDialog(true)} />
          </ListItemButton>
        </ListItem>
    </>
  );
}