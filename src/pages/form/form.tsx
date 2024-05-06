import { CheckElegibility } from "./check-elegibility";
import { SignUpUpdate } from "./signup-update";

export const Form = () => {
  return (
    <div className="flex flex-col gap-8 p-8 justify-center items-center">
      <CheckElegibility />
      <SignUpUpdate />
    </div>
  );
};
