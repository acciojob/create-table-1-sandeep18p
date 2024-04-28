function insert_Row() {
    var tb = document.getElementById('sampleTable');
    var gt =  tb.innerHTML;
    var cr =  documtnet.createElement('tr');
	cr.innerHtml = <td>New Cell1</td>
	 var cr2 =  documtnet.createElement('tr');
	cr2.innerHtml = <td>New Cell2</td>
    tb.innerHTML = "<tr><td>New Cell1</td><td>New Cell2</td></tr>" + gt;
}
