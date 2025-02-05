declare module "@renzycode/react-native-pdf-webview" {
  import { ComponentType } from "react";
  import { ViewProps } from "react-native";

  interface PDFWebviewProps extends ViewProps {
    src?: string;
  }

  const PDFWebview: ComponentType<PDFWebviewProps>;
  export default PDFWebview;
}
