import Image from "next/image";
import Link from "next/link";

const SingleClient = ({ client }) => {
  const { title, link, logo, invert } = client;
  return (
    <div className="ud-single-logo max-w-[140px]">
      <Link href={link} target="_blank" rel="nofollow noopner">
        <Image
          src={logo}
          alt={title}
          className="dark:hidden"
          width={140}
          height={40}
        />
        <Image
          src={logo}
          alt={title}
          className={`hidden dark:block ${invert? "dark:invert" : "" }`}
          width={140}
          height={40}
        />
      </Link>
    </div>
  );
};

export default SingleClient;
