import jsLogo from "../../assets/jslogo.svg";

export default function Logo() {
  return (
    <div
      className="flex-center cursor-pointer transition-all duration-300 ease-in hover:scale-125"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img src={jsLogo} alt="Logo" width="55" height="55" />
    </div>
  );
}
