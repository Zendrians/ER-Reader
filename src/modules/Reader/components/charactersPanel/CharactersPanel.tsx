import React from "react";
import "./CharactersPanel.css";
import ContentBox from "../../../Shared/components/contentBox/ContentBox";
import CharacterAvatar from "../../../Shared/components/characterAvatar/CharacterAvatar";

const CharactersPanel: React.FC = () => {
  return (
    <div className="charactersPanel">
      <img
        className="charactersPanel__img"
        src="placeHolders/CharacterTest.png"
      />
      <div className="charactersPanel__contentContainer">
        <h3 className="charactersPanel__characterName">Character Name</h3>
        <ContentBox>
          <p style={{ marginBottom: "10px" }}>
            Praesent hendrerit convallis dictum. Phasellus nunc est, tristique
            id pulvinar vitae, dictum nec nulla. Mauris accumsan sapien at justo
            semper faucibus.
          </p>
          <p style={{ marginBottom: "10px" }}>
            Praesent hendrerit convallis dictum. Phasellus nunc est, tristique
            id pulvinar vitae, dictum nec nulla. Mauris accumsan sapien at justo
            semper faucibus. Donec cursus venenatis augue sit amet malesuada.
            Aenean hendrerit aliquam est.
          </p>
          <p style={{ marginBottom: "10px" }}>
            Praesent hendrerit convallis dictum. Phasellus nunc est, tristique
            id pulvinar vitae, dictum nec nulla. Mauris accumsan sapien at justo
            semper faucibus. Donec cursus venenatis augue sit amet malesuada.
            Aenean hendrerit aliquam est.
          </p>
        </ContentBox>
        <ContentBox>
          <div className="charactersPanel__selectionBar">
            <CharacterAvatar />
            <CharacterAvatar />
            <CharacterAvatar />
            <CharacterAvatar />
            <CharacterAvatar />
          </div>
        </ContentBox>
      </div>
    </div>
  );
};

export default CharactersPanel;
