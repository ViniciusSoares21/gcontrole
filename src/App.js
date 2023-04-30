import ControlProvider from "./context/ControlProvider";
import ManagementControl from "./page/ManagementControl";
import './App.css'
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import AnalyticsPayment from "./components/analytics/AnalyticsPayment";
import AnalyticsCategory from "./components/analytics/AnalyticsCategory";

function App() {
  return (
    <ControlProvider>
      <Routes>
        <Route path="/" element={ <ManagementControl />} />
        <Route path="/analytics/payment" element={ <AnalyticsPayment />} />
        <Route path="/analytics/category" element={ <AnalyticsCategory />} />
        <Route path="*" element={ <NotFound />}/>
      </Routes>
    </ControlProvider>
  );
}

export default App;
