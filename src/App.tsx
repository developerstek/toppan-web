import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ConfigProvider } from "antd";
import { getThemeConfig } from "./styles/antd.theme";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const primaryColor = useSelector(
    (state: RootState) => state.theme.primaryColor
  );

  const theme = getThemeConfig(primaryColor);

  return (
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
