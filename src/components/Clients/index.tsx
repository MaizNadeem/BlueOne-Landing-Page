import SingleClient from "./SingleClient";
import { clientsData } from "./clientsData";

const Clients = () => {
  return (
    <section className="pb-20 dark:bg-dark">
      <div className="container px-4">
        <h2 className="mb-5 w-full text-center text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
          We've Worked With
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 xl:gap-11">
          {clientsData.map((client) => (
            <SingleClient key={client?.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
