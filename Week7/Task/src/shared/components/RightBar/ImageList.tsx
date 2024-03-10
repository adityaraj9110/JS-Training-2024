interface ImageListType {
  imgUrl: string;
  alt: string;
}
interface AvatarDataType extends ImageListType {}

interface LatestPostDataType extends AvatarDataType{
  primary:string,
  name:string,
  message:string
}

export const ImageListData: ImageListType[] = [
  {
    imgUrl:
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "photo",
  },

  {
    imgUrl:
      "https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "photo",
  },

  {
    imgUrl:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "photo",
  },

  {
    imgUrl:
      "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "photo",
  },
];

export const AvatarData: AvatarDataType[] = [
  {
    imgUrl:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Remy Sharp",
  },

  {
    imgUrl:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Travis Howard",
  },

  {
    imgUrl:
      "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Cindy Baker",
  },

  {
    imgUrl:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Agnes Walker",
  },

  {
    imgUrl:
      "https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Trevor Henderson",
  },

  {
    imgUrl:
      "https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Aditya",
  },

  {
    imgUrl:
      "https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Hero",
  },

  {
    imgUrl:
      "https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Ayush",
  },
];




export const LatestPostData:LatestPostDataType[] = [

  {
    alt:"Remy Sharp",
    imgUrl:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    primary:"Brunch this weekend?",
    name:" Ali Connors",
    message:" — I'll be in your neighborhood doing errands this…"
  },

  {
    alt:"Travis Howard",
    imgUrl:"https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
    primary:"Summer BBQ",
    name:" to Scott, Alex, Jennifer",
    message:"  — Wish I could come, but I'm out of town this…"
  }

]