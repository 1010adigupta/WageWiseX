import "./App.css";
import { useState } from "react";
import Edashboard from "./Components/Edashboard/Edashboard";
import Navbar from "./Components/Navbar/Navbar";
import Hdashboard from "./Components/Hdashboard/Hdashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import { AccountContextProvider } from "./Components/BiometricWallet/useAccount";

import Account from "./Components/BiometricWallet/Account";
import Form from "./Components/BiometricWallet/Form";
import { Center, Flex, Text, VStack } from "@chakra-ui/react";
import { WidgetPage } from "./Components/LiFi/LiFi";
import NFT from "./Components/NFT/NFT";
import EmpLogin from "./Components/Auth/EmpLogin";
import HRLogin from "./Components/Auth/HRLogin";

function App() {
  const [auth, setAuth] = useState(true);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/e/login" element={<EmpLogin />} />
          <Route path="/h/login" element={<HRLogin />} />
          {/* <Route
            path="/"
            element={auth ? <Edashboard /> : <Navigate to="/auth" />}
          > */}
          <Route path="/edashboard" element={<Edashboard />} />
          <Route path="/hdashboard" element={<Hdashboard />} />

          {/* </Route> */}
          <Route path="form" element={<Form />} />
          <Route path="/swap/*" element={<WidgetPage />} />
          <Route
            path="/auth"
            element={!auth ? <Auth /> : <Navigate to="/edashboard" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
