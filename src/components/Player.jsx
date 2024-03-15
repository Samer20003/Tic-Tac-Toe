import { useState } from "react";
export default function Player({ intialName, symbol, isActive, onNameChange }) {
  const [playerName, setPlayerName] = useState(intialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditSelect() {
    setIsEditing((editing) => !editing); // when you update state in react we shoudl pass a function because when this function is called by react and automatilly get the current state state value
    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //   let butCaption = "Save";
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} /> // onChange give us the value that the user will write
    );
    // butCaption='Save'
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditSelect}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
