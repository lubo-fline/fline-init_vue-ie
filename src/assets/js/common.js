export default {
    //select过滤方法
    filterOption(input, option) {
        return (
            option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
        );
    },

    confirmTips(title, message, callback) {
        this.$confirm({
            title: title || "提示",
            content: message,
            okText: "确认",
            cancelText: "取消",
            onOk() {
                if (Object.prototype.toString.call(callback) == '[object Function]') {
                    callback()
                }
            },
            onCancel() { }
        });
    },
    windowOrigin() {
        let windowOrigin = ''
        if (!window.location.origin) {
            windowOrigin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
        } else {
            windowOrigin = window.location.origin
        }
        return windowOrigin
    }
}

