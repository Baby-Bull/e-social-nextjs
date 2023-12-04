export type Editor = "textbox" | "dropdown" | "checkbox" | "multi-selection" | "date-picker" | "password" | "textarea";

export interface IOptionProps {
  label: string;
  value: string;
}

export interface IFieldProps {
  required?: boolean;
  id: string;
  label?: string;
  placeholder?: string;
  editor?: Editor;
  /* The drop down items for the field */
  options?: IOptionProps[];
  value?: any;
  // eslint-disable-next-line no-unused-vars
  onChangeValue?: (key: string, value: any) => void;
  onChangeCheckbox?: () => void;
  error?: string;
}

export interface IPlaceholderProps {
  children: string;
}
