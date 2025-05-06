import { ButtonProps, TabsProps } from "antd";

export interface AuthLayoutInterface {
  Children: React.ReactNode;
}
export interface DashboardLayoutInterface {
  Children: React.ReactNode;
}

export interface LoginFromSubmit {
  userName: string;
  temporaryPassword: string;
  newPassword: string;
}

export interface UserProfileEditFromSubmit {
  fullName: string;
  gender: string;
  expiryDate: Date;
  phone?: string;
  dob: Date;
  comment?: string;
  attachments?: any;
}

export interface AdditionalDocumentEditFromSubmit {
  title: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  answer1: string;
  answer2: string;
  gender: string;
  expiryDate: Date;
  phone?: string;
  dob: Date;
  comment?: string;
  attachments?: any;
}

export interface ThemeState {
  primaryColor: string;
}

export interface SecurityQuestionSubmit {
  securityQuestion: string;
  securityAnswer: string;
}

export interface CollapseState {
  isCollapsed: boolean;
}
export interface AuthOtpVerificationFromSubmit {
  otp: string;
}
export interface AuthForgetPasswordFromSubmit {
  email: string;
}
export interface AuthResetPasswordFromSubmit {
  password: string;
  newPassword: string;
}

export interface ColumnChartProps {
  data: number[];
  categories: string[];
  highlightedMonth: number;
}

interface DataItem {
  name: string;
  value: number;
  color: string;
}
export interface DonutChartProps {
  title?: string;
  data: DataItem[];
}

export interface FacialRecognitionAccuracyProps {
  successRate: number;
  failureRate: number;
}

export interface FilledButtonProps extends ButtonProps {
  text: string;
}

export interface CustomerActionsProps {
  missingDetailsPercentage: number;
  completeDetailsPercentage: number;
}

export interface CustomTabItem {
  label: React.ReactNode;
  key: string;
  children: React.ReactNode;
}

export interface CustomTabsProps {
  items: CustomTabItem[];
  type?: TabsProps["type"];
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
}

export interface RiskScoreData {
  title: string;
  priority: string;
  percentage: number;
}
export interface RiskScoreProps {
  Data: RiskScoreData;
}

export interface RiskScoreComponentProps extends RiskScoreProps {
  Data: RiskScoreData;
}

export interface InfoRowProps {
  label: string;
  value: string;
}

interface activityDataProps {
  title: string;
  date: string;
  desp: string;
  action_by: string;
  device: string;
  pre_value?: string;
  new_value?: string;
}
interface ActivityProps {
  Data: activityDataProps;
}
export interface ActivityLogsComponentProps extends ActivityProps {
  Data: activityDataProps;
}

export interface ScanImagesProps {
  documentImage: string;
  documentType?: string;
  onImageClick?: () => void;
  isVisible?: boolean;
  status?: string;
}

interface FacialVerificationScoreData {
  title: string;
  percentage: number;
}
interface FacialVerificationScoreProps {
  Data: FacialVerificationScoreData;
}
export interface FacialVerificationScoreComponentProps
  extends FacialVerificationScoreProps {
  Data: FacialVerificationScoreData;
}

export interface QBoxProps {
  question: string;
  answer: string;
  icon?: React.ReactNode;
  button?: {
    text: string;
    icon?: React.ReactNode;
    onClick?: () => void;
  };
  answerTitle?: string;
}

export interface ReportingListProps {
  icon: React.ReactNode;
  title: string;
  desp: string;
  id: number;
}

export interface DataType {
  [key: string]: any;
}

export interface FileUploadProps {
  uploadUrl: string;
  multiple?: boolean;
  customText?: {
    title?: string;
    uploadText?: string;
    label?: string;
  };
  onUploadSuccess?: (file: any) => void;
  onUploadError?: (file: any) => void;
  onFilesDropped?: (files: FileList) => void;
}

export interface modalProp {
  isModalOpen: boolean;
  handleOk: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  ModalBody: React.ReactNode;
}

export interface UploadedDocumentProps {
  fileName: string;
  fileSize: string;
  uploadTime: string;
  onClick?: () => void;
}
export interface ProfileInfoItemProps {
  label: string;
  value: string;
}

export interface MenuItem {
  key: string;
  icon: React.ReactNode;
  label: React.ReactNode;
  path: string;
}

export interface SettingLayoutProps {
  Children: React.ReactNode;
}

export interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  designation: string;
  language: string;
  dateFormat: string;
  timeZone: string;
  profilePicture?: File;
}

export interface NotificationItem {
  key: string;
  label: string;
  enabled: boolean;
}

export interface NotificationGroup {
  key: string;
  title: string;
  items: NotificationItem[];
}
