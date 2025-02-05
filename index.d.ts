declare module '@renzycode/react-native-pdf-webview' {
    import { ComponentType } from 'react';
  
    interface PDFWebviewProps {
      src?: string;
    }
  
    const PDFWebview: ComponentType<PDFWebviewProps>;
  
    export default PDFWebview;
  }
  