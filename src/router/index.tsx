import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import AuthLayout from "../Layouts/AuthLayout";
import CustomPageLoader from "../components/CustomPageLoader/CustomPageLoader";
import EditScanDocument from "../pages/Customers/EditScanDocument";
import EditAdditionalDocument from "../pages/Customers/EditAdditionalDocument";

const LoginPage = lazy(() => import("../pages/AuthPages/Login"));
const ForgotPasswordPage = lazy(
  () => import("../pages/AuthPages/ForgotPassword")
);
const OtpVerification = lazy(
  () => import("../pages/AuthPages/OtpVerification")
);
const ResetPassword = lazy(() => import("../pages/AuthPages/ResetPassword"));
const SecurityQuesSetup = lazy(
  () => import("../pages/AuthPages/SecurityQuesSetup")
);
const Home = lazy(() => import("../pages/Home/Home"));
const ReportingModule = lazy(
  () => import("../pages/ReportingModule/ReportingModule")
);
const ReportDetails = lazy(
  () => import("../pages/ReportDetails/ReportDetails")
);
const AllCustomers = lazy(() => import("../pages/Customers/AllCustomers"));
const CustomersDetailPage = lazy(
  () => import("../pages/Customers/CustomersDetailPage")
);
const MyCustomers = lazy(() => import("../pages/Customers/MyCustomers"));
const VerificationPoints = lazy(
  () => import("../pages/VerificationPoints/VerificationPoints")
);

const EditCustomersProfile = lazy(
  () => import("../pages/Customers/EditCustomerProfile")
);

const DashboardLayout = lazy(() => import("../Layouts/DashboardLayout"));
const SettingsLayout = lazy(() => import("../Layouts/SettingsLayout"));
const ProfileSettings = lazy(() => import("../pages/settings/ProfileSettings"));
const SecuritySettings = lazy(
  () => import("../pages/settings/SettingSecuirty")
);
const SettingNotification = lazy(
  () => import("../pages/settings/SettingNotification")
);
const SettingEditProfile = lazy(
  () => import("../pages/settings/SettingsEditProfile")
);

const publicRoutes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <AuthLayout Children={<LoginPage />} />
      </Suspense>
    ),
  },
  {
    path: "/security-questions",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <AuthLayout Children={<SecurityQuesSetup />} />
      </Suspense>
    ),
  },
  {
    path: "/forget-password",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <AuthLayout Children={<ForgotPasswordPage />} />
      </Suspense>
    ),
  },
  {
    path: "/otp-verification",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <AuthLayout Children={<OtpVerification />} />
      </Suspense>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <AuthLayout Children={<ResetPassword />} />
      </Suspense>
    ),
  },
];

const protectedRoutes = [
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <DashboardLayout Children={<Home />} />
      </Suspense>
    ),
  },
  {
    path: "/all-customers",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <DashboardLayout Children={<AllCustomers />} />
      </Suspense>
    ),
  },
  {
    path: "/reporting",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <DashboardLayout Children={<ReportingModule />} />
      </Suspense>
    ),
  },
  {
    path: "/reporting/report-details/:id",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <DashboardLayout Children={<ReportDetails />} />
      </Suspense>
    ),
  },
  {
    path: "/my-customers/:id",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <DashboardLayout Children={<CustomersDetailPage />} />
      </Suspense>
    ),
  },
  {
    path: "/my-customers",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <DashboardLayout Children={<MyCustomers />} />
      </Suspense>
    ),
  },
  {
    path: "/my-customers/verification-points",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <DashboardLayout Children={<VerificationPoints />} />
      </Suspense>
    ),
  },
  {
    path: "/edit/customer-profile/:id",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <DashboardLayout Children={<EditCustomersProfile />} />
      </Suspense>
    ),
  },
  {
    path: "/edit/scan-document/:id",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <DashboardLayout Children={<EditScanDocument />} />
      </Suspense>
    ),
  },
  {
    path: "/edit/additional-document/:id",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <DashboardLayout Children={<EditAdditionalDocument />} />
      </Suspense>
    ),
  },
  {
    path: "/settings",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <DashboardLayout
          Children={<Navigate to="/settings/profile" replace />}
        />
      </Suspense>
    ),
  },
  {
    path: "/settings/profile",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <DashboardLayout
          Children={<SettingsLayout Children={<ProfileSettings />} />}
        />
      </Suspense>
    ),
  },
  {
    path: "/settings/security",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <DashboardLayout
          Children={<SettingsLayout Children={<SecuritySettings />} />}
        />
      </Suspense>
    ),
  },
  {
    path: "/settings/notifications",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <DashboardLayout
          Children={<SettingsLayout Children={<SettingNotification />} />}
        />
      </Suspense>
    ),
  },
  {
    path: "/settings/edit-profile",
    element: (
      <Suspense fallback={<CustomPageLoader />}>
        <DashboardLayout
          Children={<SettingsLayout Children={<SettingEditProfile />} />}
        />
      </Suspense>
    ),
  },
];

export const router = createBrowserRouter([
  ...publicRoutes,
  ...protectedRoutes,
  {
    path: "*",
    element: <Navigate to="/dashboard" replace />,
  },
]);
