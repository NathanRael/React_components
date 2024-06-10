
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Components from "./pages/Components";

const App = () => {
  // const [search, setSearch] = useState("");

  return (
    <section className="px-4 pt-10 pb-32 space-y-20">
      <Routes>
        <Route path="/" index element={<Components />}></Route>
      </Routes>
    </section>
  );
};

export default App;
