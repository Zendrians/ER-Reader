import React from "react";
import "./BookInfoPanel.css";
import ContentBox from "../../../Shared/components/contentBox/ContentBox";
import PanelBookCover from "../panelBookCover/PanelBookCover";

const BookInfoPanel: React.FC = () => {
  return (
    <div className="bookInfoPanel">
      <PanelBookCover />
      <div className="bookInfoPanel__contentContainer">
        <h3 className="bookInfoPanel__bookTile">Fantasy Book Name</h3>
        <ContentBox>
          <p style={{marginBottom: "10px"}}>
            Praesent hendrerit convallis dictum. Phasellus nunc est, tristique
            id pulvinar vitae, dictum nec nulla. Mauris accumsan sapien at justo
            semper faucibus.
          </p>
          <p style={{marginBottom: "10px"}}>
            Praesent hendrerit convallis dictum. Phasellus nunc est, tristique
            id pulvinar vitae, dictum nec nulla. Mauris accumsan sapien at justo
            semper faucibus. Donec cursus venenatis augue sit amet malesuada.
            Aenean hendrerit aliquam est.
          </p>
          <p style={{marginBottom: "10px"}}>
            Praesent hendrerit convallis dictum. Phasellus nunc est, tristique
            id pulvinar vitae, dictum nec nulla. Mauris accumsan sapien at justo
            semper faucibus. Donec cursus venenatis augue sit amet malesuada.
            Aenean hendrerit aliquam est.
          </p>
          {/* <p style={{marginBottom: "10px"}}>
            Praesent hendrerit convallis dictum. Phasellus nunc est, tristique
            id pulvinar vitae, dictum nec nulla. Mauris accumsan sapien at justo
            semper faucibus. Donec cursus venenatis augue sit amet malesuada.
            Aenean hendrerit aliquam est.
          </p>
          <p style={{marginBottom: "10px"}}>
            Praesent hendrerit convallis dictum. Phasellus nunc est, tristique
            id pulvinar vitae, dictum nec nulla. Mauris accumsan sapien at justo
            semper faucibus. Donec cursus venenatis augue sit amet malesuada.
            Aenean hendrerit aliquam est.
          </p> */}
        </ContentBox>
        <ContentBox>Author</ContentBox>
      </div>
    </div>
  );
};

export default BookInfoPanel;
