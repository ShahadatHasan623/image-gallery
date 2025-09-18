import Image from "next/image";
import search from "../../public/search.svg";
import { CiBookmark } from "react-icons/ci";

export function SearchIcon() {
  return <Image width={24} height={24} src={search} alt="search" />;
}

export function SaveIcon() {
  return <><CiBookmark size={40} /></> ;
}
