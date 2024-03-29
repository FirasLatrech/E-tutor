import React from 'react';
import downloadIcon from 'modules/shared/assets/icons/courseDetails/downloadIcons.svg';
type Props = {};

export const LectureNotes = (props: Props) => {
  return (
    <div className="flex flex-col gap-8 pt-6 pb-6">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold tracking-tight scroll-m-20">
          Lecture Notes
        </div>
        <div className="flex items-center justify-center gap-x-2 bg-primary-100 w-[190px] h-[50px]  hover:opacity-50 cursor-pointer duration-300 ">
          <img src={downloadIcon} alt="downloadIcon" />

          <span className="text-primary-500 font-[500]">Download Notes</span>
        </div>
      </div>
      <div className="text-gray-900 text-[14px] font-[300] flex flex-col gap-8">
        <p>
          It gives you a huge self-satisfaction when you look at your work and
          say, "I made this!". I love that feeling after I'm done working on
          something. When I lean back in my chair, look at the final result with
          a smile, and have this little "spark joy" moment. It's especially
          satisfying when I know I just made $5,000.
        </p>
        <p>
          I do! And that's why I got into this field. Not for the love of Web
          Design, which I do now. But for the LIFESTYLE! There are many ways one
          can achieve this lifestyle. This is my way. This is how I achieved a
          lifestyle I've been fantasizing about for five years. And I'm going to
          teach you the same. Often people think Web Design is complicated. That
          it needs some creative talent or knack for computers. Sure, a lot of
          people make it very complicated. People make the simplest things
          complicated. Like most subjects taught in the universities. But I
          don't like complicated. I like easy. I like life hacks. I like to take
          the shortest and simplest route to my destination. I haven't gone to
          an art school or have a computer science degree. I'm an outsider to
          this field who hacked himself into it, somehow ending up being a
          sought-after professional. That's how I'm going to teach you Web
          Design. So you're not demotivated on your way with needless
          complexity. So you enjoy the process because it's simple and fun. So
          you can become a Freelance Web Designer in no time.
        </p>
      </div>
    </div>
  );
};
