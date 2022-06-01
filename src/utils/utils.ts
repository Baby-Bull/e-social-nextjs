export const replaceLabelByTranslate = (message: string, textReplace: string | number) =>
  message.replace("%s", textReplace.toString());
