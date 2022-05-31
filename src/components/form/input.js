const Input = ({ type, name, value, handleChange }) => (
  <input
    type={type}
    className="px-4 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12"
    name={name}
    value={value}
    autoComplete="off"
    autoCorrect="off"
    autoCapitalize="off"
    spellCheck={false}
    onChange={(e) => handleChange(e)}
  />
);

export default Input;
