import React from "react";

const Leaf = ({ attributes, children, leaf }) => {
  // eslint-disable-next-line no-underscore-dangle
  let _children;
  if (leaf.bold) {
    _children = <strong>{children}</strong>;
  } else if (leaf.code) {
    _children = (
      <pre>
        <code
          style={{
            backgroundColor: "#eee",
            border: "1px solid #999",
            display: "block",
            padding: "20px",
          }}
        >
          {children}
        </code>
      </pre>
    );
  } else if (leaf.italic) {
    _children = <em>{children}</em>;
  } else if (leaf.underline) {
    _children = <u>{children}</u>;
  } else {
    _children = children;
  }

  return <span {...attributes}>{_children}</span>;
};

export default Leaf;
