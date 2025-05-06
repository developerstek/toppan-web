import { Tag } from "antd";
import { Images } from "./images";
import {
  AgentPerformanceSvg,
  CustomerSvgIcon,
  DashboardSvg,
  DocumentIconSVG,
  OnboardingSvg,
  PendingSvg,
  ReportingModuleSvg,
  VerificationReportSvg,
} from "./svg";
import { SiderbarDataType } from "./types";
export const securityQuestionData = [
  {
    value: "firstJobTitle",
    label: "What was the title of your first job?",
  },
  {
    value: "firstCompanyName",
    label:
      "What is the name of the company where you had your first full-time position?",
  },
  {
    value: "firstManagerName",
    label: "What was the name of your first manager or supervisor?",
  },
  {
    value: "highestDegreeInstitution",
    label:
      "What is the name of the institution where you completed your highest degree?",
  },
  {
    value: "firstWorkDeviceModel",
    label: "What was the model of your first work-issued laptop or phone?",
  },
  {
    value: "firstProjectColleague",
    label:
      "What is the last name of the colleague you worked with most during your first project?",
  },
];

export const SideBarData: SiderbarDataType[] = [
  {
    key: "1",
    icon: (
      <span>
        <DashboardSvg />
      </span>
    ),
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    key: "2",
    icon: (
      <span>
        <CustomerSvgIcon />
      </span>
    ),
    label: "Customers",
    link: "",
    children: [
      {
        key: "2-1",
        icon: <span></span>,
        label: "All Customers",
        link: "/all-customers",
      },
      {
        key: "2-2",
        icon: <span></span>,
        label: "My Customers",
        link: "/my-customers",
      },
    ],
  },
  {
    key: "3",
    icon: (
      <span>
        <ReportingModuleSvg />
      </span>
    ),
    label: "Reporting module",
    link: "/reporting",
  },
];

export const monthFilterData = [
  { value: "Daily", label: "Daily" },
  { value: "Weekly", label: "Weekly" },
  { value: "Monthly", label: "Monthly" },
  { value: "Yearly", label: "Yearly" },
];
export const riskFilterData = [
  { value: "Low", label: "Low" },
  { value: "Medium", label: "Medium" },
  { value: "High", label: "High" },
];

export const pieChartStatusData = [
  { name: "New", value: 20, color: "#2563EB" }, // Royal blue
  { name: "Approved", value: 25, color: "#09863D" }, // Sea green
  { name: "Pending", value: 20, color: "#2563EB" }, // Dodger blue
  { name: "Rejected", value: 19, color: "#EF4444" }, // Tomato
  { name: "Under review", value: 16, color: "#3DC2B2" }, // Light sea green
];

export const tableDataCustomer = [
  {
    key: "1",
    name: "Darrell Steward",
    reason: "Expired documents",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "2",
    name: "Darrell Steward",
    reason: "Expired documents",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "3",
    name: "Darrell Steward",
    reason: "Expired documents",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "4",
    name: "Darrell Steward",
    reason: "Expired documents",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "5",
    name: "Darrell Steward",
    reason: "Expired documents",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "6",
    name: "Darrell Steward",
    reason: "Expired documents",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "7",
    name: "Darrell Steward",
    reason: "Expired documents",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "8",
    name: "Darrell Steward",
    reason: "Expired documents",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "9",
    name: "Darrell Steward",
    reason: "Expired documents",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "10",
    name: "Darrell Steward",
    reason: "Expired documents",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "11",
    name: "Darrell Steward",
    reason: "Expired documents",
    date: "01-01-2025, 10:25am",
  },
];

