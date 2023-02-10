const abcjs = window.ABCJS

const stringReference = {
    violin: {
        g: ['G,' , '^G,' , '_A,' , 'A,' , '^A,' , '_B,' , 'B,' , '^B,' , '_C' , 'C' , '^C' , '_D'],
        d: ['D' , '^D' , '_E' , 'E' , '^E' , '_F' , 'F' , '^F' , '_G' , 'G' , '^G' , '_A'],
        a: ['A' , '^A' , '_B' , 'B' , '^B' , '_c' , 'c' , '^c' , '_d' , 'd' , '^d' , '_e'],
        e: ['e' , '^e' , '_f' , 'f' , '^f' , '_g' , 'g' , '^g' , '_a' , 'a' , '^a' , '_b' , 'b' , '^b']
    },
    viola: {
        c: ['C,' , '^C,' , '_D,' , 'D,', '^D,' , '_E,' , 'E,' , '^E,' , '_F,', 'F,' , '^F' , '_G,'],
        g: ['G,' , '^G,' , '_A,' , 'A,' , '^A,' , '_B,' , 'B,' , '^B,' , '_C' , 'C' , '^C' , '_D'],
        d: ['D' , '^D' , '_E' , 'E' , '^E' , '_F' , 'F' , '^F' , '_G' , 'G' , '^G' , '_A'],
        a: ['A' , '^A' , '_B' , 'B' , '^B' , '_c' , 'c' , '^c' , '_d' , 'd' , '^d' , '_e' , 'e' , '^e'],
    },
    cello: {
        c: ['C,' , '^C,' , '_D,' , 'D,', '^D,' , '_E,' , 'E,' , '^E,' , '_F,', 'F,' , '^F' , '_G,'],
        g: ['G,' , '^G,' , '_A,' , 'A,' , '^A,' , '_B,' , 'B,' , '^B,' , '_C' , 'C' , '^C' , '_D'],
        d: ['D' , '^D' , '_E' , 'E' , '^E' , '_F' , 'F' , '^F' , '_G' , 'G' , '^G' , '_A'],
        a: ['A' , '^A' , '_B' , 'B' , '^B' , '_c' , 'c' , '^c' , '_d' , 'd'],
    },
    bass: {
        g: ['G' , '^G' , '_A' , 'A' , '^A' , '_B' , 'B' , '^B' , '_c' , 'c' , '^c' , '_d' , 'd'],
        d: ['D' , '^D' , '_E' , 'E' , '^E' , '_F' , 'F' , '^F' , '_G'],
        a: ['A,' , '^A,' , '_B,' , 'B,' , '^B,' , '_C' , 'C' , '^C' , '_D'],
        e: ['E,' , '^E,' , '_F,' , 'F,' , '^F,' , '_G,' , 'G,' , '^G,' , '_A,']
    }
}

$(function(){

    /**
     * ABCJS RENDER OPTIONS
     */
    const abcjsOptions = {
        add_classes: true,
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
            console.log(abcElem, tuneNumber, classes)
        },
        indicate_changed: true,
        onchange: function(editorInstance) {
            console.log(editorInstance)
            $('.abcjs-note path[data-name]:not([class])').each(function(){
                //select each path of each note that doesn't have a class (the noteheads don't have a class)
                const noteName = $(this).attr('data-name')
                //check string reference and add the correct string class
                const instrument = $(this).closest('svg').find('abcjs-voice-name tspan').html().toLowerCase()
                const noteString = Object.keys(stringReference[instrument]).find(key => stringReference[instrument][key].includes(noteName))
                $(this).addClass(`${noteName}String`)
            })
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
    $('.noteyContainer').each(function(){
        $(this).html( $('#notey').html() )
    })
    // notey toggler
    $('#noteyToggle').click(function(){
        $('#notey').fadeToggle()
    })

})