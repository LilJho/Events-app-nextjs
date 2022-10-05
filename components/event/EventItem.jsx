import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import DateIcon from "../icons/DateIcon";
import Button from "../ui/Button";

function EventItem({ title, image, date, location, id }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className="flex flex-col gap-4 m-4 overflow-hidden bg-white rounded-lg shadow lg:flex-row">
      <img
        src={"/" + image}
        alt={title}
        className="w-full object-cover h-[10rem] lg:w-[40%] lg:h-[14rem]"
      />
      <div className="w-full px-4 text-center lg:first-letter:w-[60%] lg:p-0 lg:text-left">
        <div className="">
          <h2 className="my-2 font-bold lg:my-4">{title}</h2>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 text-[#666]">
              <DateIcon />
            </div>
            <time className="text-[#666] font-bold">{humanReadableDate}</time>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 text-[#666]">
              <AddressIcon />
            </div>

            <address className="my-2 text-[#666] whitespace-pre">
              {formattedAddress}
            </address>
          </div>
        </div>
        <div className="flex flex-col p-4 lg:flex-row lg:justify-end">
          <Button link={exploreLink}>
            <span className="align-middle">Explore Event</span>
            <span className="inline-flex items-center justify-center w-5 h-5 ml-2 align-middle">
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