export const columnsCustomer = [
  {
    title: "Customer Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Reason",
    dataIndex: "reason",
    key: "reason",
  },
  {
    title: "Date & time ",
    dataIndex: "date",
    key: "date",
  },
];
export const columnsAllCustomers = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    align: "start",
    sorter: (a: any, b: any) => a.name.length - b.name.length,
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    align: "center",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    align: "center",
  },
  {
    title: "DOB",
    dataIndex: "dob",
    key: "dob",
    align: "center",
  },
  {
    title: "Onboarding status",
    dataIndex: "status",
    key: "status",
    align: "center",
    render: (text: string) => {
      return (
        <span
          className={`status_${text.toLowerCase()}`}
          style={{
            color:
              text === "Pending"
                ? "#2563EB"
                : text === "Approved"
                ? "#09863D"
                : text === "Rejected"
                ? "#EF4444"
                : text === "Under Review"
                ? "#FF9966"
                : text === "Blocked"
                ? "#EF4444"
                : text === "Flagged"
                ? "#FF9966"
                : "#000000",
          }}
        >
          {text}
        </span>
      );
    },
  },
  {
    title: "Risk score",
    dataIndex: "risk",
    key: "risk",
    align: "center",
  },
  {
    title: "Modified date & time",
    dataIndex: "date",
    key: "date",
    align: "end",
  },
];

