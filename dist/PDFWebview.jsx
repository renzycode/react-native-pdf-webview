import { View, Dimensions } from "react-native";
import { WebView } from "react-native-webview";

export default function PDFWebview({src}) {
    const deviceWidth = Dimensions.get("window").width;
    console.log("src: ", `https://linen-okapi-882592.hostingersite.com/react-native-pdf-viewer/api.php?source=${src}`);
    return (
        <View style={{ flex: 1, backgroundColor: "#f4f4f4" }}>
            <WebView
                source={{ uri: `https://linen-okapi-882592.hostingersite.com/react-native-pdf-viewer/api.php?source=${src}` }}
                style={{ flex: 1 }}
                scalesPageToFit={true}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                injectedJavaScript={`
                    document.body.style.width = '${deviceWidth}px !important';
                    document.body.style.overflowX = 'hidden'; 
                `}
            />
        </View>
    );
}
