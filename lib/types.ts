export type SliderImageProps = {
  _id: string;
  title: "string";
  titleImage: any;
};
export type SantyTagProps = {
  _key: string;
  value: string;
  _type: string;
  label: string;
};

export type SanityImageProps = {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
};
export type GalleryItemProps = {
  _id: string;
  title: string;
  titleImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
};
