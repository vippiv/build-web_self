/**
 * +----------------------------------------------------------------------
 * | buildweb.fn.js 公用函数库
 * +----------------------------------------------------------------------
 * | Author: 4702112736@qq.com
 * +----------------------------------------------------------------------
 */
/**
 * 添加元素到文档
 */
function addElementToDoc() {
    // 时间戳，作为每个组件的单独标志
    var timeHash = new Date().getTime(), $htmlStr = '';

    // 根据事件源判断是不是添加元素
    if(config.eventOrigin == 'add_ele') {

        // 获取要添加到文档元素的类型
        if(config.currentChoosedEleType == "base_block"){
            $htmlStr = $(config.DOMStr.baseBlockHtmlStr).attr('data-id', timeHash)
        }else if(config.currentChoosedEleType == "paragraph_block") {
            $htmlStr = $(config.DOMStr.paragraphBlockHtmlStr).attr('data-id', timeHash)
        }else if(config.currentChoosedEleType == "img_block") {
            $htmlStr = $(config.DOMStr.ImgBlockHtmlStr).attr('data-id', timeHash)
        }else if(config.currentChoosedEleType == "span_block") {
            $htmlStr = $(config.DOMStr.spanBlockHtmlStr).attr('data-id', timeHash)
        }else if(config.currentChoosedEleType == "wheel_block") {
            $htmlStr = $(config.DOMStr.wheelBlockHtmlStr).attr('data-id', timeHash)
        }else if(config.currentChoosedEleType == "sbs_block") {
            $htmlStr = $(config.DOMStr.sbsBlockHtmlStr).attr('data-id', timeHash)
        }else if(config.currentChoosedEleType == "fix_block") {
            $htmlStr = $(config.DOMStr.fixBlockHtmlStr).attr('data-id', timeHash)
        }


        // 向文档添加元素 TODO 这里要判断是向根元素添加还是给子元素添加
        config.buildWebBox.append($htmlStr)

        // 清除当前活动状态元素的类
        $('.tip-border-active').removeClass('tip-border-active')

        // 获取当前活动元素
        config.currentEle = $('*[data-id="'+ timeHash +'"]').addClass('tip-border-active')

    }

    // 向文档添加完毕后设置样式
    setStyle()
}

/**
 * 启动配置项对话框
 */
function startSetingBox() {
    config.eleSetBox.fadeIn(0)
}


/**
 * 重置某些配置项
 */
function resetConfig() {
    config.currentEleStyle = {}
}


/**
 * 给当前元素设置样式
 */
function setStyle() {
    // 向当前元素添加样式
    config.currentEle.css({
        "width": config.currentEleStyle.w + "px",
        "height": config.currentEleStyle.h + "px",
        "background-color": config.currentEleStyle.bgc,
        "background-image": config.currentEleStyle.bgImg,
        "background-width": config.currentEleStyle.bgw,
        "background-height": config.currentEleStyle.bgh
    })
}

/**
 * 获取事件源
 */
function getEventOrigin(tag) {
    var origin = ['add_ele', "edit_ele"], i=0;
    if(tag == 'edit-c') {
        i = 1
    }
    config.eventOrigin = origin[i]
}
