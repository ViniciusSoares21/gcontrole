import ControlProvider from "./context/ControlProvider";
import ManagementControl from "./page/ManagementControl";
import './App.css'
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import AnalyticsPayment from "./page/AnalyticsPayment";
import AnalyticsCategory from "./page/AnalyticsCategory";
import Donation from "./page/Donation";
import PrivacyPolicy from "./page/PrivacyPolicy";

function App() {
  return (
    <ControlProvider>
      <Routes>
        <Route path="/" element={ <ManagementControl />} />
        <Route path="/analytics/payment" element={ <AnalyticsPayment />} />
        <Route path="/analytics/category" element={ <AnalyticsCategory />} />
        <Route path="/donation" element={ <Donation />} />
        <Route path="/PrivacyPolicy" element={ <PrivacyPolicy />} />
        <Route path="*" element={ <NotFound />}/>
      </Routes>
    </ControlProvider>
  );
}

export default App;
