import {BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./component/movie"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/movie" element={<Movie />} />
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
