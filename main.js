const abcjs = window.ABCJS

const instruments = ['violin','viola','cello','bass']

// \u2193 = down arrow
// \u2191 = up arrow
const stringReference = {
    violin: {
        g: ['G,' , '=G,' , '^G,' , '_A,' , 'A,' , '=A,' , '^A,' , '_B,' , 'B,' , '=B,' , '^B,' , '_C' , 'C' , '=C' , '^C' , '_D'],
        gFingers: ['0' , '0' , '\u21931' , '0' , '\u21931' , '\u21931' , '1' , '1' , '\u21932' , '\u21932' , '2' , '\u21933' , '3' , '3' , '\u21913' , '\u21934' , '4' , '4'],
        d: ['D' , '=D' , '^D' , '_E' , 'E' , '=E' , '^E' , '_F' , 'F' , '=F' , '^F' , '_G' , 'G' , '=G' , '^G' , '_A'],
        dFingers: ['0' , '0' , '\u21931' , '\u21931' , '1' , '1' , '\u21911' , '1' , '\u21932' , '\u21932' , '2' , '\u21933' , '3' , '3' , '\u21913' , '\u21934' , '4' , '4'],
        a: ['A' , '=A' , '^A' , '_B' , 'B' , '=B' , '^B' , '_c' , 'c' , '=c' , '^c' , '_d' , 'd' , '=d' , '^d' , '_e'],
        aFingers: ['0' , '0' , '\u21931' , '\u21931' , '1' , '1' , '\u21911' , '1' , '\u21932' , '\u21932' , '2' , '\u21933' , '3' , '3' , '\u21913' , '\u21934' , '4' , '4'],
        e: ['e' , '=e' , '^e' , '_f' , 'f' , '=f' , '^f' , '_g' , 'g' , '=g' , '^g' , '_a' , 'a' , '=a' , '^a' , '_b' , 'b' , '=b' , '^b'],
        eFingers: ['0' , '0' , '\u21931' , '0' , '\u21931' , '\u21931' , '1' , '1' , '\u21932' , '\u21932' , '2' , '\u21933' , '3' , '3' , '\u21913' , '\u21934' , '4' , '4' , 'x4']
    },
    viola: {
        c: ['C,' , '=C,' , '^C,' , '_D,' , 'D,' , '=D,' , '^D,' , '_E,' , 'E,' , '=E,' , '^E,' , '_F,', 'F,' , '=F,' , '^F' , '_G,'],
        cFingers: ['0' , '0' , '\u21931' , '\u21931' , '1' , '1' , '\u21911' , '\u21932' , '2' , '2' , '3' , '2' , '3' , '3' , '\u21913' , '\u21934' , '4' , '4'],
        g: ['G,' , '=G,' , '^G,' , '_A,' , 'A,' , '=A,' , '^A,' , '_B,' , 'B,' , '=B,' , '^B,' , '_C' , 'C' , '=C' , '^C' , '_D'],
        gFingers: ['0' , '0' , '\u21931' , '0' , '\u21931' , '\u21931' , '1' , '1' , '\u21932' , '\u21932' , '2' , '\u21933' , '3' , '3' , '\u21913' , '\u21934' , '4' , '4'],
        d: ['D' , '=D' , '^D' , '_E' , 'E' , '=E' , '^E' , '_F' , 'F' , '=F' , '^F' , '_G' , 'G' , '=G' , '^G' , '_A'],
        dFingers: ['0' , '0' , '\u21931' , '\u21931' , '1' , '1' , '\u21911' , '1' , '\u21932' , '\u21932' , '2' , '\u21933' , '3' , '3' , '\u21913' , '\u21934' , '4' , '4'],
        a: ['A' , '=A' , '^A' , '_B' , 'B' , '=B' , '^B' , '_c' , 'c' , '=c' , '^c' , '_d' , 'd' , '=d' , '^d' , '_e' , 'e' , '=e' , '^e'],
        aFingers: ['0' , '0' , '\u21931' , '\u21931' , '1' , '1' , '\u21911' , '1' , '\u21932' , '\u21932' , '2' , '\u21933' , '3' , '3' , '\u21913' , '\u21934' , '4' , '4' , 'x4']
    },
    cello: {
        c: ['C,' , '=C,' , '^C,' , '_D,' , 'D,' , '=D,' , '^D,' , '_E,' , 'E,' , '=E,' , '^E,' , '_F,', 'F,' , '=F,' , '^F' , '_G,'],
        cFingers: ['0' , '0' , 'x1' , 'x1' , '1' , '1' , '2' , '2' , '3' , '3' , '4' , '3' , '4' , '4' , 'x4' , 'x4'],
        g: ['G,' , '=G,' , '^G,' , '_A,' , 'A,' , '=A,' , '^A,' , '_B,' , 'B,' , '=B,' , '^B,' , '_C' , 'C' , '=C' , '^C' , '_D'],
        gFingers: ['0' , '0' , 'x1' , 'x1' , '1' , '1' , '2' , '2' , '3' , '3' , '4' , '3' , '4' , '4' , 'x4' , 'x4'],
        d: ['D' , '=D' , '^D' , '_E' , 'E' , '=E' , '^E' , '_F' , 'F' , '=F' , '^F' , '_G' , 'G' , '=G' , '^G' , '_A'],
        dFingers: ['0' , '0' , 'x1' , 'x1' , '1' , '1' , '2' , '1' , '2' , '2' , '3' , '3' , '4' , '4' , 'x4' , 'x4'],
        a: ['A' , '=A' , '^A' , '_B' , 'B' , '=B' , '^B' , '_c' , 'c' , '=c' , '^c' , '_d' , 'd' , '=d'],
        aFingers: ['0' , '0' , 'x1' , 'x1' , '1' , '1' , '2' , '1' , '2' , '2' , '3' , '3' , '4' , '4' , 'x4' , 'x4']
    },
    bass: {
        g: ['G' , '=G' , '^G' , '_A' , 'A' , '=A' , '^A' , '_B' , 'B' , '=B' , '^B' , '_c' , 'c' , '=c' , '^c' , '_d' , 'd' , '=d'],
        gFingers: ['0' , '0' , '1(1/2pos)' , '1(1/2pos)' , '1' , '2' , '2' , '4' , '4' , '' , '' , '' , '' , '' , '' , ''],
        d: ['D' , '=D' , '^D' , '_E' , 'E' , '=E' , '^E' , '_F' , 'F' , '=F' , '^F' , '_G'],
        dFingers: ['0' , '0' , '1(1/2pos)' , '1(1/2pos)' , '1' , '2' , '1' , '2' , '2' , '4' , '4'],
        a: ['A,' , '=A,' , '^A,' , '_B,' , 'B,' , '=B,' , '^B,' , '_C' , 'C' , '=C' , '^C' , '_D'],
        aFingers: ['0' , '0' , '1(1/2pos)' , '1(1/2pos)' , '1' , '2' , '1' , '2' , '2' , '4' , '4'],
        e: ['E,' , '=E,' , '^E,' , '_F,' , 'F,' , '=F,' , '^F,' , '_G,' , 'G,' , '=G,' , '^G,' , '_A,'],
        eFingers: ['0' , '0' , '1(1/2pos)' , '0' , '1(1/2pos)' , '1(1/2pos)' , '1' , '1' , '2' , '4' , '4']
    }
}

