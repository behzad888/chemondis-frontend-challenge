import {Heading, Image} from 'components/atoms';
import {Album, User} from 'utils';

import 'assets/objects/album-info-section.scss';

type AlbumInfoSectionProps = {
  user?: User;
  album: Album | null;
};

export const AlbumInfoSection = ({user, album}: AlbumInfoSectionProps) => {
  return (
    <section className='c-album-info'>
      {!album && (
        <Heading className='c-album-info__owner'>Album not found!</Heading>
      )}
      {user && (
        <Heading className='c-album-info__owner'>
          {user?.name} ({user?.username})
        </Heading>
      )}
      {album && (
        <>
          <Heading className='c-album-info__title'>{album?.title}</Heading>
          <Image
            src={`${process.env.REACT_APP_PLACEHOLDER_API_URL}/150/${user?.color}`}
            alt={album?.title || ''}
          />
        </>
      )}
    </section>
  );
};
