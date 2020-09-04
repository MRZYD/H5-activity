
//自定义字符串,用于拼接标签
var selectPath = "";

//自定义数组
var selectArr = ['直播引流(招生)', '售卖录播课程', '直播带货(变现)', '直播开课培训', '综合都有', '综合都有'];

/****普通for循环****/
for (let i = 0; i < selectArr.length; i++) {
  // selectPath += "<div class='select-li'><span class='select-y'></span><span class='select-n'></span>" + selectArr[i] + "</div>";
  selectPath += "<div class='select-li'><input class='checkbox' type='checkbox' name='path'>" + selectArr[i] + "</div>";
};
console.log(selectPath)

//拼接完字符串数组后用innerHTML把它渲染到页面中
document.getElementById("selectPath").innerHTML = selectPath;