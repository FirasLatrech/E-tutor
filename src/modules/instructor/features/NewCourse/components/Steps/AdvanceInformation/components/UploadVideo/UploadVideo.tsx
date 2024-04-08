import UploadVideoIcon from 'modules/shared/assets/icons/Upload/UploadVideoIcon';
import InputFile from 'modules/shared/components/InputFile';

function UploadVideo({ label }: { label: string }) {
  return (
    <div className="w-full flex-col gap-[1rem] flex items-start justify-start">
      <p className="font-medium	leading-5 text-lg">{label}</p>
      <div className="w-full gap-[2rem] flex items-start justify-start">
        <div className="bg-gray-50 p-6 px-16">
          <UploadVideoIcon />
        </div>
        <div className="w-full gap-[3rem] flex flex-col items-start justify-between   ">
          <p className="text-sm w-full text-gray-600">
            Students who watch a well-made promo video are 5X more likely to
            enroll in your course. We've seen that statistic go up to 10X for
            exceptionally awesome videos.
          </p>
          <div>
            <InputFile text="upload video" />
          </div>
        </div>
      </div>
      {/*  <MuxUploader
        className="opacity"
        endpoint="https://httpbin.org/put"
        onSuccess={(object) => console.log(object)}
  />*/}
    </div>
  );
}

export default UploadVideo;
