import Link from "next/link";
import s from "../styles/link.module.css";

export const MyLink = ({ text, href }) => {
  return (
    <Link href={href}>
      <span className={s.link}>{text}</span>
    </Link>
  );
};
