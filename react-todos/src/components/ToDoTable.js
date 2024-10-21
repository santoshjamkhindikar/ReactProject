import ToDoRowItem from "./ToDoRowItem";

function toDoTable(props) {

  return (
    <table className='table table-hover'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Task</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map(todos => {
          return (
            <ToDoRowItem
              RowNumber={todos.id}
              rowDescription={todos.description}
              assigned={todos.assigned}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default toDoTable;