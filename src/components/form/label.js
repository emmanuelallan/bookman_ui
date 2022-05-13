const Label = ({ name, title }) => (
  <label
    htmlFor={name}
    className="block text-body-dark font-semibold text-sm leading-none mb-3"
  >
    {title}
  </label>
);

export default Label;
