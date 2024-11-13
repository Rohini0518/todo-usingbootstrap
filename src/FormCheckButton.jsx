import Form from "react-bootstrap/Form";

function FormCheckButton(props) {
  const taskList=props.tasksList
  console.log(props.taskIndex)
  console.log(taskList)


 

  return <Form.Check aria-label="option 1" className="form-checkbox" />;
}
export default FormCheckButton;
