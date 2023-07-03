import './App.css';
import TodoIndex from './components/todoIndex'
import TodoCreate from './components/todoCreate'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <h1>THE TODO APP!</h1>
      <Router>
        <Routes>
          <Route path='/index' element={<TodoIndex />} />
          <Route path='/add' element={<TodoCreate />} />
        </Routes>
      </Router>

    </>
  )
}

export default App;
