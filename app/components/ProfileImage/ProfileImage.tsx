import Image from "next/image";
import picture from "../../../public/profile.jpeg";
import styles from "./ProfileImage.module.scss";

const ProfileImage = () => {
  return <Image src={picture} alt="profile" className={styles.image} />;
};

export default ProfileImage;
