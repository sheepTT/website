// 注册点击事件{
// 	更改注册颜色
// 	恢复正常
// }
// 登陆点击事件{
// 	li的后三个孩子中的span添加style样式  text-decoration：overline（注意横线变驼峰）
// 	后三个input添加style样式  disabled="disabled" 
// 	后三个input添加style样式  placeholder默认字改为“不可用”
// 	button按钮中span的value变为“登陆”
// }


function loginFunction(){
	//获取注册的父元素
	var div=document.getElementById('formHeadDiv')
	// 获取注册/登陆元素
	var zhuce=div.querySelector(".aone")
	var denglu=div.querySelector(".atwo")
	// console.log(denglu)

	var color=denglu.style.color
	var size=denglu.style.fontSize
	// 判断登陆元素是否为初始样式
	if (color=="rgb(127, 255, 212)"||size=="20px") {
		denglu.style.color="white"
		denglu.style.fontSize="15px"


		// 删除装饰线
		var form=document.getElementById('formOne')
		var liList=form.getElementsByTagName('li')
		liList[2].style.textDecoration="none"
		liList[3].style.textDecoration="none"
		liList[4].style.textDecoration="none"


		// 恢复input使用
		var formDiv=document.getElementById('formDiv')
		// 获取input的直接父元素
		var p=formDiv.getElementsByTagName('p')
		// 获取后三个input
		var input3=p[2].querySelector('#conformUserPassword')
		var input4=p[3].querySelector('#emile')
		var input5=p[4].querySelector('#telNumber')
		input3.removeAttribute("disabled")
		input4.removeAttribute("disabled")
		input5.removeAttribute("disabled")


		// 恢复input默认字
		input3.placeholder="我眼睛还没睁开哦"
		input4.placeholder="abc@126.com"
		input5.placeholder="悬停可显示格式~"


		// 按钮span内容变成注册
		var button=formDiv.querySelector("#loginButton")
		// console.log(button)
		var span=button.querySelector("#buttonSpan")
		// console.log(span)
		span.innerHTML="注册"
	}
		zhuce.style.fontSize="20px"
		zhuce.style.color="#7FFFD4"

}


function debark(){
	//获取登陆的父元素
	var div=document.getElementById('formHeadDiv')
	// 获取注册/登陆元素
	var zhuce=div.querySelector(".aone")
	var denglu=div.querySelector(".atwo")

	var color=zhuce.style.color
	var size=zhuce.style.fontSize
	// 判断登陆元素是否为初始样式
	if (color=="rgb(127, 255, 212)"||size=="20px") {
		zhuce.style.color="white"
		zhuce.style.fontSize="15px"
	}
	denglu.style.fontSize="20px"
	denglu.style.color="#7FFFD4"


	// 获取li的后三个孩子
	// 为li添加删除线
	var form=document.getElementById('formOne')
	var liList=form.getElementsByTagName('li')
	// console.log(liList)
	liList[2].style.textDecoration="line-through black"
	liList[3].style.textDecoration="line-through black"
	liList[4].style.textDecoration="line-through black"


	// 设置input不可用
	var formDiv=document.getElementById('formDiv')
	// 获取input的直接父元素
	var p=formDiv.getElementsByTagName('p')
	// 获取后三个input
	var input3=p[2].querySelector('#conformUserPassword')
	var input4=p[3].querySelector('#emile')
	var input5=p[4].querySelector('#telNumber')
	input3.disabled="disabled"
	input4.disabled="disabled"
	input5.disabled="disabled"


	// 更改input的默认字
	input3.placeholder="不可用"
	input4.placeholder="不可用"
	input5.placeholder="不可用"


	// 按钮span内容变成登陆
	var button=formDiv.querySelector("#loginButton")
	// console.log(button)
	var span=button.querySelector("#buttonSpan")
	// console.log(span)
	span.innerHTML="登陆"
	
}