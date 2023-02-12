import $ from "jquery";
import abcjs from "abcjs";

$(document).ready(() => {
  /** EDITOR
   *
   */
  if ($("#editor").length > 0) {
    const abc_editor = new abcjs.Editor("editor", {
      canvas_id: "tunes_container",
      warnings_id: "abc-warnings"
    });
  }

  /**
   * NOTEY
   */
  $(".noteyContainer").each(function (i, notey) {
    $(this).html($("#notey").html());
  });
  $(".noteyContainer").hover(
    function () {
      $(this).addClass("eyes-blinking");
    },
    function () {
      $(this).removeClass("eyes-blinking");
    }
  );

  // notey toggle
  $("#noteyToggle").click(function () {
    $("#notey").fadeToggle();
  });

  /**
   * PRINTING
   */
  $("#print").click(function () {
    $(this).toggleClass("active");
  });

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
   * SCORE SIZE SETTING
   */
  $(document).on("input", ".score_settings_size input", function () {
    const newsize = $(this).val();
    const score_to_resize = $(this).attr("for");
    $(`#${score_to_resize}`).css("width", newsize);
  });

  /**
   * SCORE BOOKMARKS CLICK LISTENER
   * LOAD SCORE
   * shift-click appends score
   */
  $(document).on("click", ".score_bookmark:not(.current)", function (e) {
    const $clicked_bookmark = $(this);
    //ADD CURRENT CLASS to the bookmark
    //and remove current class from other bookmarks, unless user shift-clicked
    if (!e.shiftKey) $(".score_bookmark").removeClass("current");
    $clicked_bookmark.addClass("current");

    //if not SHIFT-CLICKing, empty tunes-container first
    if (!e.shiftKey) $("#tunes_container").html("");

    $(".score.last_appended").removeClass("last_appended");

    //show loading icon
    //  which is notey playing violin
    $("#notey")
      .attr("class", "")
      .addClass("eyes-blinking looking-at-left-hand playing-violin")
      .fadeIn();
    setTimeout(function () {
      loadScore($clicked_bookmark).then(function () {
        $("#notey").fadeOut("def", function () {
          $("#notey").removeClass("playing-violin").addClass("holding-violin");
        });
      });
    }, 1000);
  });

  /**
   * STUCK CLASS
   * Add a 'stuck' class to score_info elements when they're stickied
   */
  $("#page_content").on("scroll", () => {
    $(".score_info").each((i, score_info) => {
      const score_info_top =
        $(score_info).offset().top - $("header").outerHeight();

      if (score_info_top === 0) {
        $(score_info).addClass("stuck");
      } else {
        $(score_info).removeClass("stuck");
      }
    });
  });

  /** SIDEBAR TOGGLE */
  $("#sidebar_toggle_container").on("click", () => {
    $("#main_container").toggleClass("sidebar_collapsed");
    $(".score").each(function (i, score) {
      const $sizeInput = $(score).find(".score_settings_size input");
      const oldMax = parseInt($sizeInput.attr("max"), 10);
      const oldValue = parseInt($sizeInput.val(), 10);
      const newMax = $("#main_container").hasClass("sidebar_collapsed")
        ? oldMax + (200 - 35)
        : oldMax - (200 - 35); //<- 200 is sidebar width, 35 is sidebar buttons
      let newValue = $("#main_container").hasClass("sidebar_collapsed")
        ? oldValue + (200 - 35)
        : oldValue - (200 - 35); //<- 200 is sidebar width, 35 is sidebar buttons
      if (newValue > newMax) {
        newValue = newMax;
        //resize score to new value
        $(score).css("width", newValue);
      }
      $(score)
        .find(".score_settings_size input")
        .attr({ max: newMax, value: newValue });
    });
  });

  /** SIDEBAR SECTION COLLAPSING */
  //add height to subtract prop
  $("#sidebar .score_bookmark_section").each(function (i, section) {
    const heading_height = $(section).children().first().outerHeight();
    const height_to_subtract = $(section).height() - heading_height + 2; //<- 2 is for the 2px border on the bookmark section
    $(section).prop("height_to_subtract", height_to_subtract);
  });
  // click listener
  $("#sidebar :is(h1,h2,h3,h4,h5,h6)").click(function () {
    const $section = $(this).closest(".score_bookmark_section");
    const height_to_subtract = $section.prop("height_to_subtract");

    if ($section.hasClass("collapsed")) {
      $section.removeClass("collapsed");
      $section.animate({ height: `+=${height_to_subtract}` }, 300);
    } else {
      $section.addClass("collapsed");
      $section.animate({ height: `-=${height_to_subtract}` }, 300);
    }
  });

  /** CLEAR SCORES BUTTON */
  $("#clear_scores").click(function () {
    $("#tunes_container").html("");
    $(".score_bookmark.current").removeClass("current");
  });

  /** REMOVE SCORE BUTTON */
  $(document).on("click", ".score_settings_remove_score", function () {
    //get the parent .score and remove it
    //  also remove current class from its bookmark
    console.log($(this).closest(".score").attr("_title"));
    $(
      `.score_bookmark[_title="${$(this).closest(".score").attr("_title")}"]`
    ).removeClass("current");
    $(this).closest(".score").remove();
  });

  /** SIDEBAR BUTTONS */
  //noteFingering, noteLetterName
  $("#fingerings_toggle").click(function () {
    $(".noteFingering").fadeToggle();
    $(this)
      .toggleClass("active")
      .animate({ width: "+=6px", marginLeft: "-=3px" }, 200)
      .animate({ width: "-=6px", marginLeft: "+=3px" }, 200);
  });

  $("#notenames_toggle").click(function () {
    $(".noteLetterName").fadeToggle();
    $(this)
      .toggleClass("active")
      .animate({ width: "+=6px", marginLeft: "-=3px" }, 200)
      .animate({ width: "-=6px", marginLeft: "+=3px" }, 200);
  });

  $("#highlights_toggle").click(function () {
    $("#tunes_container").toggleClass("highlight_notes");
    $(this)
      .toggleClass("active")
      .animate({ width: "+=6px", marginLeft: "-=3px" }, 200)
      .animate({ width: "-=6px", marginLeft: "+=3px" }, 200);
  });

  /** DOCUMENT CLICK */
  $(document).on("click", function (e) {
    const $target = $(e.target);

    //deselect note
    const selectedNotes = $(".abcjs-note_selected");
    if (!$target.closest(selectedNotes).length)
      selectedNotes.removeClass("abcjs-note_selected");

    //hide print menu
    if (!$target.closest("#printMenu,#print").length)
      $("#print").removeClass("active");
  });

  /** LASTLY, hide Notey */
  $("#notey").fadeOut("def", function () {
    $("#notey").removeClass("playing-violin").addClass("holding-violin");
  });
});

