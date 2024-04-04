import Input from 'modules/shared/components/Input';
import TextArea from 'modules/shared/components/TextArea/TextArea';
import React from 'react';

function Message() {
  return (
    <div className="flex flex-col gap-[1.5rem] w-full">
      <h1 className="capitalize text-gray-900 text-lg leading-5">message</h1>
      <div className="flex items-center justify-center gap-4 w-full">
        <TextArea
          name="welcomeMessage"
          label="Welcome Message"
          placeholder="Enter course starting message here..."
        />
        <TextArea
          name="congratulationsMessage"
          label="Congratulations Message"
          placeholder="Enter your course completed message here..."
        />
      </div>
    </div>
  );
}

export default Message;
