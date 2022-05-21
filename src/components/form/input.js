const Input = ({ type, name, handleChange }) => (
  <input
    type={type}
    className="px-4 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12"
    name={name}
    autoComplete="off"
    autoCorrect="off"
    autoCapitalize="off"
    spellCheck={false}
    onChange={(e) => handleChange(e)}
  />
);

export default Input;