/**
 * LOAD SCORE
 * @param {array} score_bookmarks array of score_bookmark elements to load on the page
 */
function loadScore(score_bookmarks) {
  //create deferred object, so this function can be used with then (see also deferred.resolve() and return deferred.promise() at end)
  let deferred = $.Deferred();

  //CREATE TUNES
  /*
      find all .score elements and drawStaff for each tune specified in its attributes
      .score divs are containers for a piece of music and have attributes for each of the info's and the notes for each part
      Attributes of Score Elements:
  */

  $(score_bookmarks).each((bookmark_i, bookmark) => {
    //CREATE SCORE ELEMENT
    const num_scores_on_page = $(".score").length;
    const score_id = `score${bookmark_i + num_scores_on_page}`;

    let score_html = `<div class="score last_appended" id="${score_id}"`;
    //read each attr of bookmark and append to end of html string
    $.each($(bookmark).get(0).attributes, function (i, attribute) {
      score_html += `${attribute.name}="${attribute.value}" `;
    });
    score_html += `></div>`;

    $("#tunes_container").append(score_html);

    const score = $(`#${score_id}`);

    //Score attr values
    const title = $(bookmark).attr("_title");
    const subtitle = $(bookmark).attr("subtitle");
    const composer = $(bookmark).attr("composer");
    const key = $(bookmark).attr("key");
    const meter = $(bookmark).attr("meter");
    const defaultNoteLength = $(bookmark).attr("defaultNoteLength");
    //const defaultHiddenParts = $(bookmark).attr("defaultHiddenParts");

    //SCORE TOP
    //Score Info And Settings
    const title_html = title ? `<h1 class="title">${title}</h1>` : "";
    const subtitle_html = subtitle
      ? `<h2 class="subtitle">${subtitle}</h2>`
      : "";
    const composer_html = composer
      ? `<h3 class="composer">${composer}</h3>`
      : "";

    const page_content_width = $("#page_content").width();

    const score_top_html = `<div class='score_info'>${title_html}${subtitle_html}${composer_html}
            <div class="score_settings" for="${score_id}"> 
                <div class="score_settings_toggler" title="Settings"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/></svg></div> 
                <div class="score_settings_main">
                    <div class="score_settings_parts_togglers">
                        <h4>Parts Togglers</h4>
                    </div>
                    <div class="score_settings_misc">
                      <button class="score_settings_remove_score">Remove Score</button>
                    </div>
                    <div class="score_settings_size">
                      <h4>Score Size</h4>
                      <input type="range" min="500" max="${page_content_width}" value="${page_content_width}" class="slider" id="${score_id}-size" for="${score_id}">
                    </div>
                </div> 
            </div>
        </div>`;
    $(score).prepend(score_top_html);

    //CREATE a TUNE element for each instrument and part
    //Create an array of the parts
    let parts = {};
    const partNames = $(score).attr("parts").replace(/\s/g, "").split(",");
    partNames.forEach(function (part) {
      //get the attr val for each part and save it to the parts obj
      parts[part] = $(score)
        .attr(part)
        .replace(/\\txt\\/g, '"');
    });

    const instruments = $(score)
      .attr("instruments")
      .replace(/\s/g, "")
      .split(",");

    partNames.forEach(function (partName, i_partNames) {
      instruments.forEach(function (instrument, i_instruments) {
        console.log("Creating Tune for: ", instrument, partName);
        const tune_id = `${score_id}-${instrument}-${partName}`;
        const notes = parts[partName];
        // const subtitle = `${instrument} ${partName}`;

        //Create HTML for the tune element
        let tuneHtml = `<div class="tune"
                    id="${tune_id}"
                    instrument="${instrument}"
                    part="${partName}"
                    notes="${notes}"
                ></div>`;

        //Append the tune to the score
        $(score).append(tuneHtml);

        //Create info and options objects
        const options = {};

        //line breaks option
        const line_breaks = $(bookmark)
          .attr("line_breaks")
          ?.replace(/\s/g, "")
          .split(",")
          .map((x) => {
            return parseInt(x, 10);
          });
        console.log("line breaks=", line_breaks);
        if (line_breaks) options.lineBreaks = line_breaks;
        //wrap option
        const bars_per_line = $(bookmark).attr("bars_per_line");
        if (bars_per_line)
          options.wrap = {
            minSpacing: 1.8,
            maxSpacing: 2.7,
            preferredMeasuresPerLine: bars_per_line
          };

        const voiceFields = {
          violin: `clef=treble middle=B`,
          viola: `clef=alto middle=C`,
          cello: `clef=bass middle=D`,
          bass: `clef=bass middle=D`
        };
        const info = {
          key: key,
          meter: meter,
          defaultNoteLength: defaultNoteLength,
          voice1: `1 ${voiceFields[instrument.toLowerCase()]}`,
          voice2: ""
        };

        //RENDER THE TUNE
        drawStaff(tune_id, info, notes, options);

        //remove overflow:hidden from tune
        $(`#${tune_id}`).css("overflow", "visible");

        //DISPLAY TOGGLER
        const toggler_id = `${score_id}-toggle-${instrument}-${partName}`;
        const parts_seperator =
          i_instruments === instruments.length - 1
            ? ` style="margin-bottom:12px; "`
            : "";
        const toggler_html = `<input type="checkbox" id="${toggler_id}" ${parts_seperator} checked><label for="${toggler_id}"${parts_seperator}>${instrument} ${partName}</label>`;
        //append toggler to score settings
        $(score)
          .find(".score_settings_main .score_settings_parts_togglers")
          .append(toggler_html);

        //add on change listener to the toggler (via attaching the listener to the document)
        $(document).off("change", `#${toggler_id}`);
        $(document).on("change", `#${toggler_id}`, function () {
          $(`#${tune_id}`).fadeToggle();
        });
      });
    });

    //append extra html to score
    const extra_html = $(bookmark).attr("extra_html");
    console.log(extra_html);
    if (extra_html) $(score).append(extra_html);
  });

  //ADD CUSTOM CLASSES TO ANNOTATIONS
  //  text annotations that have text-anchor=start and are less than 3 characters in length and have at least one of the letters A-G
  $("text.abcjs-annotation").each(function (i_annotation, annotation) {
    const annotation_text = $(annotation).find("tspan").text();
    //FINGERING
    //is it text-anchor middle and a number between 1 and 5
    if (
      $(annotation).attr("text-anchor") === "middle" &&
      annotation_text in [1, 2, 3, 4, 5]
    )
      $(annotation).addClass("noteFingering");

    //LETTER NAME
    //is it text-anchor start, has less than 3 characters, and only contains one of the letters A-G?
    if (
      annotation_text?.length <= 3 &&
      annotation_text.match(/[A-G]/g)?.length === 1
    )
      $(annotation).addClass("noteLetterName");
  });

  //APPLY SIDEBAR BUTTON STATES
  if ($("#fingerings_toggle").hasClass("active")) {
    $(".noteFingering").show();
  } else {
    $(".noteFingering").hide();
  }
  if ($("#notenames_toggle").hasClass("active")) {
    $(".noteLetterName").show();
  } else {
    $(".noteLetterName").hide();
  }
  if ($("#highlights_toggle").hasClass("active")) {
    $(".tunes_container").addClass("highlight_notes");
  } else {
    $(".tunes_container").removeClass("highlight_notes");
  }

  //APPLY DEFAULT HIDDEN PARTS
  //trigger change event on default hidden parts of the last score (the ones that were just appended)
  $(".score.last_appended").each(function (score_i, score) {
    const score_id = $(score).attr("id");

    //defaultHiddenParts
    //check defaultHiddenParts attr and trigger click event on each corresponding setting in score
    const hide_parts = $(score)
      .attr("defaultHiddenParts")
      ?.replace(/\s/g, "")
      .split(",");

    if (!hide_parts) return;

    hide_parts.forEach(function (hide_part) {
      const toggler_id = `#${score_id}-toggle-${hide_part}`;
      const toggler = document.querySelector(toggler_id);
      $(toggler).prop("checked", false).trigger("change");
    });
  });

  deferred.resolve();
  return deferred.promise();
}

