import { TodoProvider } from './todoContext';
import TodoIU from './components/TodoUI';

function App() {
  return (
    <TodoProvider>
        <TodoIU />
    </TodoProvider>
  );
}

export default App;