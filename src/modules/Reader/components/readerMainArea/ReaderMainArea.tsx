import React, { useContext } from "react";
import "./ReaderMainArea.css";
import SelectionCorner from "../../../Shared/components/rightSidePanel/SelectionCorner";
import ReaderFeaturesBar from "../readerFeaturesBar/ReaderFeaturesBar";
import ReaderInfoBar from "../readerInfoBar/ReaderInfoBar";
import ModalDialog from "../../../Shared/components/modal/ModalDialog";
import ReaderInfoPanelContainer from "../ReaderInfoPanelContainer/ReaderInfoPanelContainer";
import { PanelContext } from "../../context/PanelContext";
import ReaderFeaturesPanelContainer from "../readerFeaturesPanelContainer/ReaderFeaturesPanelContainer";

const ReaderMainArea: React.FC = () => {
  const { isLeftPanelOpen, isRightPanelOpen } = useContext(PanelContext);

  return (
    <React.Fragment>
      <section id="readerMainArea" className="readerMainArea">
        <div id="left-container" className="readerMainArea__sidePanelContainer">
          {!isLeftPanelOpen && (
            <SelectionCorner orientation="left">
              <ReaderInfoBar />
            </SelectionCorner>
          )}
        </div>
        <div className="readerMainArea__readingPanel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            sagittis sem libero, id consectetur est tincidunt ut. Donec sit amet
            tortor quis turpis finibus vestibulum. Nulla sagittis ac ante quis
            luctus. Vestibulum nec nunc hendrerit, cursus risus sit amet, dictum
            sapien. Suspendisse scelerisque, massa et pharetra malesuada, risus
            nisi egestas odio, sed egestas nisl nunc in odio. Donec non mi vel
            quam convallis venenatis at vehicula lorem. Nullam sit amet metus
            bibendum, luctus diam sit amet, imperdiet metus. Fusce commodo,
            massa eu faucibus efficitur, neque tellus tristique mauris, finibus
            consequat enim erat quis sem.
          </p>
          <p>
            Praesent hendrerit convallis dictum. Phasellus nunc est, tristique
            id pulvinar vitae, dictum nec nulla. Mauris accumsan sapien at justo
            semper faucibus. Donec cursus venenatis augue sit amet malesuada.
            Aenean hendrerit aliquam est. Duis laoreet eget ipsum vel dictum.
            Sed lorem tortor, tincidunt non tellus non, volutpat tempor elit.
            Pellentesque viverra elit eget enim ornare sollicitudin.
          </p>
          <p>
            Fusce ultrices sit amet purus vitae imperdiet. Aliquam eleifend
            malesuada metus, ut faucibus nulla aliquam condimentum. Aliquam erat
            volutpat. Nam mollis, nisl at consectetur pretium, ipsum odio
            fringilla sapien, ut molestie risus nulla quis quam. Morbi sit amet
            egestas neque. Integer condimentum tristique bibendum. Sed venenatis
            consequat facilisis. Sed posuere, sem sit amet finibus porttitor,
            tellus lorem fringilla diam, vitae tincidunt urna arcu quis nunc.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            sagittis sem libero, id consectetur est tincidunt ut. Donec sit amet
            tortor quis turpis finibus vestibulum. Nulla sagittis ac ante quis
            luctus. Vestibulum nec nunc hendrerit, cursus risus sit amet, dictum
            sapien. Suspendisse scelerisque, massa et pharetra malesuada, risus
            nisi egestas odio, sed egestas nisl nunc in odio. Donec non mi vel
            quam convallis venenatis at vehicula lorem. Nullam sit amet metus
            bibendum, luctus diam sit amet, imperdiet metus. Fusce commodo,
            massa eu faucibus efficitur, neque tellus tristique mauris, finibus
            consequat enim erat quis sem.
          </p>
          <p>
            Praesent hendrerit convallis dictum. Phasellus nunc est, tristique
            id pulvinar vitae, dictum nec nulla. Mauris accumsan sapien at justo
            semper faucibus. Donec cursus venenatis augue sit amet malesuada.
            Aenean hendrerit aliquam est. Duis laoreet eget ipsum vel dictum.
            Sed lorem tortor, tincidunt non tellus non, volutpat tempor elit.
            Pellentesque viverra elit eget enim ornare sollicitudin.
          </p>
          <p>
            Fusce ultrices sit amet purus vitae imperdiet. Aliquam eleifend
            malesuada metus, ut faucibus nulla aliquam condimentum. Aliquam erat
            volutpat. Nam mollis, nisl at consectetur pretium, ipsum odio
            fringilla sapien, ut molestie risus nulla quis quam. Morbi sit amet
            egestas neque. Integer condimentum tristique bibendum. Sed venenatis
            consequat facilisis. Sed posuere, sem sit amet finibus porttitor,
            tellus lorem fringilla diam, vitae tincidunt urna arcu quis nunc.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            sagittis sem libero, id consectetur est tincidunt ut. Donec sit amet
            tortor quis turpis finibus vestibulum. Nulla sagittis ac ante quis
            luctus. Vestibulum nec nunc hendrerit, cursus risus sit amet, dictum
            sapien. Suspendisse scelerisque, massa et pharetra malesuada, risus
            nisi egestas odio, sed egestas nisl nunc in odio. Donec non mi vel
            quam convallis venenatis at vehicula lorem. Nullam sit amet metus
            bibendum, luctus diam sit amet, imperdiet metus. Fusce commodo,
            massa eu faucibus efficitur, neque tellus tristique mauris, finibus
            consequat enim erat quis sem.
          </p>
          <p>
            Praesent hendrerit convallis dictum. Phasellus nunc est, tristique
            id pulvinar vitae, dictum nec nulla. Mauris accumsan sapien at justo
            semper faucibus. Donec cursus venenatis augue sit amet malesuada.
            Aenean hendrerit aliquam est. Duis laoreet eget ipsum vel dictum.
            Sed lorem tortor, tincidunt non tellus non, volutpat tempor elit.
            Pellentesque viverra elit eget enim ornare sollicitudin.
          </p>
          <p>
            Fusce ultrices sit amet purus vitae imperdiet. Aliquam eleifend
            malesuada metus, ut faucibus nulla aliquam condimentum. Aliquam erat
            volutpat. Nam mollis, nisl at consectetur pretium, ipsum odio
            fringilla sapien, ut molestie risus nulla quis quam. Morbi sit amet
            egestas neque. Integer condimentum tristique bibendum. Sed venenatis
            consequat facilisis. Sed posuere, sem sit amet finibus porttitor,
            tellus lorem fringilla diam, vitae tincidunt urna arcu quis nunc.
          </p>
        </div>
        <div
          id="right-container"
          className="readerMainArea__sidePanelContainer"
        >
          {!isRightPanelOpen && (
            <SelectionCorner orientation="right">
              <ReaderFeaturesBar />
            </SelectionCorner>
          )}
        </div>
      </section>
      <ModalDialog
        isOpen={isLeftPanelOpen}
        position="left"
        anchorElId="left-container"
      >
        <ReaderInfoPanelContainer />
      </ModalDialog>
      <ModalDialog
        isOpen={isRightPanelOpen}
        position="right"
        anchorElId="right-container"
      >
        <ReaderFeaturesPanelContainer />
      </ModalDialog>
    </React.Fragment>
  );
};

export default ReaderMainArea;
