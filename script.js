function insert_Row() {
    var tb = document.getElementById('sampleTable');
    var gt = tb.innerHTML;
    
    var cr = document.createElement('tr');
    var cr2 = document.createElement('tr');

    var cell1 = document.createElement('td');
    cell1.innerHTML = 'New Cell1';

    var cell2 = document.createElement('td');
    cell2.innerHTML = 'New Cell2';

    cr.appendChild(cell1);
    cr2.appendChild(cell2);

    tb.insertBefore(cr2, tb.firstChild);
    tb.insertBefore(cr, tb.firstChild);
}
