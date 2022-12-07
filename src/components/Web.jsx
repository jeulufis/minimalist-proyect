import React from "react";
import Title from "./Title";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Button } from "../ui/Button";

export const Web = () => {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-full md:w-7/12">
          <Title>On the web</Title>
          <div>
            <Button logo={<AiFillGithub />} name="itodev_source" direction={'https://github.com/itodev-source'}/>
            <Button logo={<AiFillLinkedin />} name="juan_eulufi" direction={'https://www.linkedin.com/in/juan-eulufi/'}/>
            <Button logo={<AiFillInstagram />} name="itoo_salazar" direction={'https://www.instagram.com/itoo_salazar/'}/>
            <Button logo={<AiOutlineTwitter />} name="itodev_source" direction={'https://twitter.com/itodev_source'}/>
          </div>
        </div>
      </div>
    </div>
  );
};
