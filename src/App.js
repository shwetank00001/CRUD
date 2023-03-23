import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "./pages/Update";
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Create />}/>
        <Route path="/read" element={<Read />}/>
        <Route exact path="/update" element={<Update />} />
      </Routes>

    </div>
  );
}

export default App;
