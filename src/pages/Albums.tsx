import { FilterSection, GallerySection, Header } from "components/templates";
import { useAppSelector } from "hooks";
import { Fragment, useCallback, useEffect, useState } from "react";
import { defaultPageOption, GalleryItem, getAlbums } from "utils";

const Albums = () => {
  const [albums, setAlbums] = useState<Array<GalleryItem>>([]);
  const userState = useAppSelector((state) => state.userReducer);

  const fetchAlbums = useCallback(
    async (pageOption = defaultPageOption) => {
      const data = await getAlbums(pageOption.page, pageOption.size);
      setAlbums(
        data.map((item) => {
          let user = userState.data.find((c) => c.id === item.userId)!;
          return {
            ...item,
            username: user.name,
            color: user.color,
          };
        })
      );
    },
    [userState]
  );

  useEffect(() => {
    if (!userState.loading) fetchAlbums();
  }, [userState]);

  return (
    <Fragment>
      <Header title="Frontend Challenge"></Header>
      <div className="c-container">
        <FilterSection
          title="Albums"
          subText="View Albums"
          changeFilter={fetchAlbums}
        ></FilterSection>
        <GallerySection items={albums}></GallerySection>
      </div>
    </Fragment>
  );
};

export default Albums;
