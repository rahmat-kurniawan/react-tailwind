import React from "react";

const ListProject = (props) => (
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Author</th>
      </tr>
    </thead>
    <tbody>
      {props.datas.length > 0 ? (
        props.datas.map((data) => (
          <tr key={data.id}>
            <td>{data.title}</td>
            <td>{data.author}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Data</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ListProject;
