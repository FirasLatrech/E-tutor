import Spinner from 'modules/shared/components/Spinner';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
  additionnalClasses?: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'gray'
    | 'secondaryPrimary'
    | 'secondarySecondary'
    | 'secondaryGray'
    | 'tertiaryPrimary'
    | 'tertiarySecondary'
    | 'tertiaryGray';

  size?: 'sm' | 'md' | 'lg' | 'xl';
}
/**
 * Renders a button component with different variants based on the input parameters.
 *
 * @param {string} text - The text displayed on the button.
 * @param {boolean} isLoading - Flag indicating if the button is in a loading state.
 * @param {string} className - Additional CSS classes for styling the button.
 * @param {React.ReactNode} children - React nodes for additional content inside the button.
 * @param {string} variant - The variant of the button ('primary', 'secondary', etc.).
 * @param {string} size - The size of the button ('sm', 'md', 'lg', 'xl').
 * @param {boolean} disabled - Flag indicating if the button is disabled.
 * @param {string} additionnalClasses - Additional CSS classes for styling the button.
 * @param {...any} props - Additional props to be spread on the button element.
 * @return {React.ReactElement} The rendered button component.
 */
const Button: React.FC<ButtonProps> = ({
  text,
  isLoading,
  className,
  children,
  variant = 'primary',
  size = 'md',
  disabled,
  additionnalClasses,
  ...props
}) => {
  const getVariantClasses = () => {
    let variantClasses = '';
    switch (variant) {
      case 'primary':
        variantClasses = ' text-white bg-primary-500 hover:bg-primary-600';
        break;
      case 'secondary':
        variantClasses = 'text-white bg-secondary-500 hover:bg-secondary-600';
        break;
      case 'gray':
        variantClasses = 'text-white  bg-gray-900 hover:bg-gray-800';
        break;
      case 'secondaryPrimary':
        variantClasses = 'bg-primary-100 hover:bg-primary-200 text-primary-500';
        break;

      case 'secondarySecondary':
        variantClasses =
          'bg-secondary-100 ease-linear duration-200 hover:bg-secondary-200 text-secondary-600';
        break;

      case 'secondaryGray':
        variantClasses = 'bg-gray-100 hover:bg-gray-200 text-gray-900';
        break;

      case 'tertiaryPrimary':
        variantClasses =
          'bg-white ease-linear duration-200 hover:bg-primary-100 text-primary-500 hover:text-primary-600';
        break;

      case 'tertiarySecondary':
        variantClasses =
          'bg-white ease-linear duration-200 hover:bg-secondary-100 text-secondary-500 hover:text-secondary-600';
        break;
      case 'tertiaryGray':
        variantClasses =
          'bg-white border border-gray-100	 !font-semibold !text-gray-600 hover:bg-gray-50 text-gray-900';
        break;
      default:
        break;
    }

    return `
      ${variantClasses}
      font-medium 
      text-sm 
      px-5 py-2.5 
      text-center 
      mr-2 mb-2
      dark:bg-blue-600
      dark:hover:bg-blue-700
      dark:focus:ring-blue-800 
      min-w-[100px]
      ${additionnalClasses}
    `;
  };
  console.log(size);
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'lg':
        return 'px-4 py-2.5 text-sm';
      case 'lg':
        return 'px-7 py-3 text-base';
      case 'xl':
        return 'px-10 py-4 text-base';
      default:
        return '';
    }
  };

  return (
    <button
      type={props?.type || 'button'}
      className={`${
        className ?? ''
      } ${getVariantClasses()} ${getSizeClasses()} ${
        disabled ? 'opacity-50 cursor-not-allowed  ' : ''
      } whitespace-nowrap `}
      disabled={disabled}
      {...props}
    >
      {isLoading ? <Spinner /> : children ?? text}
    </button>
  );
};

export default Button;
