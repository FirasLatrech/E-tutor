import React from 'react';

interface SocialMediaBtnPropsType
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: string;
  href?: string;
}
function SocialMediaBtn({
  text,
  icon,
  href,
  ...props
}: SocialMediaBtnPropsType) {
  return (
    <button
      {...props}
      className="text-black w-full border border-gray-100 h-[2.8rem] items-center ease-linear justify-center duration-200 hover:bg-gray-50 flex bg-white"
    >
      <div className="border-r max-w-[3rem] min-w-[3rem] flex items-center justify-center h-full border-gray-100">
        <img src={icon} className=" color-white h-[2rem] w-[1.7rem]" />
      </div>
      <p className="w-full px-8 font-light capitalize">{text}</p>
    </button>
  );
}

export default SocialMediaBtn;
