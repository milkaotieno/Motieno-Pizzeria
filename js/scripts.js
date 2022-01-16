// $(document).ready(function () {

    function data() {
        var size = parseFloat(document.querySelector('input[name="size"]:checked').value);
        var crust = parseFloat(document.querySelector('input[name="crust"]:checked').value);
        var toppings = parseFloat(document.querySelector('input[name="topping"]:checked').value);
        var mode = parseInt(document.getElementById("mode").value);
        var name = document.getElementById("name").value
        var total = size + crust + toppings;
    
        if (name === "") {
            alert("Kindly provide your name")
        } else {
            if (mode === 1) {
                alert("Thank you for shopping with us " + name + " . The total cost of your purchase is Kshs. " + total)
            } else {
                var deliveryCost = total + 250;
                alert("Thank you for shopping with us " + name  + " . The total cost of your purchase is Kshs. " + total +  "You have been charged an additional Kshs. 250 as delivery fee. Your total charge will be Kshs. " + deliveryCost + " shillings")
            }
        }
    }