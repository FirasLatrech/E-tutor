import React from 'react'

type Props = {}

export  const CourseRequirements = (props: Props) => {
  return (
    <div className="pt-6 w-[70%] flex flex-col gap-8 h-full pb-6">
      <div className="text-2xl font-semibold tracking-tight scroll-m-20">
        Who this course is for:
      </div>
      <ul className="flex flex-col items-start gap-4 pl-6 text-gray-700 list-disc">
        <li>Nunc auctor consequat lorem, in posuere enim hendrerit sed.</li>
        <li>
          Sed sagittis suscipit condimentum pellentesque vulputate feugiat
          libero nec accumsan.
        </li>
      </ul>
    </div>
  );
}