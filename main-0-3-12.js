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
const low = '\u2193'
// \u2191 = up arrow
const hi = '\u2191'
const stringReference = {
    violin: {
        g: ['G,' , '=G,' , '^G,' , '_A,' , 'A,' , '=A,' , '^A,' , '_B,' , 'B,' , '=B,' , '^B,' , '_C' , 'C' , '=C' , '^C' , '_D'],
        gFingers: ['0' , '0' , low+'1' , low+'1' , '1' , '1' , hi+'1' , low+'2' , hi+'2' , hi+'2' , '3' , hi+'2' , '3' , '3' , hi+'3' , low+'4'],
        d: ['D' , '=D' , '^D' , '_E' , 'E' , '=E' , '^E' , '_F' , 'F' , '=F' , '^F' , '_G' , 'G' , '=G' , '^G' , '_A'],
        dFingers: ['0' , '0' , low+'1' , low+'1' , '1' , '1' , hi+'1' , '1' , low+'2' , low+'2' , hi+'2' , low+'3' , '3' , '3' , hi+'3' , low+'4'],
        a: ['A' , '=A' , '^A' , '_B' , 'B' , '=B' , '^B' , '_c' , 'c' , '=c' , '^c' , '_d' , 'd' , '=d' , '^d' , '_e'],
        aFingers: ['0' , '0' , low+'1' , low+'1' , '1' , '1' , hi+'1' , '1' , low+'2' , low+'2' , hi+'2' , low+'3' , '3' , '3' , hi+'3' , low+'4'],
        e: ['e' , '=e' , '^e' , '_f' , 'f' , '=f' , '^f' , '_g' , 'g' , '=g' , '^g' , '_a' , 'a' , '=a' , '^a' , '_b' , 'b' , '=b' , '^b'],
        eFingers: ['0' , '0' , low+'1' , '0' , low+'1' , '1' , '1' , low+'2' , low+'2' , hi+'2' , low+'3' , '3' , '3' , hi+'3' , low+'4' , '4' , '4' , 'x4']
    },
    viola: {
        c: ['C,' , '=C,' , '^C,' , '_D,' , 'D,' , '=D,' , '^D,' , '_E,' , 'E,' , '=E,' , '^E,' , '_F,', 'F,' , '=F,' , '^F,' , '_G,'],
        cFingers: ['0' , '0' , low+'1' , low+'1' , '1' , '1' , hi+'1' , low+'2' , hi+'2' , hi+'2' , '3' , low+'3' , '3' , '3' , hi+'3' , low+'4'],
        g: ['G,' , '=G,' , '^G,' , '_A,' , 'A,' , '=A,' , '^A,' , '_B,' , 'B,' , '=B,' , '^B,' , '_C' , 'C' , '=C' , '^C' , '_D'],
        gFingers: ['0' , '0' , low+'1' , low+'1' , '1' , '1' , hi+'1' , low+'2' , hi+'2' , hi+'2' , '3' , hi+'2' , '3' , '3' , hi+'3' , low+'4'],
        d: ['D' , '=D' , '^D' , '_E' , 'E' , '=E' , '^E' , '_F' , 'F' , '=F' , '^F' , '_G' , 'G' , '=G' , '^G' , '_A'],
        dFingers: ['0' , '0' , low+'1' , low+'1' , '1' , '1' , hi+'1' , '1' , low+'2' , low+'2' , hi+'2' , low+'3' , '3' , '3' , hi+'3' , low+'4'],
        a: ['A' , '=A' , '^A' , '_B' , 'B' , '=B' , '^B' , '_c' , 'c' , '=c' , '^c' , '_d' , 'd' , '=d' , '^d' , '_e' , 'e' , '=e' , '^e'],
        aFingers: ['0' , '0' , low+'1' , low+'1' , '1' , '1' , hi+'1' , '1' , low+'2' , low+'2' , hi+'2' , low+'3' , '3' , '3' , hi+'3' , low+'4' , '4' , '4' , 'x4']
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
/**
 * Test Fingers
 * @description test if notes in string reference have correct fingers
 * @param {*} string 
 * @param {*} i 
 */
function testFingers(instrument,string,i){
    const note = stringReference[instrument][string][i]
    const finger = stringReference[instrument][string+'Fingers'][i]
    console.log(note+' : '+finger)
}
function logAllFingersOfString(instrument,string){
    const notes = stringReference[instrument][string]
    notes.forEach((note,i)=>{
        const finger = stringReference[instrument][string+'Fingers'][i]
        console.log(note+' : '+finger)
    })
}


/**
 * TRANSLATE NOTE NAMES FROM ABC
 * @param {*} name 
 * @returns 
 */
function friendlyNoteName(name) {
    // The notes are in ABC format - so translate that to human readable
    let acc = ''
    if (name[0] === '_') acc = "b"
    if (name[0] === '^') acc = "#"
    const index = acc ? 1 : 0
    const pitch = name[index]
    return pitch.toUpperCase() + acc
}

/**
 * CONVERT ABCJS PITCH CLASS NUMBERS TO ABC NOTATION NOTES
 * @description  
 * @param {number} num a abcjs pitch class number, such as the -2 in "abcjs-p-2"
 * @returns abc notation note
 */
function pitchClassNumToNote(num){
    num = parseFloat(num)

    const notes = ['D,','E,','F,','G,','A,','B,','C','D','E','F','G','A','B','c','d','e','f','g','a','b','c\'','d\'','e\'','f\'','g\'','a\'','b\'']

    const additional_octave_modifier =  num < 0 ? Math.ceil(num/7) :
                                        num > notes.length ? Math.floor((num - notes.length + 7) / 7) : 
                                        0
    
    //We want 0 to be C...so:
    //  - if the note is in a commas octave (num < 0), cycle through the bottom octave of the array
    //  - if num was 27, it was returning the wrong octave for some reason. Every other number worked so I took the lazy route.
    //  - if the note is in an apostraphy octave (num > 13), cycle through the top octave of the array
    //  - otherwise just add 6 to the number in order to get the correct note from the array
    let index = num < 0 ? (num % 7) + 6 :
                num === 27 ? 26 :
                num > notes.length-7 ? (num-6) % 7 + 19 : 
                num + 6
    
    //now use the additional_octave_modifier to add , or ' to the end of the string if needed
    const abcNote = additional_octave_modifier === 0 ?  notes[index] :
                    additional_octave_modifier > 0 ?    notes[index] + '\''.repeat(additional_octave_modifier) :
                    additional_octave_modifier < 0 ?    notes[index] + ','.repeat(additional_octave_modifier*-1) :
                    false
    
    if (!abcNote) console.warn('|| S2S ||  pitchClassNumToNote: abcNote returned false.')

    return abcNote
}

/**
 * ABC EDITOR OPTIONS
 * @param {string} instrument 
 * @returns abc editor options object
 */
function createAbcEditorOpts (instrument){
    return {
        canvas_id: $(`#tunes-${instrument} div`).toArray(),
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
                const user_appended_score = !oldBkmkAbc //(bc there are more newBkmkAbc than oldBkmkAbc).
                //  We return so that the new abc val isn't saved to the old bkmk
                if (user_appended_score) return
                
                const all_bkmks = Array.from(new Set([
                    //create an array of all the bookmarks
                    //active and prevActive scores are more likely to be matches so we put them first
                    ...S2S.activeScores.map( $score => $score.get(0) ), 
                    ...S2S.prevActiveScores.map( $score => $score.get(0) ),
                    ...$('.score_bookmark')
                ]))

                const bkmkOf_oldAbc = all_bkmks.find(score=>{
                    return escapeABC(oldBkmkAbc) === score.getAttribute(`abc-${changedInstrument}`)
                })
                const bkmkOf_newAbc = all_bkmks.find(score=>{
                    return escapeABC(newBkmkAbc) === score.getAttribute(`abc-${changedInstrument}`)
                }) || S2S.activeScores[i].get(0)
                // ^ when user edits a my score bkmk, bkmkOf_newAbc will be undefined, bc that abc doesn't exist in any bkmk.  In this case, set it to the activeScores[i]


                const oldbkmk_exists_but_doesnt_match_newbkmk = bkmkOf_oldAbc && bkmkOf_oldAbc !== bkmkOf_newAbc

                if (oldbkmk_exists_but_doesnt_match_newbkmk) return

                const $bkmkSaving = $(bkmkOf_newAbc).find('.bkmkUtils .saving')
                const $bkmkSaved = $(bkmkOf_newAbc).find('.bkmkUtils .saved')

                $bkmkSaved.hide()
                $bkmkSaving.show()

                $(bkmkOf_newAbc).attr(`abc-${changedInstrument}`, newBkmkAbc)

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
        //ABC OPTIONS
        abcjsParams: {
            add_classes: true,
            responsive: 'resize',
            oneSvgPerLine: true,
            afterParsing: extendParsing
        }
    }

    /**
     * AFTER PARSING
     * Add Fingerings and Notenames
     * @param {*} tune 
     * @returns 
     */
    function extendParsing(tune, tuneNumber, abcString){
        console.log('|| S2S || tune',tune)
        tune.lines.forEach(line=>{
            line.staff.forEach(staff=>{
                //check sharps and flats in keysig
                const keysigSharps = staff.key.accidentals.map(acc=>{
                    if (acc.acc === "sharp") return acc.note
                })
                const keysigFlats = staff.key.accidentals.map(acc=>{
                    if (acc.acc === "flat") return acc.note
                })

                staff.voices.forEach(voice=>{
                    voice.forEach((el,i)=>{
                        const is_note = el.el_type === 'note' && el.pitches
                        if (!is_note) return

                        if (!el.chord) el.chord = []

                        //NOTE NAMES
                        const pitches = el.pitches.map(pitch=>{
                            const noteNameAbc = pitchClassNumToNote(pitch.pitch)

                            const noteIsInKeysigFlats = keysigFlats.includes(noteNameAbc.toLowerCase())
                            const noteIsInKeysigSharps = keysigSharps.includes(noteNameAbc.toLowerCase())
                            const acc = noteIsInKeysigFlats || pitch.accidental === 'flat' ?
                                        '_' :
                                        noteIsInKeysigSharps || pitch.accidental === 'sharp' ?
                                        '^' :
                                        pitch.accidental === 'natural' ?
                                        '=' :
                                        ''
                    
                            
                            
                            return acc + noteNameAbc
                        })

                        const friendlyPitches = pitches.map( pitch=>friendlyNoteName(pitch) )

                        const notenames = {
                            name: friendlyPitches.join('\n'),
                            position: 'below'
                        }
                        el.chord.push(notenames) //all annotations go in chord prop

                        //FINGERINGS
                        const instrument_is_in_fingerings_ref = stringReference.hasOwnProperty(instrument)
                        if (!instrument_is_in_fingerings_ref) return

                        const fingers = el.pitches.map(pitch=>{
                            //adjust the pitch class num (just the arg for noteNmae) if octave or shift is present in the instrument's V field.  We need to reverse the octave/shift to get the correct note to lookup
                            const octaveAdjustment = parseFloat(/octave=\s*(-?\d+)/.exec( voiceFieldReference[instrument] )?.[1] | 0)
                            const pitchNumToConvert = pitch.pitch + (octaveAdjustment * -7)

                            let noteName = pitchClassNumToNote( pitchNumToConvert )

                            const noteIsInKeysigFlats = keysigFlats.includes(noteName.toLowerCase())
                            const noteIsInKeysigSharps = keysigSharps.includes(noteName.toLowerCase())
                            const acc = noteIsInKeysigFlats || pitch.accidental === 'flat' ?
                                        '_' :
                                        noteIsInKeysigSharps || pitch.accidental === 'sharp' ?
                                        '^' :
                                        pitch.accidental === 'natural' ?
                                        '=' :
                                        ''
                            
                            noteName = acc + noteName
                            
                            const noteString = Object.keys(stringReference[instrument]).find(key => stringReference[instrument][key].includes(noteName))
                            if (!noteString) return ' '
                            
                            const noteNameIndex = stringReference[instrument]?.[noteString]?.indexOf(noteName)
                            if (noteNameIndex === -1) return ' '

                            const finger = stringReference[instrument]?.[noteString+'Fingers']?.[noteNameIndex]

                            return finger
                        })

                        const fingerings = {
                            name: fingers.join('\n'),
                            position: 'above'
                        } 
                        el.chord.push(fingerings)
                    })
                })
            })
        })
        return tune
    } 
}



//Abc Editor Instances object
//  contains each editor instance
const abcEditorInstances = {}


/**
 * FADE NOTEY
 * @param {string} mode 'in', 'out', 'toggle' | whether to fade notey in, fade out, or toggle
 * @param {string} classToAdd 'class1' or 'class1 class2 etc'
 * @returns 
 */
function fadeNotey(mode,classToAdd='playing-violin'){
    if (mode === 'toggle'){
        const notey_is_visible = !($('#notey .notey').hasClass('hide'))
        mode = notey_is_visible ? 'out' : 'in'
    }

    if (mode === 'in') {
        $('#notey').attr('class',`eyes-blinking ${classToAdd}`)
        $('#notey .notey').removeClass('hide')
        return
    }

    if (mode === 'out') $('#notey .notey').addClass('hide')
}

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
        return ''
    }

    return abc.replace(/\\n/g,'\r\n').replace(/&quot;/g,'"').replace(/&apos;/g,"'")
}

