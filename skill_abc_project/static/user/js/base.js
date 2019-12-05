// function srcToImage(selector, callback) {

//     let $selector = document.querySelector(selector);
//     $selector.onload = ()=>{
//         html2canvas($selector).then(canvas => {      
//             let image_src = canvas.toDataURL("image/jpeg");
//             console.log(selector,"image_src")
//             $('#skill_icon_wrapper').append('<img src="'+image_src+'">');
//             callback(dataURItoBlob(image_src));
//         });
//     };

   

//      // 문서내에 img 객체를 생성합니다
//     // let $selector = $(selector);
//     // var img = document.createElement("img");
//     // img.src = $(selector).attr('src');

//     // img.onload = ()=>{
//     //     var canvas = document.createElement("canvas");
//     //     var ctx = canvas.getContext("2d");

//     //     // 캔버스에 업로드된 이미지를 그려줍니다
//     //     ctx.drawImage(img, 0, 0);

//     //     // canvas 에 있는 이미지를 img 태그로 넣어줍니다
//     //     var dataurl = canvas.toDataURL("image/png");
//     //     $('#skill_icon_wrapper').append('<img src="'+dataurl+'">');
//     //     callback(self.dataURItoBlob(dataurl));
//     // };
// }

function srcToImage(image_url, callback) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        var dataurl = c.toDataURL("image/png");
        $('#skill_icon_wrapper').append('<img src="'+dataurl+'">');
    };
    img.src = image_url;
}


function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0){
        byteString = atob(dataURI.split(',')[1]);
    }else{
        byteString = unescape(dataURI.split(',')[1]);
    }

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}
