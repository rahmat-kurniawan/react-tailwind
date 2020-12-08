import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Item(props) {
  return (
    <div className="border-2 transition duration-500 ease-in-out hover:shadow-xl border-purple-50 p-2 flex justify-between max-w-lg items-center rounded-lg my-2">
      <div className="space-x-2 flex  items-center">
        <div className="bg-yellow-300 p-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-white h-8 w-8"
          >
            <path d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-small font-semibold">{props.data.name}</span>
          <span className="text-xs text-gray-500">
            {props.data.folder[0]}:/{props.data.folder[1]}/
            {props.data.folder[2]}
          </span>
        </div>
      </div>
      <div className="hover:bg-yellow-50 p-2 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-200 hover:text-gray-400 transition duration-500 ease-in-out h-5 w-5"
        >
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </div>
    </div>
  );
}

export default Item;
