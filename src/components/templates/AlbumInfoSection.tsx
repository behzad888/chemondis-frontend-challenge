import { Heading, Image } from "components/atoms";
import { Album, User } from "utils";

import "assets/objects/album-info-section.scss";

type AlbumInfoSectionProps = {
  user: User;
  album: Album;
};

export const AlbumInfoSection = ({ user, album }: AlbumInfoSectionProps) => {
  return (
    <section className="c-album-info">
      <Heading className="c-album-info__owner">
        {user.name} ({user.username})
      </Heading>
      <Heading className="c-album-info__title">{album?.title}</Heading>
      <Image
        src={`${process.env.REACT_APP_PLACEHOLDER_API_URL}/150/${user.color}`}
        alt={album.title}
      />
    </section>
  );
};
