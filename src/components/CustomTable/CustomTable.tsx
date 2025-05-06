import { Table } from "antd";
import { CustomTableProps } from "../../utilities/types";

export function CustomTable<T extends object>({
  columns,
  dataSource,
  loading = false,
  rowKey = "key",
  pagination = { pageSize: 10 },
  className = "",
  ...restProps
}: CustomTableProps<T>) {
  return (
    <div className={`custom-table-wrapper ${className}`}>
      <Table
        {...restProps}
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={rowKey}
        pagination={pagination}
        className="custom-table"
      />
    </div>
  );
}
