var party_size = 0;
var total_bill = 0;
var person = {};
var people = [];
var person_obj = '<div class = "Person">Person ##:  Name: <input id = "name##" type = "text"> Amount: $<input id = "amount" type = "text" onchange="display_person_total()"><span id = "total"></span></div>';

function get_party_size() {
    var data = $("#party_size").val();
    party_size = data; 
    display_data();
}

function display_data(){
    var message = "Party size: " + party_size + " People";
    create_people(party_size);
    $("#display").find("#party").empty().append(message);
}

function create_people(num_people){
    var msg = "";
    for (i = 1; i < Number(num_people) + 1; i++){
        person_html = person_obj.replace(/##/g, i);
        msg += person_html;
    }
    $("#people").empty().append(msg);
}

function display_person_total(){
    total_bill = 0;
    $('.Person').each(function() {
        individ_amount = parseFloat($(this).find("#amount").val());
        if (isNaN(individ_amount)) {
            individ_amount = 0;
        }
        total_bill += individ_amount;
        $(this).find("#total").empty().append(" Total: $" + individ_amount);
    });
    $("#display").find("#bill").empty().append(" Total Bill: $" + total_bill);
}
