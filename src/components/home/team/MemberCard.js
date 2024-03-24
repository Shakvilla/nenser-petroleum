import React from "react";
import ExportedImage from "next-image-export-optimizer";
import SubHeading from "@/components/atoms/SubHeading/SubHeading";
import Text from "@/components/atoms/Text/Text";
import Link from "next/link";
const MemberCard = ({
  image,
  id,
  alt,
  name,
  role,
  description,
  short_desc,
  socialMedia = [],
}) => {
  return (
    <div className="flex flex-col p-8">
      <div className="flex justify-center items-center">
        <ExportedImage src={image} alt={alt} width={120} height={120} />
      </div>
      <div className="flex justify-center items-center mt-2">
        <h3 className="leading-normal  text-normal font-bold text-neutral-800 my-1">
          {name}
        </h3>
      </div>
      <div className="flex justify-center items-center uppercase">
        <Text>{role}</Text>
      </div>
      <div className=" h-28">
        <Text custom="">{short_desc}</Text>
      </div>
      <div className="flex justify-center items-center">
        <Link
          href={`/team/${id}`}
          passHref
          className="text-blue-500 hover:text-blue-600"
        >
          Read more
        </Link>
      </div>

      <div className="flex gap-x-2 justify-center items-center">
        {socialMedia.map((social) => (
          <div key={social.id}>
            {
              <Link href={social.link} className="">
                {social.icon}
              </Link>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberCard;
