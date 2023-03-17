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
    $('.score_bookmark').click(function(e){
        const $bkmk = $(this)

        //if they clicked (not shift-click) the same score, return
        const scoreAlreadyLoaded = $bkmk.hasClass('active')
        if (!e.shiftKey && scoreAlreadyLoaded) return

        //show notey playing violin
        $("#notey")
            .attr("class", "")
            .addClass("eyes-blinking looking-at-left-hand playing-violin")
            .fadeIn()
        
        instruments.forEach((instrument,i)=>{
            //get abc string from the bkmk's attr
            const newAbc = $bkmk.attr(`abc-${instrument}`)?.replace(/\\n/g,'\r\n')
            //define current instrument editor and its value
            const $instrEditor = $(`#editor-${instrument}`)
            const currentEditorVal = $instrEditor.val()

            //if SHIFT CLICKing append txt to editors, then return
            if (e.shiftKey){
                $instrEditor.val(currentEditorVal+'\n'+newAbc).change()
                return
            }

            //do only once
            if (i===0) {
                //remove active class from all bkmks
                $('.score_bookmark.active').removeClass('active')

                //show all parts (ignore editors)
                $('.part').children('div:not(.abc-warnings)').show()


                //Clear style attr of all abcjsContainer divs
                //  Otherwise it retains the styles even if its not being used, creating a lot of empty white space
                //  also empty editors so that clearing style attr doesn't cause all abcjs containers to overlap and cause that jumbled mess
                $('.instrument_tunes .abcjs-container')
                    .one('change',()=> $(this).attr('style',''))
                    .val('').change()
            }

            //set editor to new abc string
            $instrEditor.val(newAbc).change()
        })

        //add active class to bkmk to indicate its already loaded
        $bkmk.addClass('active')
    })


    /** SIDEBAR TOGGLE */
    $("#sidebar_toggle_container").on("click", () => {
        $("#main_container").toggleClass("sidebar_collapsed")
    })

    /** SIDEBAR SECTION COLLAPSING */
    //add height to subtract prop
    $("#sidebar .score_bookmark_section").each(function (i, section) {
        const heading_height = $(section).children().first().outerHeight()
        const height_to_subtract = $(section).height() - heading_height + 2 //<- 2 is for the 2px border on the bookmark section
        $(section).prop("height_to_subtract", height_to_subtract)
    })
    // click listener
    $("#sidebar :is(h1,h2,h3,h4,h5,h6)").click(function () {
        const $section = $(this).closest(".score_bookmark_section")
        const height_to_subtract = $section.prop("height_to_subtract")

        if ($section.hasClass("collapsed")) {
        $section.removeClass("collapsed")
        $section.animate({ height: `+=${height_to_subtract}` }, 300)
        } else {
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
    //clear scores
    $("#clear_scores").click(function () {
        $('.abcEditor').each((i,editor) => $(editor).val('').change())
        $(".score_bookmark.current").removeClass("current")
    })
    //toggle editors (Edit Button)
    $('#show_editors').click(function(){        
        //show all hidden parts
        $('.instrument_tunes:hidden').show().siblings('div:not(.abc-warnings)').show()
        //toggle editors
        $('.abcEditor, .abc-warnings').slideToggle()
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
            printInstruments = "violin,viola,cello,bass";
            break;
        case "printAllVisible":
            printInstruments = "allVisible";
            break;
        default:
            console.error("print instrument error");
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
            //HIDE BUTTON / TOGGLE PART
            .find('.hide').click(function(){
                $(this).closest('.part-utils').siblings('.instrument_tunes').toggle()
            })
    })

    /**
     *  EDITOR UTILITIES
     */
    //copy editor utils template html to each editor util div
    const abcEditorUtilsTemplate = $('#abcEditor-utils-template').html()
    $('.abcEditor-utils').each((i,abcEditorUtils) => {
        $(abcEditorUtils)
            //copy content from template
            .html(abcEditorUtilsTemplate)
            //COPY TXT AS STRING
            .find('.copyTxtAsString').click(function(){
                const editor = $(this).closest('.abcEditor-utils').siblings('.abcEditor')
                const text = $(editor).val()
                const textSingleLine = text.replace(/\n/gm,'\\n')
                copyTextToClipboard(textSingleLine)
            })
    })

    /**
     * TOP BAR
     */
    const $pageContent = $('#page_content')
    const maxPageWidth = $pageContent.width()
    $('#pageSize').on('input', e => {
        const currentPageWidth = $pageContent.width()
        const sliderVal = e.target.value
        const newWidth = maxPageWidth * (sliderVal/100) + '%'
        $pageContent.css('width',newWidth)
    })
        

})



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
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}