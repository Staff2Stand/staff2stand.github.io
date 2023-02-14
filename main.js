const abcjs = window.ABCJS

const stringReference = {
    violin: {
        g: ['G,' , '=G,' , '^G,' , '_A,' , 'A,' , '=A,' , '^A,' , '_B,' , 'B,' , '=B,' , '^B,' , '_C' , 'C' , '=C' , '^C' , '_D'],
        gFingers: ['0' , '0' , 'low-1' , '0' , 'low-1' , 'low-1' , '1' , '1' , 'low-2' , 'low-2' , '2' , 'low-3' , '3' , '3' , 'high-3' , 'low-4' , '4' , '4'],
        d: ['D' , '=D' , '^D' , '_E' , 'E' , '=E' , '^E' , '_F' , 'F' , '=F' , '^F' , '_G' , 'G' , '=G' , '^G' , '_A'],
        dFingers: ['0' , '0' , 'low-1' , 'low-1' , '1' , '1' , 'high-1' , '1' , 'low-2' , 'low-2' , '2' , 'low-3' , '3' , '3' , 'high-3' , 'low-4' , '4' , '4'],
        a: ['A' , '=A' , '^A' , '_B' , 'B' , '=B' , '^B' , '_c' , 'c' , '=c' , '^c' , '_d' , 'd' , '=d' , '^d' , '_e'],
        aFingers: ['0' , '0' , 'low-1' , 'low-1' , '1' , '1' , 'high-1' , '1' , 'low-2' , 'low-2' , '2' , 'low-3' , '3' , '3' , 'high-3' , 'low-4' , '4' , '4'],
        e: ['e' , '=e' , '^e' , '_f' , 'f' , '=f' , '^f' , '_g' , 'g' , '=g' , '^g' , '_a' , 'a' , '=a' , '^a' , '_b' , 'b' , '=b' , '^b'],
        efingers: ['0' , '0' , 'low-1' , '0' , 'low-1' , 'low-1' , '1' , '1' , 'low-2' , 'low-2' , '2' , 'low-3' , '3' , '3' , 'high-3' , 'low-4' , '4' , '4' , 'x4']
    },
    viola: {
        c: ['C,' , '=C,' , '^C,' , '_D,' , 'D,' , '=D,' , '^D,' , '_E,' , 'E,' , '=E,' , '^E,' , '_F,', 'F,' , '=F,' , '^F' , '_G,'],
        cFingers: ['0' , '0' , 'low-1' , 'low-1' , '1' , '1' , 'high-1' , 'low-2' , '2' , '2' , '3' , '2' , '3' , '3' , 'high-3' , 'low-4' , '4' , '4'],
        g: ['G,' , '=G,' , '^G,' , '_A,' , 'A,' , '=A,' , '^A,' , '_B,' , 'B,' , '=B,' , '^B,' , '_C' , 'C' , '=C' , '^C' , '_D'],
        gFingers: ['0' , '0' , 'low-1' , '0' , 'low-1' , 'low-1' , '1' , '1' , 'low-2' , 'low-2' , '2' , 'low-3' , '3' , '3' , 'high-3' , 'low-4' , '4' , '4'],
        d: ['D' , '=D' , '^D' , '_E' , 'E' , '=E' , '^E' , '_F' , 'F' , '=F' , '^F' , '_G' , 'G' , '=G' , '^G' , '_A'],
        dFingers: ['0' , '0' , 'low-1' , 'low-1' , '1' , '1' , 'high-1' , '1' , 'low-2' , 'low-2' , '2' , 'low-3' , '3' , '3' , 'high-3' , 'low-4' , '4' , '4'],
        a: ['A' , '=A' , '^A' , '_B' , 'B' , '=B' , '^B' , '_c' , 'c' , '=c' , '^c' , '_d' , 'd' , '=d' , '^d' , '_e' , 'e' , '=e' , '^e'],
        aFingers: ['0' , '0' , 'low-1' , 'low-1' , '1' , '1' , 'high-1' , '1' , 'low-2' , 'low-2' , '2' , 'low-3' , '3' , '3' , 'high-3' , 'low-4' , '4' , '4' , 'x4']
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
        },
        abcjsParams: {
            add_classes: true,
            responsive: 'resize'
        }
    })
    /**
     * TUNES CONTAINER (RE)RENDER OBSERVER
     */
    elementToObserve = document.getElementById('tunes_container')
    observer = new MutationObserver(function(mutationsList, observer) {
        // callback for tunes container mutations
        addStringClassesToNoteHeads()
        addFingeringsAndNoteNames()
    });
    observer.observe(elementToObserve, {characterData: false, childList: true, attributes: false})

    /**
     * ADD STRING CLASSES
     * also add data-noteName to note element
     */
    function addStringClassesToNoteHeads(){
        $('.abcjs-note path[data-name]').each(function(i,pathel){
            const isNotehead = $(pathel).attr('data-name').length <= 2
            if (!isNotehead) return

            const noteName = $(pathel).attr('data-name')
            //check string reference and add the correct string class
            const instrument = $(pathel).closest('.abcjs-container').find('.abcjs-voice-name tspan').html().toLowerCase()
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
        //loop through all the notes (select by abcjs-p... class) and add svg text element child with class fingering
        $('.abcjs-note').each(function(i,note){
            const noteX = note.getBBox().x
            const noteY = note.getBBox().y
            const noteHeight = note.getBBox().height
            const noteWidth = note.getBBox().width
            const noteName = $(note).attr('data-noteName')
            const instrument = $(note).attr('data-instrument')
            const noteString = $(note).attr('data-string')

            const noteNameIndex = stringReference[instrument][noteString].indexOf(noteName)
            console.log(noteName,instrument,noteString,noteNameIndex)
            const finger = stringReference[instrument][noteString+'Fingers'][noteNameIndex]

            const fingeringTxtY = noteY + 16

            const fingeringTxtHtml = `<text stroke="none" font-size="16" font-style="normal" font-family="Helvetica" font-weight="normal" text-decoration="none" class="abcjs-fingering" text-anchor="middle" x="${noteX}" y="${fingeringTxtY}"><tspan x="${noteX}">${finger}</tspan></text>`

            $(note).append(fingeringTxtHtml)

            const noteNameTxtY = noteY + noteHeight + 16

            const noteNameTxtHtml = `<text stroke="none" font-size="16" font-style="normal" font-family="Helvetica" font-weight="normal" text-decoration="none" class="abcjs-noteName" text-anchor="middle" x="${noteX}" y="${noteNameTxtY}"><tspan x="${noteX}">${noteName}</tspan></text>`

            $(note).append(noteNameTxtHtml)

        })
    }


    /**
     * AFTER PARSING
     */
    function afterParsing(tuneObj, tuneNumber, abcString) {
        // let abcString = $('#editor').val()
        if (abcString === '') return
        console.log(tuneObj, tuneNumber, abcString)

        //Create Fingerings Reference
        let fingerings = {
            violin: {
            "G,": "!0!",
            "^G,": "!1!",
            "A,": "!1!",
            "B,": "!2!",
            C: "!3!",
            _D: "!4!",
            D: "!0!",
            "^D": "!1!",
            E: "!1!",
            F: "!2!",
            G: "!3!",
            _A: "!4!",
            A: "!0!",
            "^A": "!1!",
            B: "!1!",
            c: "!2!",
            d: "!3!",
            _e: "!4!",
            e: "!0!",
            "^e": "!1!",
            f: "!1!",
            g: "!2!",
            a: "!3!",
            b: "!4!"
            },
            viola: {
            "C,": "!0!",
            "^C,": "!1!",
            "D,": "!1!",
            "E,": "!2!",
            "F,": "!3!",
            _G: "!4!",
            "G,": "!0!",
            "^G,": "!1!",
            "A,": "!1!",
            "B,": "!2!",
            C: "!3!",
            _D: "!4!",
            D: "!0!",
            "^D": "!1!",
            E: "!1!",
            F: "!2!",
            G: "!3!",
            _A: "!4!",
            A: "!0!",
            "^A": "!1!",
            B: "!1!",
            c: "!2!",
            d: "!3!",
            e: "!4!"
            },
            cello: {
            C: {
                "C,": "!0!",
                "^C,": "!1!",
                "D,": "!1!",
                "E,": "!3!",
                "F,": "!4!",
                "G,": "!0!",
                "^G,": "!1!",
                "A,": "!1!",
                "B,": "!3!",
                C: "!4!",
                D: "!0!",
                "^D": "!1!",
                E: "!1!",
                F: "!2!",
                G: "!4!",
                A: "!0!",
                "^A": "!1!",
                B: "!1!",
                c: "!2!",
                d: "!4!"
            }
            },
            bass: {
            C: {
                "E,": "!0!",
                "^E,": "!1!",
                "F,": "!1!",
                "G,": "!2!",
                "A,": "!0!",
                "^A,": "!1!",
                "B,": "!1!",
                C: "!2!",
                D: "!0!",
                "^D": "!1!",
                E: "!1!",
                F: "!2!",
                G: "!0!",
                "^G": "!1!",
                A: "!1!",
                B: "!4!"
            }
            }
        };
        //define other keys by merging the previous key and changing just those notes that need changing
        //for cello, we're changing notes that change from 2->3 or visa versa
        //for bass, 2->4 or visa versa
        fingerings.cello["G"] = {
            ...fingerings.cello["C"],
            F: "!3!"
        };
        fingerings.cello["D"] = {
            ...fingerings.cello["G"],
            c: "!3!"
        };
        fingerings.cello["A"] = {
            ...fingerings.cello["D"],
            G: "!1!"
        };
        fingerings.cello["E"] = {
            ...fingerings.cello["A"],
            D: "!1!",
            "D,": "2"
        };

        fingerings.bass["G"] = {
            ...fingerings.bass["C"],
            F: "!4!"
        };
        fingerings.bass["D"] = {
            ...fingerings.bass["G"],
            C: "!4!"
        };
        fingerings.bass["A"] = {
            ...fingerings.bass["D"],
            G: "!1!"
        };
        fingerings.cello["E"] = {
            ...fingerings.cello["A"],
            D: "!1!"
        };

        let targetInstrument = abcString.match(/V:\s?(.*?)\s/)[1].toLowerCase()
        let key = abcString.match(/K:\s?(.*?)\s/)

        //Choose which fingering reference based on instrument (and key)
        let fingeringReference;
        switch (targetInstrument) {
            case "violin":
            case "viola":
            fingeringReference = fingerings[targetInstrument];
            break;
            case "cello":
            case "bass":
            fingeringReference = fingerings[targetInstrument][key]
                ? fingerings[targetInstrument][key]
                : fingerings[targetInstrument]["C"];
            break;
            default:
            console.error("instrument not supported");
            break;
        }
        //replace each note to include it's fingering (skip matches that are inbetween quotes)
        const reg = /(?<!^[A-Z:].*?)([_^=])*([A-Ga-g],*'*)(?!.*\n[A-Z:].*\n)/gm;
        abcString = abcString.replace(reg, function (
            note,
            accidental,
            noteWithoutAccidental,
            offset
        ) {
            //count quotation marks in contents before the match. If odd, we're in quotes so skip it
            const contents_before = abcString.substring(0, offset);
            let num_of_quotes = 0;
            for (const char of contents_before) {
            if (char === '"') num_of_quotes++;
            }
            //at end, if odd, then we're in a quote
            const in_quote = !!(num_of_quotes % 2);

            if (in_quote) return note;

            //convert abc accidental to accidental
            let accidentalTxt = accidental
                ?.replace("^", "\u266F")
                ?.replace("_", "\u266D")
                ?.replace("=", "\u266E");
            if (!accidentalTxt) accidentalTxt = '';

            //create letter name txt
            let letterNameTxt = `"_${noteWithoutAccidental
                .toUpperCase()
                .replace(",", "")
                .replace("'", "")}${accidentalTxt}"`;
            if (!letterNameTxt) letterNameTxt = '';

            //check the fingering reference
            if (fingeringReference[note])
            return fingeringReference[note] + letterNameTxt + note;

            //if fingeringReference[note] is undefined, try referencing it without the accidental
            if (fingeringReference[noteWithoutAccidental])
            return fingeringReference[noteWithoutAccidental] + letterNameTxt + note;

            //if still undefined, just return the note
            console.warn("Note ", note, " not found in fingering reference");
            return letterNameTxt + note;
        });
        console.log(abcString)
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