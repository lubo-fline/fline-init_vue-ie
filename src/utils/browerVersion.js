export default function browerVersion() {
    var ua = navigator.userAgent;
    var ver = 0;
    var versiondata;

    if (ua) {
        if (ua.match(/MSIE\s+([\d]+)\./i)) {
            ver = RegExp.$1;
        } else if (ua.match(/Trident.*rv\s*:\s*([\d]+)\./i)) {
            ver = RegExp.$1;
        }
    }
    versiondata = parseInt(ver);

    return versiondata;
}