import React, { useEffect, useRef } from "react";
import {
  BackArrowSvg,
  CalenderIconSvg,
  DropdownIconSvg,
  ResetIconSvg,
  SearchIconSvg,
} from "../../utilities/svg";
import { useNavigate } from "react-router-dom";
import { DatePicker, Dropdown, Input, Select, Tag } from "antd";
import {
  columnKeyMap,
  columnKeys,
  reportDetailData,
  reportDetailFilters,
} from "../../utilities/data";
import CustomButton from "../../components/CustomButton/CustomButton";
import type { MenuProps } from "antd";
import { CustomTable } from "../../components/CustomTable/CustomTable";
import { formatTitle } from "../../utilities/helper";

const { RangePicker } = DatePicker;

const ReportDetails: React.FC = () => {
  const navigate = useNavigate();

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    const slider = scrollRef.current;
    let startX = e.pageX;
    let scrollLeft = slider.scrollLeft;

    const handleMouseMove = (moveEvent: globalThis.MouseEvent) => {
      if (!scrollRef.current) return;

      const x = moveEvent.pageX;
      const walk = (x - startX) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      slider.scrollLeft += e.deltaY;
    };

    slider.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      slider.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const items: MenuProps["items"] = [
    {
      label: "CSV",
      key: "1",
    },
    {
      label: "Excel",
      key: "2",
    },
    {
      label: "PDF",
      key: "3",
    },
  ];
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const columns = columnKeys.map(
    (
      key
    ): {
      title: string;
      dataIndex: string;
      key: string;
      render?: (
        text: any,
        record: (typeof reportDetailData)[number],
        index: number
      ) => React.ReactNode;
    } => {
      const dataIndex = columnKeyMap[key] || key;

      return {
        title: formatTitle(key),
        dataIndex,
        key,
        render:
          dataIndex === "status"
            ? (text) => (
                <Tag color={text === "Active" ? "green" : "red"}>{text}</Tag>
              )
            : undefined,
      };
    }
  );

  return (
    <div className="main_div_report_details">
      <div className="back_arrow_div">
        <div className="arrow" onClick={() => navigate(-1)}>
          <BackArrowSvg />
        </div>
        <p>Back</p>
      </div>

      <div className="header_report_details_title_div">
        <h1 className="header_report_details_title">
          Active/ inactive user statistics report
        </h1>

        <Dropdown menu={menuProps}>
          <CustomButton
            size="middle"
            text="Export"
            icon={<DropdownIconSvg />}
            iconPosition="end"
          />
        </Dropdown>
      </div>

      <div className="header_report_details">
        <Input
          size="small"
          placeholder="Search..."
          prefix={<SearchIconSvg />}
          className="search_field"
        />
        <div
          className="header_report_details_filters_div"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
        >
          {reportDetailFilters?.map((item, index) => {
            return (
              <div className="header_report_details_filters" key={index}>
                {item?.type === "select" ? (
                  <Select
                    size="small"
                    allowClear
                    options={item?.options}
                    placeholder={item?.placeholder}
                    className="filter_select"
                  />
                ) : (
                  <RangePicker
                    size="small"
                    prefix={<CalenderIconSvg />}
                    suffixIcon={false}
                    placeholder={[item?.placeholder, item?.placeholder]}
                    className="filter_datepicker"
                  />
                )}
              </div>
            );
          })}
        </div>
        <CustomButton
          text="Reset"
          size="small"
          color="primary"
          variant="outlined"
          icon={<ResetIconSvg />}
          iconPosition="start"
        />
      </div>
      <div className="table_div">
        <CustomTable
          columns={columns}
          dataSource={reportDetailData}
          scroll={{ x: 1366 }}
        />
      </div>
    </div>
  );
};

export default ReportDetails;
