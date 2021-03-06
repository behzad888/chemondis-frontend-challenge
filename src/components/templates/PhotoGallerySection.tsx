import {Card} from 'components/molecules';

import 'assets/objects/gallery-section.scss';
import {Heading, Modal} from 'components/atoms';
import {useEffect, useState} from 'react';
import {Album, Photo, User} from 'utils';
import {PhotoInfoSection} from './PhotoInfoSection';

interface GallerySectionProps {
  items: Array<Photo>;
  user?: User;
  album: Album | null;
}

export const PhotoGallerySection = ({
  items,
  user,
  album,
}: GallerySectionProps) => {
  const [showPhotoDetail, setShowPhotoDetail] = useState<Photo | null>(null);

  useEffect(() => {
    if (showPhotoDetail && !window.history.state.title) {
      window.history.pushState(
        {...showPhotoDetail, isPhoto: true},
        '',
        window.location.href,
      );
      window.onpopstate = (e) => {
        if (window.history.state.isPhoto)
          setShowPhotoDetail(window.history.state);
        else setShowPhotoDetail(null);
      };
    }
  }, [showPhotoDetail, setShowPhotoDetail]);

  return (
    <>
      <Modal
        title={showPhotoDetail?.title}
        show={!!showPhotoDetail}
        onHide={() => setShowPhotoDetail(null)}>
        {album && user && showPhotoDetail && (
          <PhotoInfoSection
            photo={showPhotoDetail}
            album={album}
            user={user}></PhotoInfoSection>
        )}
      </Modal>
      <section className='c-gallery'>
        {items.length <= 0 && <Heading>There is no more photo in this album</Heading>}
        {items.map((item) => {
          return (
            <Card
              onClick={() => setShowPhotoDetail(item)}
              key={item.id}
              imageUrl={item.thumbnailUrl}>
              {item.title}
            </Card>
          );
        })}
      </section>
    </>
  );
};
