import { cn } from 'modules/shared/lib/utility';

interface categoriyPropsType {
  Icon: any;
  name: string;
  backgroundColor: string;
}
function CategoriyCard({ Icon, name, backgroundColor }: categoriyPropsType) {
  return (
    <div
      className={cn(
        'flex items-center justify-start gap-5 p-6 hover:shadow-md duration-300 min-w-[25%] cursor-pointer',
        `bg-${backgroundColor}`
      )}
      style={{
        backgroundColor,
      }}
    >
      <Icon />
      <div className="flex flex-col justify-center">
        <span className="text-gray-900">{name} </span>
      </div>
    </div>
  );
}

export default CategoriyCard;
