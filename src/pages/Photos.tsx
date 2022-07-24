import {Card} from 'components/molecules';
import {
  AlbumInfoSection,
  FilterSection,
  Header,
  PhotoGallerySection,
} from 'components/templates';
import {useAppSelector} from 'hooks';
import {Fragment, useCallback, useEffect, useMemo, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {Album, defaultPageOption, getAlbum, getPhotos, Photo} from 'utils';

const Photos = () => {
  const {albumId, userId} = useParams();
  const location = useLocation();

  const [photos, setPhotos] = useState<Array<Photo>>([]);

  const [album, setAlbum] = useState<Album | null>(location.state as any);
  const userState = useAppSelector((state) => state.userReducer);

  const user = useMemo(
    () => userState.data.find((c) => c.id === parseInt(userId || '0')),
    [userState, userId],
  );

  const fetchPhotos = useCallback(
    async (pageOption = defaultPageOption) => {
      const data = await getPhotos(
        parseInt(albumId!),
        pageOption.page,
        pageOption.size,
      );
      if (data.length <= 0 && pageOption.size > 0) {
        if (pageOption.page !== 0) pageOption.page -= pageOption.size;
        return {hasNextPage: false};
      }
      setPhotos(data);
      return {hasNextPage: true};
    },
    [albumId],
  );
  const fetchAlbum = useCallback(async () => {
    try {
      const data = await getAlbum(parseInt(albumId!));
      setAlbum(data);
    } catch (error) {
      setAlbum(null);
      setPhotos([]);
    }
  }, [albumId]);

  useEffect(() => {
    fetchPhotos();
    if (!location.state) fetchAlbum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPhotos, fetchAlbum]);

  return (
    <Fragment>
      <Header title='Frontend Challenge'></Header>
      <div className='c-container c-photo-page'>
        <AlbumInfoSection user={user} album={album}></AlbumInfoSection>
        <Card>
          <FilterSection
            title='Photos'
            subText='View Photos'
            changeFilter={fetchPhotos}></FilterSection>
        </Card>
          <PhotoGallerySection
            items={photos}
            album={album}
            user={user}></PhotoGallerySection>
      </div>
    </Fragment>
  );
};

export default Photos;
