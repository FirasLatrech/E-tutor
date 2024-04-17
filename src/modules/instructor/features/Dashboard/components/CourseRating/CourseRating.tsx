import React from 'react';

function CourseRating() {
  return (
    <div className="w-[40%] flex flex-col gap-[0.1rem]">
      <div className="bg-white flex gap-1 items-center justify-between p-4">
        <h1 className="text-gray-900 font-semibold">Overall Course Rating</h1>
        <p>Today</p>
      </div>
    </div>
  );
}

export default CourseRating;
