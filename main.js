// import $ from "jquery"
import abcjs from "abcjs"

$(function(){
    /**
     * ABCJS RENDER OPTIONS
     */
    const abcjsOptions = {
        add_classes:true,
        responsive: 'resize'
    }

    /**
     * INITIALIZE EDITOR
     */
    let editor = new abcjs.Editor("editor",{
        canvas_id: "tunes_container",
        warnings_id: "abc-warnings",
        abcjsParams: abcjsOptions
    })
})