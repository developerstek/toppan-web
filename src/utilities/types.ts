import type { TableProps } from "antd";
import { JSX } from "react";

export type SiderbarDataType = {
  key: string;
  icon: JSX.Element | React.ReactNode;
  label: string;
  link: string;
  children?: SiderbarDataType[];
};

export type CustomTableProps<T> = {
  columns: {
    title: string;
    dataIndex: string;
    key: string;
    render?: (text: any, record: T, index: number) => React.ReactNode;
  }[];
  dataSource: T[];
  loading?: boolean;
  rowKey?: string | ((record: T) => string);
  pagination?: TableProps<T>["pagination"];
  className?: string;
  scroll?: TableProps<T>["scroll"];
  onRow?: (record: T) => React.HTMLAttributes<HTMLElement>;
};

export type NotificationTypes = 'success' | 'error' | 'warning' | 'delete';