import React, { useEffect, useRef } from 'react';
import { View, Text, Alert } from 'react-native';
import { WebView } from 'react-native-webview';


const OrderScreen = () => {
    const myWeb = useRef();
    useEffect(() => {
        myWeb.current.postMessage('1111');
    }, [])
    const handleMessage = (e) => {
        console.log(e.nativeEvent.data);
    }
    const myScript = `
       const body= document.getElementByTagName('body')[0];
       document.addEventListener("message",function(event) {
           alert(JSON.stringify(event))
        }, false);
        true;
    `
    return (
        <WebView source={{ uri: 'https://24h.com.vn/' }}
            ref={myWeb}
            onMessage={handleMessage}
            injectedJavaScript={myScript}
            javaScriptEnabledAndroid={true}
        />

    )
}



export default OrderScreen;