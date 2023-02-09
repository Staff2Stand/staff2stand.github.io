// import $ from "jquery"
import abcjs from "abcjs"

$(function(){

    /**
     * INITIALIZE EDITOR
     */
    let editor = new abcjs.Editor("editor",{
        canvas_id: "tunes_container",
        warnings_id: "abc-warnings"
    })
})