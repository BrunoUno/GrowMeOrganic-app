import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Login from "./Login";
import Navbar from "./Navbar";
import Grid from "./Grid";
import Departments from "./Departments";
import NotFound from "./NotFound";
import "./index.css";

export default function App() {
  const [loginFlag, setLoginFlag] = useState(false);
  let setLoginFlagTS = {
    setLoginFlag: setLoginFlag,
    loginFlag: loginFlag,
  };
  return (
    <>
      <BrowserRouter>
        <Navbar {...setLoginFlagTS} />
        <Routes>
          <Route path="/" element={<Login {...setLoginFlagTS} />}></Route>
          {loginFlag && (
            <Route
              path="/dashboard/:firstName"
              element={
                <Container maxWidth="xl">
                  <div>
                    <Grid />
                  </div>
                  <div style={{ marginTop: "50px" }}>
                    <Departments />
                  </div>
                </Container>
              }
            ></Route>
          )}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
