import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from 'modules/shared/lib/utility';
import playCircleIcon from 'modules/shared/assets/icons/courseDetails/playEditor.svg';
const Accordion = AccordionPrimitive.Root;
import checkIcon from 'modules/shared/assets/icons/courseDetails/checkIcon.svg';
import clock from 'modules/shared/assets/icons/courseDetails/clockprimaryicon.svg';
import { date } from 'yup';
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn('', className)} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    data?: {
      completed?: string;
      time?: string;
      lectures?: string;
      // Add more properties as needed
    };
  }
>(({ className, children, title, slot, data, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        ' flex w-full justify-between border border-gray-100 gap-3 py-4 font-medium [&[data-state=open]]:bg-gray-50 transition-all pl-2 pr-2 [&[data-state=open]>div>svg]:rotate-180 [&[data-state=open]>div>svg]:text-primary-500  [&[data-state=open]>div>span]:text-primary-500 [&[data-state=closed]>div>div>div>span]:hidden  ',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3 ">
        <ChevronDown className="w-5 h-5 transition-transform duration-200 shrink-0" />
        <span className="">{title}</span>
      </div>
      <div>{children}</div>
      <div className="flex items-center gap-x-3 text-gray-700 font-[300] text-[14px]">
        <div className="flex items-center justify-center gap-1">
          <img src={playCircleIcon} alt="playCircleIcon" />
          <div> {data?.lectures}</div>
        </div>
        <div className="flex items-center justify-center gap-1">
          <img src={clock} alt="clock" />
          <div>{data?.time}</div>
        </div>
        <div>
          <div>
            <span className="flex items-center justify-center gap-1">
              <img src={checkIcon} alt="checkIcon" />

              <div className="">{data?.completed}</div>
            </span>
          </div>
        </div>
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn(' pt-0 bvb ', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
