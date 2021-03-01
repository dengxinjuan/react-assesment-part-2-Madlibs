const Story = ({ isShown, color, noun, noun2, adjective, resetMadlibs }) => {
  /* Your story and appropriate props passed to the function
		props: isShown, color, noun,noun2,adjective,resetMadlibs
	*/
  /* i will check whether they fill the form or not */
  const result = color && noun && noun2 && adjective;
  return (
    <div className={isShown}>
      <p>
        {result
          ? `There was a ${color} ${noun} who loved a ${adjective} ${noun2}!`
          : "You must fill all forms."}
      </p>

      <div>
        <button
          className={`button ${isShown ? "Story-shown" : "Story-hidden"}`}
          onClick={resetMadlibs}
          style={{ margin: "auto" }}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Story;
