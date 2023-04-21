import ControlProvider from "./context/ControlProvider";
import ManagementControl from "./page/ManagementControl";
import './App.css'

function App() {
  return (
    <ControlProvider>
      <div>
        <ManagementControl />
      </div>
    </ControlProvider>
  );
}

export default App;
