import React, { forwardRef, PropsWithChildren, Ref } from "react";

import { BaseProps } from "../types/BaseProps";
import { OrNull } from "../types/OrNull";

const Icon = forwardRef(
  ({ className, style, ...props }: PropsWithChildren<BaseProps>, ref: Ref<OrNull<HTMLSpanElement>>) => (
    <span {...props} ref={ref} style={style} className={className} />
  ),
);

export default Icon;
