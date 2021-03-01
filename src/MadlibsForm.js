import { useState } from "react";

const MadlibsForm = ({ getData, isShown }) => {
  const [formData, setFormData] = useState({
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const gatherInput = (evt) => {
    evt.preventDefault();
    getData(formData);
    setFormData({
      noun: "",
      noun2: "",
      adjective: "",
      color: "",
    });
  };

  return (
    <div className={isShown}>
      <h1>Madlibs!</h1>
      <form onSubmit={gatherInput}>
        <div>
          <label htmlFor="noun"></label>
          <input
            onChange={handleChange}
            type="text"
            name="noun"
            value={formData.noun}
            id="noun"
            placeholder="noun"
          />
          {formData.noun}
        </div>

        <div>
          <label htmlFor="noun2"></label>
          <input
            onChange={handleChange}
            type="text"
            name="noun2"
            value={formData.noun2}
            id="noun2"
            placeholder="noun2"
          />
          {formData.noun2}
        </div>

        <div>
          <label htmlFor="adjective"></label>
          <input
            onChange={handleChange}
            type="text"
            name="adjective"
            value={formData.adjective}
            id="adjective"
            placeholder="adjective"
          />
          {formData.adjective}
        </div>

        <div>
          <label htmlFor="color"></label>
          <input
            onChange={handleChange}
            type="text"
            name="color"
            value={formData.color}
            id="color"
            placeholder="color"
          />
          {formData.color}
        </div>

        <button>Get Story!</button>
      </form>
    </div>
  );
};

export default MadlibsForm;
