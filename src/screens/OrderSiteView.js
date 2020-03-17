import React, { useContext, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../shared/CustomHeader';
import { WebView } from 'react-native-webview';


const OrderSiteView = ({ navigation, route }) => {
    const { uri,title } = route.params;
    const [visible, setVisible] = useState(true);

    const showSpinner = () => {
        setVisible(true);
    }

    const hideSpinner = () => {
        setVisible(false);
    }

    const handleMessageAddToCart = e =>{
        debugger
        const data = JSON.parse(e.nativeEvent.data);
        console.log(data)
    }


    const myScript = `
    var css = ".sang-style{background: #FFF; position : fixed;bottom : 0; width : 100%; z-index : 99999999999; padding: 5px 10px}.sang-style input{width: 100%; padding: 8px 10px; border-radius: 2px; margin-bottom: 5px; border: 1px solid #ddd}.sang-style button{width:50%; padding: 10px 10px;color:#FFF;background:rgb(1, 82, 230);border:none}.sang-style button:last-child{background:rgb(230, 64, 1)}";
    var myStyle = document.createElement("style");
    myStyle.innerText = css;
    const head = document.getElementsByTagName("head")[0];
    head.appendChild(myStyle);

      const body = document.getElementsByTagName("body")[0];
      function getShopId(prop) {
          const shop = document.querySelector(".shop-wrapper .shop-title-wrapper");
          if (shop) {
              if (prop === 'shop_id' || prop === 'item_id') {
                  let href = 'https:' + shop.getAttribute('href');
                  if (href) {
                      const url = new URL(href);
                      if (prop === 'shop_id') {
                          return url.searchParams.get("user_id");
                      }
                      return url.searchParams.get("item_id");
                  }
                  return '';
              }

          }
          return '';

      }

      function resizeImage(image) {
          return image.replace(/[0-9]{2,3}[x][0-9]{2,3}/g, '150x150');
      }
      function getImgLink() {
          try {
              let img_src = "";
              // taobao.com
              const modal_image = document.getElementsByClassName('modal-sku-image');
              if (modal_image.length) {

                  const img = modal_image[0].getElementsByTagName('img');
                  if (img.length) {
                      img_src = img[0].getAttribute('src');
                      img_src = resizeImage(img_src);
                      return  img_src;
                  }
              }

          } catch (e) {
              return "";
          }
      }

      function createDialog() {



          var myDialog = document.createElement("div");

          myDialog.classList.add("sang-style");
          const inputNote = document.createElement("input");
          inputNote.placeholder = "Ghi chú";
          myDialog.appendChild(inputNote);
          const btnViewCart = document.createElement("button");
          btnViewCart.innerText = "Xem thuộc tính";
          btnViewCart.style.width = '50%'
          btnViewCart.addEventListener('click', function () {
              const xx = document.getElementsByClassName('sku card');
              xx[0].click();
          })
          myDialog.appendChild(btnViewCart);
          const btnAdd = document.createElement("button");
          btnAdd.innerText = "Cho vào giỏ hàng";
          btnAdd.addEventListener('click', function () {
              const props = document.getElementsByClassName('modal-sku-content');
              if (props.length) {
                  let count = 0;
                  for (var i = 0; i < props.length; i++) {
                      const selected_props = props[i].getElementsByClassName('modal-sku-content-item-active');
                      if (selected_props != null && selected_props != 'undefined')
                          count += selected_props.length;
                  }
                  if (count < props.length) {
                      alert('Chưa chọn đủ thuộc tính SP')
                  } else {
                      const img_link = getImgLink();
                      const url_sp=window.location.href;
                      window.ReactNativeWebView.postMessage(JSON.stringify({
                          image_link : img_link,
                          url : url_sp
                      }))
                  }
              } else {
                  alert('SP k can chon thuoc tinh')
              }

          })
          myDialog.appendChild(btnAdd);
          body.appendChild(myDialog);
      }
      createDialog();
    `;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title={title} navigation={navigation} />
            <WebView
                style={styles.WebViewStyle}
                source={{ uri }}
                onLoadStart={showSpinner}
                onLoad={hideSpinner}
                javaScriptEnabled={true}
                injectedJavaScript={myScript}
                onMessage={handleMessageAddToCart}
            />
            {visible && (
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <ActivityIndicator
                        size="large"
                    />
                </View>
            )}

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    WebViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: 20,
    },
})



export default OrderSiteView;