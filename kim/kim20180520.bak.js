;!function(){
    if(!window.name){
        setTimeout(function(){
        window.location.reload();
        window.name = 'lucky';
        },3000);
    }
}();

$('.m').on('click', function(){
    var othis = $(this), type = othis.attr('type');
    switch(type){
        case 'ShowItem':
            scrollbar: false;
            $.getJSON('/kim/ShowItem.json?v='+new Date, function(json)
            {
                layer.photos
                ({
                    photos: json,
                    anim: 5
                });
            });
        break;
        
        case 'ShowPic':
            scrollbar: false;
            $.getJSON('/kim/Picture.json?v='+new Date, function(json)
            {
                layer.photos
                ({
                    photos: json,
                    anim: 5
                });
            });
        break;

        case 'tips':
            layer.msg("欢迎光临");
        break;

    };
});

//游戏下载
$('#Down').on('click', function(){
    layer.open({
        type: 2,
        title: '游戏下载',
        area: ['800px', '418px'],
        shade: 0.8,
        shadeClose: true,
        content: 'Download.html'
    });
});

//播放视频
$('#Video').on('click', function(){
    layer.open({
        type: 2,
        //title: '视频欣赏',
        title: false ,
        //area: ['822px', '675px'],
        //area: ['822px', '635px'],
        area: ['822px', '550px'], //优酷
        shade: 0.8,
        shadeClose: true,
        content: ['http://player.youku.com/embed/XMTM4NjU4OTA2MA', 'no']
    });
});

//掉落列表
$('#ItemList').on('click', function(){
    layer.open({
        type: 2,
        title: '怪物掉落列表',
        area: ['800px', '50%'],
        shade: 0.8,
        closeBtn: 1,
        shadeClose: true,
        content: 'ItemList.html'
    });
});

var iIndex = 0;
var aImg = new Array(26);
for(var i = 0; i < aImg.length; i++)
{
    aImg[i] = "./img/bg" + [i] + ".jpg";
}

$.setBackground = function()
{
    //var aImg = ["../img/bg0.jpg", "../img/bg1.jpg", "../img/bg2.jpg", "../img/bg3.jpg", "../img/bg4.jpg", "../img/bg5.jpg"];
    iIndex = iIndex >= aImg.length - 1 ? 0 : iIndex += 1;
    document.body.style.backgroundImage="url("+ aImg[iIndex] +")";
    //var obj = document.getElementsByTagName("body")[0];
    //obj.style.backgroundImage="url("+ aImg[iIndex] +")";
}
setInterval("$.setBackground()", 10 * 1000);