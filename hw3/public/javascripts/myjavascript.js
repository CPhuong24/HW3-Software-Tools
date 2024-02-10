eventHandler = function (event) {
    $(document).ready(function () {
        
        var containsVegan = false;

        document.getElementById("writeNote").onkeyup = function () {

            var textValue = document.getElementById("writeNote").value;

            if (textValue.includes("vegan") === true) {
                alert("Cheesecake contains dairy and is not vegan");
                containsVegan = true;
            }
            else {
                containsVegan = false;
            }

        }

        $("#orderButton").click(function () {

            if (containsVegan === true) {
                alert("You specified \"vegan\" but cheesecake is not vegan :(");
            }
            else {
                var text = document.getElementById("writeNote").value;

                document.getElementById("orderSection").innerHTML = "";
                document.getElementById("orderForm").innerHTML = "Thank you! Your order has been placed <br> Notes: <br>" + text;
                
            }

        })

    });
}