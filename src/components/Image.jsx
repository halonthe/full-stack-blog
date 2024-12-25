import { IKImage } from "imagekitio-react";

const Image = ({ src, className, w, h, alt }) => {
  return (
    <div>
      <IKImage
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL}
        path={src}
        loading="lazy"
        className={className}
        lqip={{ active: true, quality: 20 }}
        width={w}
        height={h}
        alt={alt}
      />
    </div>
  );
};

export default Image;
