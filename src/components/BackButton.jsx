import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <IoIosArrowRoundBack className={styles.backIcon} />
        back
      </button>
    </div>
  );
}
