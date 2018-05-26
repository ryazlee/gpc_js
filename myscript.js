var party_size = 0;
var person = {};
var people = [];
var person_obj = '<div class = "Person">Person ##:  Name: <input id = "name##" type = "text"> Amount: <input id = "amount" type = "text" onchange="calculate_total()"></div>';

function get_party_size() {
    var data = $("#party_size").val();
    party_size = data; 
    display_data();
}

function display_data(){
    var message = "Party size: " + party_size + " People";
    create_people(party_size);
    $("#display").empty().append(message);
}

function create_people(num_people){
    var msg = "";
    for (i = 1; i < Number(num_people) + 1; i++){
        person_html = person_obj.replace(/##/g, i);
        msg += person_html;
    }
    $("#people").empty().append(msg);
}

function calculate_total(){
    $('.Person').each(function() {
        $(this).find("amount").empty().append("HELLO");
    });
}
