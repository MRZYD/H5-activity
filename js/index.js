
//自定义字符串,用于拼接标签
var selectPath = "";

//自定义数组
var selectArr = ['直播引流(招生)', '售卖录播课程', '直播带货(变现)', '直播开课培训', '综合都有', '综合都有'];

/****普通for循环****/
for (let i = 0; i < selectArr.length; i++) {
  // selectPath += "<div class='select-li'><span class='select-y'></span><span class='select-n'></span>" + selectArr[i] + "</div>";
  selectPath += "<div class='select-checkbox-li'><input class='checkbox' type='checkbox' name='path'>" + selectArr[i] + "</div>";
};
console.log(selectPath)

//拼接完字符串数组后用innerHTML把它渲染到页面中
document.getElementById("selectPath").innerHTML = selectPath;

//自定义字符串,用于拼接标签
var selectTrain = "";

//自定义数组
var trainArray = ['金融会计', '语言培训', '职业培训', 'K12培训', '企业内训', '其他场景'];

/****普通for循环****/
for (let i = 0; i < trainArray.length; i++) {
  // selectTrain += "<div class='select-li'><span class='select-y'></span><span class='select-n'></span>" + trainArray[i] + "</div>";
  selectTrain += "<span class='select-radio-li'><input class='radio' type='radio' name='path'>" + trainArray[i] + "</span>";
};
console.log(selectTrain)

//拼接完字符串数组后用innerHTML把它渲染到页面中
document.getElementById("selectTrain").innerHTML = selectTrain;


var userTel = '';

function telOnclick(e){
  console.log(e);
  userTel = e;
  let formmust = document.getElementById("formMust");
  formmust.style.display = "none";
  if(userTel == ''){
    formmust.style.display = "block";  
  }
}

var userTelTwo = '';

function telOnclickTwo(e){
  console.log(e);
  userTelTwo = e;
  let formmust = document.getElementById("formMustTwo");
  formmust.style.display = "none";
  if(userTelTwo == ''){
    formmust.style.display = "block";  
  }
}

var userTelPopup = '';

function telPopupOnclick(e){
  console.log(e);
  userTelPopup = e;
  let formmust = document.getElementById("formMustPopup");
  formmust.style.display = "none";
  if(userTelPopup == ''){
    formmust.style.display = "block";  
  }
}

// 关闭弹窗
function closePopup() {
  let popupBg = document.getElementById("popupBg");
  popupBg.style.display = 'none';
}

// 打开弹窗
function openPopup() {
  let popupBg = document.getElementById("popupBg");
  popupBg.style.display = 'block';
}