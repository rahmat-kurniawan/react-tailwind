import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ItemProject from "../components/ItemProject";

function Project() {
  const projectsData = [
    { id: 1, title: "Project Laravel", author: "Programmer Knowledge" },
    { id: 2, title: "Project NodeJS", author: "Web Devs Simplified" },
    { id: 3, title: "Project Go", author: "Tech with Tims" },
    { id: 4, title: "Project Python", author: "Tech with Tims" },
  ];

  return (
    <div className="bg-blue-100 p-2 rounded-lg">
      <div className="flex justify-between p-2">
        <h4 className="text-lg">List Project</h4>
        <Link
          to="/project-add"
          className="flex-shrink-0 bg-blue-300 text-white text-base py-2 px-4 rounded-lg hover:bg-blue-500 focus:outline-none"
        >
          <FontAwesomeIcon icon={faPlus} />
        </Link>
      </div>
      {projectsData.length > 0 ? (
        projectsData.map((data) => <ItemProject data={data} />)
      ) : (
        <h1>No data</h1>
      )}
    </div>
  );
}

export default Project;
