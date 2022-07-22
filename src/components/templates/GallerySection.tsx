import { Card } from "components/molecules";

import "assets/objects/gallery-section.scss";
import { GalleryItem } from "utils";

interface GallerySectionProps {
  items: Array<GalleryItem>;
}

export const GallerySection = ({ items }: GallerySectionProps) => {
  return (
    <section className="c-gallery">
      {items.map((item) => {
        return (
          <a href="#" key={item.id}>
            <Card
              headerText={item.title}
              imageUrl={`https://via.placeholder.com/150/${item.color}`}
            >
              {item.username}
            </Card>
          </a>
        );
      })}
    </section>
  );
};
