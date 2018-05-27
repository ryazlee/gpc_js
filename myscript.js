var party_size = 0;
var paying_people = 0;
var total_bill = 0;
var bill_tax = 0;
var bill_tip = 0;
var person_obj = '<div style = "float:left; width:100%" class = "Person">Person ##: <span id = "total"></span></br><div style = "display:inline; float: left">Name: <input id = "name" type = "text" onchange="display_person_total()"></div> <div style = "display:inline">Amount: $<input id = "amount" type = "text" onchange="display_person_total()"></div></div>';

function get_party_size() {
    var size = parseInt($("#party_size").val());
    if (isNaN(size)){
        size = 0;
    }
    party_size = size; 
    create_people(party_size);
    display_data();
}

function get_tax_amount(){
    var tax = parseFloat($("#tax_amount").val()).toFixed(2);
    if (isNaN(tax)){
        tax = 0;
    }
    bill_tax = tax/100; 
    display_data();
}

function get_tip_amount(){
    var tip = parseFloat($("#tip_amount").val()).toFixed(2);
    if (isNaN(tip)){
        tip = 0;
    }
    bill_tip = tip/100; 
    display_data();
}

function display_data(){
    display_person_total();
    $("#display").find("#people").empty();
    $("#display").find("#party").empty().append(party_size + " People");
    $("#display").find("#tip").empty().append("Tip: " + bill_tip*100 + "%");
    $("#display").find("#tax").empty().append("Tax: " + bill_tax*100 + "%");
    display_summary(); 
}

function display_summary(){
    $("#display").find("#people").empty();
    $('.Person').each(function(){
        individ_name = $(this).find("#name").val();
        individ_total = $(this).find("#total").html().slice(7); 
        if ($(this).find("#amount").val() != 0) {
            $("#display").find("#people").append(individ_name + ": " + individ_total + "</br>");
        }
    });

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
    paying_people = 0;
    $('.Person').each(function(){
        individ_amount = parseFloat($(this).find("#amount").val()); 
        if (isNaN(individ_amount)) {
            individ_amount = 0;
        }
        if (individ_amount != 0){
            paying_people += 1;
        }
        total_bill += individ_amount;

    });
    $('.Person').each(function() {
        individ_amount = parseFloat($(this).find("#amount").val());
        if (isNaN(individ_amount)) {
            individ_amount = 0;
        }
        if (total_bill != 0 && individ_amount != 0){
            individ_tax = total_bill * (bill_tax * individ_amount/total_bill);
            individ_tip = total_bill * (bill_tip / paying_people);
            individ_amount += individ_tip + individ_tax;
        }
        $(this).find("#total").empty().append(" Total: $" + individ_amount.toFixed(2));
    });
    total_bill = total_bill * (1 + bill_tip + bill_tax);
    $("#display").find("#bill").empty().append(" Total: $" + total_bill.toFixed(2));
    display_summary();
}

function clear_data(){
    $("input:text").val("");
    get_party_size();
    get_tax_amount();
    get_tip_amount();
    display_data();
}
