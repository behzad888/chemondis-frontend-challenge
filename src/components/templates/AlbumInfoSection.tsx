import { Heading, Image } from "components/atoms";
import { FilterActions } from "components/organisms";
import { FetchWithNextPageFlag, PageOption, User } from "utils";

import "assets/objects/album-info-section.scss";

type AlbumInfoSectionProps = {
  user: User;
};

export const AlbumInfoSection = ({ user }: AlbumInfoSectionProps) => {
  return (
    <section className="c-album-info">
      <div className="c-album-info__title">
        <Heading>{user.name}</Heading>
        <span>{user.website}</span>
      </div>
      <div>
        <Image src={"https://via.placeholder.com/150/" + user.color} />
      </div>
    </section>
  );
};
