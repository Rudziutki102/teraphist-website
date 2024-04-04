export type SliderImageProps ={
    _id:string,
    title:'string',
    titleImage:any 
}
export type SantyTagProps = {
    _key:string,
    value:string,
    _type:string,
    label:string
}

export type SanityImageProps ={
    _type:string,
    asset:{
        _ref:string,
        _type:string
    }

}
export type BlogListProps = {
    slug:{
        current:string,
        _type:string
    }
    title:string,
    tags:SantyTagProps[],
    publishedAt:string
    titleImag:SanityImageProps
}
 type GalleryItemProps =  {
    _id: string;
    title: string;
    titleImage: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      }
    };
  }
  export type SliderComponentProps = {
    imagesGallery: GalleryItemProps[];
  }