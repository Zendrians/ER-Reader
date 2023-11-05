import React, { useContext } from "react";
import { ThemeContext } from "../../../Shared/context/ThemeContext";

import "./ReadingZone.css";
import classNames from "classnames";
import Themes from "../../../Shared/enums/Themes";

const ReadingZone: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={classNames(
        "readingZone",
        {
          "readingZone--dark": theme === Themes.Dark,
        },
        {
          "readingZone--light": theme === Themes.Light,
        }
      )}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis
        sem libero, id consectetur est tincidunt ut. Donec sit amet tortor quis
        turpis finibus vestibulum. Nulla sagittis ac ante quis luctus.
        Vestibulum nec nunc hendrerit, cursus risus sit amet, dictum sapien.
        Suspendisse scelerisque, massa et pharetra malesuada, risus nisi egestas
        odio, sed egestas nisl nunc in odio. Donec non mi vel quam convallis
        venenatis at vehicula lorem. Nullam sit amet metus bibendum, luctus diam
        sit amet, imperdiet metus. Fusce commodo, massa eu faucibus efficitur,
        neque tellus tristique mauris, finibus consequat enim erat quis sem.
      </p>
      <p>
        Praesent hendrerit convallis dictum. Phasellus nunc est, tristique id
        pulvinar vitae, dictum nec nulla. Mauris accumsan sapien at justo semper
        faucibus. Donec cursus venenatis augue sit amet malesuada. Aenean
        hendrerit aliquam est. Duis laoreet eget ipsum vel dictum. Sed lorem
        tortor, tincidunt non tellus non, volutpat tempor elit. Pellentesque
        viverra elit eget enim ornare sollicitudin.
      </p>
      <p>
        Fusce ultrices sit amet purus vitae imperdiet. Aliquam eleifend
        malesuada metus, ut faucibus nulla aliquam condimentum. Aliquam erat
        volutpat. Nam mollis, nisl at consectetur pretium, ipsum odio fringilla
        sapien, ut molestie risus nulla quis quam. Morbi sit amet egestas neque.
        Integer condimentum tristique bibendum. Sed venenatis consequat
        facilisis. Sed posuere, sem sit amet finibus porttitor, tellus lorem
        fringilla diam, vitae tincidunt urna arcu quis nunc.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis
        sem libero, id consectetur est tincidunt ut. Donec sit amet tortor quis
        turpis finibus vestibulum. Nulla sagittis ac ante quis luctus.
        Vestibulum nec nunc hendrerit, cursus risus sit amet, dictum sapien.
        Suspendisse scelerisque, massa et pharetra malesuada, risus nisi egestas
        odio, sed egestas nisl nunc in odio. Donec non mi vel quam convallis
        venenatis at vehicula lorem. Nullam sit amet metus bibendum, luctus diam
        sit amet, imperdiet metus. Fusce commodo, massa eu faucibus efficitur,
        neque tellus tristique mauris, finibus consequat enim erat quis sem.
      </p>
      <p>
        Praesent hendrerit convallis dictum. Phasellus nunc est, tristique id
        pulvinar vitae, dictum nec nulla. Mauris accumsan sapien at justo semper
        faucibus. Donec cursus venenatis augue sit amet malesuada. Aenean
        hendrerit aliquam est. Duis laoreet eget ipsum vel dictum. Sed lorem
        tortor, tincidunt non tellus non, volutpat tempor elit. Pellentesque
        viverra elit eget enim ornare sollicitudin.
      </p>
      <p>
        Fusce ultrices sit amet purus vitae imperdiet. Aliquam eleifend
        malesuada metus, ut faucibus nulla aliquam condimentum. Aliquam erat
        volutpat. Nam mollis, nisl at consectetur pretium, ipsum odio fringilla
        sapien, ut molestie risus nulla quis quam. Morbi sit amet egestas neque.
        Integer condimentum tristique bibendum. Sed venenatis consequat
        facilisis. Sed posuere, sem sit amet finibus porttitor, tellus lorem
        fringilla diam, vitae tincidunt urna arcu quis nunc.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis
        sem libero, id consectetur est tincidunt ut. Donec sit amet tortor quis
        turpis finibus vestibulum. Nulla sagittis ac ante quis luctus.
        Vestibulum nec nunc hendrerit, cursus risus sit amet, dictum sapien.
        Suspendisse scelerisque, massa et pharetra malesuada, risus nisi egestas
        odio, sed egestas nisl nunc in odio. Donec non mi vel quam convallis
        venenatis at vehicula lorem. Nullam sit amet metus bibendum, luctus diam
        sit amet, imperdiet metus. Fusce commodo, massa eu faucibus efficitur,
        neque tellus tristique mauris, finibus consequat enim erat quis sem.
      </p>
      <p>
        Praesent hendrerit convallis dictum. Phasellus nunc est, tristique id
        pulvinar vitae, dictum nec nulla. Mauris accumsan sapien at justo semper
        faucibus. Donec cursus venenatis augue sit amet malesuada. Aenean
        hendrerit aliquam est. Duis laoreet eget ipsum vel dictum. Sed lorem
        tortor, tincidunt non tellus non, volutpat tempor elit. Pellentesque
        viverra elit eget enim ornare sollicitudin.
      </p>
      <p>
        Fusce ultrices sit amet purus vitae imperdiet. Aliquam eleifend
        malesuada metus, ut faucibus nulla aliquam condimentum. Aliquam erat
        volutpat. Nam mollis, nisl at consectetur pretium, ipsum odio fringilla
        sapien, ut molestie risus nulla quis quam. Morbi sit amet egestas neque.
        Integer condimentum tristique bibendum. Sed venenatis consequat
        facilisis. Sed posuere, sem sit amet finibus porttitor, tellus lorem
        fringilla diam, vitae tincidunt urna arcu quis nunc.
      </p>
    </section>
  );
};

export default ReadingZone;
