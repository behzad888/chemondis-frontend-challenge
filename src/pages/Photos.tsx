import {
  FilterSection,
  Header,
  PhotoGallerySection,
} from "components/templates";
import { useAppSelector } from "hooks";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defaultPageOption, getPhotos, Photo } from "utils";

const Photos = () => {
  const [albums, setPhotos] = useState<Array<Photo>>([]);
  const userState = useAppSelector((state) => state.userReducer);
  const { albumId, userId } = useParams();
  const user = userState.data.find((c) => c.id === parseInt(userId || "0"));

  const fetchPhotos = useCallback(
    async (pageOption = defaultPageOption) => {
      const data = await getPhotos(
        parseInt(albumId!),
        pageOption.page,
        pageOption.size
      );
      if (data.length <= 0 && pageOption.size > 0) {
        pageOption.page -= pageOption.size;
        return { hasNextPage: false };
      }
      setPhotos(data);
      return { hasNextPage: true };
    },
    [userState, albumId, userId]
  );

  useEffect(() => {
    if (!userState.loading) fetchPhotos();
  }, [userState]);

  return (
    <Fragment>
      <Header title="Frontend Challenge"></Header>
      <div className="c-container">
        <FilterSection
          title="Photos"
          subText="View Photos"
          changeFilter={fetchPhotos}
        ></FilterSection>
        <PhotoGallerySection items={albums}></PhotoGallerySection>
      </div>
    </Fragment>
  );
};

export default Photos;
