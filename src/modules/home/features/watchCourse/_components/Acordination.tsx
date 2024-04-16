import playIcon from 'modules/shared/assets/icons/courseWatch/play.svg';
import { Checkbox } from 'modules/shared/components/ui/checkbox';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './AcordianationUi';
import { Progress } from './Progress';
type Props = {};

export const Acordination = (props: Props) => {
  return (
    <div className="w-[38%] flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="text-[20px] text-gray-800 font-[600] ">
          Course Contents
        </div>
        <div className="text-success-500 text-[15px]">15% Completed</div>
      </div>
      <div>
        <Progress className="h-[4px] rounded-none " value={32} />
      </div>
      <div>
        <Accordion
          type="single"
          defaultValue="item-1"
          collapsible
          className="w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger
              title="Is it accessible?"
              data={{
                completed: '25% finish (1/4)',
                time: '51m',
                lectures: '4 lectures',
              }}
            ></AccordionTrigger>
            <AccordionContent className="flex flex-col w-full border-l border-r border-gray-100">
              <div className="flex items-center justify-between h-[50px] border-l border-b border-r pr-2 border-gray-100 pl-2 gap-x-2">
                <div className="flex items-center gap-x-4">
                  <Checkbox
                    className="w-[18px] h-[18px] border-gray-200"
                    disabled
                    checked
                  />

                  <span className="text-gray-700 font-[300]">
                    1. What is Webflow?
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <img src={playIcon} alt="pauseIcon" />
                  <span className="text-gray-300">7:31</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger
              title="Is it accessible?"
              data={{
                completed: '25% finish (1/4)',
                time: '51m',
                lectures: '4 lectures',
              }}
            ></AccordionTrigger>
            <AccordionContent className="flex flex-col w-full border-l border-r border-gray-100">
              <div className="flex items-center justify-between h-[50px] border-l border-b border-r pr-2 border-gray-100 pl-2 gap-x-2">
                <div className="flex items-center gap-x-4">
                  <Checkbox
                    className="w-[18px] h-[18px] border-gray-200"
                    disabled
                    checked
                  />

                  <span className="text-gray-700 font-[300]">
                    1. What is Webflow?
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <img src={playIcon} alt="pauseIcon" />
                  <span className="text-gray-300">7:31</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
