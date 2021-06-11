<template>
    <svg :class="'icon '+iconClass" aria-hidden="true">
        <use :xlink:href="'#'+type"></use>
    </svg>
</template>

<script>
export default {
    name:'iconFont',
    props:{
        type:{
            type:String,
            default:''
        },
        iconClass:{
            type:String,
            default:''
        },
    }
}
</script>

<style>
/*自定义单组件样式*/
.icon {
    width: 1em;
    height: 1em;
    vertical-align: sub;
    fill: currentColor;
    overflow: hidden;
}

.icon svg {
    width: 100%;
    height: 100%;
}
</style>