// MOBILE AND TABLET CHECK
window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}
if (window.mobileAndTabletCheck) {
    alert(`you're on a mobile/tablet`)
} else{
    console.log(`you're on a desktop`)
}

// READ ABCJS
const abcjs = window.ABCJS

// DEFINE INSTRUMENTS AND REFERENCES
const instruments = ['violin','viola','cello','bass']

const voiceFieldReference = {
    violin: 'violin clef=treble',
    viola: 'viola clef=alto',
    cello: 'cello clef=bass octave=-1',
    bass: 'bass clef=bass octave=-1'
}

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
        c: ['C,' , '=C,' , '^C,' , '_D,' , 'D,' , '=D,' , '^D,' , '_E,' , 'E,' , '=E,' , '^E,' , '_F,', 'F,' , '=F,' , '^F,' , '_G,'],
        cFingers: ['0' , '0' , '\u21931' , '\u21931' , '1' , '1' , '\u21911' , '\u21932' , '2' , '2' , '3' , '2' , '3' , '3' , '\u21913' , '\u21934' , '4' , '4'],
        g: ['G,' , '=G,' , '^G,' , '_A,' , 'A,' , '=A,' , '^A,' , '_B,' , 'B,' , '=B,' , '^B,' , '_C' , 'C' , '=C' , '^C' , '_D'],
        gFingers: ['0' , '0' , '\u21931' , '0' , '\u21931' , '\u21931' , '1' , '1' , '\u21932' , '\u21932' , '2' , '\u21933' , '3' , '3' , '\u21913' , '\u21934' , '4' , '4'],
        d: ['D' , '=D' , '^D' , '_E' , 'E' , '=E' , '^E' , '_F' , 'F' , '=F' , '^F' , '_G' , 'G' , '=G' , '^G' , '_A'],
        dFingers: ['0' , '0' , '\u21931' , '\u21931' , '1' , '1' , '\u21911' , '1' , '\u21932' , '\u21932' , '2' , '\u21933' , '3' , '3' , '\u21913' , '\u21934' , '4' , '4'],
        a: ['A' , '=A' , '^A' , '_B' , 'B' , '=B' , '^B' , '_c' , 'c' , '=c' , '^c' , '_d' , 'd' , '=d' , '^d' , '_e' , 'e' , '=e' , '^e'],
        aFingers: ['0' , '0' , '\u21931' , '\u21931' , '1' , '1' , '\u21911' , '1' , '\u21932' , '\u21932' , '2' , '\u21933' , '3' , '3' , '\u21913' , '\u21934' , '4' , '4' , 'x4']
    },
    cello: {
        c: ['C,' , '=C,' , '^C,' , '_D,' , 'D,' , '=D,' , '^D,' , '_E,' , 'E,' , '=E,' , '^E,' , '_F,', 'F,' , '=F,' , '^F,' , '_G,'],
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
     * CHECK S2S GLOBAL OBJ
     */
    if (!S2S) {
        openDialog(
            `<p>Please report this error. You may still be able to create and edit a new score.</p>`,
            {
                addClass: 'alert',
                title: 'Error Loading Score Data'
            }
        )
        window.S2S = {}
    }

    /**
     * INITIALIZE EDITOR for each instrument
     */
    const abcOpts = {
        add_classes: true,
        responsive: 'resize'
    }

    //create max number of tune divs that could be necessary
        // count how many Xs are present in each abc-${instrument} attribute
        // the highest of that is how many divs we need to create
    instruments.forEach(function(instrument){
        let count = 0
        $(`.score_bookmark[abc-${instrument}]`).each(function(i,bkmk){
            const numXsInString = $(bkmk).attr(`abc-${instrument}`).match(/X:\s?\d+/gm).length
            if (numXsInString > count) count = numXsInString
        })
        //create num of divs in instrument tunes == count+5
        //  +5 for in case the user adds more scores via the editor
        let j = 0
        for(j; j < count+5; j++){
            $(`#tunes-${instrument}`).append('<div></div>')
        }
    })

    //define array of tune divs
    const violin_divs = $('#tunes-violin div').toArray()
    const viola_divs = $('#tunes-viola div').toArray()
    const cello_divs = $('#tunes-cello div').toArray()
    const bass_divs = $('#tunes-bass div').toArray()

    //Initialize Editors
    let editor_violin = new abcjs.Editor("editor-violin",{
        canvas_id: violin_divs,
        warnings_id: "abc-warnings-violin",
        clickListener: function(abcElem, tuneNumber, classes) {
            //the presence of this function is enough to add the functionality
        },
        indicate_changed: true,
        onchange: function(editorInstance) {},
        abcjsParams: abcOpts
    })
    let editor_viola = new abcjs.Editor("editor-viola",{
        canvas_id: viola_divs,
        warnings_id: "abc-warnings-viola",
        clickListener: function(abcElem, tuneNumber, classes) {},
        indicate_changed: true,
        onchange: function(editorInstance) {},
        abcjsParams: abcOpts
    })
    let editor_cello = new abcjs.Editor("editor-cello",{
        canvas_id: cello_divs,
        warnings_id: "abc-warnings-cello",
        clickListener: function(abcElem, tuneNumber, classes) {},
        indicate_changed: true,
        onchange: function(editorInstance) {},
        abcjsParams: abcOpts
    })
    let editor_bass = new abcjs.Editor("editor-bass",{
        canvas_id: bass_divs,
        warnings_id: "abc-warnings-bass",
        clickListener: function(abcElem, tuneNumber, classes) {},
        indicate_changed: true,
        onchange: function(editorInstance) {},
        abcjsParams: abcOpts
    })


    /**
     * TUNES (RE)RENDER OBSERVER
     */
    var observer = new MutationObserver(function(mutationsList, observer) {
        //create an array of unique targets from the mutations list
        const targets = [...new Set(mutationsList.map((item) => item.target))]

        //add highlights and such to each target
        targets.forEach(function(target){
            addStringClassesToNoteHeads(target)
            addFingeringsAndNoteNames(target)
        })

        //Clear style attr of all empty abcjsContainer divs
        //  Otherwise they retain the styles even if its not being used, creating a lot of empty white space
        $('.abcjs-container:not(:has(svg))').attr('style','')

        //Add/Remove disabled class on file input
        areAnyDirty() ? $('#loadScores').addClass('disabled') : $('#loadScores').removeClass('disabled')

        //fade out notey
        $('#notey').fadeOut().removeClass("playing-violin").addClass("holding-violin")
    });
    const observerOpts = {characterData:false, childList:true, attributes:false}
    document.querySelectorAll('.instrument_tunes > div').forEach(function(div){
        //impliment observer on each individual instrument's tunes container
        observer.observe(div, observerOpts)
    })


    /**
     * ADD STRING CLASSES
     * also add data-noteName to note element
     */
    function addStringClassesToNoteHeads(abcContainer){
        $(abcContainer).find('.abcjs-note path[data-name]').each(function(i,pathel){
            // skip if its not a notehead
            const isNotehead = $(pathel).attr('data-name').length <= 2
            if (!isNotehead) return

            //check sharps in keysig
            const numKeysigSharps = $(pathel).parent().siblings('.abcjs-key-signature').find('path[data-name="accidentals.sharp"]').length
            const sharps = ['f','c','g','d','a','e','b']
            const sharpsInKey = sharps.slice(0,numKeysigSharps)

            //check flats in keysig
            const numKeysigFlats = $(pathel).parent().siblings('.abcjs-key-signature').find('path[data-name="accidentals.flat"]').length
            const flats = ['b','e','a','d','g','c','f']
            const flatsInKey = flats.slice(0,numKeysigFlats)

            //define notename
            let noteName = $(pathel).attr('data-name')
            //check if note is in keysig
            if (sharpsInKey.includes(noteName.toLowerCase())) noteName = '^'+noteName
            if (flatsInKey.includes(noteName.toLowerCase())) noteName = '_'+noteName

            //check string reference and add the correct string class
            const instrument = $(pathel).closest('.instrument_tunes').attr('instrument').toLowerCase()
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
    function addFingeringsAndNoteNames(abcContainer){
        function SVG(tag) {
            return document.createElementNS('http://www.w3.org/2000/svg', tag);
        }

        //loop through all the notes and add svg text element child with class fingering
        $(abcContainer).find('.abcjs-note').each(function(i,note){
            const noteX = note.getBBox().x
            const noteY = note.getBBox().y
            const noteHeight = note.getBBox().height
            const staffY = $(note).siblings('.abcjs-staff').get(0).getBBox().y
            const staffHeight = $(note).siblings('.abcjs-staff').get(0).getBBox().height
            const noteName = $(note).attr('data-noteName')
            const instrument = $(note).attr('data-instrument')
            const noteString = $(note).attr('data-string')

            const noteNameIndex = stringReference[instrument][noteString]?.indexOf(noteName)
            const finger = noteNameIndex !== undefined ? stringReference[instrument][noteString+'Fingers'][noteNameIndex] : ''

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

    //READ SCORE DATA JSON from window.scoreData (see scoreData.js)
    const scoreData = JSON.parse(S2S.scoreData)
    console.log('||S2S||  SCORE BOOKMARKS DATA',scoreData)
    //Load Bookmarks From Json File and append each bookmark to the sidebar
    scoreData.forEach(section=>{
        const heading = section.heading
        const id = section.id || ''

        let html = `<ul class="score_bookmark_section" id="${id}">`
        html += `<h1>${heading}</h1>`
        //each bookmark is an li
        section.bookmarks.forEach(bkmk=>{
            html += '<li class="score_bookmark"'
            //each bookmark gets attributes ...  key = value
            for (const prop in bkmk) {
                const abcHtmlString = escapeABC(bkmk[prop])
                html += ` ${prop}="${abcHtmlString}"`
            }
            html += '</li>'
        })
        html += '</ul>'

        //append this section to the sidebar
        $('#sidebar').append(html)
    })


    //On Bookmark Click
    $(document).on('click','.score_bookmark',function(e){
        const $bkmk = $(this)

        //if they clicked (not shift-click) the same score, return
        const scoreAlreadyLoaded = $bkmk.hasClass('active')
        if (!e.shiftKey && scoreAlreadyLoaded) return

        checkForUnsavedChanges(()=> renderScoreFromBkmk($bkmk, e.shiftKey))
    })


    /** SIDEBAR RESIZE */
    $('#sidebar').resizable({
        handles: {
            e: $('#sidebar_resize_handle').get(0)
        },
        minWidth: 35,
        alsoResizeReverse: '#page_content'
    })

    //hide bookmark sections if the sidebar is resized below 43px
    //  this prevents the bookmarks from jumping below the sidebar buttons and screwing up the layout
    $( "#sidebar" ).on( "resize", function( event, ui ) {
        const sidebarWidth = $('#sidebar').width()
        const $bkmkSections = $('.score_bookmark_section')
        //hide/show bkmk sections at sidebar width of 43px
        sidebarWidth < 43 ? $bkmkSections.hide() : $bkmkSections.show()
    })



    /** SIDEBAR SECTION COLLAPSING */
    $("#sidebar :is(h1,h2,h3,h4,h5,h6)").click(function () {
        const $section = $(this).closest(".score_bookmark_section")

        const heading_height = $section.children().first().outerHeight()
        const section_border_height = 2
        let height_to_subtract = $section.prop("height_to_subtract") | $section.height() - heading_height + section_border_height

        $section.prop('height_to_subtract',height_to_subtract)

        if ($section.hasClass("collapsed")) {
            $section.removeClass("collapsed")
            $section.animate({ height: `+=${height_to_subtract}` }, 300)
        } else {
            //re-define height to subtract to account for possible change in height of My Scores Section
            height_to_subtract = $section.height() - heading_height + section_border_height
            $section.addClass("collapsed")
            $section.animate({ height: `-=${height_to_subtract}` }, 300)
        }
    })


    /**
     * SIDEBAR BUTTONS
     */
    //toggle active
    $('#sidebar_buttons > span').click(function(){
        $(this).toggleClass('active')
                .animate({ width: "+=6px", marginLeft: "-=3px" }, 200)
                .animate({ width: "-=6px", marginLeft: "+=3px" }, 200)
    })
    //highlights
    $('#highlights_toggle').click(function(){
        $('#main_container').toggleClass('highlight_notes')
    })
    //new score
    $("#new_score").click(function () {
        checkForUnsavedChanges(()=>newScore())

        function newScore(){
            $('.abcEditor').each((i,editor) => $(editor).val('').change())
            $('.extra_html').html('')
            $(".score_bookmark.active").removeClass("active")
            setAllNotDirty()
        }
    })
    //toggle editors (Edit Button)
    $('#show_editors').click(function(){
        //show all hidden parts
        $('.instrument_tunes:hidden').show().siblings('div:not(.abc-warnings)').show()
        //toggle editors
        $('.abcEditor, .abc-warnings').slideToggle()
        //toggle editor utils
        $('.abcEditor-utils').toggleClass('hidden')
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


    /**
     * PRINTING
     */
    // Print instrument buttons
    $("#printMenu span").click(function () {
        let printInstruments = "";

        switch ($(this).attr("id")) {
        case "printViolin":
            printInstruments = "violin";
            break;
        case "printViola":
            printInstruments = "viola";
            break;
        case "printCello":
            printInstruments = "cello";
            break;
        case "printBass":
            printInstruments = "bass";
            break;
        case "printAll":
            printInstruments = instruments.join(',');
            break;
        case "printAllVisible":
            printInstruments = "allVisible";
            break;
        default:
            console.error("||S2S||  print instrument error");
        }

        $("#tunes_container").attr("printInstruments", printInstruments);
        window.print();
        $("#print").removeClass("active");
    });


    /**
     *  PART UTILITIES
    */
    //copy part utils template html to each part util div
    const partUtilsTemplate = $('#part-utils-template').html()
    $('.part-utils').each((i,partUtils) => {
        $(partUtils)
            //copy content from template
            .html(partUtilsTemplate)
            //HIDE PART BUTTON / TOGGLE PART
            .find('.hide').click(function(){
                $(this).closest('.part-utils').siblings('.instrument_tunes, .extra_html').toggle()
            })
    })

    /**
     *  EDITOR UTILITIES
     */
    const $abcEditorUtilsTemplate = $('#abcEditor-utils-template')
    //copy editor utils template html to each editor util div
    $('.abcEditor-utils').each((i,thisEditorUtils) => {
        const thisInstrument = $(thisEditorUtils).closest('.part').attr('instrument')

        $(thisEditorUtils)
            //copy content from template
            .html($abcEditorUtilsTemplate.html())
            //populate editorUtils_copyFromMenu with each instrument
            .find('.editorUtils_copyFromMenu').each(function(i,menu){
                //clear html first so that the template's menu items aren't copied over as well
                $(menu).html('')
                //append menu item for each other instrument
                instruments.forEach(function(instrument){
                    if (instrument == thisInstrument) return
                    $(menu).append(`<li><div style="text-transform:capitalize;" instrument="${instrument}">${instrument}</div></li>`)

                })
            })
        //EDITOR UTILS MENU SELECTION
        //initialize menu and add event listener for menu item selection
        $(thisEditorUtils).closest('.part').find('.editorUtilMenu').menu({
            select: function(e,activeMenuItem){
                const selectedInstrument = $(activeMenuItem.item[0]).find('div').attr('instrument')
                let editorVal = $(`#editor-${selectedInstrument}`).val()
                const correctVoiceField = voiceFieldReference[thisInstrument]
                //replace all instances of the voice field with the appropriate voice field
                editorVal = editorVal.replace(/(?<=V:[\s]?)(.*)/gm,`${correctVoiceField}`)
                //set this instrument's editor to that val and trigger change
                $(`#editor-${thisInstrument}`).val(editorVal).change()
            }
        })
    })
    /**
     * EDITOR UTIL MENU TOGGLE
     */
    $('.editorUtilMenuToggle').click(function(){
        const $menu = $(this).closest('.editorUtilMenuToggle')
        $menu.next('.editorUtilMenu').toggle()
    })

    /**
     * INITIALIZE TOOLTIPS
     */
    $(document).tooltip({
        track: true,
        my: "left center"
    })

    /**
     * TOP BAR
     */
    //PAGE SIZE SLIDER
    const $pageContent = $('#page_content')
    const maxPageWidth = $pageContent.outerWidth()
    $('#pageSize')
        //set max and val on slider to max page width
        .attr({
            'max': maxPageWidth,
            'value': maxPageWidth
        })
        //on input, set page width to slider val
        .on('input', e => {
            const sliderVal = e.target.value
            const newWidth = sliderVal+'px'
            $pageContent.css('width',newWidth)
        })


    /**
     * SAVE CURRENT
     * save the current value of the abc editors as an object as json
     */
    $('#saveCurrent').click(()=>{
        //get the abcstring for each instrument
        const contentsObj = {}
        instruments.forEach(function(instrument){
            contentsObj['abc-'+instrument] = escapeABC($('#editor-'+instrument).val())
        })

        //ask user for a filename
        const filename = $('#fileName').val() || 'MyScore'
        contentsObj['_title'] = filename

        const contentsArray = [contentsObj]

        const contents = JSON.stringify(contentsArray)
        saveFile(filename,contents)
    })

    /**
     * SAVE ALL
     * save all the scores in the My Scores section
     */
    $('#saveAll').click(()=>{
        const $myScores = $('#myScores li.score_bookmark')

        if ($myScores.length === 0) {
            console.warn('||S2S||  my scores section is empty')
            openDialog(
                'Click the "Save" button to save the current score to the My Scores section.',
                {
                    addClass: 'warn',
                    title: 'My Scores Section is Empty',
                    titleIcon: 'exclamation'
                }
            )
            return
        }

        const contentsArray = []

        //create an obj of all attributes of each score and push it to contentsArray
        $myScores.each(function(){
            const contentsObj = {}
            $.each(this.attributes,function(i,attr){
                contentsObj[attr.name] = attr.value
            })
            contentsArray.push(contentsObj)
        })

        const filename = $('#fileName').val() || 'MyScores'

        //stringify and save
        const contents = JSON.stringify(contentsArray)
        saveFile(filename,contents)
    })

    /**
     * LOAD SCORE(S)
     *
     */
    const fileReader = new FileReader()
    //FILE INPUT LOAD
    // when the file has finished reading
    fileReader.onload = function( ev ) {
        //validate the file extension

        //get and validate contents
        const contents = JSON.parse( decodeURIComponent( ev.target.result ) );
        console.log('||S2S||  ',contents)

        //  if the length of the array is empty, throw an error
        if (contents.length === 0){
            openDialog(
                'There was an error with the file contents.',
                {
                    addClass: 'warn',
                    title: 'File Contents Error',
                    titleIcon: 'exclamation'
                }
            )
            return
        }

        //append each score in the contents array to the My Scores section
        const $myScores = $('#myScores')
        contents.forEach((scoreData)=>{
            let bkmkHTML = `<li class="score_bookmark"`
            for (const prop in scoreData){
                bkmkHTML += ` ${prop}="${scoreData[prop]}"`
            }
            bkmkHTML += `></li>`
            $myScores.append(bkmkHTML)
        })

        //if the contents array only contains 1 score, render the score
        if (contents.length === 1) {
            renderScoreFromBkmk($myScores.find('.score_bookmark').last())
            setAllNotDirty()
        }
    }

    // FILE INPUT CHANGE
    //when the file input changes (ie: user selects a file)
    $('#loadScores').on("change", function() {
        // get the file item from the input field
        const file = this.files[0]
        console.log('||S2S||  loading file',file)

        //validate file extension and type
        const validExtension = /.s2s$/g.test(file.name)
        if( !validExtension ) {
            openDialog(
                'Please upload a .s2s (staff to string) file',
                {
                    addClass: 'warn',
                    title: 'Invalid File Extension',
                    titleIcon: 'exclamation'
                }
            )
            return
        }

        // read the file as text
        fileReader.readAsText( file )
        // and then then the fileReader's load event will trigger (see above)
    })

    // FILE INPUT CLICK
    //if there are unsaved changes, prompt user asking if its okay to continue
    $('#loadScores').on('click',function(e){
        if ( $('#loadScores').hasClass('disabled') ){
            //first, stop click event from bubbling
            e.preventDefault()
            e.stopPropagation()

            //don't check for unsaved changes bc it having the disabled class means there are unsaved changes
            unsavedChangesPrompt(()=>{
                //remove disabled class and trigger click
                //now, since file input doesn't have the disabled class, the click will bubble
                $('#loadScores').removeClass('disabled')
                $('#loadScores').click()
            })
        }
    })


    /**
     * INITIALIZE DIALOG
     */
    //default options
    const header_height = $('#top_bar').height()
    const dialogTop = header_height + 10
    $('#dialog').dialog({
        autoOpen: false,
        position:{
            my:'center top',
            at:'center top+'+dialogTop+'px',
            of: window
        },
        modal:true,
        buttons: [
            {
              text: "Ok",
              click: function() {
                $( this ).dialog( "close" );
              }
            }
        ],
        resizable: false,
        //hide the close button and disable close on escape
        //  all dialogs have an ok button by default that closes the dialog
        closeOnEscape: false,
        open: function(e, ui) {
            $(".ui-dialog-titlebar-close").hide();
        }
    })


    const openDialogOptsDefault = {
        addClass: 'myDialog',               //any custom classes to add to dialog
        title: 'Staff To Stand',            //heading of the dialog
        titleIcon: 'exclamation',           //ex: flag, exclamation
        buttons: [{                         //array of jqui button objs
            text: 'OK',
            click: function(){ $(this).dialog('close') }
        }],
        modal: true,                        //whether the dialog should be a modal
        fixedPos: true                      //whether dialog should be fixed
    }
    /**
     * OPEN DIALOG
     * @param {String} html the html (content) of the dialog
     * @param {Object} opts addClass (string as 'classA classB etc')(alert,warn), title (string), titleIcon (FA icon name), buttons (array of jqui button objs), modal (def true), fixedPos (def true)
     * @param {...Function} buttonFunctions an array of functions to call on dialog buttons (must be in same order as buttons array in opts)
     */
    function openDialog(html, opts){
        opts = {...openDialogOptsDefault, ...opts}

        const addClasses = opts.addClass + (opts.fixedPos?' fixed-dialog':'')

        $('#dialog')
            .dialog('option','title',opts.title)
            .html(html)
            .dialog('option','buttons',opts.buttons)
            .dialog('option','modal',opts.modal)
            .dialog('option','classes.ui-dialog',addClasses)
            .on( "dialogopen", function( event, ui ) {
                //add titleIcon if it doesn't already exist
                const $dialogWidget = $(this).dialog('widget')
                const hasTitleIcon = $dialogWidget.find('[data-fa-i2svg]').length > 0
                if (!hasTitleIcon) $('<i class="fas fa-'+opts.titleIcon+'"></i> ').prependTo($dialogWidget.find('.ui-dialog-title'))
            } )
            .dialog('open')
    }

    /**
     * UNSAVED CHANGES
     * @param {Function} onContinue
     * @param {Function} onCancel
     */
    function unsavedChangesPrompt(onContinue,onCancel){
        openDialog(
            'You have unsaved changes. Do you wish to continue?',
            {
                addClass: 'alert',
                title: 'Unsaved Changes',
                titleIcon: 'flag',
                buttons: [
                    {
                        text: 'Cancel',
                        click: function(){
                            $(this).dialog('close')
                            if (onCancel) onCancel()
                        }
                    },
                    {
                        text: 'Continue',
                        click: function(){
                            $(this).dialog('close')
                            if (onContinue) onContinue()
                        }
                    }
                ]
            }
        )
    }
    /**
     * CHECK FOR UNSAVED CHANGES
     * Checks if any editors are dirty and calls unsavedChangesPrompt if so, and onContinue arg if not.
     * @param {Function} onContinue
     * @param {Function} onCancel
     */
    function checkForUnsavedChanges(onContinue,onCancel){
        if(areAnyDirty()){
            unsavedChangesPrompt(onContinue,onCancel)
        }else{
            onContinue()
        }
    }


    /**
     *  DIRTY flag
     */
    function setAllNotDirty(){
        editor_violin.setNotDirty()
        editor_viola.setNotDirty()
        editor_cello.setNotDirty()
        editor_bass.setNotDirty()
    }
    function areAnyDirty(){
        return $('.abcEditor.abc_textarea_dirty').length > 0
    }


    /**
     * COPY TEXT TO CLIPBOARD
     */
    function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;

        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('||S2S||  Fallback: Copying text command was ' + msg);
        } catch (err) {
            console.error('||S2S||  Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
    }
    function copyTextToClipboard(text) {
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(text);
            return;
        }
        navigator.clipboard.writeText(text).then(function() {
            console.log('||S2S||  Async: Copying to clipboard was successful!');
        }, function(err) {
            console.error('||S2S||  Async: Could not copy text: ', err);
        });
    }

    /**
     * ADD ALSO RESIZE REVERSE OPTION TO JQUERY UI RESIZE
     */
    $.ui.plugin.add("resizable", "alsoResizeReverse", {

        start: function() {
            var that = $(this).resizable( "instance" ),
                o = that.options;

            $(o.alsoResizeReverse).each(function() {
                var el = $(this);
                el.data("ui-resizable-alsoresizeReverse", {
                    width: parseInt(el.width(), 10), height: parseInt(el.height(), 10),
                    left: parseInt(el.css("left"), 10), top: parseInt(el.css("top"), 10)
                });
            });
        },

        resize: function(event, ui) {
            var that = $(this).resizable( "instance" ),
                o = that.options,
                os = that.originalSize,
                op = that.originalPosition,
                delta = {
                    width: (that.size.width - os.width) || 0,
                    top: (that.position.top - op.top) || 0,
                    left: (that.position.left - op.left) || 0
                };

            $(o.alsoResizeReverse).each(function() {
                var el = $(this), start = $(this).data("ui-resizable-alsoresize-reverse"), style = {},
                    css = el.parents(ui.originalElement[0]).length ?
                        [ "width" ] :
                        [ "width", "height", "top", "left" ];

                $.each(css, function(i, prop) {
                    var sum = (start[prop] || 0) - (delta[prop] || 0);
                    if (sum && sum >= 0) {
                        style[prop] = sum || null;
                    }
                });

                el.css(style);
            });
        },

        stop: function() {
            $(this).removeData("resizable-alsoresize-reverse");
        }
    });

    /**
     * SAVE
     * @param {string} filename
     * @param {JSON} stringified_contents
     */
    function saveFile(filename,stringified_contents){
        // create a link DOM fragment
        var $link = $("<a />");
        // encode any special characters in the JSON
        var text = encodeURIComponent( stringified_contents );
        //create link and click to initiate download
        $link
            .attr( "download", filename+".s2s" )
            .attr( "href", "data:application/octet-stream," + text )
            .appendTo( "body" )
            .get(0)
            .click()

        console.log('||S2S||  FILE SAVED',filename)
        //log the stringified object without the opening and closing brackets, for easier copy-pasting to master json file
        console.log(stringified_contents.substring(1,stringified_contents.length-1))

        setAllNotDirty()
    }


    /**
     * RENDER SCORE FROM BOOKMARK
     * @param {jquery element} $bkmk jquery element: score bookmark to render
     * @param {boolean} appendScore if true, appends abc text to editors as another tune rather than replacing the editors' value
     */
    function renderScoreFromBkmk($bkmk,appendScore=false){
        console.log('||S2S||  rendering score from bkmk:',$bkmk)

        //show notey playing violin
        $("#notey")
        .attr("class", "")
        .addClass("eyes-blinking looking-at-left-hand playing-violin")
        .fadeIn()

        instruments.forEach((instrument,i)=>{
            //get abc string from the bkmk's attr
            const newAbc = unescapeABC($bkmk.attr(`abc-${instrument}`))
            //define current instrument editor and its value
            const $instrEditor = $(`#editor-${instrument}`)
            const currentEditorVal = $instrEditor.val()

            //if appending txt to editors (user shift-clicked a bkmk), then return
            if (appendScore){
                $instrEditor.val(currentEditorVal+'\n'+newAbc).change()
                return
            }

            //do only once (rather than for each instrument)
            if (i===0) {
                //remove active class from all bkmks
                $('.score_bookmark.active').removeClass('active')

                //show all parts (ignore editors)
                $('.part').children('div:not(.abc-warnings)').show()

                //change val of file name input to bkmk title
                $('#fileName').val( $bkmk.attr('_title') )
            }

            //set editor to new abc string
            $instrEditor.val(newAbc).change()
        })

        //set extra html
        const extra_html = $bkmk.attr('extra_html') || ''
        $('.extra_html').html(extra_html)

        setAllNotDirty()

        //Add active class to bkmk to indicate its already loaded
        $bkmk.addClass('active')

        //remove disabled class from file input
        $('#loadScores').removeClass('disabled')
    }

    /**
     * CLICK ANYWHERE ON DOCUMENT
     * deselect notes, hide the print menu
     */
    $(document).on("click", function (e) {
        const $target = $(e.target);

        //deselect note
        const $selectedNotes = $(".abcjs-note_selected");
        const clicked_note = $target.closest($selectedNotes).length
        if (!clicked_note) $selectedNotes.removeClass("abcjs-note_selected");

        //hide print menu
        const clicked_print_menu = $target.closest("#printMenu,#print").length
        if (!clicked_print_menu) $("#print").removeClass("active");
    })

    /**
     * MAKE NOTEY DRAGGABLE
     */
    $('#notey .notey').draggable()


    /**
     * ESCAPE AND UNESCAPE ABC STRINGS
     * @param {String} abc
     * @param {Boolean} toHTML default true
     */
    function escapeABC(abc,toHTML=true){
        if (!toHTML) return abc.replace(/[\n"']/gm,'\$&')

        return abc.replace(/\n/gm,'\\n').replace(/"/gm,'&quot;').replace(/'/gm,'&apos;')
    }
    /**
     * @param {String} abc
     * @param {Boolean} fromHTML default true
     */
    function unescapeABC(abc,fromHTML=true){
        if (!fromHTML) return abc.replace(/\\n/g,'\r\n').replace(/\"/g,'"').replace(/'/g,"'")

        return abc.replace(/\\n/g,'\r\n').replace('&quot;','"').replace('&apos;',"'")
    }





}) //end on page load