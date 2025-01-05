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
import {
  ACCOUNT,
  BOOKINGS,
  CABINS,
  DASHBOARD,
  SETTINGS,
  USERS,
} from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to={"dashboard"} />} />
          <Route path={DASHBOARD} element={<Dashboard />} />
          <Route path={BOOKINGS} element={<Bookings />} />
          <Route path={CABINS} element={<Cabins />} />
          <Route path={USERS} element={<Users />} />
          <Route path={SETTINGS} element={<Settings />} />
          <Route path={ACCOUNT} element={<Account />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
