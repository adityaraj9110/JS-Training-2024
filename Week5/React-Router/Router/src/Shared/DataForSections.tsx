import img2 from "../assets/At the office-amico.png";
import img3 from "../assets/Online world-pana.png";
import img4 from "../assets/Webinar-amico.png";
import img5 from "../assets/Webinar-pana.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";

export type ImageObj = {
  imageUrl: string;
  title: string;
};

export const data: ImageObj[] = [
  {
    imageUrl: img2,
    title: "Big Data",
  },
  {
    imageUrl: img3,
    title: "Networking",
  },
  {
    imageUrl: img4,
    title: "Designs",
  },
  {
    imageUrl: img5,
    title: "Training",
  },
];
export const workData: ImageObj[] = [
  {
    imageUrl: img6,
    title: "Robotics",
  },
  {
    imageUrl: img7,
    title: "Inzovations",
  },
  {
    imageUrl: img8,
    title: "Web Design",
  },
  {
    imageUrl: img9,
    title: "Cyber Security",
  },
];
