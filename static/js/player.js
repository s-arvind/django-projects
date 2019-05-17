//ADD YOUR CODE HERE.

buttonClicked = (guides)=>{
    steps = guides['steps'];
    $('#id_'+steps[0]['id']).removeClass('makeHidden');
    $('#text_'+steps[0]['id']).html(content);
    $('#gls_button').hide();
    for (i=0; i<steps.length; i++){
        var elem = document.getElementById('btn_'+steps[i]['id']);
        var currentId = steps[i]["id"];
        var nextID = steps[i]["next"];
        var content = steps[i]["content"]
        if (nextID) {
            elem.innerHTML = `<button class="btn btn-primary" onclick="showNext(` + nextID + `,` + currentId + `,'` + content +`')">Next</button>`
        }
        else {
            elem.innerHTML = `<button class="btn btn-primary" onclick="showNext(` + nextID + `,` + currentId + `,'` + content +`')">Close</button>`
        }
    }
};

showNext = (nextID, currentId, content)=>{

    $('#id_'+currentId).addClass('makeHidden');
    if (nextID == null){
        $('#gls_button').show();
    }else{
        $('#id_'+nextID).removeClass('makeHidden');
        $('#text_'+currentId).html(content);
    }
};