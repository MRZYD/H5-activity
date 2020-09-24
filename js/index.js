// 关闭弹窗
function closePopup() {
	$(".popupBg").hide();
}

// 打开弹窗
function openPopup() {
	$(".popupBg").show();
}

function showMust() {
	if (userTel == '') {
		$(".formMustOne").show();
		$(".formMustTwo").show();
		$(".formMustPopup").show();
	}
}

var userName = '';  //用户名
var userTel = '';  //电话号码
var userRemarks = ''; //备注
var formType = '';  //提交信息位置

function namePopupOnclick(e) {
	userName = e;
}

function telPopupOnclick(e, idx) {
	userTel = e;
	if (idx == 1) {
		$(".formMustOne").hide();
	} else if (idx == 2) {
		$(".formMustTwo").hide();
	} else {
		$(".formMustPopup").hide();
	}
	showMust();
}

function textArea(e){
	userRemarks = e;
}

//提交表单
function formBtn(index) {
	if (index == 1) {
		formType = '页面顶部';  //最上面 
	} else if (index == 2) {
		formType = '页面底部'; //最下面
	} else {
		formType = '页面弹窗'; //弹窗
	}

	//头部多选表单
	var eduArray = [];
    $("#selectPath div").each(function () {
        if ($(this).find("input").is(':checked')) {
            eduArray.push($(this).find("span").text());
        }
	});	
	if (index == 1 && eduArray.length == 0) {
        alert("请选择解决问题！");
        return;
	}
	let eduText = eduArray.toString();

	//底部多选表单
	let culText = '';
    $("#selectTrain div").each(function () {
        if ($(this).find("input").is(':checked')) {
            culText = $(this).find("span").text();
        }
	});	
	if (index == 2 && !culText) {
        alert("请选择培训类型！");
        return;
	}
	

    if(userName=="" || userName=="您的姓名"){
        alert("请输入姓名!");
        if(index == 1){
            $("#userName1").focus();
        }else if(index == 2){
            $("#userName2").focus();
        }else{
            $("#userName3").focus();
        }
        return;
    }

    var pattern = /^1{1}[0-9]{10}$/;
    if(userTel=="" || userTel=="您的电话"){
        alert("请输入手机号!");
        if(index == 1){
            $("#userTel1").focus();
        }else if(index == 2){
            $("#userTel2").focus();
        }else{
            $("#userTel3").focus();
        }
        return;
    } else {
        if (!pattern.test(userTel)) {
            alert("请输入正确的手机号！");
            if(index == 1){
                $("#userTel1").focus();
            }else if(index == 2){
                $("#userTel2").focus();
            }else{
                $("#userTel3").focus();
            }
            return;
        }
    }	
    
	requirement = formType 
				+ ((index !== 1 || !eduText) ? '' : ('；解决问题：' + eduText)) 
				+ ((index !== 2 || !culText) ? '' : ('；培训类型：' + culText)) 
				+ ((!userRemarks) ? '' : ('；备注需求：' + userRemarks)) 

	addApply(index);
}


function addApply(index){
	
    console.log('requirement',requirement)
    $.ajax({
        url : "http://tj.268xue.com/customer/apply!addApplyInfo.action",
        data : {
            "user.userName":userName,
            "user.mobile":userTel,
            "user.requirement":requirement
        },
        type : "post",
        dataType : "json",
        cache : false,
        async : false,
        success : function(result) {
            alert("提交成功！");
            $(".nameInput,.telInput,.areaText").val("");
			$("#selectPath div").each(function (event) {$(this).find("input").prop("checked",'');})
			$("#selectTrain div").each(function (event) {$(this).find("input").prop("checked",'');})
			userName = '';
			userTel = '';
			userRemarks = '';
			requirement = '';
			eduArray = [];
			eduText = '';
			culText = '';
			showMust();
            if(index == 3){$(".popupBg").hide();}
        },
        error : function(error) {
			alert("提交成功！");
            $(".nameInput,.telInput,.areaText").val("");
			$("#selectPath div").each(function (event) {$(this).find("input").prop("checked",'');})
			$("#selectTrain div").each(function (event) {$(this).find("input").prop("checked",'');})
			userName = '';
			userTel = '';
			userRemarks = '';
			requirement = '';
			eduArray = [];
			eduText = '';
			culText = '';
			showMust();
            if(index == 3){$(".popupBg").hide();}
        }
    });
}
