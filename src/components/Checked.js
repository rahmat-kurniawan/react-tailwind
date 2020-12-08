import React from "react";

function Checked() {
  return (
    <div>
      <div class="p-4 max-w-xs mx-auto bg-white rounded-xl shadow-md">
        <label class="flex items-center space-x-3">
          <input
            type="checkbox"
            name="checked-demo"
            value="1"
            class="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none"
          />
          <span class="text-gray-900 font-medium">Option 1</span>
        </label>
      </div>
    </div>
  );
}

export default Checked;
