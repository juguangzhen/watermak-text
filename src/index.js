/*
 * @Author: guangzhen.ju.o
 * @Date: 2019-09-17 14:15
 */

'use strict'

let watermark = {}
/**
 * @desc data.el data.str, data.id
 * */
let setWatermark = (data, onresize) => {
    let defaultWaterConf = {
        el: document.body,
        id: 'guangzhen.ju.o',
        fontSize: '12px',
        fontFamily: 'Arial',
        rotate: -30,
        width: 280,
        height: 280,
        background: 'rgba(0, 15, 22, 0.06)',
    }
    data = Object.assign({}, defaultWaterConf, data )

    if(onresize && document.getElementById(data.id) !== null) {
        data.el.removeChild(document.getElementById(data.id))
    }

    let can = document.createElement('canvas')
    can.width = data.width
    can.height = data.height

    let cans = can.getContext('2d')
    cans.rotate(data.rotate * Math.PI / 180)
    cans.font = `${ data.fontSize } ${ data.fontFamily }`
    cans.fillStyle = data.background
    cans.textAlign = 'center'
    cans.fillText(data.str, can.width / 2, can.height / 1.5)
    cans.fillText(data.str, 0, can.height)

    let div = document.createElement('div')
    div.id = data.id
    div.style.pointerEvents = 'none'
    div.style.top = '0px'
    div.style.left = '0px'
    div.style.right = '0px'
    div.style.bottom = '0px'
    div.style.position = 'absolute'
    div.style.zIndex = '100000'
    div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
    data.el.appendChild(div)
    return data.id
}

// 该方法只允许调用一次
watermark.set = (data) => {
    if(watermark.id) {
        console.warn('我们不建议你多次生成水印...')
    }
    watermark.id = setWatermark(data)
}

export default watermark
