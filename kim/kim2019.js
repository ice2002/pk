;!function(){
    if(!window.name){
        setTimeout(function(){
        window.location.reload();
        window.name = 'lucky';
        },3000);
    }
}();

layer.ready(function()
{
    $('a').on('click', function(){
        var othis = $(this), type = othis.attr('type');
        switch(type){
            case 'ShowItem':
                $.getJSON('/kim/ShowItem.json?v='+new Date, function(json)
                {
                    layer.photos
                    ({
                        photos: json,
                        anim: 5,
                        shade: 0.8,
                        closeBtn: 1,
                        shadeClose: true
                    });
                });
            break;
            
            case 'ShowPic':
                $.getJSON('/kim/Picture.json?v='+new Date, function(json)
                {
                    layer.photos
                    ({
                        photos: json,
                        anim: 5,
                        shade: 0.8,
                        closeBtn: 1,
                        shadeClose: true
                    });
                });
            break;

            case 'tips':
                layer.msg("欢迎光临");
            break;

        };
    });

    //游戏下载
    $('#Download').on('click', function(){
        layer.open({
            type: 2,
            title: '游戏下载',
            area: ['800px', '418px'],
            shade: 0.8,     //遮罩透明度, 0不显示遮罩, shadeClose无效, 0.1以上才有效
            shadeClose: true,
            closeBtn: 1,
            content: 'Download.html'
        });
    });

    //播放视频
    $('#Video').on('click', function(){
        layer.open({
            type: 2,
            title: '视频欣赏',
            //title: false ,
            //area: ['822px', '675px'],
            //area: ['822px', '635px'],
            area: ['822px', '550px'], //优酷
            shade: 0.8,
            shadeClose: true,
            closeBtn: 1,
            maxmin: true,
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
            shadeClose: true,
            closeBtn: 1,
            content: ['ItemList.html']
        });
    });
});

var aImg = new Array(10);
aImg.index = 0;

for(var i = 0; i < aImg.length; i++)
{
    aImg[i] = "../img/bg" + [i] + ".jpg";
}

$.setBackground = function()
{
    aImg.index = aImg.index >= aImg.length - 1 ? 0 : aImg.index += 1;
    var img = new Image();
    img.src = aImg[aImg.index]
    img.onload = function ()
    {
        $("#background").fadeOut(1000, function(){
            $("#background").css("background-image", "url("+ aImg[aImg.index] +")");
        });
        $("#background").fadeIn(1000);
    }
}
if(window.name){setInterval("$.setBackground()", 10 * 1000);};