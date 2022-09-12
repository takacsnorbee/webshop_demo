import './FormInput.css';

interface props {
    wrapperClass: string,
    inputClass: string,
    inputType: string,
    inputTitle: string,
    handleOnChange: any, // todo change any
}

function FormInput({
  wrapperClass, inputType, inputTitle, handleOnChange, inputClass,
}:props):JSX.Element {
  return (
    <div className={wrapperClass}>
      <input
        className={inputClass}
        type={inputType}
        onChange={handleOnChange}
        placeholder=" "
        required
      />
      <span>{inputTitle}</span>
    </div>
  );
}

export default FormInput;
