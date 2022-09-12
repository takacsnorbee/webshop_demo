interface props {
    label: string
    id: string
    type: string
    name: string
    onChange: (
        event:
          React.ChangeEvent<HTMLSelectElement>
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLFormElement>,)=>void;
    checked: boolean
}

function SideBarCheckbox({
  label, id, type, name, onChange, checked,
}:props):JSX.Element {
  return (
    <label htmlFor={id}>
      {label}
      <input
        id={id}
        type={type}
        name={name}
        onChange={onChange}
        checked={checked}
      />
    </label>
  );
}

export default SideBarCheckbox;
