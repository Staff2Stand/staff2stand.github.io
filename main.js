const abcjs = window.ABCJS

const stringReference = {
    violin: {
        g: ['G,' , '=G,' , '^G,' , '_A,' , 'A,' , '=A,' , '^A,' , '_B,' , 'B,' , '=B,' , '^B,' , '_C' , 'C' , '=C' , '^C' , '_D'],
        d: ['D' , '=D' , '^D' , '_E' , 'E' , '=E' , '^E' , '_F' , 'F' , '=F' , '^F' , '_G' , 'G' , '=G' , '^G' , '_A'],
        a: ['A' , '=A' , '^A' , '_B' , 'B' , '=B' , '^B' , '_c' , 'c' , '=c' , '^c' , '_d' , 'd' , '=d' , '^d' , '_e'],
        e: ['e' , '=e' , '^e' , '_f' , 'f' , '=f' , '^f' , '_g' , 'g' , '=g' , '^g' , '_a' , 'a' , '=a' , '^a' , '_b' , 'b' , '=b' , '^b']
    },
    viola: {
        c: ['C,' , '=C,' , '^C,' , '_D,' , 'D,' , '=D,' , '^D,' , '_E,' , 'E,' , '=E,' , '^E,' , '_F,', 'F,' , '=F,' , '^F' , '_G,'],
        g: ['G,' , '=G,' , '^G,' , '_A,' , 'A,' , '=A,' , '^A,' , '_B,' , 'B,' , '=B,' , '^B,' , '_C' , 'C' , '=C' , '^C' , '_D'],
        d: ['D' , '=D' , '^D' , '_E' , 'E' , '=E' , '^E' , '_F' , 'F' , '=F' , '^F' , '_G' , 'G' , '=G' , '^G' , '_A'],
        a: ['A' , '=A' , '^A' , '_B' , 'B' , '=B' , '^B' , '_c' , 'c' , '=c' , '^c' , '_d' , 'd' , '=d' , '^d' , '_e' , 'e' , '=e' , '^e'],
    },
    cello: {
        c: ['C,' , '=C,' , '^C,' , '_D,' , 'D,' , '=D,' , '^D,' , '_E,' , 'E,' , '=E,' , '^E,' , '_F,', 'F,' , '=F,' , '^F' , '_G,'],
        g: ['G,' , '=G,' , '^G,' , '_A,' , 'A,' , '=A,' , '^A,' , '_B,' , 'B,' , '=B,' , '^B,' , '_C' , 'C' , '=C' , '^C' , '_D'],
        d: ['D' , '=D' , '^D' , '_E' , 'E' , '=E' , '^E' , '_F' , 'F' , '=F' , '^F' , '_G' , 'G' , '=G' , '^G' , '_A'],
        a: ['A' , '=A' , '^A' , '_B' , 'B' , '=B' , '^B' , '_c' , 'c' , '=c' , '^c' , '_d' , 'd' , '=d'],
    },
    bass: {
        g: ['G' , '=G' , '^G' , '_A' , 'A' , '=A' , '^A' , '_B' , 'B' , '=B' , '^B' , '_c' , 'c' , '=c' , '^c' , '_d' , 'd' , '=d'],
        d: ['D' , '=D' , '^D' , '_E' , 'E' , '=E' , '^E' , '_F' , 'F' , '=F' , '^F' , '_G'],
        a: ['A,' , '=A,' , '^A,' , '_B,' , 'B,' , '=B,' , '^B,' , '_C' , 'C' , '=C' , '^C' , '_D'],
        e: ['E,' , '=E,' , '^E,' , '_F,' , 'F,' , '=F,' , '^F,' , '_G,' , 'G,' , '=G,' , '^G,' , '_A,']
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
            // console.log(editorInstance)
        },
        abcjsParams: abcjsOptions
    })
    /**
     * TUNES CONTAINER (RE)RENDER OBSERVER
     */
    elementToObserve = document.getElementById('tunes_container')
    observer = new MutationObserver(function(mutationsList, observer) {
        // callback for tunes container mutations
        addStringClassesToNoteHeads()
    });
    observer.observe(elementToObserve, {characterData: false, childList: true, attributes: false})

    /**
     * ADD STRING CLASSES
     */
    function addStringClassesToNoteHeads(){
        $('.abcjs-note path[data-name]').each(function(i,pathel){
            const isNotehead = $(pathel).attr('data-name').length <= 2
            if (!isNotehead) return

            const noteName = $(pathel).attr('data-name')
            console.log(noteName)
            //check string reference and add the correct string class
            const instrument = $(pathel).closest('.abcjs-container').find('.abcjs-voice-name tspan').html().toLowerCase()
            const noteString = Object.keys(stringReference[instrument]).find(key => stringReference[instrument][key].includes(noteName))

            console.log(instrument, noteString)
            
            $(pathel).addClass(`${noteString}String`)
        })
    }


    /**
     * SCORE BOOKMARKS
     */
    $('.score_bookmark').click(function(){
        const abc = $(this).attr('abc').replace(/\\n/g,'\r\n')
        console.log(abc)
        $('#editor').val(abc).change()
    })


    /**
     * SIDEBAR BUTTONS
     */
    $('#fingerings_toggle, #highlights_toggle, #notenames_toggle, #print').click(function(){
        $(this).toggleClass('active')
    })
    $('#highlights_toggle').click(function(){
        $('#main_container').toggleClass('highlight_notes')
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