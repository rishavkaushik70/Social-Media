const WelcomeMessage = ({ onGetPost }) => {
  return (
    <center>
      <div className="text-secondary px-4 py-5 text-center">
        {" "}
        <div className="py-5">
          {" "}
          <h1 className="display-5 fw-bold text-black">
            There are no post available now
          </h1>{" "}
          <div className="col-lg-6 mx-auto welcomeMessage"> </div>{" "}
        </div>{" "}
      </div>
    </center>
  );
};

export default WelcomeMessage;
