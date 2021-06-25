/* 
    通过传入的百分比，自动转化为px
    percent: 要转化的百分比
    usedWidth：百分数或者正数， 比如 '30%', 300。 已经用掉的宽度， 屏幕宽度-已用掉的宽度 = 剩下的table的宽度
*/
export function getTableWidthByPercent(percent, usedWidth) {
    var width = document.body.offsetWidth // 网页可视区域高度
    var tableWidth = (width - 296); // 应准确计算，否则右侧会有留白
    var reg = /^\d+%$/;
    if (usedWidth && reg.test(usedWidth)) {
        var usedWidthNum = usedWidth.replace("%","") * 1;
        tableWidth = (width - usedWidthNum * width / 100 - 330); // 尽量能够留出多余的内容
    } else if (usedWidth) {
        tableWidth = (width - usedWidth * 1 - 330); // 尽量能够留出多余的内容
    }
    if (percent && percent > 0) {
        return tableWidth * percent / 100
    }
    return percent
}