$(function(){

    /**
     * INITIALIZE EDITOR for each instrument
     */
    const abcOpts = {
        add_classes: true,
        responsive: 'resize'
    }
    let editor_violin = new abcjs.Editor("editor-violin",{
        canvas_id: "tunes-violin",
        warnings_id: "abc-warnings-violin",
        clickListener: function(abcElem, tuneNumber, classes) { 
            //the presence of this function is enough to add the functionality
            // console.log(abcElem, tuneNumber, classes)
        },
        indicate_changed: true,
        onchange: function(editorInstance) {
            // console.log('editorInstance',editorInstance)
        },
        abcjsParams: abcOpts
    })
    let editor_viola = new abcjs.Editor("editor-viola",{
        canvas_id: "tunes-viola",
        warnings_id: "abc-warnings-viola",
        clickListener: function(abcElem, tuneNumber, classes) {},
        indicate_changed: true,
        onchange: function(editorInstance) {},
        abcjsParams: abcOpts
    })
    let editor_cello = new abcjs.Editor("editor-cello",{
        canvas_id: "tunes-cello",
        warnings_id: "abc-warnings-cello",
        clickListener: function(abcElem, tuneNumber, classes) {},
        indicate_changed: true,
        onchange: function(editorInstance) {},
        abcjsParams: abcOpts
    })
    let editor_bass = new abcjs.Editor("editor-bass",{
        canvas_id: "tunes-bass",
        warnings_id: "abc-warnings-bass",
        clickListener: function(abcElem, tuneNumber, classes) {},
        indicate_changed: true,
        onchange: function(editorInstance) {},
        abcjsParams: abcOpts
    })


    /**
     * TUNES (RE)RENDER OBSERVER
     */
    observer = new MutationObserver(function(mutationsList, observer) {
        console.log('mutation:',mutationsList)
        // callback for tunes container mutations
        addStringClassesToNoteHeads()
        addFingeringsAndNoteNames()
        $('#notey').fadeOut()
    });
    observerOpts = {characterData:false, childList:true, attributes:false}
    document.querySelectorAll('.instrument_tunes').forEach(function(instrumentTunes){
        //impliment observer on each individual instrument's tunes container
        observer.observe(instrumentTunes, observerOpts)
    })

    /**
     * ADD STRING CLASSES
     * also add data-noteName to note element
     */
    function addStringClassesToNoteHeads(){
        $('.abcjs-note path[data-name]').each(function(i,pathel){
            // console.log('path element:',pathel)
            const isNotehead = $(pathel).attr('data-name').length <= 2
            if (!isNotehead) return

            const noteName = $(pathel).attr('data-name')
            //check string reference and add the correct string class
            const instrument = $(pathel).closest('.abcjs-container').attr('instrument').toLowerCase()
            const noteString = Object.keys(stringReference[instrument]).find(key => stringReference[instrument][key].includes(noteName))
            
            $(pathel).addClass(`${noteString}String`)

            //add data-attrs to note
            $(pathel).closest('.abcjs-note').attr({
                'data-noteName': noteName,
                'data-instrument': instrument,
                'data-string': noteString
            })

        })
    }

    /**
     * FINGERINGS AND NOTE NAMES
     * after the tune is rendered, loop through notes and append text and tspan elements to svg
     */
    function addFingeringsAndNoteNames(){
        function SVG(tag) {
            return document.createElementNS('http://www.w3.org/2000/svg', tag);
        }

        //loop through all the notes and add svg text element child with class fingering
        $('.abcjs-note').each(function(i,note){
            // console.log('note:',note)
            const noteX = note.getBBox().x
            const noteY = note.getBBox().y
            const noteHeight = note.getBBox().height
            const staffY = $(note).siblings('.abcjs-staff').get(0).getBBox().y
            const staffHeight = $(note).siblings('.abcjs-staff').get(0).getBBox().height
            const noteName = $(note).attr('data-noteName')
            const instrument = $(note).attr('data-instrument')
            const noteString = $(note).attr('data-string')

            const noteNameIndex = stringReference[instrument][noteString].indexOf(noteName)
            const finger = stringReference[instrument][noteString+'Fingers'][noteNameIndex]

            const hasChordTxtEl = !!($(note).find('.abcjs-chord'))
            let noteIsAboveStaff = false
                $(note).find('path').each(function(i,pathEl){
                    if ( pathEl.getBBox().y < staffY ) noteIsAboveStaff = true
                })
            const noChord_inStaff = !hasChordTxtEl && !noteIsAboveStaff
            const chord_inStaff = hasChordTxtEl && !noteIsAboveStaff
            const noChord_aboveStaff = !hasChordTxtEl && noteIsAboveStaff
            const chord_aboveStaff = hasChordTxtEl && noteIsAboveStaff
            const fingeringTxtY =   noChord_inStaff ? staffY - 16 :
                                    noChord_aboveStaff ? noteY - 16 :
                                    chord_inStaff ? staffY - 6 :
                                    chord_aboveStaff ? noteY - 6 :
                                    staffY - 16

            const xAdjustmentForChord = hasChordTxtEl ? -6 : 0
            const fingeringTxtX = noteX + xAdjustmentForChord


            $(SVG('text'))
                .attr({
                    stroke: 'none',
                    fontSize: '16',
                    fontStyle: 'normal',
                    fontFamily: 'Helvetica',
                    fontWeight: 'normal',
                    textDecoration: 'none',
                    class: 'abcjs-fingering',
                    textAnchor: 'middle',
                    x: fingeringTxtX,
                    y: fingeringTxtY
                })
                .appendTo(note)
            $(SVG('tspan'))
                .attr('x',noteX)
                .text(finger)
                .appendTo( $(note).find('text.abcjs-fingering') )

            let noteNameTxtY = staffY + staffHeight + 16
            if (noteY + noteHeight + 6 > noteNameTxtY) noteNameTxtY = noteY + noteHeight + 20

            const standardNoteName = noteName
                .replace(',','')
                .replace(`'`,'')
                .replace("^", "\u266F")
                .replace("_", "\u266D")
                .replace("=", "\u266E")
                .toUpperCase()

            $(SVG('text'))
                .attr({
                    stroke: 'none',
                    fontSize: '16',
                    fontStyle: 'normal',
                    fontFamily: 'Helvetica',
                    fontWeight: 'normal',
                    textDecoration: 'none',
                    class: 'abcjs-noteName',
                    textAnchor: 'middle',
                    x: noteX,
                    y: noteNameTxtY
                })
                .appendTo(note)
            $(SVG('tspan'))
                .attr('x',noteX)
                .text(standardNoteName)
                .appendTo( $(note).find('text.abcjs-noteName') )

        })
    }


    /**
     * SCORE BOOKMARKS
     */
    $('.score_bookmark').click(function(){
        //show loading icon
        //  which is notey playing violin
        $("#notey")
            .attr("class", "")
            .addClass("eyes-blinking looking-at-left-hand playing-violin")
            .fadeIn()
        setTimeout(function () {
            loadScore($clicked_bookmark).then(function () {
                $("#notey").fadeOut("def", function () {
                    $("#notey").removeClass("playing-violin").addClass("holding-violin")
                })
            })
        }, 1000)
        
        const abcViolin = $(this).attr('abc-violin')?.replace(/\\n/g,'\r\n')
        const abcViola = $(this).attr('abc-viola')?.replace(/\\n/g,'\r\n')
        const abcCello = $(this).attr('abc-cello')?.replace(/\\n/g,'\r\n')
        const abcBass = $(this).attr('abc-bass')?.replace(/\\n/g,'\r\n')
        $('#editor-violin').val(abcViolin).change()
        $('#editor-viola').val(abcViola).change()
        $('#editor-cello').val(abcCello).change()
        $('#editor-bass').val(abcBass).change()
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


    /**
     * NOTEY
     */
    // load tiny notey toggle button (and other noteys)
    $('.noteyContainer').each(function(){
        $(this).html( $('#notey').html() )
    })
    //hover
    $(".noteyContainer").hover(
        function () {
            $(this).addClass("eyes-blinking");
        },
        function () {
            $(this).removeClass("eyes-blinking");
        }
    )
    // notey toggler
    $('#noteyToggle').click(function(){
        $('#notey').fadeToggle()
    })

})