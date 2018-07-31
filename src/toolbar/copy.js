import {css, remove, typeChecking} from '../util'

export default function copy (me, url) {
    //设置本地存储
    if (typeChecking(me.copyPath) === '[object Function]') {
        const storage = me.copyPath()
        localStorage.setItem(storage,url);
        console.log("set localstorage: " +storage);
    } else {
        localStorage.copyImgBase64=url;
        console.log("default localstorage:copyImgBase64")
    }
    /*let imgWrapper = document.createElement('span')
    css(imgWrapper, {
        opacity: '0'
    })

    let img = document.createElement('img')

    let absolutePath
    if (typeChecking(me.copyPath) === '[object Function]') {
        absolutePath = me.copyPath(url)
    } else {
        absolutePath = null
    }
    
    if (absolutePath === null) {
        return 
    } else {
        img.src = absolutePath
    }

    imgWrapper.appendChild(img)
    document.body.appendChild(imgWrapper)

    setTimeout(function () {
        let selection = window.getSelection()
        let range = document.createRange()

        range.selectNodeContents(imgWrapper)
 
        selection.removeAllRanges()
        selection.addRange(range)
        document.execCommand('Copy')
  
        remove(imgWrapper)
    }, 0)*/
}