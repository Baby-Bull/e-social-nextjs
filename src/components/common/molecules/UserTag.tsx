import React, { FC } from "react";

import { IUserTag } from "src/constants/interfaces";

const UserTag: FC<IUserTag> = ({ tags, onClick }) => (
  <ul>
    {tags?.map((tag, index) => (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li onClick={() => onClick(tag)} key={index}>
        {tag}
      </li>
    ))}
  </ul>
);

export default UserTag;
