//Contact
$('#working_form').submit(function () {
  var action = $(this).attr('action')

  $("#message").slideUp(750, function () {
    $('#message').hide()

    $('#submit')
      .before('<img src="" class="gif_loader" />')
      .attr('disabled', 'disabled')

    $.ajax({
      url: action,
      type: "POST",
      crossDomain: true,
      data: JSON.stringify({
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        subject: $('#subject').val(),
        comments: $('#comments').val(),
        "g-recaptcha-response": $('#g-recaptcha-response').val()
      }),
      dataType: 'html',
      contentType: "application/json",
      success: function (data, textStatus) {
        document.getElementById('message').innerHTML = data
        $('#message').slideDown('slow')
        $('#cform img.gif_loader').fadeOut('slow', function () {
          $(this).remove()
        })
        $('#submit').removeAttr('disabled')
        if (data.match('success') != null) $('#cform').slideUp('slow')
      }
    })
  })
  return false
})
