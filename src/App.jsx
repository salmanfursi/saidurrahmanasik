import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import Landing from "./pages/landing";
import NotFound from "./COMPONANT/share/NotFound";
import MyWorks from "./COMPONANT/my-works/MyWorks";
import FontsWork from "./COMPONANT/my-works/FontsWork";
import Graphics from "./COMPONANT/my-works/Graphics";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="work" element={<MyWorks />}>
            <Route path="fonts" element={<FontsWork />} />
            <Route path="graphics" element={<Graphics />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
