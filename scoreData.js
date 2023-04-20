console.log('||S2S|| Loading Score Data...')

if (!window.S2S) window.S2S = {}

const scoreData = [
    {
        "type":"section",
        "heading":"My Scores",
        "id":"myScores",
        "bookmarks":[]
    },
    {
        "type":"section",
        "heading":"Spring Concert",
        "bookmarks":[
            {
                "_title":"Kamwongia",
                "abc-violin":"X:1\nT:Kamwongia\nC:Traditional Kenyan\nM:4/4\nL:1/8\nK:G\nV: violin clef=treble \nGG GB BA GA | DG GB BG G2 | DE D3/2G/ GD D2 | DE D3/2G/ GD D2 | \nGG GB BA GA | DG GB Bd d2 | DE D3/2G/ GD D2 | DE D3/2G/ G2 z2 |]\n[M:7/8] ||: Bd dB Bdd | BG GB GED | Bd dB Bdd |1 [M:4/4] BG GB B2 G2 :|2 [M:4/4] BG GB D2 G2 |]",
                "abc-viola":"X:1\nT:Kamwongia\nC:Traditional Kenyan\nM:4/4\nL:1/8\nK:G\nV: viola clef=alto \nGG GB BA GA | DG GB BG G2 | DE D3/2G/ GD D2 | DE D3/2G/ GD D2 | \nGG GB BA GA | DG GB Bd d2 | DE D3/2G/ GD D2 | DE D3/2G/ G2 z2 |]\n[M:7/8] ||: Bd dB Bdd | BG GB GED | Bd dB Bdd |1 [M:4/4] BG GB B2 G2 :|2 [M:4/4] BG GB D2 G2 |]",
                "abc-cello":"X:1\nT:Kamwongia\nC:Traditional Kenyan\nM:4/4\nL:1/8\nK:G\nV: cello clef=bass octave=-1\nGG GB BA GA | DG GB BG G2 | DE D3/2G/ GD D2 | DE D3/2G/ GD D2 | \nGG GB BA GA | DG GB Bd d2 | DE D3/2G/ GD D2 | DE D3/2G/ G2 z2 |]\n[M:7/8] ||: Bd dB Bdd | BG GB GED | Bd dB Bdd |1 [M:4/4] BG GB B2 G2 :|2 [M:4/4] BG GB D2 G2 |]",
                "abc-bass":"X:1\nT:Kamwongia\nC:Traditional Kenyan\nM:4/4\nL:1/8\nK:G\nV: bass clef=bass octave=-1\nGG GB BA GA | DG GB BG G2 | DE D3/2G/ GD D2 | DE D3/2G/ GD D2 | \nGG GB BA GA | DG GB Bd d2 | DE D3/2G/ GD D2 | DE D3/2G/ G2 z2 |]\n[M:7/8] ||: Bd dB Bdd | BG GB GED | Bd dB Bdd |1 [M:4/4] BG GB B2 G2 :|2 [M:4/4] BG GB D2 G2 |]",
                "extra_html":"<p>Background info about Kenya and the tune Kamwongia is to come.</p>"
            },
            {
                "_title":"Julie-O",
                "abc-violin":"X:1\nT:Julie-O\nC:Mark Summer, Arr. by A. Tilles\nM:4/4\nL:1/8\nK:D\nV: violin clef=treble \n||: DE | F2 G A2 d3 | B2A2G2F2 | E6 FG | F6 \nDE | F2 G A2 d3 | B2 A2 G2 F2 | E4 D4 | D6 :|| \n||: B2 A d2 c2 B | B2 A f2 d2 B :|| \n||:\"^Repeat 4 Times\" d2 A d2 d ee | f2 A f2 f ee:|| \"^back to beginning\" d2 z4 :|]\nX:2\nR:Bass Line\nM:4/4\nL:1/8\nK:D\nV:violin clef=treble \n[|: z2 | D8 | G8 | A8 | B8 | D8 | G8 | A4 G4 | D8 :||\n||: G3 B2 A3 | G3 B2 A3 :||:\"^Repeat 4 Times\"F3 F3 G2 | A3 A3 G2:||\"^to beginning\" F2 z4 :|]",
                "abc-viola":"X:1\nT:Julie-O\nC:Mark Summer, Arr. by A. Tilles\nM:4/4\nL:1/8\nK:D\nV: viola clef=alto \n||: DE | F2 G A2 d3 | B2A2G2F2 | E6 FG | F6 \nDE | F2 G A2 d3 | B2 A2 G2 F2 | E4 D4 | D6 :|| \n||: B2 A d2 c2 B | B2 A d2 d2 B :|| \n||:\"^Repeat 4 Times\" d2 A d2 d cc | d2 A d2 d cc:|| \"^back to beginning\" d2 z4 :|]\nX:2\nR:Bass Line\nM:4/4\nL:1/8\nK:D\nV:viola clef=alto \n[|: z2 | D8 | G8 | A8 | B8 | D8 | G8 | A4 G4 | D8 :||\n||: G3 B2 A3 | G3 B2 A3 :||:\"^Repeat 4 Times\"F3 F3 G2 | A3 A3 G2:||\"^to beginning\" F2 z4 :|]",
                "abc-cello":"X:1\nT:Julie-O\nC:Mark Summer, Arr. by A. Tilles\nM:4/4\nL:1/8\nK:D\nV: cello clef=bass octave=-1\n||: DE | F2 G A2 d3 | B2A2G2F2 | E6 FG | F6 \nDE | F2 G A2 d3 | B2 A2 G2 F2 | E4 D4 | D6 :|| \n||: B2 A d2 c2 B | B2 A d2 d2 B :|| \n||:\"^Repeat 4 Times\" d2 A d2 d cc | d2 A d2 d cc:|| \"^back to beginning\" d2 z4 :|]\nX:2\nR:Bass Line\nM:4/4\nL:1/8\nK:D\nV:cello clef=bass octave=-1\n[|: z2 | D8 | G8 | A8 | B8 | D8 | G8 | A4 G4 | D8 :||\n||: G3 B2 A3 | G3 B2 A3 :||:\"^Repeat 4 Times\"F3 F3 G2 | A3 A3 G2:||\"^to beginning\" F2 z4 :|]",
                "abc-bass":"X:1\nT:Julie-O\nC:Mark Summer, Arr. by A. Tilles\nM:4/4\nL:1/8\nK:D\nV: bass clef=bass octave=-1\n||: DE | F2 G A2 d3 | B2A2G2F2 | E6 FG | F6 \nDE | F2 G A2 d3 | B2 A2 G2 F2 | E4 D4 | D6 :|| \n||: B2 A d2 c2 B | B2 A f2 d2 B :|| \n||:\"^Repeat 4 Times\" d2 A d2 d ee | f2 A f2 f ee:|| \"^back to beginning\" d2 z4 :|]\nX:2\nR:Bass Line\nM:4/4\nL:1/8\nK:D\nV:bass clef=bass octave=-1\n[|: z2 | D8 | G8 | A8 | B8 | D8 | G8 | A4 G4 | D8 :||\n||: G3 B2 A3 | G3 B2 A3 :||:\"^Repeat 4 Times\"F3 F3 G2 | A3 A3 G2:||\"^to beginning\" F2 z4 :|]",
                "extra_html":"<p>Some good recordings: <ul><li><a href='https://www.youtube.com/watch?v=JHCcD5d56ns' target='_blank'>Mark Summer</a></li> <li><a href='https://www.youtube.com/watch?v=uGVBgHbNLZI' target='_blank'>Patrick Laird</a></li> <li><a href='https://www.youtube.com/watch?v=PsZo4NAD-94' target='_blank'>Kevin Olusola</a></li></ul></p>"
            }
        ]
    },
    {
        "type":"section",
        "heading":"Beginner",
        "bookmarks":[
            {
                "_title":"Hot Cross Buns",
                "abc-violin":"X: 1\nT:Hot Cross Buns\nC:Traditional\nM:4/4\nL:1/8\nK:D\nV: violin clef=treble \nF2 E2 D2 z2 | F2 E2 D2 z2 | DD DD EE EE | F2 E2 D2 z2 |]",
                "abc-viola":"X: 1\nT:Hot Cross Buns\nC:Traditional\nM:4/4\nL:1/8\nK:D\nV: viola clef=alto \nF2 E2 D2 z2 | F2 E2 D2 z2 | DD DD EE EE | F2 E2 D2 z2 |]",
                "abc-cello":"X: 1\nT:Hot Cross Buns\nC:Traditional\nM:4/4\nL:1/8\nK:D\nV: cello clef=bass octave=-1\nF2 E2 D2 z2 | F2 E2 D2 z2 | DD DD EE EE | F2 E2 D2 z2 |]",
                "abc-bass":"X: 1\nT:Hot Cross Buns\nC:Traditional\nM:4/4\nL:1/8\nK:D\nV: bass clef=bass octave=-1\nF2 E2 D2 z2 | F2 E2 D2 z2 | DD DD EE EE | F2 E2 D2 z2 |]"
            },
            {
                "_title":"Pierrot",
                "abc-violin":"X: 1\nT:Pierrot\nC:English Lullaby\nM:4/4\nL:1/4\nK:A\nV: violin clef=treble \n||: AAAB | c2 B2 | AcBB | A4 :||",
                "abc-viola":"X: 1\nT:Pierrot\nC:English Lullaby\nM:4/4\nL:1/4\nK:A\nV: viola clef=alto \n||: AAAB | c2 B2 | AcBB | A4 :||",
                "abc-cello":"X: 1\nT:Pierrot\nC:English Lullaby\nM:4/4\nL:1/4\nK:A\nV: cello clef=bass octave=-1\n||: AAAB | c2 B2 | AcBB | A4 :||",
                "abc-bass":"X: 1\nT:Pierrot\nC:English Lullaby\nM:4/4\nL:1/4\nK:A\nV: bass clef=bass octave=-1\n||: A, A, A, B, | C2 B,2 | A, C B, B, | A,4 :||"
            },
            {
                "_title":"Twinkle, Twinkle (D)",
                "abc-violin":"X: 1\nT:Twinkle, Twinkle (D)\nC:English Lullaby\nM:4/4\nL:1/4\nK:D\nV: violin clef=treble \nD D A A | B B A2 | G G F F | E E D2 | \nA A G G | F F E2 | A A G G | F F E2 | \nD D A A | B B A2 | G G F F | E E D2 |]",
                "abc-viola":"X: 1\nT:Twinkle, Twinkle (D)\nC:English Lullaby\nM:4/4\nL:1/4\nK:D\nV: viola clef=alto \nD D A A | B B A2 | G G F F | E E D2 | \nA A G G | F F E2 | A A G G | F F E2 | \nD D A A | B B A2 | G G F F | E E D2 |]",
                "abc-cello":"X: 1\nT:Twinkle, Twinkle (D)\nC:English Lullaby\nM:4/4\nL:1/4\nK:D\nV: cello clef=bass octave=-1\nD D A A | B B A2 | G G F F | E E D2 | \nA A G G | F F E2 | A A G G | F F E2 | \nD D A A | B B A2 | G G F F | E E D2 |]",
                "abc-bass":"X: 1\nT:Twinkle, Twinkle (D)\nC:English Lullaby\nM:4/4\nL:1/4\nK:D\nV: bass clef=bass octave=-1\nD D A A | B B A2 | G G F F | E E D2 | \nA A G G | F F E2 | A A G G | F F E2 | \nD D A A | B B A2 | G G F F | E E D2 |]"
            },
            {
                "_title":"Twinkle, Twinkle (G)",
                "abc-violin":"X: 1\nT:Twinkle, Twinkle (G)\nC:English Lullaby\nM:4/4\nL:1/4\nK:G\nV: violin clef=treble \nG, G, D D | E E D2 | C C B, B, | A, A, G,2 | \nD D C C | B, B, A,2 | D D C C | B, B, A,2 | \nG, G, D D | E E D2 | C C B, B, | A, A, G,2 |]",
                "abc-viola":"X: 1\nT:Twinkle, Twinkle (G)\nC:English Lullaby\nM:4/4\nL:1/4\nK:G\nV: viola clef=alto \nG, G, D D | E E D2 | C C B, B, | A, A, G,2 | \nD D C C | B, B, A,2 | D D C C | B, B, A,2 | \nG, G, D D | E E D2 | C C B, B, | A, A, G,2 |]",
                "abc-cello":"X: 1\nT:Twinkle, Twinkle (G)\nC:English Lullaby\nM:4/4\nL:1/4\nK:G\nV: cello clef=bass octave=-1\nG, G, D D | E E D2 | C C B, B, | A, A, G,2 | \nD D C C | B, B, A,2 | D D C C | B, B, A,2 | \nG, G, D D | E E D2 | C C B, B, | A, A, G,2 |]",
                "abc-bass":"X: 1\nT:Twinkle, Twinkle (G)\nC:English Lullaby\nM:4/4\nL:1/4\nK:G\nV: bass clef=bass octave=-1\nG, G, D D | E E D2 | C C B, B, | A, A, G,2 | \nD D C C | B, B, A,2 | D D C C | B, B, A,2 | \nG, G, D D | E E D2 | C C B, B, | A, A, G,2 |]"
            },
            {
                "_title":"Twinkle, Twinkle (A)",
                "abc-violin":"X: 1\nT:Twinkle, Twinkle (A)\nC:English Lullaby\nM:4/4\nL:1/4\nK:A\nV: violin clef=treble \nA A e e | f f e2 | d d c c | B B A2 | \ne e d d | c c B2 | e e d d | c c B2 | \nA A e e | f f e2 | d d c c | B B A2 |]",
                "abc-viola":"X: 1\nT:Twinkle, Twinkle (A)\nC:English Lullaby\nM:4/4\nL:1/4\nK:A\nV: viola clef=alto \nA A e e | f f e2 | d d c c | B B A2 | \ne e d d | c c B2 | e e d d | c c B2 | \nA A e e | f f e2 | d d c c | B B A2 |]",
                "abc-cello":"X: 1\nT:Twinkle, Twinkle (A)\nC:English Lullaby\nM:4/4\nL:1/4\nK:A\nV: cello clef=bass octave=-1\nA A e e | f f e2 | d d c c | B B A2 | \ne e d d | c c B2 | e e d d | c c B2 | \nA A e e | f f e2 | d d c c | B B A2 |]",
                "abc-bass":"X: 1\nT:Twinkle, Twinkle (A)\nC:English Lullaby\nM:4/4\nL:1/4\nK:A\nV: bass clef=bass octave=-1\nA A e e | f f e2 | d d c c | B B A2 | \ne e d d | c c B2 | e e d d | c c B2 | \nA A e e | f f e2 | d d c c | B B A2 |]"
            },
            {
                "_title":"Twinkle, Twinkle (C)",
                "abc-violin":"X: 1\nT:Twinkle, Twinkle (C)\nC:English Lullaby\nM:4/4\nL:1/4\nK:C\nV: violin clef=treble \nC, C, G, G, | A, A, G,2 | F, F, E, E, | D, D, C,2 | \nG, G, F, F, | E, E, D,2 | G, G, F, F, | E, E, D,2 | \nC, C, G, G, | A, A, G,2 | F, F, E, E, | D, D, C,2 |]",
                "abc-viola":"X: 1\nT:Twinkle, Twinkle (C)\nC:English Lullaby\nM:4/4\nL:1/4\nK:C\nV: viola clef=alto \nC, C, G, G, | A, A, G,2 | F, F, E, E, | D, D, C,2 | \nG, G, F, F, | E, E, D,2 | G, G, F, F, | E, E, D,2 | \nC, C, G, G, | A, A, G,2 | F, F, E, E, | D, D, C,2 |]",
                "abc-cello":"X: 1\nT:Twinkle, Twinkle (C)\nC:English Lullaby\nM:4/4\nL:1/4\nK:C\nV: cello clef=bass octave=-1\nC, C, G, G, | A, A, G,2 | F, F, E, E, | D, D, C,2 | \nG, G, F, F, | E, E, D,2 | G, G, F, F, | E, E, D,2 | \nC, C, G, G, | A, A, G,2 | F, F, E, E, | D, D, C,2 |]",
                "abc-bass":"X: 1\nT:Twinkle, Twinkle (C)\nC:English Lullaby\nM:4/4\nL:1/4\nK:C\nV: bass clef=bass octave=-1\nC, C, G, G, | A, A, G,2 | F, F, E, E, | D, D, C,2 | \nG, G, F, F, | E, E, D,2 | G, G, F, F, | E, E, D,2 | \nC, C, G, G, | A, A, G,2 | F, F, E, E, | D, D, C,2 |]"
            },
            {
                "_title":"Lullaby",
                "abc-violin":"X:1\nV: violin clef=treble\nT:Lullaby\nC: Brahms\nM:3/4\nL:1/8\nK:D \nFF | A4 FF | A4 FA | d2c2B2 | B2 A2 EF| \nG2 E2 EF | G4 EG | cB A2 c2 | d4 DD|\n| d3 d BG | A4 FD | G2 A2 B2 | A4 DD |\n| d3 d BG | A4 FD | G2 F2 E2 | D6 |]",
                "abc-viola":"X:1\nV: viola clef=alto \nT:Lullaby\nC: Brahms\nM:3/4\nL:1/8\nK:D \nFF | A4 FF | A4 FA | d2c2B2 | B2 A2 EF| \nG2 E2 EF | G4 EG | cB A2 c2 | d4 DD|\n| d3 d BG | A4 FD | G2 A2 B2 | A4 DD |\n| d3 d BG | A4 FD | G2 F2 E2 | D6 |]",
                "abc-cello":"X:1\nV: cello clef=bass octave=-1\nT:Lullaby\nC: Brahms\nM:3/4\nL:1/8\nK:D \nFF | A4 FF | A4 FA | d2c2B2 | B2 A2 EF| \nG2 E2 EF | G4 EG | cB A2 c2 | d4 DD|\n| d3 d BG | A4 FD | G2 A2 B2 | A4 DD |\n| d3 d BG | A4 FD | G2 F2 E2 | D6 |]",
                "abc-bass":"X:1\nV: bass clef=bass octave=-1\nT:Lullaby\nC: Brahms\nM:3/4\nL:1/8\nK:D \nFF | A4 FF | A4 FA | d2c2B2 | B2 A2 EF| \nG2 E2 EF | G4 EG | cB A2 c2 | d4 DD|\n| d3 d BG | A4 FD | G2 A2 B2 | A4 DD |\n| d3 d BG | A4 FD | G2 F2 E2 | D6 |]"
            }
        ]
    }
]

S2S.scoreData = JSON.stringify(scoreData)

if(S2S.scoreData) console.log('||S2S||  Score Data Loaded')
//for mobile testing
alert(scoreData[0].heading)
//