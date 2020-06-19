// 更改图片
function checkBoxone(){
	var parent=document.getElementById('scheduleList')
	// console.log(parent)
	// 获取liDivone
	var liDivone=parent.querySelector(".liDivone")
	// console.log(liDivone)
	var img=liDivone.querySelector(".checkboximg")
	// console.log(img)
	img.src="img/checkboxyes.png"

	// 给p元素加删除线
	var p=parent.getElementsByTagName('p')[0]
	// console.log(p)
	p.style.textDecoration="line-through"
	p.style.color="#A1D9FE"
}
function checkBoxtwo(){
	var parent=document.getElementById('scheduleList')
	// console.log(parent)
	// 获取liDivtwo
	var liDivtwo=parent.querySelector(".liDivtwo")
	// console.log(liDivone)
	var img=liDivtwo.querySelector(".checkboximg")
	// console.log(img)
	img.src="img/checkboxyes.png"

	// 给p元素加删除线
	var p=parent.getElementsByTagName('p')[1]
	p.style.textDecoration="line-through"
	p.style.color="#A1D9FE"
}
function checkBoxthree(){
	var parent=document.getElementById('scheduleList')
	// console.log(parent)
	// 获取liDivthree
	var liDivthree=parent.querySelector(".liDivthree")
	// console.log(liDivone)
	var img=liDivthree.querySelector(".checkboximg")
	// console.log(img)
	img.src="img/checkboxyes.png"

	// 给p元素加删除线
	var p=parent.getElementsByTagName('p')[2]
	p.style.textDecoration="line-through"
	p.style.color="#A1D9FE"
}



// 删除待办事项
function deleteone(){
	var ul=document.getElementById('scheduleul')
	// console.log(ul)
	var liList=ul.getElementsByTagName('li')
	// console.log(liList)
	liList[0].style.display="none"
}
function deletetwo(){
	var ul=document.getElementById('scheduleul')
	var liList=ul.getElementsByTagName('li')
	liList[1].style.display="none"
}
function deletethree(){
	var ul=document.getElementById('scheduleul')
	var liList=ul.getElementsByTagName('li')
	liList[2].style.display="none"
}



// 设置变量记录添加按钮点击次数
times=3
function addSchedule(){
	times=times+1
	if (times==4) {
		ENGtimes="four"
	}
	if (times==5) {
		ENGtimes="five"
	}
	if(times>5){
		alert("抱歉^_^暂时只支持设立五个待办事项哦~")
		times=times-1
		return;
	}
	// 用拼接法设置变量名,点加类名
	name='liDiv'+ENGtimes
	dotName="."+name
	// 拼接法拼接类名
	var className='liDiv'+' '+'liDiv'+ENGtimes


    var ul=document.getElementById('scheduleul')
    // 创建新的li,p,装两张图片的盒子
    var li=document.createElement("li");
    var p=document.createElement("p");
    var liDiv=document.createElement("div");
    //给新建liDiv添加类名
    liDiv.setAttribute("class", className);
    var leftDiv=document.createElement("div");
    var rightDiv=document.createElement("div");
    // 给新建左右两边小盒子添加类名
    leftDiv.setAttribute("class", "delete checkbox");
    rightDiv.setAttribute("class", "delete");
    var leftimg=document.createElement("img");
    var rightimg=document.createElement("img");
    // 给新建左右两张img添加类名,图片索引和样式
    leftimg.setAttribute("class", "checkboximg");
    rightimg.setAttribute("class", "deleteimg");

    // 注意js中跳级引用图片路径为一个点,css中跳文件夹引用图片是两个点
    leftimg.src="./img/checkboxno.png"
    rightimg.src="./img/garbage.png"
    leftimg.style="cursor:pointer"
    rightimg.style="cursor:pointer"


    var scheduleAddDiv=document.getElementById('scheduleAdd')
    // 获取input的值
    var input=scheduleAddDiv.querySelector(".addinput")
    var inputText=input.value

    // 添加到新建p,并添加到li
    p.innerHTML=inputText
    li.appendChild(p)


    // 左边小盒子添加点击事件
    leftDiv.onclick=function(){
		var parent=document.getElementById('scheduleList')
		// 获取liDivfive
		var liDiv=parent.querySelector(dotName)
		var img=liDiv.querySelector(".checkboximg")
		img.src="img/checkboxyes.png"

		// 给p元素加删除线
		var p=parent.getElementsByTagName('p')[times-1]
		p.style.textDecoration="line-through"
		p.style.color="#A1D9FE"   	
    }
    // 右边小盒子添加点击事件
    rightDiv.onclick=function(){
		var ul=document.getElementById('scheduleul')
		var liList=ul.getElementsByTagName('li')
		liList[times-1].style.display="none"   	
    }

    // 将img添加到左右两边小盒子
    leftDiv.appendChild(leftimg)
    rightDiv.appendChild(rightimg)

    // 左右两边小盒子添加到大盒子
    liDiv.appendChild(leftDiv)
    liDiv.appendChild(rightDiv)

    // 大盒子添加到li
    li.appendChild(liDiv)

    // li添加至ul中
    ul.appendChild(li)
}