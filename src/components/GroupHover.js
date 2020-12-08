import React from "react";

function GroupHover() {
  return (
    <div>
      <div class="group px-6 py-5 max-w-full mx-auto w-72 border border-indigo-500 border-opacity-25 cursor-pointer rounded-lg select-none overflow-hidden space-y-1 hover:bg-white hover:shadow-lg hover:border-transparent">
        <p class="font-semibold text-lg text-indigo-600 group-hover:text-gray-900">
          New Project
        </p>
        <p class="text-indigo-500 group-hover:text-gray-500">
          Create a new project from a variety of starting templates.
        </p>
      </div>
    </div>
  );
}

export default GroupHover;
