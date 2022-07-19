import { FilterSection, GallerySection, Header } from "components/templates";
import { Fragment } from "react";

const Albums = () => {
  return (
    <Fragment>
      <Header title="Dashboard"></Header>
      <div className="c-container">
        <FilterSection></FilterSection>
        <GallerySection></GallerySection>
      </div>
      ;
    </Fragment>
  );
};

export default Albums;
