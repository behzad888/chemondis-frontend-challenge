import {Heading, Image} from 'components/atoms';
import {Album, Photo, User} from 'utils';

import 'assets/objects/photo-info-section.scss';

type PhotoInfoSectionProps = {
  user: User;
  photo: Photo;
  album: Album;
};

export const PhotoInfoSection = ({
  user,
  photo,
  album,
}: PhotoInfoSectionProps) => {
  return (
    <section className='c-photo-info'>
      <div className='c-photo-info__typography'>
        <Heading className='c-photo-info__title'>{album.title}</Heading>
        <Heading className='c-photo-info__owner'>
          {user.name} ({user.username})
        </Heading>
      </div>
      <Image src={photo.url} alt={photo.title} />
    </section>
  );
};
