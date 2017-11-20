$(function () {
//alert('te');
var m= 5;
var n=5;


function generateboard(m,n) {
      var container= $('#container');
      var table=$('#table');
        var board = '';

       for (var i= 0; i < m; i++){ // wiersze
           board += '<tr>';
           for (var z=0; z<n; z++){ // kolumny
               board += '<td>s</td>';

           }
           board += '</tr>';
       }
       table.html(board);

    console.log(board);


    }
    generateboard(m,n);
});