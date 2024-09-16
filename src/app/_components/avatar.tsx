import Image from "next/image";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        width={50}
        height={50}
        className="mr-4 size-12 rounded-full"
        alt={name}
        unoptimized={true}
      />
      <div className="text-lg font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
