$(function() {
    var toastHTML = '<span>Message Sent</span><button onclick="M.Toast.dismissAll()" class="btn-icon waves-effect toast-action"><i class="material-icons">close</i></button>';
    $.validate({
        form: "#contact_form",
        onSuccess: function(form) {
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var company = $("input#company").val();
            var message = $("textarea#message").val();

            $.ajax({
                url: "mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    company: company,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Enable button & show success message
                    $("#contact_form button").attr("disabled", false);
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contact_form').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + name + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contact_form').trigger("reset");
                },
            });

            return false;
        }
    });    
});
