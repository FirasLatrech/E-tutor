import Button from 'modules/shared/components/Button';

import arrowLeft from 'modules/shared/assets/arrow/arrowLeft.svg';

import folderIcon from 'modules/shared/assets/icons/courseDetails/folderIcon.svg';
import playCircleIcon from 'modules/shared/assets/icons/courseDetails/playEditor.svg';
import clock from 'modules/shared/assets/icons/courseDetails/clockprimaryicon.svg';

import CustomModal from './customModal';
type Props = {};

import { useState } from 'react';
import { useModal } from 'modules/shared/provider/modal-provider';

function HeroSection({}: Props) {
  const { setOpen, setClose } = useModal();

  const handleClick = () => {
    setOpen(<CustomModal title="Write a Review" />);
  };
  return (
    <div className="w-full h-[80px] bg-gray-50 flex items-center justify-between">
      <div className="flex items-center pl-5 gap-x-6">
        <div className="flex items-center justify-center w-[50px] h-[50px] bg-white  rounded-full cursor-pointer hover:opacity-70 duration-300">
          <img src={arrowLeft} alt="" />
        </div>

        <div className="flex flex-col gap-y-2">
          <div>
            Complete Website Responsive Design: from Figma to Webflow to Website
            Design
          </div>
          <div className="flex items-center gap-x-2 text-gray-700 font-[300] text-[14px]">
            <img src={folderIcon} alt="" />
            <span>6 Section</span>
            <img src={playCircleIcon} alt="" />
            <span> 202 lectures</span>
            <img src={clock} alt="" />
            <span>19h 37m</span>
          </div>
        </div>
      </div>
      <div>
        <Button
          text="Write a Review"
          variant="tertiaryPrimary"
          onClick={() => handleClick()}
        />

        <Button text="Next lecture" variant="primary" />
      </div>
    </div>
  );
}

export default HeroSection;
