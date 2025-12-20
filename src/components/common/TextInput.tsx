import type { JSX } from "react";
import type { InputProps } from "../../model/TextProps";

const TextInput = ({
  type,
  className,
  onChange,
  value,
  placeholder,
  
}: InputProps): JSX.Element => {
  return (
    <div className={`
      
        rounded-md
        border-2
        border-indigo-600
        bg-white
        transition-all
        duration-200
        focus-within:border-indigo-500
        focus-within:ring-2
        focus-within:ring-indigo-500/30
        ${className}
      `}>
      <input
        className="outline-none border-none w-full   px-2 py-1"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
