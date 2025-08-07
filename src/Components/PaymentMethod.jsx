import Heading from "../Shared/Heading";
import payment from "../assets/footer-payment-method.webp";

const PaymentMethod = () => {
  return (
    <div className="font my-14">
        {/* heading */}
      {/* <div className="mx-auto text-center md:w-3/6 lg:w-2/6 ">
        <h1 className="text-3xl font-semibold wi">Payment Methods</h1>
        <p className="text-gray-600 mt-3  text-sm"> 
          JekFly allows multiple payment methods that allows you to pay without
          any hassle. Enjoy our services with hassle free payments.
        </p>
      </div> */}
      <Heading title='Payment Methods' des='JekFly allows multiple payment methods that allows you to pay without any hassle. Enjoy our services with hassle free payments.'></Heading>
      {/* method  */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 px-4 md:px-10 lg:px-52 mt-8">
        <div>
            <h1 className="text-lg font-medium mb-2">Bangladeshi Taka (BDT) </h1>
            <div>
                <img src={payment} alt="" />

            </div>
        </div>
        <div>
            <h1 className="text-lg font-medium mb-2">United States Dollar (USD) </h1>
            <div>
                <img src={payment} alt="" />

            </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
