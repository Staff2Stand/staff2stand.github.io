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
            //the presence of this function is enough to add the functionality
            console.log(abcElem, tuneNumber, classes); 
        },
        abcjsParams: abcjsOptions
    })

    /**
     * SIDEBAR BUTTONS
     */
    $('#fingerings_toggle, #highlights_toggle, #notenames_toggle, #print').click(function(){
        $(this).toggleClass('active')
    })
    // load tiny notey toggle button (and other noteys)
    $('.notey-container').each(function(){
        $(this).html( $('#notey').html() )
    })
    // notey toggler
    $('#noteyToggle').click(function(){
        $('#notey').fadeToggle()
    })

})