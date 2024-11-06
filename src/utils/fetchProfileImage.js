import { ReactComponent as SkyProfileImage } from "../assets/images/SkyProfileImage.svg";
import { ReactComponent as PurpleProfileImage } from "../assets/images/PurpleProfileImage.svg";
import { ReactComponent as GreenProfileImage } from "../assets/images/GreenProfileImage.svg";
import { ReactComponent as BlueProfileImage } from "../assets/images/BlueProfileImage.svg";

export const fetchcProfileImage = (profileColor) => {
  switch (profileColor) {
    case "sky":
      return <SkyProfileImage />;
    case "purple":
      return <PurpleProfileImage />;
    case "green":
      return <GreenProfileImage />;
    case "blue":
      return <BlueProfileImage />;
    default:
      return <SkyProfileImage />;
  }
};
