const Button = function (props) {
  return (
    <>
      <p>
        {" "}
        <button>
          <a href={props.link} target="_blank">
            {" "}
            Bottone per {props.text}{" "}
          </a>
        </button>{" "}
      </p>
    </>
  );
};

export default Button;
