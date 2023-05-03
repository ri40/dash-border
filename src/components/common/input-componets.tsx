export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
}

export function Input({ type, label, ...props }: InputProps) {
  return (
    <div className="grid grid-cols-1 pt-2 pb-4 ">
      <label
        htmlFor={props.name}
        className={"text-[20px] font-cairoSemiBold leading-[30px]"}
      >
        {label}

        <input
          {...props}
          style={{ fontSize: "14px" }}
          type={type}
          className={` w-full py-9 px-9 text-xl border text-black bg-whiteColor rounded-md focus:outline-none focus:shadow-none placeholder:text-[16px] placeholder:items-center font-cairoMedium`}
        />
      </label>
    </div>
  );
}

export default Input;
