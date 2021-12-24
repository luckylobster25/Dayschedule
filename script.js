
setInterval(function(){
    var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentDay)
},1000)
// this is displaying the current day on the web. 

for (var i = 0; i < 9; i++){
    containerEl = $('.container');
    sectionEl = $('<section>');
    sectionEl.attr('class','row');
    timeblockEl = $('<label>'+ (i+9) + '<br>'+ ("am") + '</label>');
    timeblockEl.attr('name',9 + i + "am")
        if (i > 2){
            timeblockEl.attr('name', 9 + i + "pm");
            // this code will change the loop from writing am to pm instead.
            timeblockEl = $('<label>'+ (i+9) + '<br>'+ ("pm") + '</label>');
            if (i > 3){
                timeblockEl.attr('name', i - 3 + "pm");
                timeblockEl = $('<label>'+ (i-3) + '<br>'+ ("pm") + '</label>');
                // this code will change the once it pass 12pm. It is reset back to 1.
            }
        }
    timeblockEl.attr('class', 'hour');
    textAreaEl = $('<textarea>');
    textAreaEl.attr('data-index', i);
    textAreaEl.attr('class', 'future');
    textAreaEl.attr('cols', '80%');
    saveBtnEl = $('<button>SAVE</button>');
    saveBtnEl.attr('class', 'saveBtn');
    containerEl.append(sectionEl);
    sectionEl.append(timeblockEl);
    sectionEl.append(textAreaEl);
    sectionEl.append(saveBtnEl);
}

