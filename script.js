function insert_Row() {
    var tb = document.getElementById('sampleTable');
    var gt =  tb.innerHTML;
    tb.innerHTML = "<tr><td>New cell1</td><td>New cell2</td></tr>" + gt;
}
