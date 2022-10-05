import AddressIcon from "../icons/AddressIcon";
import DateIcon from "../icons/DateIcon";
import LogisticsItem from "./LogisticsItem";

function EventLogistics({ date, address, image, imageAlt }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(",", "\n");
  return (
    <section className="shadow-md rounded-md bg-[#2b2b2b] p-8 max-w-[50rem] w-[80%] my-[-3rem] mx-auto text-[#d5eeeb] flex justify-between gap-4 flex-col items-center md:p-8 md:my-[-5rem] md:mx-auto md:gap-[3rem] md:flex-row md:items-stretch">
      <div className="w-[10rem] h-[10rem] rounded-[50%] overflow-hidden border-[5px] border-solid border-[white] md:w-[20rem] md:h-[20rem]">
        <img
          src={`/${image}`}
          alt={imageAlt}
          className="w-[10rem] h-[10rem] object-cover md:w-[20rem] md:h-[20rem]"
        />
      </div>
      <ul className="flex flex-[3] gap-8 justify-center items-center flex-col md:items-start">
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address className="whitespace-pre">{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
