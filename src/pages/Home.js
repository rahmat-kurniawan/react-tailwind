import React from "react";
import Item from "../components/Item";
import Search from "../components/Search";

function Home() {
  const projectsData = [
    {
      id: 1,
      name: "Project Laravel",
      folder: ["D", "BackEndDevelopment", "Laravel"],
    },
    {
      id: 2,
      name: "Project NodeJS",
      folder: ["D", "BackEndDevelopment", "NodeJS"],
    },
    {
      id: 3,
      name: "Project Go",
      folder: ["D", "BackEndDevelopment", "Go"],
    },
    {
      id: 4,
      name: "Project Python",
      folder: ["D", "BackEndDevelopment", "Python"],
    },
    {
      id: 5,
      name: "Project Ruby",
      folder: ["D", "BackEndDevelopment", "Ruby"],
    },
  ];

  return (
    <div>
      <Search />
      {projectsData.map((data) => (
        <Item data={data} />
      ))}
    </div>
  );
}

export default Home;
