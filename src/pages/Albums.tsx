import { FilterSection, GallerySection, Header } from "components/templates";
import { Fragment, useCallback, useEffect, useState } from "react";
import { defaultPageOption } from "utils";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = useCallback(async (pageOption = defaultPageOption) => {},
  []);

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <Fragment>
      <Header title="Frontend Challenge"></Header>
      <div className="c-container">
        <FilterSection
          title="Albums"
          subText="View Albums"
          changeFilter={fetchAlbums}
        ></FilterSection>
        <GallerySection></GallerySection>
      </div>
      ;
    </Fragment>
  );
};

export default Albums;
