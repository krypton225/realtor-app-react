const MainButton = ({ typeBtn = "", btnBg = "", btnTextColor = "", btnInnerText = "", customStyles = "", children }) => (
    <button type={typeBtn}
        className={`w-full py-2 rounded-md ${customStyles} bg-${btnBg}-500 text-${btnTextColor}
            capitalize font-semibold cursor-pointer transition duration-[0.3s] hover:bg-${btnBg}-700`}>
        {children} {btnInnerText}
    </button>
);

export default MainButton;