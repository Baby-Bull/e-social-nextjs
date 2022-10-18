import React, { forwardRef, PropsWithChildren, Ref } from "react";

import { BaseProps } from "../types/BaseProps";
import { OrNull } from "../types/OrNull";

const Toolbar = forwardRef(
  ({ className, ...props }: PropsWithChildren<BaseProps>, ref: Ref<OrNull<HTMLDivElement>>) => (
    <div {...props} ref={ref} className={className} />
  ),
);

export default Toolbar;
