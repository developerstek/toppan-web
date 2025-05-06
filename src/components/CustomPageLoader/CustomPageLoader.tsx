import React from "react";
import { Images } from "../../utilities/images";

const CustomPageLoader: React.FC = () => {
  return (
    <div className="custom_page_loader">
      <img src={Images?.AppLoader} />
    </div>
  );
};

export default CustomPageLoader;
