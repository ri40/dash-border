interface IProps {
  disabled: boolean;
  text:string;
}
function Button(props: IProps) {
  return (
    <div className="flex justify-center items-center pb-[60px]">
      <button
        className=" bg-garagblackColor w-[211px] h-[48px] rounded-lg"
        disabled={props.disabled}
        type="submit"
      >
        <span
          className={`'text-[16px] text-whiteColor font-cairoMedium'}`}
        >
          {props.text}
        </span>
      </button>
    </div>
  );
}
export default Button;
