import React from "react";
import Image from "next/image";
import SubHeading from "@/components/atoms/SubHeading/SubHeading";
import Text from "@/components/atoms/Text/Text";
import Link from "next/link";
const MemberCard = ({
  image,
  alt,
  name,
  role,
  description,
  socialMedia = [],
}) => {
  return (
    <div className="flex flex-col p-8 ">
      <div className="flex justify-center items-center">
        <Image src={image} alt={alt} width={150} height={150} />
      </div>
      <div className="flex justify-center items-center">
        <SubHeading>{name}</SubHeading>
      </div>
      <div className="flex justify-center items-center">
        <Text>{role}</Text>
      </div>
      <div>
        <Text>{description}</Text>
      </div>

      {socialMedia.map((social) => (
        <div key={social.id}>
          {<Link href={social.link}>{social.icon}</Link>}
        </div>
      ))}
    </div>
  );
};

export default MemberCard;
