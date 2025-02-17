const ToDo = (props) => (
    <tr>
      <td>
        <label>{props.id}</label>
      </td>
      <td>
        <input placegolder="Edit to-do" />
      </td>
      <td>
        <label>{props.createdAt}</label>
      </td>
    </tr>
  );

  export default ToDo;