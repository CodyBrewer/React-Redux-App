import React from "react";

const Classes = props => {
  const { classes, select } = props;
  console.log(classes);
  return (
    <ul>
      {classes.length
        ? classes.map(item => (
            <li
              onClick={() => {
                console.log(item);
                select(item.name);
              }}
              key={item.index}
            >
              {item.name}
            </li>
          ))
        : null}
    </ul>
  );
};

export default Classes;
