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
      <div className="c-album-info__owner">
        <Heading>
          {user.name} ({user.username})
        </Heading>
        <span>{user.website}</span>
      </div>
      <div className="c-album-info__title">
        <Heading>{album?.title}</Heading>
      </div>
      <Image src={"https://via.placeholder.com/150/" + user.color} />
    </section>
  );
};
