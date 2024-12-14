import { useForm } from "react-hook-form";

const PaymentInfoPart = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full overflow-hidden rounded-t-md border border-gray-400 bg-white pb-5 mb-6">
      <div className="rounded-md text center p-4 bg-orange-500">
        <h5 className="font-[700] text-[40px] text-white leading-7 text-center mb-4">
          FINAL STEP:
        </h5>
        <p className="font-[400] text-[20px] text-white leading-6 text-center">
          PAYMENT INFORMATION
        </p>
      </div>

      <p className="text-center pt-4 mb-[-10px]">We Accept:</p>
      <div className="flex justify-center items-center gap-4 mt-4">
        <img className="w-[50px]" src="visa.svg" />
        <img className="w-[50px]" src="mastercard.svg" />
      </div>

      <div className="p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              {...register("firstName", { required: true })}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.firstName && (
              <span className="text-red-500">First name is required</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              {...register("lastName", { required: true })}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.lastName && (
              <span className="text-red-500">Last name is required</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <input
              {...register("address", { required: true })}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.address && (
              <span className="text-red-500">Address is required</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Zip Code</label>
            <input
              {...register("zipCode", { required: true })}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.zipCode && (
              <span className="text-red-500">Zip code is required</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">City</label>
            <input
              {...register("city", { required: true })}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.city && (
              <span className="text-red-500">City is required</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">State/Region</label>
            <input
              {...register("state", { required: true })}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.state && (
              <span className="text-red-500">State/Region is required</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              {...register("phone", { required: true })}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.phone && (
              <span className="text-red-500">Phone is required</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              {...register("email", { required: true })}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-green-400 text-white py-8 rounded-md disabled:opacity-50 text-[22px]"
            disabled={!isValid}
          >
            RUSH MY ORDER
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentInfoPart;
