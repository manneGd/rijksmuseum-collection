import style from "./TextInput.module.scss";
import {type Control, Controller, type FieldValues, type Path} from "react-hook-form";

export type TextInputProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>
  placeholder?: HTMLInputElement["placeholder"];
  type?: HTMLInputElement["type"]
}

const TextInput = <TFieldValues extends FieldValues, >({
  name, placeholder, type, control,
}: TextInputProps<TFieldValues>) => {
  return  (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <input
            {...field}
            className={style.input}
            placeholder={placeholder}
            type={type ?? "text"}
            value={field.value}
            onChange={field.onChange}
          />
        );
      }}
    />
  );
};

export default TextInput;