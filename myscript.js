var party_size = 0;


function get_party_size() {
    var data = $("#party_size").val();
    party_size = data; 
}

function display_data(){
    var message = "Party size: " + party_size + " People";
    $("#display").empty().append(message);
}
