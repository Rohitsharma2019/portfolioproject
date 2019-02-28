window.onload = function (){
  //Retrieve the template data from the HTML .
  //var template = $('#handlebars-demo').html();

    var template = JST['templates/sidebar.hbs'];
    var html = template();
    $(document.body).append(template);


    var template2 = JST['templates/footer.hbs'];
    var html2 = template2();
    $(document.body).append(template2);
}
