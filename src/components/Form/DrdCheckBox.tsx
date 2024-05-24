import { Checkbox } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Controller } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
};

const DrdCheckBox = ({ name, label }: TInputProps) => {
  return (
    <div className="w-full mb-2 md:mb-5">
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <FormItem>
            <Checkbox {...field} id={name}>
              {label}
            </Checkbox>
            {error && <small className="text-red-500">{error.message}</small>}
          </FormItem>
        )}
      />
    </div>
  );
};

export default DrdCheckBox;
