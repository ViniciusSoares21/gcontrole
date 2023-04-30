import ControlProvider from "./context/ControlProvider";
import ManagementControl from "./page/ManagementControl";
import './App.css'
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <ControlProvider>
      <Routes>
        <Route path="/" element={ <ManagementControl />} />
        <Route path="/analytics/payment" element={ <ManagementControl />} />
        <Route path="/analytics/category" element={ <ManagementControl />} />
        <Route path="*" element={ <NotFound />}/>
      </Routes>
    </ControlProvider>
  );
}

export default App;
