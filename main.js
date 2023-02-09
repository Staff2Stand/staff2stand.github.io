import $ from "jquery"
import abcjs from "abcjs"

$(function(){
    let editor = new abcjs.Editor("editor",{
        canvas_id: "tunes_container",
        warnings_id: "abc-warnings"
    })
})