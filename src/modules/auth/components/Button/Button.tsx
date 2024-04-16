import Loader from 'modules/shared/assets/icons/Loaders/Loader.svg';
import RightArrow from '../../assets/icons/RightArrow.svg';

interface ButtonPropsType {
  text: string;
  isLoading: boolean;
}

function SubmitButton({ text, isLoading }: ButtonPropsType) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="flex justify-between w-full gap-2 px-8 py-3 text-white duration-200 ease-linear hover:bg-primary-400 bg-primary-500"
    >
      {isLoading ? 'Loading' : text}
      <img
        src={isLoading ? Loader : RightArrow}
        className="color-white max-h-[1.5rem] max-w-[1.5rem] "
      />
    </button>
  );
}

export default SubmitButton;
