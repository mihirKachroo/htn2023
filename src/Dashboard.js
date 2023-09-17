import React, { useState } from 'react';
import { Container, List, Button, TextField } from '@mui/material';
import mockData from './data.js';
import ListItemComponent from './ListItem.js';
import Dropdown from './Dropdown';

function Dashboard() {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

  const [items, setItems] = useState(mockData);
  const [newItemText, setNewItemText] = useState('');

  const handleAdd = () => {
    if (newItemText) {
      const newItem = { id: Date.now(), text: newItemText };
      setItems([...items, newItem]);
      setNewItemText('');
    }
  };

  const handleShare = (item) => {
    // Implement sharing logic here (e.g., open a modal or share the item data).
    alert(`Sharing: ${item.text}`);
  };

  const handleDelete = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <Container>
      <h1>Material-UI List</h1>
      <Dropdown options={options} />

      <List>
        {items.map((item) => (
          <ListItemComponent
            key={item.id}
            item={item}
            onAdd={handleAdd}
            onShare={handleShare}
            onDelete={handleDelete}
          />
        ))}
      </List>
      <div>
        <TextField
          label="New Item"
          variant="outlined"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          style={{marginRight: 20}}
        />
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Add
        </Button>
      </div>
    </Container>
  );
}

export default Dashboard;