/** DRAW STAFF
 *
 * @param {elementArray} targetId One of the following: 1. String containing the ID of an element on the page. 2. An HTML element (usually a <div>). 3. An array containing a number of the first two items in this list.
 * @param {object} info can contain the following properties: title, composer, subtitle, voice, key, meter, defaultNoteLength
 * @param {string} notes a string in ABC notation that contains the rest of the tune
 * @param {object} options renderAbc options. See https://paulrosen.github.io/abcjs/visual/render-abc-options.html
 */
function drawStaff(targetId, info, notes, options = {}) {
  let x = info.x || 1;

  //FINGERINGS and LETTER NAMES
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

  let targetEl = document.getElementById(targetId);
  let targetInstrument = $(targetEl).attr("instrument").toLowerCase();

  //Choose which fingering reference based on instrument (and key)
  let fingeringReference;
  switch (targetInstrument) {
    case "violin":
    case "viola":
      fingeringReference = fingerings[targetInstrument];
      break;
    case "cello":
    case "bass":
      fingeringReference = fingerings[targetInstrument][info.key]
        ? fingerings[targetInstrument][info.key]
        : fingerings[targetInstrument]["C"];
      break;
    default:
      console.error("instrument not supported");
      break;
  }
  //replace each note to include it's fingering (skip matches that are inbetween quotes)
  const reg = /([_^=])*([A-Ga-g],*'*)/gm;
  notes = notes.replace(reg, function (
    note,
    accidental,
    noteWithoutAccidental,
    offset
  ) {
    //count quotation marks in contents before the match. If odd, we're in quotes so skip it
    const contents_before = notes.substring(0, offset);
    let num_of_quotes = 0;
    for (const char of contents_before) {
      if (char === '"') num_of_quotes++;
    }
    //at end, if odd, then we're in a quote
    const in_quote = !!(num_of_quotes % 2);

    if (in_quote) return note;

    //check which string the note is on
    // let string;
    // if (note.match(/((?<!_)C,)|([_^=])*([DEF],)|_G,/gm)) string = "C";
    // if (note.match(/((?<!_)G,)|([_^=])*([AB],|C(?!,))|_D(?!,)/gm)) string = "G";
    // if (note.match(/((?<!_)D(?!,))|([_^=])*([EFG](?!,))|_A(?!,)/gm))
    //   string = "D";
    // if (note.match(/((?<!_)A(?!,))|([_^=])*([Bcd](?![,']))|_e/gm)) string = "A";
    // if (note.match(/((?<!_)e(?!'))|([_^=])*([fgab](?![']))/gm)) string = "E";
    // //viola needs to put e on the A string
    // if (targetInstrument === "viola") {
    //   if (note.match(/e/gm)) string = "A";
    // }
    // //bass is different, so check if its bass and redifine string if so
    // if (targetInstrument === "bass") {
    //   if (note.match(/((?<!_)E,)|([_^=])*([FG],)|_A,/gm)) string = "E";
    //   if (note.match(/((?<!_)A,)|([_^=])*(B,|C(?!,))|_D(?!,)/gm)) string = "A";
    //   if (note.match(/((?<!_)D(?!,))|([_^=])*([EF](?!,))|_G(?!,)/gm))
    //     string = "D";
    //   if (note.match(/((?<!_)G(?!,))|([_^=])*([AB](?!,))|_c(?!')/gm))
    //     string = "G";
    // }

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

  //CONSTRUCT STRING
  let abcString = `X:${x}\nT:${info.title}\nK:${info.key}\nM:${info.meter}\nL:${info.defaultNoteLength}\n`;
  if (info.subtitle) abcString += `T:${info.subtitle}\n`;
  if (info.composer) abcString += `C:${info.composer}\n`;
  if (info.voice1) abcString += `V:${info.voice1}\n`;
  if (info.voice2) abcString += `V:${info.voice2}\n`;
  if (info.tempo) abcString += `Q:${info.tempo}\n`;
  abcString += `${notes}\n`;

  //Remove all occurances of the word undefined
  //If an info field is not present in the info object, 'undefined' will show in the string. The ABC parser skips over empty fields so we just need to remove the word 'undefined'.
  abcString = abcString.replace(/undefined/g, "");

  //CONFINGURE OPTIONS
  options.add_classes = options.add_classes || true;
  options.responsive = options.responsive || "resize";
  options.staffwidth = options.staffwidth || 780;
  options.print = options.print || false;
  options.selectionColor = options.selectionColor || "#00ffaa";
  options.clickListener = options.clickListener || clickListener;
  options.wrap = options.wrap || null;

  //RENDER
  abcjs.renderAbc(targetId, abcString, options);

  console.log(
    "renderAbc return val: ",
    abcjs.renderAbc("*", abcString, options),
    "options: ",
    options
  );
  const abcWarnings = abcjs.renderAbc("*", abcString, options)[0].warnings;
  if (abcWarnings)
    $("#tunes_container").append(
      '<p style="color:red; margin-bottom: 1em;">' + abcWarnings + "</p>"
    );

  //Note Click Listener
  function clickListener(
    abcelem,
    tuneNumber,
    classes,
    analysis,
    drag,
    mouseEvent
  ) {
    // const parentTuneElem = analysis.selectableElement.closest(
    //   "div.tune.abcjs-container"
    // );
    // //DESELECT NOTE IF IT'S ALREADY SELECTED
    // //save this note as the last selected note (by saving its analysis.parentClasses.value) to the tune elem
    // //unless it is already the last selected note, in which case empty the attr
    // const last_selected_note = $(parentTuneElem).attr("last_selected_note");
    // let new_last_selected_note =
    //   last_selected_note === analysis.parentClasses.value
    //     ? ""
    //     : analysis.parentClasses.value;
    // $(parentTuneElem).attr("last_selected_note", new_last_selected_note);
    // //if the last_selected_note is empty it means the user clicked the same note again, so we need to deselect that note visually, by removing the abcjs-note_selected class
    // if (last_selected_note === analysis.parentClasses.value)
    //   analysis.selectableElement.classList.remove("abcjs-note_selected");
  }
}

/*_____ABC Notation Notes_____
    PDF Quick Reference
    https://web.archive.org/web/20190214175540/http://www.stephenmerrony.co.uk/uploads/ABCquickRefv0_6.pdf
*/
