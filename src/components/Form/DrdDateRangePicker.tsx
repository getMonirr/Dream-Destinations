import { DatePicker } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Controller } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  prefix?: any;
};

const DrdDateRangePicker = ({
  name,
  label,
  placeholder,
  disabled,
  required,
  prefix,
}: TInputProps) => {
  return (
    <div className="w-full mb-2 md:mb-5">
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <FormItem label={label} required={required}>
            <DatePicker.RangePicker
              {...field}
              id={name}
              size="large"
              disabled={disabled}
              prefix={prefix}
            />
            {error && <small className="text-red-500">{error.message}</small>}
          </FormItem>
        )}
      />
    </div>
  );
};

export default DrdDateRangePicker;
