import React from "react";
import "./CharacterAvatar.css";

const CharacterAvatar: React.FC = () => {
  return (
    <button className="characterAvatar__btn">
      <img
        className="characterAvatar__img"
        src="placeHolders/CharacterTest.png"
      />
    </button>
  );
};

export default CharacterAvatar;
