import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin";
import Performance from "scenes/performance";
import Login from "scenes/login";
import Signup from "scenes/signup";

import { useAuthContext } from 'hooks/useauthContext';

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const {user} = useAuthContext();
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={user ? <Navigate to="/dashboard" replace /> : <Navigate to="/login"/>} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to="/dashboard" />} />
						  <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={!user ? <Navigate to="/login"/> : <Dashboard />} />
              <Route path="/products" element={!user ? <Navigate to="/login"/> : <Products />} />
              <Route path="/customers" element={!user ? <Navigate to="/login"/> : <Customers />} />
              <Route path="/transactions" element={!user ? <Navigate to="/login"/> : <Transactions />} />
              <Route path="/geography" element={!user ? <Navigate to="/login"/> : <Geography />} />
              <Route path="/overview" element={!user ? <Navigate to="/login"/> : <Overview />} />
              <Route path="/daily" element={!user ? <Navigate to="/login"/> : <Daily />} />
              <Route path="/monthly" element={!user ? <Navigate to="/login"/> : <Monthly />} />
              <Route path="/breakdown" element={!user ? <Navigate to="/login"/> : <Breakdown />} />
              <Route path="/admin" element={!user ? <Navigate to="/login"/> : <Admin />} />
              <Route path="/performance" element={!user ? <Navigate to="/login"/> : <Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;