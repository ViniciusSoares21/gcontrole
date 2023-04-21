import ControlProvider from "./context/ControlProvider";
import ManagementControl from "./page/ManagementControl";

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
