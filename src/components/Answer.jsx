const Answer = ({ content, isOpen, isLast }) => {
  return (
    <p
      className={`${
        isOpen
          ? `text-grayish-purple text-sm font-medium ${
              isLast ? `mt-8` : `my-8`
            }`
          : `hidden`
      }`}
    >
      {content}
    </p>
  );
};

export default Answer;
