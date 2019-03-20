/**
 * +----------------------------------------------------------------------
 * | drag
 * +----------------------------------------------------------------------
 * | Author: 470211273@qq.com
 * +----------------------------------------------------------------------
 */
/**
 *计算离拖动元素最近的元素
 * @param ele
 * @returns aroundEle 位置最近的元素
 */
var calcMinDistance = function () {
    return function(ele, left, top) {
        var aroundEle = null;
        $(".user_ele").each(function (index, item) {
            // 判断拖拽的元素是否进入某个子元素
            var enterSubEle = $(item).offset().left < left && $(item).offset().top < top && ($(item).offset().left + $(item).outerWidth()) > left && ($(item).offset().top + $(item).outerHeight()) > top
            if(enterSubEle) {
                // 计算两个元素中心点之间的距离
                var w = Math.abs(($(item).offset().left + $(item).outerWidth() / 2) - (left + $(ele).outerWidth() / 2))
                var h = Math.abs(($(item).offset().top + $(item).outerHeight() / 2) - (top + $(ele).outerHeight() / 2))
                var distance = Math.sqrt(w*w + h*h)
                if($(item).outerWidth() >= $(item).outerHeight()) {
                    if(distance < $(item).outerWidth() / 2) {
                        aroundEle = item;
                    }else{
                        aroundEle = ""
                    }
                }else{
                    if(distance < $(item).outerHeight() / 2) {
                        aroundEle = item;
                    }else{
                        aroundEle = ""
                    }
                }
            }
        })
        return aroundEle
    }
}()

$(function () {
    var $ele = $('.garbage > li'),
        $trashArea = $('.trash'),
        divStr = '<div class="div_block user_ele">div</div>',
        pStr = '<p class="p_block user_ele">p</p>',
        imgStr = '<img src="assets/img/default_img" class="img_block user_ele">',
        spanStr = '<span class="span_block user_ele">span</span>',
        iStr = '<i class="i_block user_ele">i</i>',
        target = '',
        minDistanceEle = null;

    $ele.on('dragstart', function (event) {
        var $target = $(event.target),
            tag = $target.text();
        switch(tag) {
            case "div":
                target = divStr;
                break;
            case "p":
                target = pStr;
                break;
            case "img":
                target = imgStr;
                break;
            case "span":
                target = spanStr;
                break;
            case "i":
                target = iStr;
                break;
        }
        // console.log('开始拖动：dragstart')
    })
    $ele.on('drag', function (devt) {
        // console.log('拖动中：drag')
        // 这里要根据拖动元素给出位置信息
        minDistanceEle = calcMinDistance($ele, devt.originalEvent.clientX, devt.originalEvent.clientY)
        if(!minDistanceEle) {
            minDistanceEle = '.trash'
        }
    })
    $ele.on('dragend', function () {
        // console.log('拖动完成：dragend')
    })

    $trashArea.on('dragenter', function () {
        // console.log('进入目标区域：dragenter')
    })
    $trashArea.on('dragover', function (event) {
        event.preventDefault()
        // console.log('在目标区域内：dragover')
    })
    $trashArea.on('dragleave', function () {
        // console.log('未放下并离开目标区域：dragleave')
    })
    $trashArea.on('drop', function () {
        // console.log('在目标区域放下元素：drop')
        $(minDistanceEle).append(target)
    })
})

$(function () {
    $(document).on("dblclick", function (event) {
        var $target = $(event.target),
            className = $target.attr('class');
        if(className && className.indexOf('user_ele') > -1) {
            $("#ele-setting-box").fadeIn(0)
        }
    })
    $("#ele-setting-box .close").on("click", function () {
        $("#ele-setting-box").fadeOut(0)
    })
})

