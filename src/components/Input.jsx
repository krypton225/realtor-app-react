const Input = ({ idInput = "", typeInput = "", nameInput = "", placeHolderText = "" }) => (
    <input type={typeInput} name={nameInput} id={idInput} autoComplete="new-password"
        className="w-full mx-auto py-1 px-2 border border-slate-400 rounded-md placeholder:capitalize focus:outline-none active:outline-none" placeholder={placeHolderText} />
);

export default Input;