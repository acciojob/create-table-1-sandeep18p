function insert_Row() {
    var tb = document.getElementById('sampleTable');
    var gt =  tb.innerHTML;
    tb.innerHTML = "<tr><td>New Cell1</td><td>New Cell2</td></tr>" + gt;
}
