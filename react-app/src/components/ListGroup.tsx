// import { Fragment } from "react";

import { useState } from "react";

function ListGroup() {
  //render a list
  // const items = ["New York", "London", "Paris", "Tokyo"];

  //render list dynamiclly
  let items = ["New York", "London", "Paris", "Tokyo"];
  // let selectedIndex = 0;
  //state hook
  const [selectedIndex, setSelectedIndex] = useState(-1); //state management
  // arr[0]; //variable(selectedIndex)
  // arr[1]; //updater function

  // items = [];

  // items.map((item) => <li>{item}</li>);

  return (
    // <Fragment>
    <>
      <h1>List</h1>
      <ul className="list-group">
        {/* {items.length === 0 && <p>No item found</p>} */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log(item, index)}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
        ;
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
    // </Fragment>
  );
}

export default ListGroup;
