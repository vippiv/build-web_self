/**
 * +----------------------------------------------------------------------
 * | buildweb.fn.js
 * +----------------------------------------------------------------------
 * | Author: 4702112736@qq.com
 * +----------------------------------------------------------------------
 */
/**
 * 添加元素到文档
 */
function addElementToDoc() {
    // 获取要添加到文档元素的类型 TODO 这里需要根据参数判断调用哪种元素
    var htmlStr = config.baseBlockHtmlStr

    // 向文档添加元素 TODO 这里要获取当前活动元素，这个元素和重要
    config.currentEle = config.buildWebBox.append(htmlStr)

    console.log(config.currentEle[0])

    // 向当前元素添加样式
    $(htmlStr).find(".tip-border").css({
        "width": config.currentEleStyle.w,
        "height": config.currentEleStyle.h,
        "background-color": config.currentEleStyle.bgc,
        "background-image": config.currentEleStyle.bgImg,
        "background-width": config.currentEleStyle.bgw,
        "background-height": config.currentEleStyle.bgh
    })
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
