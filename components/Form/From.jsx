const Form = ({ handleSubmitWrapper, inputNumRef, children, className, v }) => {
  return (
    <form className={className} onSubmit={handleSubmitWrapper}>
      <h2 className="text-gray-200 text-2xl font-bold mb-4">
        Paste your match ID
      </h2>
      <div className="flex">
        <input
          className=" bg-gray-700 text-gray-200 rounded-md px-4 py-2 w-full transition-colors duration-500"
          type="text"
          name="matchid"
          placeholder={v}
          ref={inputNumRef}
        />
        <div>
          <button
            className="bg-red-600 text-white rounded-md px-4 py-2 ml-3 hover:bg-red-700 transition-colors duration-500 "
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
      {children}
    </form>
  );
};

export default Form;
