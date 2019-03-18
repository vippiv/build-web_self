/**
 * +----------------------------------------------------------------------
 * | tools
 * +----------------------------------------------------------------------
 * | Author: 470211273@qq.com
 * +----------------------------------------------------------------------
 */
$(function () {
    // 工具按钮元素
    var $tools = $(".tools .content li");
    // 点击工具箱工具事件（如：向页面添加各种元素）
    $tools.on('click', function (event) {
        event.stopPropagation()
        // 重置配置项
        resetConfig()
        var toolType = $(this).attr('data-type');
        if(toolType == 'base_block') {
            startSetingBox()
        }
    })
})

$(function () {
    // 工具箱显示隐藏 S
    var $toolStart = $("#tool-start"),
        $toolsBox = $("#tools-box"),
        $toolsBoxCloseBtn = $toolsBox.find('.close');
    $toolStart.on("click", function () {
        $toolStart.fadeOut(0)
        $toolsBox.fadeIn(0)
    })
    $toolsBoxCloseBtn.on("click", function () {
        $toolStart.fadeIn(0)
        $toolsBox.fadeOut(0)
    })
    // 工具箱显示隐藏 E

    // 监听工具箱操作 S
    config.eleSetBox.find(".close").on('click', function () {
        config.eleSetBox.fadeOut(0)
        // 添加元素到文档
        addElementToDoc()
    })
    config.eleSetBox.find(".confirm").on('click', function () {
        config.eleSetBox.fadeOut(0)
        var w = config.eleSetBox.find('input[data-name="ele-set-w"]'),
            h = config.eleSetBox.find('input[data-name="ele-set-h"]'),
            bgc = config.eleSetBox.find('input[data-name="ele-set-bgc"]'),
            bgImg = config.eleSetBox.find('input[data-name="ele-set-bgimg"]'),
            bgw = config.eleSetBox.find('input[data-name="ele-set-bg-w"]'),
            bgh = config.eleSetBox.find('input[data-name="ele-set-bg-h"]');
        config.currentEleStyle.w = w;
        config.currentEleStyle.h = h;
        config.currentEleStyle.bgc = bgc;
        config.currentEleStyle.bgImg = bgImg;
        config.currentEleStyle.bgw = bgw,
        config.currentEleStyle.bgh = bgh;
        // 添加元素到文档
        addElementToDoc()
    })
    config.eleSetBox.find(".cancel").on('click', function () {
        config.eleSetBox.fadeOut(0)
        // 添加元素到文档
        addElementToDoc()
    })
    // 监听工具箱操作 E
})
