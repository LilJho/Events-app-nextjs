import { useRef } from "react";
import Button from "../ui/Button";

function EventsSearch({ onSearch }) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    onSearch(selectedYear, selectedMonth);
  };
  return (
    <form
      onSubmit={submitHandler}
      className="my-[2rem] mx-auto shadow p-4 bg-white rounded-md w-[90%] max-w-[40rem] flex justify-between flex-col gap-4 md:flex-row"
    >
      <div className="flex flex-col w-full gap-4 md:w-[80%] md:flex-row">
        <div className="flex-[1] flex gap-4 items-center justify-between">
          <label htmlFor="year" className="font-bold">
            Year
          </label>
          <select
            ref={yearInputRef}
            id="year"
            className="text-inherit bg-white rounded-md w-[70%] p-1 md:w-full border border-solid border-gray-600"
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="flex-[1] flex gap-4 items-center justify-between">
          <label htmlFor="month" className="font-bold">
            Month
          </label>
          <select
            ref={monthInputRef}
            id="month"
            className="text-inherit bg-white rounded-md w-[70%] p-1 md:w-full border border-solid border-gray-600"
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
