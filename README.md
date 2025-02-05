# react-native-pdf-webview

> A React Native component for displaying PDFs in a WebView with restricted download, printing, and tool access.

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

- 📄 View PDFs securely in a WebView
- 🔒 Restricts downloading, printing, and tool access
- 📱 Responsive to device width
- ⚡ Lightweight and easy to use

## Installation

```bash
yarn add @renzycode/react-native-pdf-webview
```

or

```bash
npm install --save @renzycode/react-native-pdf-webview
```

## Usage

```jsx
import React from 'react';
import { View } from 'react-native';
import PDFWebview from '@renzycode/react-native-pdf-webview';

const App = () => (
  <View style={{ flex: 1 }}>
    <PDFWebview src="https://example.com/sample.pdf" />
  </View>
);

export default App;
```

## Props

| Prop name  | Description                          | Type   | Required |
| ---------- | ------------------------------------ | ------ | -------- |
| `src`      | URL of the PDF to display            | string | true     |

## License

[MIT](LICENSE)
