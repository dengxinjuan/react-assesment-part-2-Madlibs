import { useState } from "react";
import MadlibsForm from "./MadlibsForm";
import Story from "./Story";
import "./App.css";

const Madlibs = () => {
  /*the original story here*/
  const [story, setStory] = useState({
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  });

  /*toggle the view*/

  const [isShown, setIsShown] = useState(false);

  /*functon pass to get data from form*/
  const getData = (story) => {
    let newStory = { ...story };
    setStory(newStory);
    setIsShown(true);
  };

  /*reset the page*/
  const resetMadlibs = () => {
    setIsShown(false);
  };

  return (
    <div>
      <MadlibsForm
        getData={getData}
        isShown={isShown ? "Story-hidden" : "Story-shown"}
      />
      <Story
        isShown={isShown ? "Story-shown" : "Story-hidden"}
        noun={story.noun}
        noun2={story.noun2}
        adjective={story.adjective}
        color={story.color}
        resetMadlibs={resetMadlibs}
      />
    </div>
  );
};

export default Madlibs;
