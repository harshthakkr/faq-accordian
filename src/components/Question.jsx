import plusIcon from "../assets/icon-plus.svg";
import minusIcon from "../assets/icon-minus.svg";

const Question = ({ content, isOpen, setIsOpen }) => {
  return (
    <div className="flex gap-3 justify-between items-center">
      <p className="text-md font-semibold hover:text-purple-700">{content}</p>
      {isOpen ? (
        <img
          src={minusIcon}
          className="cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <img
          src={plusIcon}
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      )}
    </div>
  );
};

export default Question;
