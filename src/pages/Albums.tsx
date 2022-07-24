import {FilterSection, AlbumGallerySection, Header} from 'components/templates';
import {useAppSelector} from 'hooks';
import {Fragment, useCallback, useEffect, useState} from 'react';
import {defaultPageOption, Album, getAlbums} from 'utils';

const Albums = () => {
  const [albums, setAlbums] = useState<Array<Album>>([]);
  const [loading, setLoading] = useState(true);
  const userState = useAppSelector((state) => state.userReducer);

  const fetchAlbums = useCallback(
    async (pageOption = defaultPageOption) => {
      try {
        const data = await getAlbums(pageOption.page, pageOption.size);
        if (data.length <= 0 && pageOption.size > 0) {
          pageOption.page -= pageOption.size;
          return {hasNextPage: false};
        }
        setAlbums(
          data.map((item) => {
            let user = userState.data.find((c) => c.id === item.userId)!;
            return {
              ...item,
              username: user.username,
              color: user.color,
            };
          }),
        );
        return {hasNextPage: true};
      } catch (error) {
        setAlbums([]);
        return {hasNextPage: false};
      } finally {
        setLoading(false);
      }
    },
    [userState],
  );

  useEffect(() => {
    if (!userState.loading) fetchAlbums();
  }, [userState, fetchAlbums]);

  return (
    <Fragment>
      <Header title='Frontend Challenge'></Header>
      <div className='c-container'>
        <FilterSection
          title='Albums'
          subText='View Albums'
          changeFilter={fetchAlbums}></FilterSection>
        {!loading && <AlbumGallerySection items={albums}></AlbumGallerySection>}
      </div>
    </Fragment>
  );
};

export default Albums;
