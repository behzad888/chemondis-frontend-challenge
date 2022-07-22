import { Card } from "components/molecules";
import { Link, useNavigate } from "react-router-dom";

import "assets/objects/gallery-section.scss";
import { Album } from "utils";
import { useCallback } from "react";

interface GallerySectionProps {
  items: Array<Album>;
}

export const AlbumGallerySection = ({ items }: GallerySectionProps) => {
  const navigate = useNavigate();

  const goToPhotoPage = useCallback(
    (item: Album) => {
      navigate("/" + item.userId + "/" + item.id, {
        state: item,
      });
    },
    [navigate]
  );

  return (
    <section className="c-gallery">
      {items.map((item) => {
        return (
          <Card
            key={item.id}
            onClick={() => goToPhotoPage(item)}
            headerText={item.title}
            imageUrl={`https://via.placeholder.com/150/${item.color}`}
          >
            {item.username}
          </Card>
        );
      })}
    </section>
  );
};
