import TextArea from 'modules/shared/components/TextArea/TextArea';

function Message() {
  return (
    <div className="flex flex-col gap-[1.5rem] w-full">
      <h1 className="text-lg leading-5 text-gray-900 capitalize">message</h1>
      <div className="flex items-center justify-center w-full gap-4">
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
