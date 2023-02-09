// import $ from "jquery"
// import abcjs from "abcjs"

$(function(){
    const abcjs = window.ABCJS

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
        clickListener: function(abcElem, tuneNumber, classes) { 
            console.log(abcElem, tuneNumber, classes); 
        },
        abcjsParams: abcjsOptions
    })

    /**
     * SIDEBAR BUTTONS
     */
    $('#fingerings_toggle, highlights_toggle, #notenames_toggle, #print').click(function(){
        $(this).toggleClass('active')
    })
})