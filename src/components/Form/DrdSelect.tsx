import { Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { SelectProps } from "antd/es/select";
import { Controller } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  prefix?: any;
  options: SelectProps[];
};

const DrdSelect = ({
  name,
  label,
  placeholder,
  disabled,
  required,
  prefix,
  options,
}: TInputProps) => {
  return (
    <div className="w-full mb-2 md:mb-5">
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <FormItem label={label} required={required}>
            <Select
              {...field}
              size="large"
              style={{ minWidth: 150 }}
              className="w-full md:w-auto"
              options={options}
              placeholder={placeholder}
            />
            {error && <small className="text-red-500">{error.message}</small>}
          </FormItem>
        )}
      />
    </div>
  );
};

export default DrdSelect;
