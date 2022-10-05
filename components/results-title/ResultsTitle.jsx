import Button from "../ui/Button";

function ResultsTitle({ date }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  return (
    <section className="my-8 mx-auto w-[90%] max-w-[40rem] text-center">
      <h1 className="font-bold">Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
