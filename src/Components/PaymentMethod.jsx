import Heading from "../Shared/Heading";
import payment from "../assets/footer-payment-method.webp";

const PaymentMethod = () => {
  return (
    <div className="font my-14">



      {/* <div className="mx-auto text-center md:w-3/6 lg:w-2/6 ">
        <h1 className="text-3xl font-semibold wi">Payment Methods</h1>
        <p className="mt-3 text-sm text-gray-600"> 
          JekFly allows multiple payment methods that allows you to pay without
          any hassle. Enjoy our services with hassle free payments.
        </p>
      </div> */}
      <Heading
        title="Payment Methods"
        des="JekFly allows multiple payment methods that allows you to pay without any hassle. Enjoy our services with hassle free payments."
      ></Heading>
      {/* method  */}
      <div className="flex flex-col gap-6 px-4 mt-8 md:flex-row md:gap-10 md:px-10 lg:px-52">
        <div>
          <h1 className="mb-2 text-lg font-medium dark:text-black">
            Bangladeshi Taka (BDT){" "}
          </h1>
          <div>
            <img src={payment} alt="" />
          </div>
        </div>
        <div>
          <h1 className="mb-2 text-lg font-medium dark:text-black">
            United States Dollar (USD){" "}
          </h1>
          <div>
            <img src={payment} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
