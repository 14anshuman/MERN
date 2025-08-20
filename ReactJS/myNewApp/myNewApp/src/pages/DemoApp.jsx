import React, { useRef, useState } from "react";

const DemoApp = () => {
  const inpRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState([]);

  const btnHandler = (e) => {
    e.preventDefault();
    // const text = inpRef.current.value;
    // console.log(text);
    // inpRef.current.value = ''; // Clear the input field after submission
    // You can add more functionality here, like sending data to a server or updating state
    // console.log(formRef.current.txt1.value);
    // console.log(formRef.current.txtArea.value);
    setFormData([
      ...formData,
      {
        [formRef.current.txt1.name]: formRef.current.txt1.value,
        [formRef.current.txtArea.name]: formRef.current.txtArea.value,
      },
    ]);
  };
  return (
    <>
      <h1>Demo App</h1>
      <form method="post" className="w-50 mx-auto" ref={formRef}>
        <table className="table table-bordered table-dark">
          <tbody>
            <tr>
              <td>
                <textarea name="txtArea" ref={inpRef}></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" name="txt1" />
              </td>
            </tr>

            <tr>
              <td>
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={btnHandler}
                >
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      {formData.length > 0 && (
        formData.map((user, index) => (
        <div key={index} className="user-card">
            <h2>Form Data</h2>
          <p>Data:{user.txt1}</p>
          <p>Data:{user.txtArea}</p>
        </div>
      ))
      )}
    </>
  );
};

export default DemoApp;
