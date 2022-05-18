import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { MemorizeTable } from "./component/TableCom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <p>Hello I am working</p>
        <MemorizeTable />
      </StyledEngineProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
