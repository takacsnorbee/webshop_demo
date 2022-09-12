interface props {
    label: string
    type: string
    name: string
    onChange: (
        event:
          React.ChangeEvent<HTMLSelectElement>
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLFormElement>,)=>void;
    value: string
}

function SideBarInput({
  label, type, name, onChange, value,
}:props):JSX.Element {
  return (
    <label htmlFor={name}>
      {label}
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />
    </label>
  );
}

export default SideBarInput;
