import React from "react";

function Ping() {
  return (
    <div>
      <span class="relative inline-flex rounded-md shadow-sm">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-purple-400 text-base leading-6 font-medium rounded-md text-purple-800 bg-white hover:text-purple-700 focus:border-purple-300 transition ease-in-out duration-150"
        >
          Transactions
        </button>
        <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span>
      </span>
    </div>
  );
}

export default Ping;
