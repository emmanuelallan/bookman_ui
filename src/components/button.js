const Button = ({ value }) => (
  <button className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-light border border-transparent hover:bg-accentH px-5 py-0 h-12 w-full">
    {value}
  </button>
);

export default Button;
