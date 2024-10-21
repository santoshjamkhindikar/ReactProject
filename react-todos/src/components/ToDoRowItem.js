function   TodoRowItem (props) {


    return (
      <tr>
        <th scope='row'>{props.RowNumber}</th>
        <td scope='row'>{props.rowDescription}</td>
        <td scope='row'>{props.assigned}</td>
      </tr>
  );
}

export default TodoRowItem;