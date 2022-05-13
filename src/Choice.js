const Choice = ({ name, value, label, handle }) => (
  <label>
    {name}
    <input name={name} type='checkbox' value={value} onChange={handle} />
    <span>{label}</span>
  </label>
);

export default Choice;
