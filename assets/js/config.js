/**
 * +----------------------------------------------------------------------
 * | config 配置项
 * +----------------------------------------------------------------------
 * | Author: 470211273@qq.com
 * +----------------------------------------------------------------------
 */
var config = {
    // 用户自主建站主体部分（所有元素都放这里）
    buildWebBox: $("#qz_build_web_box"),

    // 自主建站设置工具箱，只要添加元素就要启用它
    eleSetBox: $('#ele-setting-box'),

    // 当前元素的样式
    currentEleStyle: {},

    // 当前活动的元素
    currentEle: $("#qz_build_web_box"),

    // 当前要添加的元素类型（基础块，段落，图像还是其他组件等）
    currentChoosedEleType: "base_block",

    // 点击事件源，'add_ele' 表示添加元素, "edit_ele" 表示编辑元素
    eventOrigin: 'add_ele',

    DOMStr: {
        // 基础块DOM结构
        baseBlockHtmlStr: '<div class="tip-border"><i class="iconfont icon-edit icon-position" data-sys-flag="edit-c"></i></div>',

        // 段落块DOM结构
        paragraphBlockHtmlStr: '<p class="tip-border"><i class="iconfont icon-edit icon-position" data-sys-flag="edit-c"></i></p>',

        // 图像块DOM结构
        ImgBlockHtmlStr: '<span class="tip-border"><img src="assets/img/default_img.png"><i class="iconfont icon-edit icon-position" data-sys-flag="edit-c"></i></span>',

        // span块DOM结构
        spanBlockHtmlStr: '<span class="tip-border"><i class="iconfont icon-edit icon-position" data-sys-flag="edit-c"></i></span>',

        // 轮播组件DOM结构
        wheelBlockHtmlStr: '<div class="tip-border"><i class="iconfont icon-edit icon-position" data-sys-flag="edit-c"></i></div>',

        // 并列块DOM结构
        sbsBlockHtmlStr: '<div class="tip-border"><i class="iconfont icon-edit icon-position" data-sys-flag="edit-c"></i></div>',

        // 悬浮块DOM结构
        fixBlockHtmlStr: '<div class="tip-border"><i class="iconfont icon-edit icon-position" data-sys-flag="edit-c"></i></div>',

        // 发单块DOM结构 TODO 结构复杂，留作自定义
        orderBlockHtmlStr: ''
    }
}
