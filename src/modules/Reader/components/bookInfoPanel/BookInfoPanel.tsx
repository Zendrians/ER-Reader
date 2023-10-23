import React from "react";
import "./BookInfoPanel.css";
import ContentBox from "../../../Shared/components/contentBox/ContentBox";

const BookInfoPanel: React.FC = () => {
  return (
    <div className="bookInfoPanel">
      <div className="bookInfoPanel__imgContainer">
        <img
          className="bookInfoPanel__img"
          src="placeHolders/FantasyCoverPlaceholderCompressed.png"
        />
      </div>
      <div className="bookInfoPanel__contentContainer">
        <h3 className="bookInfoPanel__bookTile">Fantasy Book Name</h3>
        <ContentBox>
          <p>
            Praesent hendrerit convallis dictum. Phasellus nunc est, tristique
            id pulvinar vitae, dictum nec nulla. Mauris accumsan sapien at justo
            semper faucibus.
          </p>
          <p>
            Praesent hendrerit convallis dictum. Phasellus nunc est, tristique
            id pulvinar vitae, dictum nec nulla. Mauris accumsan sapien at justo
            semper faucibus. Donec cursus venenatis augue sit amet malesuada.
            Aenean hendrerit aliquam est.
          </p>
        </ContentBox>
        <ContentBox>
        Praesent 
        </ContentBox>
      </div>
    </div>
  );
};

export default BookInfoPanel;