export const allCustomersData = [
  {
    key: "1",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Pending",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "2",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Pending",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "3",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Pending",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "4",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Pending",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "5",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Pending",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
];
export const allCustomersApprovedData = [
  {
    key: "1",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Approved",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "2",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Approved",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "3",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Approved",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "4",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Approved",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "5",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Approved",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
];
export const allCustomersRejectedData = [
  {
    key: "1",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Rejected",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "2",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Rejected",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "3",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Rejected",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "4",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Rejected",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "5",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Rejected",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
];
export const allCustomersUnderReviewData = [
  {
    key: "1",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Under Review",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "2",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Under Review",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "3",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Under Review",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "4",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Under Review",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "5",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Under Review",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
];
export const allCustomersBlockedData = [
  {
    key: "1",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Blocked",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "2",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Blocked",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "3",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Blocked",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "4",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Blocked",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "5",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Blocked",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
];
export const allCustomersFlaggedData = [
  {
    key: "1",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Flagged",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "2",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Flagged",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "3",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Flagged",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "4",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Flagged",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
  {
    key: "5",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Flagged",
    risk: "45%",
    date: "01-01-2025, 10:25am",
  },
];

export const columnsMyCustomers = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    align: "start",
    sorter: (a: any, b: any) => a.name.length - b.name.length,
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    align: "center",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    align: "center",
  },
  {
    title: "DOB",
    dataIndex: "dob",
    key: "dob",
    align: "center",
  },
  {
    title: "Onboarding status",
    dataIndex: "status",
    key: "status",
    align: "center",
    render: (text: string) => {
      return (
        <span
          className={`status_${text.toLowerCase()}`}
          style={{
            color:
              text === "Pending"
                ? "#2563EB"
                : text === "Approved"
                ? "#09863D"
                : text === "Rejected"
                ? "#EF4444"
                : text === "Under Review"
                ? "#FF9966"
                : text === "Blocked"
                ? "#EF4444"
                : text === "Flagged"
                ? "#FF9966"
                : "#000000",
          }}
        >
          {text}
        </span>
      );
    },
  },
  {
    title: "Risk score",
    dataIndex: "risk",
    key: "risk",
    align: "center",
  },
  {
    title: "Last action taken",
    dataIndex: "action_taken",
    key: "action_taken",
    align: "center",
    render: (text: string) => {
      return (
        <span
          className={`status_${text.toLowerCase()}`}
          style={{
            color:
              text === "Pending"
                ? "#2563EB"
                : text === "Approved"
                ? "#09863D"
                : text === "Rejected"
                ? "#EF4444"
                : text === "Under Review"
                ? "#FF9966"
                : text === "Blocked"
                ? "#EF4444"
                : text === "Flagged"
                ? "#FF9966"
                : "#000000",
          }}
        >
          {text}
        </span>
      );
    },
  },
  {
    title: "Assigned agent",
    dataIndex: "agent",
    key: "agent",
    align: "center",
  },
  {
    title: "Compliance flags",
    dataIndex: "compliance",
    key: "compliance",
    align: "end",
  },
];

export const myCustomersData = [
  {
    key: "1",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Pending",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "2",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Pending",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "3",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Pending",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "4",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Pending",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "5",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Pending",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
];
export const myCustomersApprovedData = [
  {
    key: "1",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Approved",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "2",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Approved",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "3",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Approved",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "4",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Approved",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "5",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Approved",
    risk: "45%",
    action_taken: "Approved",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
];
export const myCustomersRejectedData = [
  {
    key: "1",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Rejected",
    risk: "45%",
    action_taken: "Approved",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "2",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Rejected",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "3",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Rejected",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "4",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Rejected",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "5",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Rejected",
    risk: "45%",
    action_taken: "Rejected",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
];
export const myCustomersUnderReviewData = [
  {
    key: "1",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Under Review",
    risk: "45%",
    action_taken: "Approved",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "2",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Under Review",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "3",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Under Review",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "4",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Under Review",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "5",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Under Review",
    risk: "45%",
    action_taken: "Rejected",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
];
export const myCustomersBlockedData = [
  {
    key: "1",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Blocked",
    risk: "45%",
    action_taken: "Approved",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "2",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Blocked",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "3",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Blocked",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "4",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Blocked",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "5",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Blocked",
    risk: "45%",
    action_taken: "Rejected",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
];
export const myCustomersFlaggedData = [
  {
    key: "1",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Flagged",
    risk: "45%",
    action_taken: "Approved",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "2",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Flagged",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "3",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Flagged",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "4",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Flagged",
    risk: "45%",
    action_taken: "Pending",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
  {
    key: "5",
    name: "Darrell Steward",
    id: "1222222222222222",
    gender: "Male",
    dob: "12-07-1991",
    status: "Flagged",
    risk: "45%",
    action_taken: "Rejected",
    agent: "Darrell Steward",
    compliance: "Duplicate identities",
  },
];

export const individualRiskData = [
  {
    title: "Scan documents",
    percentage: 70,
    priority: "High",
  },
  {
    title: "Facial verification",
    percentage: 30,
    priority: "Low",
  },
  {
    title: "AML results",
    percentage: 30,
    priority: "Medium",
  },
];

export const PEPRiskClassificationData = [
  {
    title: "PEP 01",
    percentage: 30,
    priority: "Low",
  },
  {
    title: "PEP 02",
    percentage: 30,
    priority: "Low",
  },
  {
    title: "PEP 03",
    percentage: 50,
    priority: "Medium",
  },
  {
    title: "PEP 04",
    percentage: 90,
    priority: "High",
  },
];

export const sessionInfoData = [
  {
    label: "Browser detail",
    value: "Google chorme",
  },
  {
    label: "Device details",
    value: "Web",
  },
  {
    label: "IP address",
    value: "192.168.1.1",
  },
  {
    label: "Geolocation",
    value: "New york, USA",
  },
];

export const acvitiyLogData = [
  {
    title: "Profile updated",
    date: "March 14, 2025 - 10:32 AM",
    desp: "Profile was successfully updated. Please review the details below",
    action_by: "Haider ali",
    device: "192.168.1.10 via web",
    pre_value: "(123) 456-7890",
    new_value: "(987) 654-3210",
  },
  {
    title: "Approval granted",
    date: "March 14, 2025 - 10:32 AM",
    desp: "Uploaded document has been successfully approved.",
    action_by: "Haider ali",
    device: "203.120.45.6 via mobile",
    pre_value: "(123) 456-7890",
    new_value: "(987) 654-3210",
  },
  {
    title: "Rejection issued",
    date: "March 14, 2025 - 10:32 AM",
    desp: "Profile was successfully updated. Please review the details below",
    action_by: "Haider ali",
    device: "192.168.1.10 via web",
    pre_value: "(123) 456-7890",
    new_value: "(987) 654-3210",
  },
  {
    title: "Profile update successful",
    date: "March 14, 2025 - 10:32 AM",
    desp: "Profile was successfully updated. Please review the details below",
    action_by: "Haider ali",
    device: "192.168.1.10 via web",
  },
];

export const verificationData = [
  {
    status: "previous",
    imageUrl: Images?.verificationImage,
  },
  {
    status: "new",
    imageUrl: Images?.verificationImage,
  },
];

export const FacialVerificationScoreData = [
  {
    title: "Liveness check score",
    percentage: 90,
  },
  {
    title: "Facial match score",
    percentage: 40,
  },
];

export const FacialVerificationDocData = [
  {
    type: "Face",
    device: "Live picture taken from iPhone",
    imageUrl: Images?.verificationImage,
    status: "Passed",
  },
  {
    type: "Document photo",
    device: "Live picture taken from iPhone",
    imageUrl: Images?.cardFrontImage,
    status: "Failed",
  },
];

export const ReportingListingData = [
  {
    icon: <DocumentIconSVG />,
    title: "Active/ inactive user statistics report",
    desp: "Track and compare user engagement with a clear breakdown of active vs. inactive users over time.",
  },
  {
    icon: <AgentPerformanceSvg />,
    title: "Bank agent performance report",
    desp: "Evaluate agent efficiency, productivity with key performance metrics and customer interaction insights.",
  },
  {
    icon: <OnboardingSvg />,
    title: "Onboarding performance report",
    desp: "Measure the effectiveness & efficiency of the onboarding process through key engagement and completion metrics.",
  },
  {
    icon: <VerificationReportSvg />,
    title: "Verification success & failure rates report",
    desp: "Analyze identity verify outcomes to monitor success rates, identify failure trends, enhance verification processes.",
  },
  {
    icon: <PendingSvg />,
    title: "Pending & escalated cases report",
    desp: "Monitor and track pending & escalated cases to ensure timely resolution and effective issue management",
  },
];

export const reportDetailFilters = [
  {
    placeholder: "User ID",
    title: "Search by",
    is_search: true,
    type: "select",
    options: [
      {
        label: "123456",
        value: "123456",
      },
      {
        label: "123456",
        value: "123456",
      },
      {
        label: "123456",
        value: "123456",
      },
    ],
  },
  {
    placeholder: "Role",
    title: "Role",
    is_search: false,
    type: "select",
    options: [
      {
        label: "Admin",
        value: "Admin",
      },
      {
        label: "Compiance Officer",
        value: "Compiance Officer",
      },
      {
        label: "Finance",
        value: "Finance",
      },
      {
        label: "Maker",
        value: "Maker",
      },
      {
        label: "Checker",
        value: "Checker",
      },
    ],
  },
  {
    placeholder: "Department/Branch",
    title: "Department/Branch",
    is_search: false,
    type: "select",
    options: [
      {
        label: "SG admin office",
        value: "SG admin office",
      },
      {
        label: "New York HQ",
        value: "New York HQ",
      },
      {
        label: "SG admin office",
        value: "SG admin office",
      },
      {
        label: "SG admin office",
        value: "SG admin office",
      },
      {
        label: "New York HQ",
        value: "New York HQ",
      },
      {
        label: "SG admin office",
        value: "SG admin office",
      },
    ],
  },
  {
    placeholder: "Email address",
    title: "Search by",
    is_search: true,
    type: "select",
    options: [
      {
        label: "test@gmail.com",
        value: "test@gmail.com",
      },
      {
        label: "account@gmail.com",
        value: "account@gmail.com",
      },
      {
        label: "john@test.com",
        value: "john@test.com",
      },
    ],
  },
  {
    placeholder: "Status",
    title: "Status",
    is_search: false,
    type: "select",
    options: [
      {
        label: "Active",
        value: "Active",
      },
      {
        label: "Inactive",
        value: "Inactive",
      },
    ],
  },
  {
    placeholder: "Last login date",
    title: "Last login date",
    is_search: false,
    type: "date_rangepicker",
  },
  {
    placeholder: "Account creation date",
    title: "Account creation date",
    is_search: false,
    type: "date_rangepicker",
  },
  {
    placeholder: "Deactivation date",
    title: "Deactivation date",
    is_search: false,
    type: "date_rangepicker",
  },
  {
    placeholder: "Access level",
    title: "Access level",
    is_search: false,
    type: "select",
    options: [
      {
        label: "Full access",
        value: "Full access",
      },
      {
        label: "Restricted access",
        value: "Restricted access",
      },
    ],
  },
];
export const columnKeys = [
  "user_id",
  "fullName",
  "role",
  "Department/Branch",
  "phone_no",
  "email",
  "status",
  "last_login",
  "account_creation",
  "deactivation_reason",
  "deactivation_date",
  "access_level",
];

export const reportDetailData = [
  {
    user_id: "123456",
    fullName: "John Doe",
    role: "Admin",
    department: "SG admin office",
    email: "ahmed.khan@email.com",
    phone_no: "+971-50-112233",
    status: "Active",
    last_login: "2025-04-10",
    account_creation: "2025-04-10",
    deactivation_date: "2025-04-10",
    deactivation_reason: "left organization",
    access_level: "Full access",
  },
  {
    user_id: "123456",
    fullName: "John Doe",
    role: "Admin",
    department: "SG admin office",
    email: "ahmed.khan@email.com",
    phone_no: "+971-50-112233",
    status: "Inactive",
    last_login: "2025-04-10",
    account_creation: "2025-04-10",
    deactivation_date: "2025-04-10",
    deactivation_reason: "left organization",
    access_level: "Full access",
  },
];

export const columnKeyMap: Record<string, string> = {
  "Department/Branch": "department",
  // add other overrides if needed
};

export const verificationPoints = [
  "Document gender match",
  "Date of birth verification",
  "Document issue date & expiry check",
  "Detection of tampering or forged documents",
  "Document visibility",
  "Document must not be expired",
  "Document front & back consistency",
  "Document type consistency",
  "Selfie match with ID photo",
  "High-risk AML match",
  "Expiry date validation",
  "Address document validation",
  "Duplicate identity detection",
  "Document detail match",
  "Selfie photo mismatch",
  "ID number verification",
  "Address proof validation",
];

export const SettingNotificationData = [
  {
    key: "customer",
    title: "Customer Onboarding & Management Module",
    items: [
      {
        key: "new-application",
        label: "New Application Assigned",
        enabled: true,
      },
      {
        key: "application-status",
        label: "Application Status Update",
        enabled: false,
      },
      {
        key: "document-verification",
        label: "Document Verification Failed",
        enabled: false,
      },
      {
        key: "services-declined",
        label: "Services Declined Mentioned",
        enabled: false,
      },
      { key: "resubmission", label: "Resubmission Request", enabled: true },
      { key: "escalation", label: "Escalation Request", enabled: false },
      {
        key: "approval-pending",
        label: "Approval Request Pending",
        enabled: false,
      },
      {
        key: "override-action",
        label: "Override Action Logged",
        enabled: false,
      },
      {
        key: "override-action-logged",
        label: "Override Action Logged",
        enabled: false,
      },
    ],
  },
  {
    key: "security",
    title: "Security & Risk Management Module",
    items: [
      {
        key: "unauthorized-access",
        label: "Unauthorized Access Attempt",
        enabled: true,
      },
      {
        key: "fraudulent-document",
        label: "Fraudulent Document Attempt",
        enabled: false,
      },
    ],
  },
  {
    key: "compliance",
    title: "Compliance & Audit Module",
    items: [
      { key: "audit-log", label: "Audit Log Export", enabled: true },
      {
        key: "regulatory-request",
        label: "Regulatory Request",
        enabled: false,
      },
      {
        key: "compliance-case",
        label: "Compliance Case Assigned",
        enabled: false,
      },
    ],
  },
  {
    key: "notification",
    title: "Notification & Escalation Management Module",
    items: [
      {
        key: "escalation-notification",
        label: "Escalation Notification",
        enabled: true,
      },
      {
        key: "escalation-review",
        label: "Escalation Review Needed",
        enabled: false,
      },
    ],
  },
  {
    key: "user",
    title: "User & Role Administration Module",
    items: [
      { key: "new-user", label: "New User Created", enabled: true },
      {
        key: "role-permission",
        label: "Role or Permission Change",
        enabled: false,
      },
    ],
  },
  {
    key: "operational",
    title: "Operational Performance & Analytics Module",
    items: [
      {
        key: "agent-performance",
        label: "Agent Performance Report",
        enabled: true,
      },
    ],
  },
  {
    key: "billing",
    title: "Billing & License Management Module",
    items: [
      {
        key: "monthly-license",
        label: "Monthly License Summary",
        enabled: true,
      },
      {
        key: "license-expiry",
        label: "License Expiry Warning",
        enabled: false,
      },
      { key: "invoice-generated", label: "Invoice Generated", enabled: false },
      { key: "over-usage", label: "Over Usage Alert", enabled: false },
    ],
  },
];

export const activeSessions = [
  {
    key: "1",
    device: "macOS",
    browser: "122222222222222",
    ipAddress: "172.0.0.1",
    loginTime: "03/06/25 11:54 AM",
  },
  {
    key: "2",
    device: "Windows",
    browser: "122222222222222",
    ipAddress: "172.0.0.1",
    loginTime: "03/06/25 11:54 AM",
  },
  {
    key: "3",
    device: "Macbook Pro",
    browser: "122222222222222",
    ipAddress: "172.0.0.1",
    loginTime: "03/06/25 11:54 AM",
  },
];

// Sample data for login history
export const loginHistory = [
  {
    key: "1",
    lastLogin: "03/06/25 11:54 AM",
    id: "122222222222222",
    ipAddress: "172.0.0.1",
    loginAttempt: "Failed",
  },
  {
    key: "2",
    lastLogin: "03/06/25 11:54 AM",
    id: "122222222222222",
    ipAddress: "172.0.0.1",
    loginAttempt: "Failed",
  },
  {
    key: "3",
    lastLogin: "03/06/25 11:54 AM",
    id: "122222222222222",
    ipAddress: "172.0.0.1",
    loginAttempt: "Failed",
  },
  {
    key: "4",
    lastLogin: "03/06/25 11:54 AM",
    id: "122222222222222",
    ipAddress: "172.0.0.1",
    loginAttempt: "Success",
  },
  {
    key: "5",
    lastLogin: "03/06/25 11:54 AM",
    id: "122222222222222",
    ipAddress: "172.0.0.1",
    loginAttempt: "Failed",
  },
  {
    key: "6",
    lastLogin: "03/06/25 11:54 AM",
    id: "122222222222222",
    ipAddress: "172.0.0.1",
    loginAttempt: "Success",
  },
];

// Active sessions table columns
export const activeSessionsColumns = [
  {
    title: "Device",
    dataIndex: "device",
    key: "device",
  },
  {
    title: "Browser",
    dataIndex: "browser",
    key: "browser",
  },
  {
    title: "IP address",
    dataIndex: "ipAddress",
    key: "ipAddress",
  },
  {
    title: "Login time",
    dataIndex: "loginTime",
    key: "loginTime",
  },
];

// Login history table columns
export const loginHistoryColumns = [
  {
    title: "Last login",
    dataIndex: "lastLogin",
    key: "lastLogin",
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "IP address",
    dataIndex: "ipAddress",
    key: "ipAddress",
  },
  {
    title: "Login attempt",
    dataIndex: "loginAttempt",
    key: "loginAttempt",
    render: (text: string) => (
      <Tag color={text === "Success" ? "success" : "error"}>{text}</Tag>
    ),
  },
];
