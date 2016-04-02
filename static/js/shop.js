$(document).ready(function(){

    //Initial Variables
    var total_cost = 0.00;
    var cart = []

    //Add a product to the cart
    $(".add-to-cart").click(function(){

        //Hide cart alert
        $("#alert-cart-empty").hide();

        //Get the product Variables
        var price = $(this).parent().find(".price").text();
        total_cost = total_cost + parseFloat(price);
        $("#total-cost").text(total_cost.formatMoney(2));

        var itemSrc = $(this).parent().find('.product-picture').attr("src");
        var itemTitle = $(this).parent().find('.caption').find('h3').html();
        var itemPrice = $(this).parent().find('.caption').find('.money').html();

        //Create the DOM item and fade it in
        var item = $('<div class="item"><img width="80px" src="' + itemSrc + '"><strong>' + itemTitle + '</strong><br><span class="price">' + itemPrice + '</span><br>qty <span class="qty">1</span><a class="delete"><i class="fa fa-times"></i></a></div>');
        item.prependTo($("#cart")).hide().fadeIn(500);
    });


    //Delete from cart
    $("#cart").on('click', '.delete', function() {

      //hide x button
      $(this).hide();

      //Remove the item
      var price = $(this).parent().find(".price").text();
      total_cost = total_cost - parseFloat(price);
      $("#total-cost").text(total_cost.formatMoney(2));
      $(this).parent(".item").fadeOut(300, function(){ $(this).remove();});
    });
});

//DOLLAR FORMATTING
Number.prototype.formatMoney = function(c, d, t){
var n = this,
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };
