import React from "react";

function Error() {
  return (
    <div class="bg-red-100 p-5 w-full sm:w-1/2">
      <div class="flex space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="flex-none fill-current text-red-500 h-4 w-4"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z"></path>
        </svg>
        <div class="leading-tight flex flex-col space-y-2">
          <div class="text-sm font-medium text-red-700">404</div>
          <div class="flex-1 leading-snug text-sm text-red-600">
            Page Not Found
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
