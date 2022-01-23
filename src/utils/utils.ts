export const replaceLabelByTranslate = (message: string, textReplace:string|number) => (
  message.replace('%s', textReplace.toString())
);

export const replaceMessage2 = (message, textReplace) => (
  message.replace('%s', textReplace)
);
