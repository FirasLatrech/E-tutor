/**
 * Renders a suggestion component with user interface, user experience, web design, and app suggestions.
 *
 * @return {JSX.Element} The rendered suggestion component.
 */
export default function Suggestion() {
  return (
    <div className="flex items-center justify-between max-lg:flex-col">
      <div className="flex max-lg:flex-col">
        <div className="flex  items-center gap-2 p-3   h-[48px]  justify-between cursor-pointer">
          Suggestion :
        </div>
        <div className="flex items-center gap-2 text-primary-500 ">
          <span>user interface</span>
          <span>user experience</span>
          <span>web design</span>
          <span>interface</span>
          <span>app</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-primary-500 max-lg:flex-col">
        <span className="text-gray-900">3,145,684</span>
        <span className="text-gray-700">results find for “ui/ux design”</span>
      </div>
    </div>
  );
}
