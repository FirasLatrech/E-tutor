import React from 'react';

export default function Suggestion() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex ">
        <div className="flex  items-center gap-2 p-3   h-[48px]  justify-between cursor-pointer">
          Suggestion :
        </div>
        <div className="flex items-center gap-2 text-primary-500">
          <span>user interface</span>
          <span>user experience</span>
          <span>web design</span>
          <span>interface</span>
          <span>app</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-primary-500">
        <span className="text-gray-900">3,145,684</span>
        <span className="text-gray-700">results find for “ui/ux design”</span>
      </div>
    </div>
  );
}
