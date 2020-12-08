import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const ItemProject = (props) => (
  <div className="p-2 bg-white rounded-lg flex justify-between mb-2 hover:border-blue-400">
    <div className="flex flex-col">
      <span className="text-md pb-1">{props.data.title}</span>
      <span className="text-xs text-gray-400">{props.data.author}</span>
    </div>
    <button className="flex-shrink-0 bg-blue-300 text-white text-base py-1 px-2 rounded-lg hover:bg-blue-500 focus:outline-none">
      <FontAwesomeIcon icon={faEllipsisH} />
    </button>
  </div>
);

export default ItemProject;
