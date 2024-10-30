import React from "react";

const FormControls = ({ FormControls = [], formData, setFormData }) => {
  function renderComponentByType() {}
  return (
    <div className="flex flex-col gap-3">
      {FormControls.map((controlItem) => (
        <div key={controlItem.name}></div>
      ))}
    </div>
  );
};

export default FormControls;
