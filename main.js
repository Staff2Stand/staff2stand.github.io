// READ ABCJS
const abcjs = window.ABCJS

// DEFINE INSTRUMENTS AND REFERENCES
const instruments = ['violin','viola','cello','bass','piano']

const voiceFieldReference = {
    violin: 'violin clef=treble',
    viola: 'viola clef=alto',
    cello: 'cello clef=bass octave=-1',
    bass: 'bass clef=bass octave=-1',
    piano: 'RH clef=treble'
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

//UTILITY FUNCTIONS
/**
 * Is Overlapping
 * @param {*} div1 
 * @param {*} div2 
 * @returns Bool
 */
function isOverlapping(div1, div2){
    div1 = $(div1).get(0).getBoundingClientRect();
    div2 = $(div2).get(0).getBoundingClientRect();
    return (div1.right > div2.left && 
            div1.left < div2.right && 
            div1.bottom > div2.top && 
            div1.top < div2.bottom)
}
/**
 * Distance To Separate
 * @param {*} el1 
 * @param {*} el2 
 * @returns {object} object with props left, right, up, down. Value of each is the distance(px) el1 needs to move, as in xy coordinates, to be in that direction from el2.
 */
function distanceToSeparate(el1,el2){
    el1 = $(el1).get(0).getBoundingClientRect()
    el2 = $(el2).get(0).getBoundingClientRect()

    //Max and Min checks which side of el2 its on, and changes that direction val to 0, since el1 is already on that side. For example, left should have a max val of 0 to ensure we don't move el1 to the right.
    return {
        left:   Math.min(el2.left - el1.right, 0),
        right:  Math.max(el2.right - el1.left, 0),
        up:     Math.min(el2.top - el1.bottom, 0),
        down:   Math.max(el2.bottom - el1.top, 0)
    }
}
/**
 * Has Only 1 Letter
 * @param {*} string 
 * @returns Bool
 */
function hasOnly1Letter(string){
    return (string.match(/[A-Za-z]/g) || []).length === 1
}

//ON PAGE LOAD
$(function(){
    /**
     * CHECK S2S GLOBAL OBJ
     */
    if (!S2S) {
        openDialog(
            `<p>Please report this error. You may still be able to create and edit a new score.</p>`,
            {
                addClass: 'alert',
                title: 'Error Loading Data'
            }
        )
        window.S2S = { scoreData:{} }
    }

    /**
     * INITIALIZE GLOBAL ACTIVE SCORES ARRAY
     */
    S2S.activeScores = []

    //CREATE CUSTOM CONTEXT MENU ELEMENT
    const $customMenu = $(`<ul class='custom-menu'></ul>`)
    $customMenu.appendTo('body')

    /**
     * INITIALIZE EDITOR for each instrument
     */
    //Create max number of tune divs that could be necessary
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

    //Define array of tune divs
    const tuneDivs = (function(){
        const temp = {}
        instruments.forEach(instrument=>{
            temp[instrument] = $(`#tunes-${instrument} div`).toArray()
        })
        return temp
    })()

    //Initialize Editors
    const abcOpts = {
        add_classes: true,
        responsive: 'resize',
        oneSvgPerLine: true
    }
    const editorInstances = (function(){
        const temp = {}
        instruments.forEach(instrument=>{
            const abcEditorOpts = {
                canvas_id: tuneDivs[instrument],
                warnings_id: `abc-warnings-${instrument}`,
                clickListener: function(abcElem, tuneNumber, classes) {
                    //the presence of this function is enough to add the functionality
                },
                indicate_changed: true,
                onchange: function(editorInstance) {
                    console.log(`||S2S||  ${instrument} editor instance:`,editorInstance)
                    //set bkmk's attr to the changed value
                    const changedInstrument = $(editorInstance.editarea.textarea).closest('.part').attr('instrument')
                    const oldAbc = escapeABC(editorInstance.editarea.initialText)
                    const newAbc = escapeABC(editorInstance.currentAbc)
                    const reg_eachBkmk = /(X:\s?1.*?)(?=(?:X:\s?1)|$)/sg
                    const eachNewBkmkAbc = newAbc.match(reg_eachBkmk)
                    const eachOldBkmkAbc = oldAbc.match(reg_eachBkmk)

                    if (!oldAbc) {
                        //This means the old editor val is ''.
                        //  This occurs when a bkmk is clicked (not shift-clicked)
                        //      - ie, the renderScoreFromBkmk function clears all of the editors first
                        return
                    }
                    if (!eachOldBkmkAbc){
                        //This means there was a value in the editor, but it wasn't abc notation
                        //  When the user shift-clicks to append a score, editors with no value will have '\n' appended
                        return
                    }
                    if (!newAbc) {
                        //This means the current editor val is ''.
                        //  This could be bc the user deleted all the text 
                        //   or bc the bkmk didn't have an abc attr for this instrument.
                        //  Either way we need to set this instrument attr on the bkmk(s) to ''
                        $(`#myScores .score_bookmark.active`).attr(`abc-${instrument}`,'')
                        return
                    }
                    let saveSuccessful = false

                    eachNewBkmkAbc.forEach((newBkmkAbc,i)=>{
                        const oldBkmkAbc = eachOldBkmkAbc[i]
                        if (!oldBkmkAbc) {
                            //If oldBkmkAbc is undefined, the user shift-clicked to append a bkmk
                            //  (bc there are now more newBkmkAbc than oldBkmkAbc).
                            //  We return so that the new abc val isn't saved to the old bkmk
                            return
                        }
                        const $bkmk = S2S.activeScores[i]
                        const numChanges = $bkmk.attr('numChanges')
                        if (numChanges == 0){
                            //It was just clicked. Return so the old abc val isn't saved to the new bkmk
                            return
                        } else {
                            $bkmk.attr('numChanges', numChanges+1)
                        }

                        const $bkmkSaving = $bkmk.find('.bkmkUtils .saving')
                        const $bkmkSaved = $bkmk.find('.bkmkUtils .saved')

                        $bkmkSaved.hide()
                        $bkmkSaving.show()

                        $bkmk.attr(`abc-${changedInstrument}`, newBkmkAbc)

                        saveSuccessful = true
                        if (saveSuccessful){
                            editorInstance.setNotDirty()
                            setTimeout(() => {
                                $bkmkSaving.hide()
                                $bkmkSaved.show()
                            }, 1000);
                        }
                    })
                },
                abcjsParams: abcOpts
            }
            temp[instrument] = new abcjs.Editor(`editor-${instrument}`, abcEditorOpts)
        })

        return temp
    })()

    /**
     * FIND BKMK BY ABC
     * @param {String} abc the abc text
     * @param {String} instrument which abc-{instrument} attr to search for
     * @returns the found bkmk as jquery object
     */
    function findBkmkByAbcVal(abc,instrument){
        let $foundBkmk
        $(`#myScores .score_bookmark`).each((i,$bkmk)=>{
            if (!$bkmk) return
            if ($($bkmk).attr(`abc-${instrument}`) == escapeABC(abc)) {
                $foundBkmk = $bkmk
                return
            }
        })
        return $($foundBkmk)
    }

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
    })
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
            const instrument = $(pathel).closest('.instrument_tunes').attr('instrument').toLowerCase()

            // skip if its not a notehead
            const isNotehead = hasOnly1Letter( $(pathel).attr('data-name') )
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
            const noteString = instrument === 'piano' ? 
                'piano' 
                : 
                Object.keys(stringReference[instrument]).find(key => stringReference[instrument][key].includes(noteName))
            
            const name_of_string_class = instrument === 'piano' ? 'piano' : `${noteString}String`

            $(pathel).addClass(name_of_string_class)

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
        //util func to create svg element
        function SVG(tag) {
            return document.createElementNS('http://www.w3.org/2000/svg', tag);
        }

        //loop through all the notes and add svg text element child with class fingering
        $(abcContainer).find('.abcjs-note').each(function(i,note){
            const $note = $(note)
            const noteX = note.getBBox().x
            const noteY = note.getBBox().y
            const noteHeight = note.getBBox().height
            const staffY = $(note).siblings('.abcjs-staff').get(0).getBBox().y
            const staffHeight = $(note).siblings('.abcjs-staff').get(0).getBBox().height
            const noteName = $(note).attr('data-noteName')
            const instrument = $(note).attr('data-instrument')
            const noteString = $(note).attr('data-string')

            const noteNameIndex = (function(){
                if (instrument === 'piano') return 'piano'
                return stringReference[instrument][noteString]?.indexOf(noteName)
            })()

            const finger = (function(){
                if (instrument === 'piano' || noteNameIndex === undefined) return ''
                return stringReference[instrument][noteString+'Fingers'][noteNameIndex]
            })()

            const hasChordTxtEl = !!($(note).find('.abcjs-chord'))
            const noteIsAboveStaff = (function(){
                $(note).find('path').each(function(i,pathEl){
                    if ( pathEl.getBBox().y < staffY ) return true
                })
                return false
            })()
            const noChord_inStaff = !hasChordTxtEl && !noteIsAboveStaff
            const chord_inStaff = hasChordTxtEl && !noteIsAboveStaff
            const noChord_aboveStaff = !hasChordTxtEl && noteIsAboveStaff
            const chord_aboveStaff = hasChordTxtEl && noteIsAboveStaff
            let fingeringTxtY =   noChord_inStaff ? staffY - 16 :
                                    noChord_aboveStaff ? noteY - 16 :
                                    chord_inStaff ? staffY - 6 :
                                    chord_aboveStaff ? noteY - 6 :
                                    staffY - 16            

            const xAdjustmentForChord = hasChordTxtEl ? -6 : 0
            const fingeringTxtX = noteX + xAdjustmentForChord

            //Fingering Text
            const $fingering = $(SVG('text'))
            $fingering.attr({
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
                .appendTo( $fingering )

            //Note Name Text
            let noteNameTxtY = staffY + staffHeight + 16
            if (noteY + noteHeight + 6 > noteNameTxtY) noteNameTxtY = noteY + noteHeight + 20

            const standardNoteName = noteName
                .replace(/,+/g,'')
                .replace(/'+/g,'')
                .replace("^", "\u266F")
                .replace("_", "\u266D")
                .replace("=", "\u266E")
                .toUpperCase()

            const $notename = $(SVG('text'))
            $notename.attr({
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
                .appendTo( $notename )
            
            //Check For Overlaps
            const $notehead = $(note).find('path[data-name]').filter(function(i){
                const $thisPath = $(this)
                const dataName = $thisPath.attr('data-name')
                return (dataName.match(/[A-Za-z]/g) || []).length === 1
            })
            const noteheadHeight = $notehead.get(0).getBBox().height

            /**
             * Distance To Separate From Beam
             * @param {*} element 
             * @param {*} testDirection the direction we expect to have to move the element
             * @returns {object} result of distanceToSeperate, or { left:0, right:0, up:0, down:0 } if the note doesn't have a beam
             */
            function distToSeparateFromBeam(element,testDirection){
                const $element = $(element)
                let result = { left:0, right:0, up:0, down:0 }
                $(abcContainer).find('.abcjs-beam-elem').each((i,beam)=> {
                    const distances = distanceToSeparate($element,beam)

                    const beam_is_on_same_line_as_note = (function(){
                        const beamLine = beam.getAttribute('class').match(/abcjs-l(\d)*\s/)[1]
                        const noteLine = note.getAttribute('class').match(/abcjs-l(\d)*\s/)[1]
                        return beamLine === noteLine
                    })()

                    const beam_covers_same_x_as_element = distances.left < 0 && distances.right > 0

                    const element_needs_to_move = {
                        up:     distances.up < 0 ,
                        down:   distances.down > 0 
                    }[testDirection]

                    if (    beam_is_on_same_line_as_note &&
                            beam_covers_same_x_as_element &&
                            element_needs_to_move
                        ) {
                        result = distances
                        return
                    }
                })
                return result
            }

            const overlaps = {
                fingering: {
                    notehead: distanceToSeparate($fingering,$notehead).up,
                    beam: distToSeparateFromBeam($fingering,'up').up
                },
                notename: {
                    notehead: distanceToSeparate($notename,$notehead).down,
                    beam: distToSeparateFromBeam($notename,'down').down
                }
            }

            const translateDist = {
                fingering: {
                    x:  0,
                    y:  overlaps.fingering.notehead +
                        overlaps.fingering.beam
                },
                notename: {
                    x:  0,
                    y:  overlaps.notename.notehead +
                        overlaps.notename.beam
                }
            }

            //Set css to actually move the svg text element
            //note: we need to use setAttribute bc svg elements are annoying
            $fingering.get(0).setAttribute('transform',`translate(${translateDist.fingering.x},${translateDist.fingering.y})`)

            $notename.get(0).setAttribute('transform',`translate(${translateDist.notename.x},${translateDist.notename.y})`)
        })

        //Adjust viewBox of each line's svg to show notenames and fingerings
        const $lineDivs = $(abcContainer).children('div')
        const $lineSVGs = $lineDivs.children('svg')
        $lineSVGs.each((i,svg)=>{
            const viewBox = svg.getAttribute('viewBox').split(' ').map(parseFloat)
            const svgRect = svg.getBoundingClientRect()
            const gRect = $(svg).children('g').last().get(0).getBoundingClientRect()

            const g_height_is_stupid_large = gRect.height > staffHeight * 2.5

            const topDif =  g_height_is_stupid_large ? 
                            0 : //0 bc in this case all the fingerings should already be showing
                            svgRect.top - gRect.top
            const bottomDif = gRect.bottom - svgRect.bottom
            
            viewBox[1] -= topDif
            viewBox[3] += topDif + bottomDif

            //testing for Bass
            /* if ($(abcContainer).parent().attr('instrument') === 'bass'){
                console.log('Bass line\'s viewbox stuff',{
                    svgRect: svgRect,
                    gRect: gRect,
                    topDif: topDif,
                    bottomDif: bottomDif,
                    viewbox: viewBox
                })
                return 
            } */

            svg.setAttribute('viewBox',viewBox)
        })
    }


    /**
     * SCORE BOOKMARKS
     */
    //READ SCORE DATA JSON from window.scoreData (see scoreData.js)
    const scoreData = JSON.parse(S2S.scoreData)
    console.log('||S2S||  SCORE BOOKMARKS DATA',scoreData)
    //Load Bookmarks From Json File and append each bookmark to the sidebar
    scoreData.forEach(sectionData=>{
        const heading = sectionData.heading
        const id = sectionData.id || ''

        const $section = $(`<ul class="score_bookmark_section" id="${id}"></ul>`)
        const $heading = $(`<h1>${heading}</h1>`)
        $section.append($heading)

        sectionData.bookmarks.forEach(bkmkData=>{
            const $li = $(`<li class="score_bookmark"></li>`)
            for (const prop in bkmkData){
                const abc = escapeABC(bkmkData[prop])
                $li.attr(prop,abc)
            }
            const faVEllipse = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>`
            const $vEllipse = $(`<span class="contextMenuTrigger">${faVEllipse}</span>`)
            const $bkmkUtils = $(`<ul class="bkmkUtils"></ul>`).append($vEllipse)
            $li.append($bkmkUtils)

            createCustomContextMenu(
                $li, 
                {
                    "Copy To My Scores":function($targetBkmkLi){
                        const scoreData = (function(){
                            const temp = {'_title':$targetBkmkLi.attr('_title')}
                            instruments.forEach(instrument=> 
                                temp[`abc-${instrument}`] = $targetBkmkLi.attr(`abc-${instrument}`))
                            return temp
                        })()
                        createMyScoreBkmk(scoreData)
                    },
                    "Download Score Data":function($targetBkmkLi){ processScoreData($targetBkmkLi) }
                },
                $vEllipse
            )
            $section.append($li)
        })

        //append this section to the sidebar
        $('#sidebar').append($section)
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
        case "printPiano":
            printInstruments = "piano";
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
                $(this).closest('.part').toggleClass('hidden')
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
                const $activeMenuItem = $(activeMenuItem.item[0])
                if ($activeMenuItem.hasClass('submenu_parent')) return

                //COPY FROM
                if ($activeMenuItem.closest('.editorUtils_copyFromMenu').length){
                    const selectedInstrument = $activeMenuItem.find('div').attr('instrument')
                    let editorVal = $(`#editor-${selectedInstrument}`).val()
                    const correctVoiceField = voiceFieldReference[thisInstrument]
                    //replace all instances of the voice field with the appropriate voice field
                    editorVal = editorVal.replace(/(V:[\s]?)(.*)/gm,`$1${correctVoiceField}`)
                    //set this instrument's editor to that val and trigger change
                    $(`#editor-${thisInstrument}`).val(editorVal).change()
                }
                
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
        my: "left center",
        show: 200,
        hide: 100
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
     * MY SCORES UTILS
     * new score, load score, download my scores
     */
    const downloadSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>`
    const uploadSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>`
    const newScoreSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>`

    const $myScoresUtils = $(`<div id="myScoresUtils"></div>`)
    const $downloadMyScores = $(`<span id="downloadMyScores" title="Download My Scores Data">${downloadSVG}</span>`)
    const $loadScoresContainer = $(`<span id="loadScoresContainer" title="Load Score(s)">
                                        <label for="loadScores">
                                            <input id="loadScores" type="file" accept=".s2s">
                                            ${uploadSVG}
                                        </label>
                                    </span>`)
    const $newScore = $(`<span id="newScore" title="New Score">${newScoreSVG}</span>`)
    
    //Download Scores button
    $downloadMyScores.click(downloadMyScoresData)

    //( load scores button is handled below in LOAD SCORE(S) )

    //New Score button
    $newScore.click(()=>{
        checkForUnsavedChanges(()=>{
            const scoreData = {'_title':'My New Score'}
            instruments.forEach(instrument=>{
                const abc = [
                    `X:1`,
                    `T: My New Score`,
                    `C: You or Someone Else, Arranged by You or Someone Else`,
                    `M: 4/4`,
                    `L: 1/8`,
                    `K: C`,
                    `V: ${voiceFieldReference[instrument]}`,
                    `C2 z2 C2 CC | D4 D3 D | Z | Z3 ||`,
                    `EE EE DD DD | FF FF F/E/F/G/ F/G/F/E//D// | C4 g'4 | c''8 |]`
                ].join('\n')
                
                scoreData[`abc-${instrument}`] = escapeABC(abc)
            })
            const $newBkmk = createMyScoreBkmk(scoreData)
            $newBkmk.click()

            const editorsAreShown = $('.abcEditors:visible').length
            if (!editorsAreShown) $('#show_editors').click()
        })
    })

    $myScoresUtils.append($newScore, $downloadMyScores, $loadScoresContainer).prependTo('#myScores')
    $('#newScore').after($('#myScores h1')) //move the "My Scores" text into the utils div
    

    /**
     * DOWNLOAD MY SCORES DATA
     * download all the scores in the My Scores section
     */
    function downloadMyScoresData(){
        const $myScores = $('#myScores li.score_bookmark')

        if ($myScores.length === 0) {
            console.warn('||S2S||  my scores section is empty')
            openDialog(
                'You have no scores in the My Scores section. Click the New Score Button or load your Scores.',
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

        const filename = 'Staff-To-Stand-MyScores'

        //stringify and download
        const contents = JSON.stringify(contentsArray)
        downloadScoreData(filename,contents)
    }

    /**
     * LOAD SCORE(S)
     *
     */
    const fileReader = new FileReader()
    //FILE INPUT LOAD
    // when the file has finished reading
    fileReader.onload = function( ev ) {
        //(validate the file extension)

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
        contents.forEach(scoreData => createMyScoreBkmk(scoreData))

        //if the contents array only contains 1 score, render the score
        if (contents.length === 1) {
            renderScoreFromBkmk($myScores.find('.score_bookmark').last())
            setAllNotDirty()
        }
    }

    // LOAD SCORES FILE INPUT CHANGE
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
        fileReader.readAsText( file )// then then the fileReader's load event will trigger (see above)

        //reset the file input's value so that the user can upload the same file twice in a row if wanted
        $('#loadScores').val('')
    })

    // LOAD SCORES FILE INPUT CLICK
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
     * DOWNLOAD SCORE DATA
     * @param {string} filename
     * @param {JSON} stringified_contents
     */
    function downloadScoreData(filename,stringified_contents){
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
        console.log('||S2S||  ',stringified_contents.substring(1,stringified_contents.length-1))
    }

    /**
     * Process Score Data For Download
     * @param {Element} $bkmk 
     */
    function processScoreData($bkmk){
        $bkmk = $($bkmk)
        //get the abcstring for each instrument
        const contentsObj = {}
        instruments.forEach(function(instrument){
            const abc = $bkmk.attr('abc-'+instrument) || ''
            contentsObj['abc-'+instrument] = escapeABC(abc)
        })
        contentsObj['_title'] = $bkmk.attr('_title')
        const filename = $bkmk.attr('_title')

        const contentsArray = [contentsObj]
        const contents = JSON.stringify(contentsArray)
        downloadScoreData(filename,contents)
    }


    /**
     * CREATE BOOKMARK IN MY SCORES
     * @param {Object} scoreData Key is bookmark html attr. Value is the attr's value.
     */
    function createMyScoreBkmk(scoreData){
        const $myScores = $('#myScores')

        const faDeleteSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>`
        const faMoveSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`
        const faVEllipse = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>`
        const dragSvg = `<svg class="svg-icon" style="transform: rotateZ(90deg); width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M426.666667 256a42.666667 42.666667 0 0 0-42.666667 42.666667v170.666666H230.826667l34.133333-33.706666a42.666667 42.666667 0 0 0-60.586667-60.586667l-106.666666 106.666667a42.666667 42.666667 0 0 0-8.96 14.08 42.666667 42.666667 0 0 0 0 32.426666 42.666667 42.666667 0 0 0 8.96 14.08l106.666666 106.666667a42.666667 42.666667 0 0 0 60.586667 0 42.666667 42.666667 0 0 0 0-60.586667l-34.133333-33.706666H384v170.666666a42.666667 42.666667 0 0 0 85.333333 0V298.666667a42.666667 42.666667 0 0 0-42.666666-42.666667z m508.586666 239.786667a42.666667 42.666667 0 0 0-8.96-14.08l-106.666666-106.666667a42.666667 42.666667 0 0 0-60.586667 60.586667l34.133333 33.706666H640V298.666667a42.666667 42.666667 0 0 0-85.333333 0v426.666666a42.666667 42.666667 0 0 0 85.333333 0v-170.666666h153.173333l-34.133333 33.706666a42.666667 42.666667 0 0 0 0 60.586667 42.666667 42.666667 0 0 0 60.586667 0l106.666666-106.666667a42.666667 42.666667 0 0 0 8.96-14.08 42.666667 42.666667 0 0 0 0-32.426666z"  /></svg>`
        const faSpinnerSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>`
        const faCircleCheckSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>`

        let bkmkHTML = `<li class="score_bookmark"`
        for (const prop in scoreData){  bkmkHTML += ` ${prop}="${scoreData[prop]}"`  }
        bkmkHTML += `><div class="bkmkUtils">`
        bkmkHTML +=     `<span class="saving fa-spin" title="...saving">${faSpinnerSVG}</span>`
        bkmkHTML +=     `<span class="saved" title="&#10003; saved">${faCircleCheckSVG}</span>`
        bkmkHTML +=     `<span class="dragHandleCourtesy">${faMoveSVG}</span>`
        bkmkHTML +=     `<span class="contextMenuTrigger">${faVEllipse}</span>`
        bkmkHTML += `</div> </li>`

        const $bkmkEl = $(bkmkHTML)
        $myScores.append($bkmkEl)
        $myScores.sortable('refresh') //refresh sortable so the bkmk is recognized

        const $contextMenuTrigger = $bkmkEl.find('.contextMenuTrigger')

        const contextMenuMenuItems = {
            "Rename":function($targetBkmkLi){ 
                openDialog(
                    `<p>Note: This won't change the "T:" field in the abc notation.</p>
                     <div><input type="text" id="bkmkRenameInput" style="width:80%;"></div>`,
                    {
                        title:'Rename Score',
                        buttons: [
                            {
                                text: 'Cancel',
                                click: function(){
                                    $(this).dialog('close')
                                }
                            },
                            {
                                text: 'OK',
                                click: function(){
                                    $(this).dialog('close')
                                    const newTitle = $('#bkmkRenameInput').val()
                                    $targetBkmkLi.attr('_title',newTitle)
                                }
                            }
                        ]
                    }
                )
            },
            "Download Score Data": function($targetBkmkLi) { processScoreData($targetBkmkLi) },
            "Delete": function($targetBkmkLi) { $targetBkmkLi.remove() }
        }
        createCustomContextMenu($bkmkEl, contextMenuMenuItems, $contextMenuTrigger)

        return $bkmkEl
    }

    /**
     * MAKE MY SCORES SORTABLE
     */
    $('#myScores').sortable({
        items: '> li', //only allow li children to be sortable (so, not the h1 section title),
        scrollSensitivity: 10,
        cursor: 'move'
    })


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
        for (const editor in editorInstances){
            editorInstances[editor].setNotDirty()
        }
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
            const isEmptyPart = newAbc === ''
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
                //remove active class from all bkmks and clear numChanges attr
                $('.score_bookmark.active').removeClass('active').attr('numChanges','')

                //show all parts (ignore editors)
                $('.part').children('div:not(.abc-warnings)').show()
            }

            $instrEditor.val(newAbc).change()

            if (isEmptyPart)  $(`.part[instrument="${instrument}"]`).addClass('hidden') 
            else  $(`.part[instrument="${instrument}"]`).removeClass('hidden') 
        })

        //set extra html
        const extra_html = $bkmk.attr('extra_html') || ''
        $('.extra_html').html(extra_html)

        setAllNotDirty()

        //Add active class to bkmk to indicate its already loaded
        //and set numChanges attr to 0, to indicated it is freshly loaded
        $bkmk.addClass('active').attr('numChanges',0)

        //Set/push to activeScores
        if (appendScore) S2S.activeScores.push($bkmk)
        else S2S.activeScores = [$bkmk]

        //remove disabled class from file input
        $('#loadScores').removeClass('disabled')

        const active_score_is_in_my_scores = $('.score_bookmark.active').closest('#myScores').length
        if (active_score_is_in_my_scores)  $('.abcEditor').attr('disabled',false) 
        else $('.abcEditor').attr('disabled',true) 
    }

    /**
     * CLICK ANYWHERE ON DOCUMENT
     * detect click on document to hide certain elements
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

        //hide header buttons menu (mobile only)
        //      The hidden class only has a css rule on small screens, 
        //       so no need to check for small screens here
        const $header_btns = $('#header_buttons')
        const clicked_header_buttons = $target.closest($header_btns).length
        const clicked_header_toggler = $target.closest('#header_buttons_toggle').length
        const clicked_either_header_buttons_or_menu = !!(clicked_header_buttons || clicked_header_toggler)
        if(!clicked_either_header_buttons_or_menu) $header_btns.addClass('hidden')

        //hide custom context menu
        const clickedMenu = $target.closest(".custom-menu").length
        if (!clickedMenu) $customMenu.hide(100)
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

        if (!abc) {
            console.warn('||S2S||  abc string is undefined, returning an empty string')
            return ''
        }

        return abc.replace(/\\n/g,'\r\n').replace(/&quot;/g,'"').replace(/&apos;/g,"'")
    }



    /**
     * header buttons toggler
     */
    $(document).on('click','#header_buttons_toggle',function(){
        $('#header_buttons').toggleClass('hidden')
    })


    /**
     * CUSTOM CONTEXT MENU
     * @param {String} bindTo selector to bind the context menu to.
     * @param {Object} menuItems an object whose keys are the item names, and values are anonymous functions to be called on click (underscores in the name will be turned to spaces) { itemName: function($targetBkmkLi){...}, anotherItemName: function($targetBkmkLi){...} }.  The first arg in the functions is the selected menu item
     * @param {Element|Selector} alternateTrigger when clicked, triggers contextmenu event on bindTo
    */
    function createCustomContextMenu(bindTo, menuItems, alternateTrigger){
        const $altTrigger = $(alternateTrigger)

        // Prevent default context menu and show ours instead
        $(bindTo).on("contextmenu", e=>{
            e.preventDefault()

            //$customMenu is defined at beginning
            $customMenu.html('')
            for (const itemName in menuItems){
                const $item = $(`<li>${itemName}</li>`)
                $item
                    .click(function(){
                        const $targetBkmkLi = $( $customMenu.data('target') )
                        //execute the function from the menuitems object arg
                        menuItems[itemName]($targetBkmkLi)
                        $customMenu.hide(100)
                    })
                    .appendTo($customMenu)
            }

            $customMenu.hide().finish().show(100)
                .css({
                    top: event.pageY + "px",
                    left: event.pageX + "px"
                })
                .data('target',$(e.target))
        })
        
        if ($altTrigger) $altTrigger.click(e=>{
            e.preventDefault()
            e.stopPropagation()
            $(bindTo).trigger('contextmenu')
        })

        // menu hiding is under CLICK ANYWHERE ON DOCUMENT
    }





}) //end on page load