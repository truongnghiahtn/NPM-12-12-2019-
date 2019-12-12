import React from "react";
import ItemTable from "../../components/ItemTable/ItemTable";

const Table = props => {
  const renderTbody = () => {
    return props.listCourse.map((item, index) => (
      <ItemTable course={item} key={index} />
    ));
  };
  return (
    <table className="table table-striped table-inverse">
      <thead className="thead-inverse">
        <tr>
          <th>Name</th>
          <th>Created by</th>
          <th>Published at</th>
          <th>Displayed</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{renderTbody()}</tbody>
    </table>
  );
};
export default Table;
