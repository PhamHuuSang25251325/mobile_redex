import React , { useContext} from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../shared/CustomHeader';
import {Context as AuthContext} from '../contexts/AuthContext';


const OrderSiteView = ({navigation}) => {
    const {logout}= useContext(AuthContext);
    const myScript = `
        
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
                      return encodeURIComponent(img_src);
                  }
              }

          } catch (e) {
              return "";
          }
      }

      function createDialog() {
        var url1= window.location.href;
        alert(url1.searchParams.get("id"))
          var myDialog = document.createElement("div");
          myDialog.style.position = "fixed";
          myDialog.style.bottom = "0";
          myDialog.style.width = '100%';
          myDialog.style.height = '100px';
          myDialog.style.zIndex = 10000000;
          const inputNote = document.createElement("input");
          inputNote.placeholder = "Ghi chú";
          myDialog.appendChild(inputNote);
          const btnViewCart = document.createElement("button");
          btnViewCart.innerText = "Xem thuộc tính";
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
                      alert(getImgLink())
                      alert(window.location.href);
                      const request = new XMLHttpRequest()
                      var formData = new FormData();
                      formData.append("title", "Groucho");
                      formData.append("body", "Groucho2121");
                      formData.append("userId", 1);
                      request.open('POST', 'https://jsonplaceholder.typicode.com/posts', true)
                      request.setRequestHeader("Content-Type", "multipart/form-data");
                      request.onreadystatechange = function () {
                          if (this.readyState === XMLHttpRequest.DONE) {
                              const data = JSON.parse(this.response);
                              alert(JSON.stringify(data));
                          }else{
                            alert(12121)
                          }
                      }

                      request.send(JSON.stringify({
                        title: 'foo',
                        body: 'bar',
                        userId: 2
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
      true; // note: this is required, or you'll sometimes get silent failures
    `;
    return (
        <SafeAreaView style={{flex : 1}}>
            <CustomHeader title="Site View" navigation={navigation}/>
            <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                <Text>Order Site View</Text>
                
            </View>
        </SafeAreaView>

    )
}



export default OrderSiteView;