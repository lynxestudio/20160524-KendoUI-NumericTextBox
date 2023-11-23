function calculateSubTotal()
          {
            //get controls
            var txtProductQuantity = $("#txtProductQuantity").data("kendoNumericTextBox");
            var txtPrice = $("#txtPrice").data("kendoNumericTextBox");
            var txtSubtotal = $("#txtSubtotal").data("kendoNumericTextBox");
            var subtotal = txtProductQuantity.value() * txtPrice.value();
            txtSubtotal.value(subtotal);
          }
          
          function calculateTaxamount()
          {
            //get controls
            var txtPrice = $("#txtPrice").data("kendoNumericTextBox");
            var txtTax = $("#txtTax").data("kendoNumericTextBox");
            var txtTaxAmount = $("#txtTaxAmount").data("kendoNumericTextBox");
            var txtSubtotal = $("#txtSubtotal").data("kendoNumericTextBox");
            var txtTotal = $("#txtTotal").data("kendoNumericTextBox");
            
            var taxAmount = txtSubtotal.value() * (txtTax.value() * 1/100);
            console.debug('txtTax ' + txtTax.value());
            txtTaxAmount.value(taxAmount);
            var total = txtSubtotal.value() + txtTaxAmount.value();
            txtTotal.value(total);
              
          }
        
          
          $(document).ready(function()
            {
              kendo.culture("en-US");
              kendo.toString();
              //Numeric
              $("#txtProductQuantity").kendoNumericTextBox(
              {
                format: "n0",
                change: calculateSubTotal
              });
              //decimal
              $("#txtPrice").kendoNumericTextBox(
              {
                format: "c",
                change: calculateSubTotal
              });
              //percent
              $("#txtTax").kendoNumericTextBox(
              {
                format: "# \\%",
                change: calculateTaxamount
              });
              //money, readonly
              var txtSubtotal = $("#txtSubtotal").kendoNumericTextBox(
              {
                format: "c",
                spinners: false
              }).data("kendoNumericTextBox");
              txtSubtotal.readonly();
              var txtTaxAmount = $("#txtTaxAmount").kendoNumericTextBox(
              {
                format: "c",
                spinners: false
              }).data("kendoNumericTextBox");
              txtTaxAmount.readonly();
              var txtTotal = $("#txtTotal").kendoNumericTextBox(
              {
                format: "c",
                spinners: false
              }).data("kendoNumericTextBox");
              txtTotal.readonly();
            });