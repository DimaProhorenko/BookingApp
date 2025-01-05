import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  Account,
  Bookings,
  Cabins,
  Dashboard,
  PageNotFound,
  Settings,
  Users,
} from "./pages";
import { AppLayout } from "./layouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to={"dashboard"} />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
