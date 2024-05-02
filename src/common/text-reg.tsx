export const TextReg = (props: any) => {
  return (
    <p className={"text-xl text-center md:text-left " + props.customClass}>
      {props.text}
    </p>
  );
};
