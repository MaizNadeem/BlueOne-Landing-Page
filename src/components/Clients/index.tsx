import SingleClient from "./SingleClient";
import { clientsData } from "./clientsData";

const Clients = () => {
  return (
    <section className="pb-20 dark:bg-dark">
      <div className="container px-4 flex flex-col items-center">
        <h2 className="mb-5 w-full text-center text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
          We&apos;ve Worked With
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 xl:gap-11 max-w-[900px]">
          {clientsData.map((client) => (
            <SingleClient key={client?.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
