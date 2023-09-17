import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { AddCircleOutline, Share, Delete } from '@mui/icons-material';

export default function ListItemComponent({ item, onAdd, onShare, onDelete }) {
  return (
    <ListItem>
      <ListItemText primary={item.text} />
      <ListItemSecondaryAction>
        <IconButton onClick={() => onAdd(item)}>
          <AddCircleOutline />
        </IconButton>
        <IconButton onClick={() => onShare(item)}>
          <Share />
        </IconButton>
        <IconButton onClick={() => onDelete(item.id)}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}