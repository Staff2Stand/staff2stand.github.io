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
        responsive: 'resize',
        afterParsing: addFingeringsAndNoteNames()
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
     * AFTER PARSING
     */
    function addFingeringsAndNoteNames() {
        let abcString = $('#editor').val()
        console.log(abcString)

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
        const reg = /([_^=])*([A-Ga-g],*'*)/gm;
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
            const accidentalTxt =
            "" +
            accidental
                ?.replace("^", "\u266F")
                ?.replace("_", "\u266D")
                ?.replace("=", "\u266E");

            //create letter name txt
            const letterNameTxt = `"_${noteWithoutAccidental
            .toUpperCase()
            .replace(",", "")
            .replace("'", "")}${accidentalTxt}"`;

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