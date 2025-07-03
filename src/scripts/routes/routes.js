import DashboardPage from "../views/pages/dashboard";
import DeviceLocation from "../views/pages/device-location";


const routes = {
    '/':DashboardPage,
    '/dashboard': DashboardPage,
    '/device-location' : DeviceLocation
};

export default routes;