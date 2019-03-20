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
        // 设置事件源
        getEventOrigin('add_ele')
        // 重置配置项
        resetConfig()
        var toolType = $(this).attr('data-type');
        switch (toolType) {
            case 'base_block':
                config.currentChoosedEleType = 'base_block'
                break;
            case 'paragraph_block':
                config.currentChoosedEleType = 'paragraph_block'
                break;
            case 'img_block':
                config.currentChoosedEleType = 'img_block'
                break;
            case 'span_block':
                config.currentChoosedEleType = 'span_block'
                break;
            case 'wheel_block':
                config.currentChoosedEleType = 'wheel_block'
                break;
            case 'sbs_block':
                config.currentChoosedEleType = 'sbs_block'
                break;
            case 'fix_block':
                config.currentChoosedEleType = 'fix_block'
                break;
            default:
                break;
        }
        startSetingBox()
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
})


$(function () {
    // 监听编辑框操作 S
    config.eleSetBox.find(".close").on('click', function () {
        config.eleSetBox.fadeOut(0)
        // 添加元素到文档
        addElementToDoc()
    })
    config.eleSetBox.find(".confirm").on('click', function () {
        config.eleSetBox.fadeOut(0)
        var w = config.eleSetBox.find('input[data-name="ele-set-w"]').val(),
            h = config.eleSetBox.find('input[data-name="ele-set-h"]').val(),
            bgc = config.eleSetBox.find('input[data-name="ele-set-bgc"]').val(),
            bgImg = config.eleSetBox.find('input[data-name="ele-set-bgimg"]').val(),
            bgw = config.eleSetBox.find('input[data-name="ele-set-bg-w"]').val(),
            bgh = config.eleSetBox.find('input[data-name="ele-set-bg-h"]').val();
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
    // 监听编辑框操作 E
})

$(function () {
    // 文档事件委托 S
    $(document).on("click", function (event) {
        var $target = $(event.target),
            dataSysFlag = $target.attr('data-sys-flag');
        // 检测当前点击的元素是不是界面元素
        if($target.closest('.tip-border').length > 0) {
            $('.tip-border-active').removeClass('tip-border-active')
            $target.addClass('tip-border-active')
            config.currentEle = $target
        }
        if(dataSysFlag == 'edit-c') {
            getEventOrigin('edit-c')
            // 组件编辑图标事件，点击启动编辑界面
            config.currentEle = $target.parent(".tip-border") // 更新当前元素
            config.eleSetBox.fadeIn(0) // 显示编辑框
        }
    })
    // 文档事件委托 E
})