/**
 * Capitalized first letter
 * @param {*} str 
 * @returns the string with the first letter capitalized
 */
function capitalize1stLetter(str){
    return str.substring(0,1).toUpperCase() + str.substring(1,str.length)
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
                title: '<i class="fa-solid fa-triangle-exclamation"></i> Error Loading Data'
            }
        )
        window.S2S = { scoreData:{} }
    }

    /**
     * INITIALIZE GLOBAL ACTIVE SCORES ARRAY
     */
    S2S.activeScores = []

    /**
     * NOTEY
     */
    class Notey {
        constructor(noteyContainerSelector='#notey'){
            this.container = $(noteyContainerSelector)
            this.body = this.container.find('.notey')
            this.speechBubble = this.container.find('.speechBubble')

            this.speechBubble.click( ()=> this.speechBubble.hide() )

            //initialize draggable
            this.body.draggable()

            //Messages
            this.messages = {
                welcome: `
                    <p>Hi, I'm Notey! I'm here to help you master your instrument. Let's rock and roll!</p>
                    <p style="margin-bottom:0;">Tips:</p>
                    <ul style="text-align:left; font-style:italic; padding-left:1em; margin-top:6px;">
                        <li>Click the little Notey icon on the sidebar to hide and show me.</li>
                        <li>Click the Staff to Stand Logo to learn more about this site.</li>
                    </ul>
                `
            }
        }
    
        /**
         * @param {string} html 
         */
        setSpeechBubbleContent(html){
            this.speechBubble.html(html)
            this.speechBubble.show()
        }

        /**
         * @param {string} classes sets the classes property. Animations and emotions are defined in css classes
         */
        setClasses(classes){
            this.container.attr('class',classes)
        }

        
        isVisible(){
            return !this.body.hasClass('hide')
        }
        setVisible(){
            this.body.removeClass('hide')
        }
        setHidden(){
            this.body.addClass('hide')
        }

        /**
         * FADE NOTEY
         * @param {string} mode 'in', 'out', 'toggle' | whether to fade notey in, fade out, or toggle
         * @param {string} classToAdd 'class1' or 'class1 class2 etc'
         * @returns 
         */
        fade(mode,classToAdd='playing-violin'){
            if (mode === 'toggle'){
                mode = this.isVisible() ? 'out' : 'in'
            }

            if (mode === 'in') {
                this.setClasses(`eyes-blinking ${classToAdd}`)
                this.setVisible()
                return
            }

            if (mode === 'out') this.setHidden()
        }
    }
    const notey = new Notey()

    //Notey Speech Bubble Content
    notey.setSpeechBubbleContent(notey.messages.welcome)


    /**
     * CREATE PART, EDITORS, ETC, FOR EACH INSTRUMENT
     * CREATE HTML FOR EACH INSTRUMENT
     */
    instruments.forEach(instrument=>{
        const $part = $(`<div/>`,{
            'class': 'part',
            'instrument': instrument
        }).appendTo('#tunes_container')

            const $part_top_bg = $('<div/>',{
                'class':'part-top-bg'
            }).appendTo($part)

            const $instrument_heading = $('<h1/>',{
                text:capitalize1stLetter(instrument)
            }).appendTo($part)

            //PART UTILS
            const $part_utils = $('<div/>',{
                'class':'part-utils'
            }).appendTo($part)

                const $hidePart = $('<span/>',{
                    'class': 'hide util',
                    'title': 'Hide Part',
                    click: function(){ $part.toggleClass('hidden') }
                }).appendTo($part_utils)

                    $('<i class="fa-solid fa-eye-slash fa-xl"></i>').appendTo($hidePart)
            
            //EDITOR UTILS
            const $editor_utils = $('<div/>',{
                'class':'abcEditor-utils hidden'
            }).appendTo($part)

                const $editorUtils_menuToggle = $('<span/>',{
                    'class':'editorUtilMenuToggle',
                    text: 'Tools',
                    click: function(){
                        const $menu = $(this).closest('.editorUtilMenuToggle').next('.editorUtilMenu')
                        $menu.toggle()
                    }
                }).appendTo($editor_utils)
                
                const $editorUtilMenu = $('<ul/>',{
                    'class': 'editorUtilMenu'
                }).appendTo($editor_utils)
                .menu({
                    //EDITOR UTILS MENU SELECTION FUNCTION
                    //initialize menu and add event listener for menu item selection
                    select: function(e,activeMenuItem){
                        const $activeMenuItem = $(activeMenuItem.item[0])
                        if ($activeMenuItem.hasClass('submenu_parent')) return
                        //COPY FROM
                        if ($activeMenuItem.closest('.editorUtils_copyFromMenu').length){
                            const chosenInstrument = $activeMenuItem.text().toLowerCase()
                            let editorVal = $(`#editor-${chosenInstrument}`).val()
                            const correctVoiceField = voiceFieldReference[instrument]
                            //replace all instances of the voice field with the appropriate voice field
                            editorVal = editorVal.replace(/(V:[\s]?)(.*)/gm,`$1${correctVoiceField}`)
                            //set this instrument's editor to that val and trigger change
                            $(`#editor-${instrument}`).val(editorVal).change()
                        }
                    }
                })
                    const $submenu = $('<li/>',{ 
                        'class':'submenu_parent' 
                    }).appendTo($editorUtilMenu)

                        $('<div>Copy From</div>').appendTo($submenu)

                        const $copyFromMenu = $('<ul/>',{
                            'class':'editorUtils_copyFromMenu'
                        }).appendTo($submenu)
                            //append menu item for each other instrument
                            instruments.forEach(otherInstrument=>{
                                if (otherInstrument == instrument) return
                                const $menuItem = $('<li/>').appendTo($copyFromMenu)
                                    const $menuItemContent = $('<div/>',{
                                        'style': 'text-transform:capitalize;',
                                        'instrument': otherInstrument,
                                        text: capitalize1stLetter(otherInstrument)
                                    }).appendTo($menuItem)
                            })
                $editorUtilMenu.menu('refresh') //need to refresh to apply menu to appended items
                
            const $editor = $('<textarea/>',{
                'id': `editor-${instrument}`,
                'class': 'abcEditor'
            }).appendTo($part)

            const $abcWarnings = $('<div/>',{
                'id': `abc-warnings-${instrument}`,
                'class': 'abc-warnings'
            }).appendTo($part)

            const $tunes = $('<div/>',{
                'id': `tunes-${instrument}`,
                'class': 'instrument_tunes',
                'instrument': instrument
            }).appendTo($part)
                //append num of divs in == count+10
                //  +10 for in case the user adds more tunes via the editor
                const $tuneDivs = (() => {
                    const $divs = $(`<div></div>`.repeat(getHighestXsInScoreBkmks() + 10))
                    $divs.appendTo($tunes)
                    return $divs
                })()
                  

            const $extraHtml = $('<div/>',{
                'class': 'extra_html'
            }).appendTo($part)

            //Initialize Editor
            const abcEditorOpts = createAbcEditorOpts(instrument)
            abcEditorInstances[instrument] = new window.ABCJS.Editor($editor.attr('id'), abcEditorOpts)
    })

    /**
     * Get Highest Number of Tunes
     * @returns the highest amount of tunes (X fields) present in any one abc attr in score bkmks
     */
    function getHighestXsInScoreBkmks(){
        //Create max number of tune divs that could be necessary
        // count how many Xs are present in each abc-${instrument} attribute
        // the highest of that is how many divs we need to create
        let count = 0
        instruments.forEach(function(instrument){
            $(`.score_bookmark[abc-${instrument}]`).each(function(i,bkmk){
                const numXsInString = $(bkmk).attr(`abc-${instrument}`).match(/X:\s?\d+/gm).length
                if (numXsInString > count) count = numXsInString
            })
        })
        return count
    }

    /**
     * CREATE CUSTOM CONTEXT MENU ELEMENT
     */
    const $customMenu = $(`<ul class='custom-menu'></ul>`)
    $customMenu.appendTo('body')

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
     * TUNES (RE)RENDER MUTATION OBSERVER
     */
    var observer = new MutationObserver(function(mutationsList, observer) {
        //create an array of unique targets from the mutations list
        const targets = [...new Set(mutationsList.map((item) => item.target))]

        //add classes for highlights and such to each target
        targets.forEach(function(target){
            addClassesToTune(target)
        })

        //Clear style attr of all empty abcjsContainer divs
        //  Otherwise they retain the styles even if its not being used, creating a lot of empty white space
        $('.abcjs-container:not(:has(svg))').attr('style','')

        //Add/Remove disabled class on file input
        areAnyDirty() ? $('#loadScores').addClass('disabled') : $('#loadScores').removeClass('disabled')

        //Fade Out Notey
        const last_part_to_change = $('.part:not(.hidden)').last().attr('instrument')
        const instrument_of_target = $(targets[0]).closest('.part').attr('instrument')
        if (instrument_of_target === last_part_to_change) notey.fade('out')
    })
    const observerOpts = {characterData:false, childList:true, attributes:false}
    document.querySelectorAll('.instrument_tunes > div').forEach(function(div){
        //impliment observer on each individual instrument's tunes container
        observer.observe(div, observerOpts)
    })


    /**
     * ADD CUSTOM CLASSES TO TUNE
     * also add data-noteName to note element
     */
    function addClassesToTune(abcContainer){
        $(abcContainer).find('.abcjs-note path[data-name]').each(function(i,pathel){
            const instrument = $(pathel).closest('.instrument_tunes').attr('instrument').toLowerCase()

            // skip if its not a notehead
            const isNotehead = hasOnly1Letter( $(pathel).attr('data-name') )
            if (!isNotehead) return

            const $noteEl = $(pathel).closest('.abcjs-note')

            const pitchClassNum = parseFloat(/abcjs-p(.*?)(?=[\s$])/.exec($noteEl.attr('class'))[1])

            //adjust the pitch class num (just the arg for noteNmae) if octave or shift is present in the instrument's V field.  We need to reverse the octave shift to get the correct note to lookup
            const octaveAdjustment = parseFloat(/octave=\s*(-?\d+)/.exec( voiceFieldReference[instrument] )?.[1] | 0)
            const pitchNumToConvert = pitchClassNum + (octaveAdjustment * -7)

            const noteName = pitchClassNumToNote( pitchNumToConvert )

            //check string reference and add the correct string class
            const noteString = stringReference[instrument] ? 
                Object.keys(stringReference[instrument]).find(key => stringReference[instrument][key].includes(noteName)) :
                ''

            $(pathel).addClass(`${noteString}String`)

            //add data-attrs to note
            $noteEl.attr({
                'data-noteName': noteName,
                'data-instrument': instrument,
                'data-string': noteString
            })

            //add fingering class
            $noteEl.find('.abcjs-annotation tspan').filter(function() {
                const textContent = $(this).text()
                const containsNumber = /\d/.test(textContent)
                return containsNumber
            })
            .addClass('abcjs-fingering')

            //add notename class
            $noteEl.find('.abcjs-annotation tspan').filter(function() {
                const textContent = $(this).text()
                const containsNote = /[A-Ga-g]['|,]*\d*/.test(textContent)
                return containsNote
            })
            .addClass('abcjs-noteName')

        })
    }

    /**
     * SEARCH AND SORT
     */
    const $expandResults = $('#searchAndSort_container .expand_results')
    const $results_container = $('#searchAndSort_results')
    const $searchInput = $('#searchScores input')
    const $sortBtn = $('#sortScores')
    const $filters_container = $('#sortFilters')
    const $activeFilters = $('#activeFilters')
    const $resultsDiv = $('#results')

    function createScoreResultContextMenu(i,score){
        createCustomContextMenu(
            $(score),
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
                "Download Score Data":function($targetBkmkLi){ processScoreData($targetBkmkLi) },
                "Copy Score Data": function($targetBkmkLi){ processScoreData($targetBkmkLi,true) },
                "Remove Score From Page":function($targetBkmkLi){ removeScoreFromEditors($targetBkmkLi) }
            },
            $(score).find('.contextMenuTrigger')
        )
    }

    $expandResults.click(()=>{
        const resultsDivIsEmpty = $resultsDiv.children().length === 0
        if (resultsDivIsEmpty) $('.score_bookmark').clone().appendTo($resultsDiv).each((i,score)=>createScoreResultContextMenu(i,score))

        $expandResults.toggleClass('flip')
        $results_container.slideToggle()
    })

    $sortBtn.click(function(){
        //Create Tags Checkboxes
        const tagsArray = $('.score_bookmark').map(function() {
            return $(this).attr('tags').replace(/,\s+/g,',').split(',')
        }).get()
        const uniqueTagsArray = [...new Set(tagsArray)].filter(function(value) {
            return value !== "" //filter out empty strings
        }).sort()//alphabetize

        const checkboxList_exists = $filters_container.find('ul').length
        const $checkboxList = checkboxList_exists ? 
            $filters_container.find('ul') :
            $('<ul/>').appendTo($filters_container)

        uniqueTagsArray.forEach((tag,i)=>{
            const tag_is_already_in_list = $checkboxList.find(`li:contains("${tag}")`).length
            if (tag_is_already_in_list) return

            const $listItem = $('<li/>')
            const $checkbox = $('<input/>').attr({
                type: 'checkbox',
                id: 'checkbox_' + i,
                value: tag
            })
            const $label = $('<label/>').attr('for', 'checkbox_' + i).text(tag)
            
            $listItem.append($checkbox, $label)
            $checkboxList.append($listItem)

            const $activeFilterMarker = $('<span/>',{
                'for':'checkbox_'+i,
                text: tag,
                click:function(){
                    $(this).hide()
                    const $correspondingFilter = $filters_container.find(`#${$(this).attr('for')}`)
                    $correspondingFilter.click()
                }
            }).appendTo($activeFilters)
        })

        //Toggle the filters
        $(this).toggleClass('active')
        $filters_container.toggle()
    })

    //Listen for changes to checkboxes and remove unwanted results
    $filters_container.on('change','input[type="checkbox"]',function(){
        const selectedTags = $filters_container.find('input[type="checkbox"]:checked').map(function(){
            return $(this).val()
        }).get()

        if (!selectedTags.length) {
            //no filters are checked, so show all filters, hide all markers, and return
            $resultsDiv.find('.score_bookmark').show()
            $filters_container.find('span').hide()
            return
        }

        const $filterMarkers_to_show = $filters_container.find(`span:contains("${selectedTags.join('"),span:contains("')}")`)
        const $filterMarkers_to_hide = $filters_container.find(`span:not(:contains("${selectedTags.join('")):not(:contains("')}"))`)
        $filterMarkers_to_show.show()
        $filterMarkers_to_hide.hide()

        const $unwantedScores = $resultsDiv.find('.score_bookmark:not([tags*="' + selectedTags.join('"],[tags*="') + '"])')
        const $wantedScores = $resultsDiv.find('.score_bookmark:is([tags*="' + selectedTags.join('"],[tags*="') + '"])')
        $wantedScores.show()
        $unwantedScores.hide()
    })

    $searchInput.on('input',function(){
        $resultsDiv.children().remove()

        const resultsContainer_not_shown = !$results_container.is(':visible')
        if (resultsContainer_not_shown) $expandResults.click()

        const query = $(this).val()
        //get scores whose _title or tags contain the query (using filter for case-insensitive search)
        //  if there's no query, set to all scores
        const $matchingScores = !query ? $('.score_bookmark') :
            $('.score_bookmark').filter(function() {
                const title = $(this).attr('_title')
                const tags = $(this).attr('tags')
                return (
                    title.toLowerCase().includes(query.toLowerCase()) ||
                    tags.toLowerCase().includes(query.toLowerCase())
                )
            })

        const no_matching_scores = $matchingScores.length === 0
        if (no_matching_scores){
            $('<p/>',{
                'class':'noMatch',
                text:'No Scores Found. Make sure there are no typos. Your search should match the title as it appears in the sidebar, not as it appears in the music.'
            }).appendTo($resultsDiv)
            return
        }

        $matchingScores.clone().appendTo($resultsDiv).each((i,score)=> createScoreResultContextMenu(i,score))
    })


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
                    "Download Score Data":function($targetBkmkLi){ processScoreData($targetBkmkLi) },
                    "Copy Score Data": function($targetBkmkLi){ processScoreData($targetBkmkLi,true) },
                    "Remove Score From Page":function($targetBkmkLi){ removeScoreFromEditors($targetBkmkLi) }
                },
                $vEllipse
            )
            $section.append($li)
        })

        //append this section to the sidebar
        $('#sidebar').append($section)
    })

    /**
     * Remove Score From Editors
     * @description remove $bkmk from active scores, clear all editors, render all other active bookmarks.
     * @param {*} $bkmk 
     */
    function removeScoreFromEditors($bkmk){
        //remove active class
        $bkmk.removeClass('active')
        
        //clear abcEditors
        const $allAbcEditors = $('.abcEditor')
        $allAbcEditors.val('')

        const no_other_active_scores = S2S.activeScores.length === 1

        let index_to_splice

        //render all other active scores
        S2S.activeScores.forEach(($score,i)=>{
            //remove the bkmk from active scores global
            if ($score.get(0) === $bkmk.get(0)) {
                index_to_splice = i
                return
            }
            if (no_other_active_scores) return

            renderScoreFromBkmk($score,true,true)
        })

        S2S.activeScores.splice(index_to_splice, 1)

        if (no_other_active_scores) {
            $allAbcEditors.change()
            setAllNotDirty()
        }
    }


    //On Score Bookmark Click
    $(document).on('click','.score_bookmark',function(e){
        //close the homepage
        const homepage_is_open = $('#homepage').hasClass('open')
        if(homepage_is_open) $('.open_homepage')[0].click()

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
        alsoResizeReverse: '#page_content',
        stop: function(){
            //also resize reverse can shrink #page_content by 1px, so adjust for it
            const totalWidth = $('#sidebar').width() + $('#page_content').width()
            const windowWidth = $(window).width()
            const difference = $(window).width() - $('#sidebar').width()
            if (totalWidth !== windowWidth) $('#page_content').width(difference)
        }
    })

    //hide bookmark sections and search elements if the sidebar is resized below 43px
    //  this prevents the elements from jumping below the sidebar buttons
    $( "#sidebar" ).on( "resize", function( event, ui ) {
        const sidebarWidth = $('#sidebar').width()

        const $els = $('.score_bookmark_section, #searchAndSort_container')
        sidebarWidth < 43 ? $els.hide() : $els.show()

        //some needs to be done only when sidebar is shrunk below 43px
        if (sidebarWidth < 43) {
            const $searchResults = $('#searchAndSort_results')
            $searchResults.hide()
            $('.expand_results').removeClass('flip')
        }
    })

    /**
     * Handle Screen Orientation Changes
     */
    screen.orientation.onchange = function(){
        const checkWidthsInterval = setInterval(() => {
            //Manually drag the sidebar to trigger the resizable stop function and fix layout sizing
            const $handle = $('#sidebar_resize_handle');

            const offset = $handle.offset();
            const startX = offset.left
            const startY = offset.top
            const midX = startX + 1
            const midY = startY
            const endX = startX
            const endY = startY

            // Trigger the mouse events
            $handle
            .trigger($.Event('mousedown', { which: 1, pageX: startX, pageY: startY }))
            .trigger($.Event('mousemove', { which: 1, pageX: midX, pageY: midY }))
            .trigger($.Event('mousemove', { which: 1, pageX: endX, pageY: endY }))
            .trigger($.Event('mouseup', { which: 1, pageX: endX, pageY: endY }))

            //check if page width is fixed and if so cancel the interval
            const htmlWidthCheck = $('html').width() === screen.availWidth
            const pageContentWidthCheck = $('#page_content').width() + $('#sidebar').width() === $('#page_content').parent().width()
            if ( htmlWidthCheck && pageContentWidthCheck ) clearInterval(checkWidthsInterval)
        }, 10)
    }



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

    //NOTEY TOGGLER
    // load tiny notey toggle button (and other noteys)
    $('.noteyContainer').each(function(){
        $(this).html( $('#notey').html() )
    })
    //hover notey container
    $(".noteyContainer").hover(
        function () {
            $(this).addClass("eyes-blinking");
        },
        function () {
            $(this).removeClass("eyes-blinking");
        }
    )
    $('#noteyToggle').click(function(){
        notey.fade('toggle')
    })


    /**
     * PRINTING
     */
    const $printMenu = $('#printMenu')
    instruments.forEach(instrument=>{
        $('<span/>',{
            'id': `print${ capitalize1stLetter(instrument) }`,
            text: capitalize1stLetter(instrument),
            click: function(){
                $("#tunes_container").attr("printInstruments", instrument);
                window.print();
                $("#print").removeClass("active");
            }
        }).appendTo($printMenu)
    })

    const printAll = $('<span/>',{
        'id':'printAll',
        text: 'All',
        click: function(){
            $("#tunes_container").attr("printInstruments", instruments.join(','));
            window.print();
            $("#print").removeClass("active");
        }
    }).appendTo($printMenu)

    const printAllVisible = $('<span/>',{
        'id':'printAllVisible',
        text: 'All Visible',
        click: function(){
            $("#tunes_container").attr("printInstruments", 'allVisible');
            window.print();
            $("#print").removeClass("active");
        }
    }).appendTo($printMenu)

    /**
     * INITIALIZE TOOLTIPS
     */
    $(document).tooltip({
        track: true,
        my: "left center",
        show: 200,
        hide: 100,
        classes: {
            "ui-tooltip": "darkTheme"
          }
    })

    /**
     * INITIALIZE DIALOG
     */
    //default options
    const header_height = $('#top_bar').height()
    const dialogTop = header_height + 10
    $('#dialog')
    .dialog({
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
    //Override the _title function so that html in the title option isn't escaped
    .data( "uiDialog" )._title = function(title) {
        title.html( this.options.title );
    };


    const openDialogOptsDefault = {
        addClass: 'myDialog',               //any custom classes to add to dialog
        title: '<i class="fa-solid fa-circle-info"></i> Staff To Stand', //heading of the dialog
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
                const $dialogWidget = $(this).dialog('widget')

                //pressing enter on the last text input in the dialog clicks the OK button
                $dialogWidget.find('input[type="text"]').last().on('keydown',e=>{
                    const enterWasPressed = e.keyCode === 13
                    if (!enterWasPressed) return
                    const $button = $dialogWidget.find('button.ui-button:contains("OK")')
                    $button.click()
                })
            } )
            .dialog('open')
    }

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
                    title: '<i class="fa-solid fa-circle-info"></i> My Scores Section is Empty',
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
        //TODO: validate the file extension

        //get and validate contents
        const contents = JSON.parse( decodeURIComponent( ev.target.result ) );
        console.log('||S2S||  file contents: ',contents)

        //  if the length of the array is empty, throw an error
        if (contents.length === 0){
            openDialog(
                'There was an error with the file contents.',
                {
                    addClass: 'warn',
                    title: '<i class="fa-solid fa-triangle-exclamation"></i> File Contents Error',
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
                    title: '<i class="fa-solid fa-triangle-exclamation"></i> Invalid File Extension',
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
     * Process Score Data For Download/Copying
     * @param {Element} $bkmk 
     * @param {Boolean} copyToClipboard if true, rather than downloading as a json file, copies the js object to clipboard
     */
    function processScoreData($bkmk,copyToClipboard=false){
        $bkmk = $($bkmk)
        //get the abcstring for each instrument
        const contentsObj = {}
        instruments.forEach(function(instrument){
            const abc = $bkmk.attr('abc-'+instrument) || ''
            contentsObj['abc-'+instrument] = escapeABC(abc)
        })
        contentsObj['_title'] = $bkmk.attr('_title')
        const filename = $bkmk.attr('_title')

        if (copyToClipboard){
            //Copy Score Data
            const $tempTxtArea = $('<textarea/>').css({
                position:'fixed',
                top:'0',
                left:'0',
                zIndex:'0',
                opacity:'0'
            })
            $tempTxtArea
            .val( JSON.stringify(contentsObj) )
            .appendTo( $('body') )
            .get(0).select()

            document.execCommand('copy')

            $tempTxtArea.remove()

            console.log('|| S2S || copied score data',contentsObj)

            return
        }

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
                     <div><input type="text" id="bkmkRenameInput" style="width:100%;"></div>`,
                    {
                        title:'<i class="fa-solid fa-pen"></i> Rename Score',
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
            "Copy Score Data": function($targetBkmkLi){ processScoreData($targetBkmkLi,true) },
            "Delete": function($targetBkmkLi) { $targetBkmkLi.remove() },
            "Remove Score From Page":function($targetBkmkLi){ removeScoreFromEditors($targetBkmkLi) }
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
                title: '<i class="fa-solid fa-triangle-exclamation"></i> Unsaved Changes',
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
        for (const editor in abcEditorInstances){
            abcEditorInstances[editor].setNotDirty()
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
    function renderScoreFromBkmk($bkmk,appendScore=false, bkmk_was_already_active=false){
        console.log('||S2S||  rendering score from bkmk:',$bkmk)

        notey.fade('in','looking-at-left-hand playing-violin')

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
                $bkmk.addClass('active').removeClass('prevActive')
                return
            }

            //do only once (rather than for each instrument)
            if (i===0) {
                //remove active class from all bkmks and give them prevActive class
                $('.score_bookmark.active').removeClass('active').addClass('prevActive')

                //show all parts (ignore editors)
                $('.part').children('div:not(.abc-warnings)').show()

                //Add active class to bkmk to indicate its loaded
                $bkmk.addClass('active').removeClass('prevActive')
            }

            $instrEditor.val(newAbc).change()

            if (isEmptyPart)  $(`.part[instrument="${instrument}"]`).addClass('hidden') 
            else  $(`.part[instrument="${instrument}"]`).removeClass('hidden') 
        })

        //set extra html
        const extra_html = $bkmk.attr('extra_html') || ''
        $('.extra_html').html(extra_html)

        setAllNotDirty()

        if (bkmk_was_already_active) return 

        //Set/push to activeScores
        if (appendScore) S2S.activeScores.push($bkmk)
        else {
            S2S.prevActiveScores = S2S.activeScores
            S2S.activeScores = [$bkmk]
        }

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


    /**
     * HOMEPAGE
     */
    const $homepage = $('#homepage')

    const $footerCopy = $('footer').clone()

    $('#homepage_content').load('homepage_content.html')

    $footerCopy.appendTo('#homepage')

    $('.open_homepage, #close_homepage, #about_toggle').click(()=>{
        const homepage_is_open = $homepage.hasClass('open')
        const top = homepage_is_open ? 'calc(-100vh + var(--header_height))' : 'var(--header_height)'

        $homepage.css('top',top).toggleClass('open')

        if (!homepage_is_open) notey.fade('out')
    })

    /**
     * Header Buttons
     */
    // toggle active on header button click
    $('.header_button').click(e => $(e.target).toggleClass('active') )

    // contact
    $('#contact_toggle, #close_contact').click(() => $('#contact_container').slideToggle() )
    




}) //end on page load