import React from "react";
import "./CharactersPanel.css";
import ContentBox from "../../../Shared/components/contentBox/ContentBox";

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
        <ContentBox>b</ContentBox>
      </div>
    </div>
  );
};

export default CharactersPanel;
