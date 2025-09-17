import Image from "next/image";
import img from "../../public/search.svg";

export default function SearchIcon() {
  return (
    <div>
      <Image width={24} height={24} src={img} alt="search" />
    </div>
  );
}
