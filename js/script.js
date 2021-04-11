function DLT(){//返回一注大乐透; 返回[1,2,3,4,5, 1,2]
    var redBall = randomBall(35, 5);
    var blueBall = randomBall(12, 2);

    return redBall.concat(blueBall);
}

function randomBall(scope, count){//从scope个球中抓取count个球，scope>count; 返回随机的球, 返回[]
    var scopeBall=[];//范围集合
    for(var i = 1; i<= scope; i++){
        scopeBall.push(i)
    }

    var ballResult=[];//抓取球的集合
    for(var k=0; k<count; k++){
        var randomPos = Math.floor(Math.random()*scopeBall.length);
        var resultArr = scopeBall.splice(randomPos,1);
        ballResult.push(resultArr[0]);
    }

    //排序
    ballResult.sort(function(a,b){
        return a-b;
    });

    //映射一个新的数组，将小于10的元素，第一位加'0'
    var newBallResult = ballResult.map(function(item,index){
        return (item<10 ? '0' + item:item ).toString()
    });

    return newBallResult;
}


var btnNode = document.querySelector('.btn');
var ulNodes = document.querySelectorAll('.box');//节点集合，伪数组

btnNode.onclick = twoDLT;
function twoDLT(){
    for(var i = 0; i < ulNodes.length; i++){
        var dltBall = DLT();//得到大乐透的一注随机
        var liNodes = ulNodes[i].querySelectorAll('li');//在ul节点中通过li标签选择器得到所有li节点集合
        for(var k = 0; k < liNodes.length; k++){
            liNodes[k].innerHTML = dltBall[k];
        }
    }
}
twoDLT();