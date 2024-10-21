import './App.css';
import ToDoTable from "./components/ToDoTable";

const todoes = [
    {
        id: 1,
        description: 'Buy groceries',
        assigned: 'John Doe'
    },
    {
        id: 2,
        description: 'Walk the dog',
        assigned: 'Jane Doe'
    },
    {
        id: 3,
        description: 'Read a book',
        assigned: 'Alice Smith'
    },
    {
        id: 4,
        description: 'Write some code',
        assigned: 'Bob Johnson'
    }
];


function App() {
    return (
        <div className='mt-5 container'>
            <div className='card'>
                <div className='card-header'>
                    <h1>Your Todos</h1>
                </div>
                <div className='card-body'>
                <ToDoTable todos={todoes}/>
                </div>
            </div>
        </div>
    );
}

export default App;
