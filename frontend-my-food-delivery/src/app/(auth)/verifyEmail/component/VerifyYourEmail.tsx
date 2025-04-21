import {IoIosArrowBack} from "react-icons/io";

export const VerifyYourEmail = () => {
  return (
    <div className="flex gap-8 flex-col w-[416px] p-6">
      <IoIosArrowBack className="w-6 h-6 rounded-md border-1 border-[#E4E4E7]" />
      <div>
        <p className="font-semibold text-2xl">Please verify Your Email</p>
        <p className="font-normal text-[16px] text-[#71717A]">
          We just sent an email to Test@gmail.com. Click the link in the email
          to verify your account.
        </p>
      </div>

      <button className="font-normal text-[16px] bg-black w-full text-white rounded-md">
        Resend email
      </button>
    </div>
  );
};
