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
            {/* <input
              {...register("state", { required: true })}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            /> */}
            <select
              {...register("state", { required: true })}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              defaultValue=""
            >
              <option value="">Select State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">Washington DC</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="PR">Puerto Rico</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VI">Virgin Islands</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>

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
