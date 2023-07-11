import React, { useState } from "react";
import "./Emoji.css";
import emojis from "../../Emoji.json";

function Emoji() {
  const [search, setSearch] = useState("");
  const [emoji, setEmoji] = useState([]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);

    const select = emojis.filter((emoji) =>
      emoji.name.toLowerCase().includes(value.toLowerCase())
    );
    setEmoji(select);
  };

  return (
    <div className="container">
      <h1>Emoji Search</h1>
      <input
        type="text"
        placeholder="Search an Emoji"
        value={search}
        onChange={handleOnChange}
      />

      <div className="emoji_list">
        {emoji.map((emoji) => (
          <div key={emoji.char} className="emoji_item">
            <span className="emoji">{emoji.char}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Emoji;
