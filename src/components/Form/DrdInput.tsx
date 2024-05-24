import { Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
};

const DrdInput = ({ type, name, label, placeholder }: TInputProps) => {
  return (
    <div className="w-full mb-2 md:mb-5">
      <Controller
        name={name}
        render={({ field }) => (
          <FormItem label={label}>
            <Input
              {...field}
              type={type}
              id={name}
              size="large"
              placeholder={placeholder}
            />
          </FormItem>
        )}
      />
    </div>
  );
};

export default DrdInput;
