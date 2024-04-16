// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//    ,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from '@/components/ui/drawer';

import { useState } from 'react';
// @ts-expect-error
import ReactStars from 'react-rating-stars-component';
import paperPlaneRight from 'modules/shared/assets/icons/courseWatch/paperplaneRight.svg';
import startIcon from 'modules/shared/assets/icons/courseWatch/start.svg';
import VideStart from 'modules/shared/assets/icons/courseWatch/videStar.svg';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'modules/shared/components/ui/dialog';
import { useModal } from 'modules/shared/providers/Modal/modal-provider';
type Props = {
  title: string;

  defaultOpen?: boolean;
};
const CustomModal = ({ title, defaultOpen }: Props) => {
  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating: number) => {
    setRating(newRating);
  };
  const { isOpen, setClose } = useModal();
  const handleClose = () => {
    setClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[495px]  ">
        <DialogHeader>
          <DialogTitle className="text-[15px] text-gray-900 font-[500]">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex items-center gap-x-3">
            {' '}
            <span className="text-[18px] font-[600] ">{rating}</span>{' '}
            <span className="text-[14px] font-[300] text-gray-400">
              (Good /Amazing)
            </span>
          </div>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={27}
            value={rating}
            activeColor="#ffd700"
            emptyIcon={
              <div>
                <img src={VideStart} alt="" width={40} height={40} />
              </div>
            }
            filledIcon={
              <div>
                <img src={startIcon} alt="" width={40} height={40} />
              </div>
            }
          />
        </div>
        <div className="w-full p-4">
          <label htmlFor="" className="text-[13px] font-[400] text-gray-600">
            Feedback
          </label>
          <div className="w-full h-[100px] border border-gray-200 ">
            <textarea
              name=""
              placeholder="Write down your feedback here..."
              id=""
              cols={30}
              rows={10}
              className="w-full h-full p-2 outline-none resize-none placeholder:text-gray-600 placeholder:text-[14px] text-gray-600 text-[15px]"
            ></textarea>
          </div>
        </div>
        <DialogFooter className="flex items-center justify-between pb-3 pl-2 pr-2">
          <div className="flex items-center justify-between w-full ">
            <div
              className="w-[102px] h-[48px] flex items-center justify-center bg-gray-50 text-gray-900 cursor-pointer hover:opacity-75 duration-300 gap-x-2"
              onClick={handleClose}
            >
              <span>Cancel</span>
            </div>

            <div className="w-[197px] h-[48px] flex items-center justify-center bg-primary-500 text-white cursor-pointer hover:opacity-75 duration-300 gap-x-2">
              <span>Submit Review</span>
              <img src={paperPlaneRight} alt="" />
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
