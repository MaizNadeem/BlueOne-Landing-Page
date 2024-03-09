import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Thank you | BlueOne Hospitality Management",
};

const ThankyouPage = () => {
  return (
    <>
      <Breadcrumb pageName="Thank You!" />

      <section className="bg-white py-20 dark:bg-dark-2 lg:pt-[110px] lg:pb-[150px]">
        <div className="container mx-auto">
            
            <div className="w-full px-4 flex flex-col items-center justify-center">
              <div className="text-center">
                <h3 className="mb-5 text-2xl font-semibold text-dark dark:text-white">
                  Thank you for filling in the form.
                </h3>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                  We will be in touch soon!
                </p>
                <a
                  href="/#"
                  className="rounded-md bg-dark px-7 py-3 text-base font-medium text-white transition hover:bg-primary"
                >
                  Go To Home
                </a>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default ThankyouPage;
