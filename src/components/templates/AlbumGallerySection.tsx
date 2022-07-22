import { Card } from "components/molecules";
import { Link } from "react-router-dom";

import "assets/objects/gallery-section.scss";
import { Album } from "utils";

interface GallerySectionProps {
  items: Array<Album>;
}

export const AlbumGallerySection = ({ items }: GallerySectionProps) => {
  return (
    <section className="c-gallery">
      {items.map((item) => {
        return (
          <Link to={"/" + item.userId + "/" + item.id} key={item.id}>
            <Card
              headerText={item.title}
              imageUrl={`https://via.placeholder.com/150/${item.color}`}
            >
              {item.username}
            </Card>
          </Link>
        );
      })}
    </section>
  );
};
