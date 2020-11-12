var doc = new jsPDF();
var elementHTML = $('#content').html();
var specialElementHandlers = {
    '#elementH': function (element, renderer) {
        return true;
    }
};
doc.fromHTML(elementHTML, 0, 0, {
    'width': 210,
    'elementHandlers': specialElementHandlers
});
console.log(elementHTML);

doc.save('Test.pdf');