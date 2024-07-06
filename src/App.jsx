
import { Routes, Route } from "react-router-dom";
import Components from "./pages/Components";
import Test from "./pages/Test";

const App = () => {

  return (
    <section className="px-4 pt-10 pb-32 space-y-20">
      <Routes>
        <Route path="/" index element={<Components />}></Route>
        <Route path="/labo" index element={<Test />}></Route>
      </Routes>
    </section>
  );
};

export default App;
