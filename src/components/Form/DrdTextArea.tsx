import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { Controller } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
};

const DrdTextArea = ({ name, label, placeholder }: TInputProps) => {
  return (
    <div className="w-full mb-2 md:mb-5">
      <Controller
        name={name}
        render={({ field }) => (
          <FormItem label={label}>
            <TextArea
              {...field}
              rows={3}
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

export default DrdTextArea;