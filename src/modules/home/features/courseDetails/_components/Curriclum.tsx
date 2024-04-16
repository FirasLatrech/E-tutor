import React from 'react';
import primaryPlayIcon from 'modules/shared/assets/icons/courseDetails/blackplay.svg';
import clock from 'modules/shared/assets/icons/courseDetails/clockprimaryicon.svg';
import file from 'modules/shared/assets/icons/courseDetails/file.svg';
import folderIcon from 'modules/shared/assets/icons/courseDetails/folderIcon.svg';
import playCircleIcon from 'modules/shared/assets/icons/courseDetails/playEditor.svg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'modules/shared/components/ui/accordion';
type Props = {};

export const Curriclum = (props: Props) => {
  return (
    <div className='className="pt-6 w-[70%] max-lg:w-full flex flex-col gap-8 h-full pb-6'>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold tracking-tight scroll-m-20">
          Curriculum
        </div>
        <div className="flex gap-x-2 text-gray-700 font-[300] text-[14px]">
          <img src={folderIcon} alt="" />
          <span>6 Section</span>
          <img src={playCircleIcon} alt="" />
          <span> 202 lectures</span>
          <img src={clock} alt="" />
          <span>19h 37m</span>
        </div>
      </div>
      <div>
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex items-center justify-between w-full ">
              <div className="flex w-full">Getting Started</div>
              <div className="flex items-center text-gray-800 text-[14px] font-[300] gap-x-2 place-content-end w-[600px]">
                <img src={playCircleIcon} alt="" />
                <span> 202 lectures</span>
                <img src={clock} alt="" />
                <span>19h 37m</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-1 border-b border-l border-r border-gray-100">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between pt-3 gap-x-1 ">
                  <div className="flex items-center gap-2">
                    <img src={file} alt="" />
                    <p>Yes. It adheres to the WAI-ARIA design pattern.</p>
                  </div>
                  <div className="pr-4 text-gray-600">07:31 MB</div>
                </div>
                <div className="flex items-center justify-between pt-3 gap-x-1 ">
                  <div className="flex items-center gap-2">
                    <img src={primaryPlayIcon} alt="" />
                    <p>What’s is Webflow?</p>
                  </div>
                  <div className="pr-4 text-gray-600">07:31</div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="multiple">
          <AccordionItem value="item-2">
            <AccordionTrigger className="flex items-center justify-between w-full">
              <div className="flex w-full">Secret of Good Design</div>
              <div className="flex items-center text-gray-800 text-[14px] font-[300] gap-x-2 place-content-end w-[600px]">
                <img src={playCircleIcon} alt="" />
                <span> 202 lectures</span>
                <img src={clock} alt="" />
                <span>19h 37m</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-1 border-b border-l border-r border-gray-100">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between pt-3 gap-x-1 ">
                  <div className="flex items-center gap-2">
                    <img src={file} alt="" />
                    <p>Yes. It adheres to the WAI-ARIA design pattern.</p>
                  </div>
                  <div className="pr-4 text-gray-600">07:31 MB</div>
                </div>
                <div className="flex items-center justify-between pt-3 gap-x-1 ">
                  <div className="flex items-center gap-2">
                    <img src={primaryPlayIcon} alt="" />
                    <p>What’s is Webflow?</p>
                  </div>
                  <div className="pr-4 text-gray-600">07:31</div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
