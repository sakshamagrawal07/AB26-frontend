import { motion } from "framer-motion";
import styles from "../sponsors/sponsors.module.css";
import { itemVariants } from "../sponsors/sponsors.motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

const DeveloperCard = ({ logo, name = "Sponsors", github, linkedin, twitter, insta }) => {
  return (
    <motion.div
      className={styles.sponsorItem}
      variants={itemVariants}
    >
      <div className={`${styles.sponsorBox} overflow-hidden content-center`}>
        {logo && <img src={logo} loading="lazy" alt={name} />}
      </div>

      <p className={styles.cardLabel}>{name}</p>
      <div className="flex gap-2">
        {github && <a href={github} className={`${styles.cardLabel} cursor-pointer`} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
        {linkedin && <a href={linkedin} className={`${styles.cardLabel} cursor-pointer`} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
        {insta && <a href={insta} className={`${styles.cardLabel} cursor-pointer`} target="_blank" rel="noopener noreferrer"><BsInstagram /></a>}
        {twitter && <a href={twitter} className={`${styles.cardLabel} cursor-pointer`} target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>}
      </div>
    </motion.div>
  );
};

export default DeveloperCard;
