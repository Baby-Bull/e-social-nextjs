import React from "react";

const Leaf = ({ attributes, children, leaf }) => {
  // eslint-disable-next-line no-underscore-dangle
  let _children;
  if (leaf.bold) {
    _children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    _children = <code>{children}</code>;
  }

  if (leaf.italic) {
    _children = <em>{children}</em>;
  }

  if (leaf.underline) {
    _children = <u>{children}</u>;
  }

  return <span {...attributes}>{_children}</span>;
};

export default Leaf;
