import Link from "next/link";

function Button({ children, link, onClick }) {
  if (link) {
    return (
      <Link href={link}>
        <a className="block no-underline cursor-pointer bg-[#03be9f] border border-[#03be9f] rounded-md text-[#dafff7] py-2 px-6 text-center shadow hover:bg-[#02afa1] hover:border-[#02afa1] active:bg-[#02afa1] active:border-[#02afa1]">
          {children}
        </a>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full text-inherit py-1 px-2 bg-[#03be9f] border border-solid border-[#03be9f] text-[#dafff7] rounded md:w-[20%]"
    >
      {children}
    </button>
  );
}

export default Button;
