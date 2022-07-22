import { Card } from "components/molecules";

import "assets/objects/gallery-section.scss";
import { Photo } from "utils";

interface GallerySectionProps {
  items: Array<Photo>;
}

export const PhotoGallerySection = ({ items }: GallerySectionProps) => {
  return (
    <section className="c-gallery">
      {items.map((item) => {
        return <Card imageUrl={item.thumbnailUrl}>{item.title}</Card>;
      })}
    </section>
  );
};
