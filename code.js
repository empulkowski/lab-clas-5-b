$(document).ready(function (){
    $("input").change (Total);
    $("input").change (learningQtyTotal);
    $("input").change (donationQtyTotal);
});




//user Input

//multiply user input of learning jquery by 69.99
//convert to a number


function Total ()
{
    let learningQty=parseFloat($("#learningQty").val());
    let learningTotal=learningQty * 39.99;
    $("#total").text(learningTotal);

    let jqueryDonation=parseFloat($("#jqueryDonation").val());
    let jQueryTotal=jqueryDonation * 14.99;
    $("#itemTotal").text(jQueryTotal);

    let grandTotal= learningTotal + jQueryTotal;
    $("#grandTotal").text(grandTotal.toFixed(2));
}


