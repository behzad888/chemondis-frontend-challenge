import { Card } from "components/molecules";

import "assets/objects/gallery-section.scss";
import { Album, Photo, User } from "utils";
import { useCallback, useState } from "react";
import { Modal } from "components/atoms";
import { PhotoInfoSection } from "./PhotoInfoSection";

interface GallerySectionProps {
  items: Array<Photo>;
  user: User;
  album: Album;
}

export const PhotoGallerySection = ({
  items,
  user,
  album,
}: GallerySectionProps) => {
  const [showPhotoDetail, setShowPhotoDetail] = useState<Photo | null>(null);

  return (
    <>
      <Modal
        title={showPhotoDetail?.title}
        show={!!showPhotoDetail}
        onHide={() => setShowPhotoDetail(null)}
      >
        {showPhotoDetail && (
          <PhotoInfoSection
            photo={showPhotoDetail}
            album={album}
            user={user}
          ></PhotoInfoSection>
        )}
      </Modal>
      <section className="c-gallery">
        {items.map((item) => {
          return (
            <Card
              onClick={() => setShowPhotoDetail(item)}
              key={item.id}
              imageUrl={item.thumbnailUrl}
            >
              {item.title}
            </Card>
          );
        })}
      </section>
    </>
  );
};
