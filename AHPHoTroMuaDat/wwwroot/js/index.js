// ##############   Xử giao diện chọn ở bước đầu tiên
$(document).ready(function () {
    $('button#btncontinue').prop('disabled', true);
  });
  // Khi thẻ select thay đổi
  $(document).on('change', '#select-options select#select_value', function () {
    const numberOfSelectedValues = $('#select-options select#select_value').val().length;
    const numinputchecked = $('input[id*=count]:checked').length;
    if ((numberOfSelectedValues > 1 && numberOfSelectedValues < 16) && (numinputchecked > 1 && numinputchecked < 16)) {
      $('button#btncontinue').prop('disabled', false);
    } else {
      $('button#btncontinue').prop('disabled', true);
    }
  });
  // khi input thay đổi
  $(document).on('change', 'input[id*=count]', function () {
    var count = 0;
    $("input[id*=count]").each(function () {
      if ($(this).is(':checked')) {
        count++;
      } else {
        // unchecked
      }
    });
    //
    const numberOfSelectedValues = $('#select-options select#select_value').val().length;
    if (count < 16) {
      if (count > 1) {
        if (numberOfSelectedValues > 1 && numberOfSelectedValues < 16) {
          $('button#btncontinue').prop('disabled', false);
        }
      } else {
        $('button#btncontinue').prop('disabled', true);
      }
    } else {
      $(this).prop('checked', false);
      alert('Chỉ được chọn tối đa 15 lựa chọn')
    }
  });
  // click nút continue
  $(document).on('click', 'button#btncontinue', function () {
    document.querySelector('#section2').scrollIntoView({ behavior: 'smooth' });
    selectChangeValueToAddTableTC();
    addTableOfPA(); 
    showChart();
  });
  var arrColors = [
    '#2196F3', // Blue
    '#4CAF50', // Green
    '#FFC107', // Yellow
    '#FF5722', // Orange
    '#9C27B0', // Purple
    '#E91E63', // Pink
    '#00BCD4', // Cyan
    '#FF9800', // Amber
    '#8BC34A', // Light Green
    '#673AB7', // Deep Purple
    '#FFEB3B', // Yellow
    '#CDDC39', // Lime Green
    '#03A9F4', // Light Blue
    '#FF4081', // Pink
    '#795548', // Brown
  ];
// ######### SHow chart
function showChart()
{
    const footer = (tooltipItems) => {
        let sum = 0;
    
        tooltipItems.forEach(function (tooltipItem) {
            sum += tooltipItem.parsed.y;
        });
        return 'Tổng: 100';
    };
    var arrLabels = [];
    var arrCW = [];
    var arrColorss = [];
    var count = $('table#comparison-table > thead > tr > th').length;
    count--; 
    var countColor = 0;
    $('table#comparison-table > thead > tr > th').each(function(i) {
      var text = $(this).text(); 
      if(text !== '' && text !== null)
      {
        arrLabels.push(text); 
        arrColorss.push(arrColors[countColor]);
        arrCW.push(((1/count)*100).toFixed(2));
        countColor++;
      }
    });
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrLabels,
            datasets: [{
                label: 'Trọng số',
                backgroundColor: arrColorss,
                borderColor: 'rgba(0, 123, 255, 1)',
                data: arrCW
            }]
        },
        options: {
            scales: {
                /*x: {
                    ticks: {
                        maxRotation: 90,
                        minRotation: 90
                    } 
                },*/
            y: {
              max: 100,
              beginAtZero: true,
              ticks: {
                precision: 2 // Đặt số thập phân tối đa là 2
                  }
            }
          },
            plugins: {
                title: {
                    display: true,
                    text: 'Trọng số của các tiêu chí',
                },
                tooltip: {
                    callbacks: {
                        footer: footer,
                    }
                }
            }
        }
    });
}

function showChartPA(id)
{
    const footer = (tooltipItems) => {
        let sum = 0;
    
        tooltipItems.forEach(function (tooltipItem) {
            sum += tooltipItem.parsed.y;
        });
        return 'Tổng: 100';
    };
    var arrLabels = [];
    var arrCW = [];
    var arrColorss = [];
    var count = $('table#'+id+' > thead > tr > th').length;
    count--; 
    var countColor = 0;
    $('table#'+id+' > thead > tr > th').each(function(i) {
      var text = $(this).text(); 
      if(text !== '' && text !== null)
      {
        arrLabels.push(text); 
        arrColorss.push(arrColors[countColor]);
        arrCW.push(((1/count)*100).toFixed(2));
        countColor++;
      }
    });
    var ctx = document.getElementById('myChart'+id).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrLabels,
            datasets: [{
                label: 'Trọng số',
                backgroundColor: arrColorss,
                borderColor: 'rgba(0, 123, 255, 1)',
                data: arrCW
            }]
        },
        options: {
            scales: {
                /*x: {
                     ticks: {
                         maxRotation: 90,
                         minRotation: 90
                     } 
                 },*/
            y: {
              max: 100,
              beginAtZero: true,
              ticks: {
                precision: 2 // Đặt số thập phân tối đa là 2
              }
            }
          },
            plugins: {
                title: {
                    display: true,
                    text: 'Trọng số của phương án theo tiêu chí',
                },
                tooltip: {
                    callbacks: {
                        footer: footer,
                    }
                }
            }
        }
    });
}




  /// ###### Tiêu chí
  $(document).on('focus','table#comparison-table > tbody > tr > td > input', function () {
      $(this).val();
  });
  $(document).on('input', 'table#comparison-table > tbody > tr > td > input', function () {
    var row = $(this).attr('data-row');
    var col = $(this).attr('data-col');
    if(String($(this).val()) != "")
    {
      if(!isNaN(Number($(this).val())))
      {
        var value = parseFloat(eval($(this).val()));
        if (value > 0 && value < 10) {
         // Nếu bằng 1 thì
          if(value == 1)
          {
            $('table#comparison-table > tbody > tr > td > input[data-row=' + col + '][data-col=' + row + ']').val(1);
          }else{
            $('table#comparison-table > tbody > tr > td > input[data-row=' + col + '][data-col=' + row + ']').val('1/'+value);
          }
        } else {
          $(this).val('');
          $('table#comparison-table > tbody > tr > td > input[data-row=' + col + '][data-col=' + row + ']').val('1');
          $(this).focus();
          alert("Mức độ ưu tiên có giá trị từ 1/9 - 9\nVui lòng nhập giá trị phù hợp\nVới các giá trị nhỏ hơn 1 vui lòng nhập dạng số thập phân.");
        }
      }else{
        $(this).val('');
        $('table#comparison-table > tbody > tr > td > input[data-row=' + col + '][data-col=' + row + ']').val('1');
      }
    }else{
      $(this).val('1');
        $('table#comparison-table > tbody > tr > td > input[data-row=' + col + '][data-col=' + row + ']').val('1');
    }
  });
  // Hiệu ứng tiêu chí
  $(document).on('focus', 'table#comparison-table > tbody > tr > td > input', function () {
    var row = $(this).attr('data-row');
    var col = $(this).attr('data-col');
    $(this).addClass('bg-info text-light');
    $('table#comparison-table > tbody > tr > td > input[data-row=' + col + '][data-col=' + row + ']').addClass('bg-info text-light');
  });
  $(document).on('focusout', 'table#comparison-table > tbody > tr > td > input', function () {
    var row = $(this).attr('data-row');
    var col = $(this).attr('data-col');
    $(this).removeClass('bg-info text-light');
    $('table#comparison-table > tbody > tr > td > input[data-row=' + col + '][data-col=' + row + ']').removeClass('bg-info text-light');
  });

  //  #####################################
  // ###### Phương án
  $(document).on('input', 'table[id*=opt] > tbody > tr > td > input', function () {
    var id = $(this).attr('id');
    var row = $(this).attr('data-row');
    var col = $(this).attr('data-col');
    if(String($(this).val()) != "")
    {
      if(!isNaN(Number($(this).val())))
      {
        var value = parseFloat(eval($(this).val()));
        if (value >= 0 && value < 10) {
          // Nếu bằng 1 thì
          if(value == 1)
          {
            $('table#'+id+' > tbody > tr > td > input[id='+id+'][data-row=' + col + '][data-col=' + row + ']').val(1);
          }else{
            $('table#'+id+' > tbody > tr > td > input[id='+id+'][data-row=' + col + '][data-col=' + row + ']').val('1/'+value);
          }
        } else {
          $(this).val('1');
          $('table#'+id+' > tbody > tr > td > input[id='+id+'][data-row=' + col + '][data-col=' + row + ']').val('1');
          $(this).focus();
          alert("Mức độ ưu tiên có giá trị từ 1/9 - 9\nVui lòng nhập giá trị phù hợp\nVới các giá trị nhỏ hơn 1 vui lòng nhập dạng số thập phân.");
        }
      }else{
        $(this).val('1');
        $('table#'+id+' > tbody > tr > td > input[id='+id+'][data-row=' + col + '][data-col=' + row + ']').val('1');
      }
    }else{
      $(this).val('1');
      $('table#'+id+' > tbody > tr > td > input[id='+id+'][data-row=' + col + '][data-col=' + row + ']').val('1');
    }
  });
  // Hiệu ứng phương án
  $(document).on('focus', 'table[id*=opt] > tbody > tr > td > input', function () {
    var id = $(this).attr('id');
    var row = $(this).attr('data-row');
    var col = $(this).attr('data-col');
    $(this).addClass('bg-info text-light');
    $('table#'+id+' > tbody > tr > td > input[id='+id+'][data-row=' + col + '][data-col=' + row + ']').addClass('bg-info text-light');
  });
  $(document).on('focusout', 'table[id*=opt] > tbody > tr > td > input', function () {
    var id = $(this).attr('id');
    var row = $(this).attr('data-row');
    var col = $(this).attr('data-col');
    $(this).removeClass('bg-info text-light');
    $('table#'+id+' > tbody > tr > td > input[id='+id+'][data-row=' + col + '][data-col=' + row + ']').removeClass('bg-info text-light');
  });

  //
  const selectEl = document.querySelector('#select-options select');
  const tableBodyEl = document.querySelector('#comparison-table tbody');
  const tableHeadEl = document.querySelector('#comparison-table thead');
  // ####### Hàm lấy các tiêu chí đã chọn  từ select
  function selectChangeValueToAddTableTC()
  {
    var count = 0;
    const selectedOptions = Array.from(selectEl.selectedOptions).map(option => option.getAttribute('data-content'));
    //
    tableHeadEl.innerHTML = '';
    tableBodyEl.innerHTML = '';

    const headRow = document.createElement('tr');
    const headCell1 = document.createElement('th');
    // cell đầu tiên trong thead 
    headCell1.textContent = "";
    headRow.appendChild(headCell1);
    selectedOptions.forEach(option => {
      const headCell = document.createElement('th');
      // cell tiêps theo theo option lựa chọn trong thead 
      for (let i = 0; i < selectedOptions.length; i++) {
        headCell.textContent = option;
        headRow.appendChild(headCell);
      }
      tableHeadEl.appendChild(headRow);
      //
      const row = document.createElement('tr');
      const cell = document.createElement('td');
      cell.textContent = option;
      row.appendChild(cell);
      for (let i = 0; i < selectedOptions.length; i++) {
        //
        const inputCell = document.createElement('td');
        const inputEl = document.createElement('input');
        inputEl.className = 'text-center'
        inputEl.type = 'text';
        inputEl.setAttribute('id','comparison-table');
        //
        inputEl.setAttribute('data-row', count);
        inputEl.setAttribute('data-col', i);
        //
        inputEl.classList.add('form-control');
        if ((i) == count) {
          inputEl.readOnly = true;
        }
        inputEl.setAttribute("value", 1);
        inputCell.appendChild(inputEl);
        row.appendChild(inputCell);
      }
      count++;
      //
      tableBodyEl.appendChild(row);
    });
  }
  // ####### Hàm thêm các PA được tích chọn vào table
  function addTableOfPA()
  {
    var divroot = $('div#pairwise-options');
    divroot.empty();
    $('select#select_value option:selected').each(function() {
      // Code xử lý với từng phần tử được chọn ở đây
      var id = $(this).attr('id');
      var div = '<div class="modal fade" id='+id+"modal"+' tabindex="-1" role="dialog" data-backdrop="static"'
    +'aria-labelledby="comparisonModalLabel" aria-hidden="true">'
    +'<div class="modal-dialog" role="document">'
    +'<div class="modal-content">'
    +'  <div class="modal-header">'
    +'    <h5 class="modal-title text-center" id="comparisonModalLabel">Tùy chỉnh mức độ ưu tiên cho cặp phương án</h5>'
    +'    <button type="button" class="close" data-dismiss="modal" aria-label="Close">'
    +'      <span aria-hidden="true">&times;</span>'
    +'    </button>'
    +'  </div>'
    +'  <div class="modal-body">'
    +'    <div class="slider-container">'
    +'      <div class="row mb-2">'
    +'        <div class="col-2">'
    +'          <span id="'+id+'A">1</span>'
    +'        </div>'
    +'        <div class="col-8">'
    +'          <input type="range" min="-8" max="8" value="0" class="slider" id="'+id+'sliderr">'
    +'        </div>'
    +'        <div class="col-2 float-right">'
    +'          <span id="'+id+'B" style="float: right;">1</span>'
    +'        </div>'
    +'        <div class="col-6 mt-4">'
    +'          <h6 id="'+id+'textA">Nhà cấp 4</h6>'
    +'        </div>'
    +'        <div class="col-6 mt-4">'
    +'          <h6 id="'+id+'textB" class="float-right">Nhà lá</h6>'
    +'        </div>'
    +'      </div>'
    +'    </div>'
    +'  </div>'
    +'</div>'
    +'</div>'
    +'</div>';

    var divcanvas = '<div class="col-6">'+'<canvas id="myChart'+id+'" style="height: 100% !important;"></canvas>'+'</div>';
    // 
      var tagh6 = $('<h6 class="col-12" id='+id+'>'+$(this).attr('data-content')+'</h6>')
      // add table
      var table= $('<table id="'+id+'" class="table table-active mt-3 col-6"></table>')
      var tableBodyEl1 = $('<tbody></tbody>');
      var tableHeadEl1 = $('<thead></thead>');
      var count = 0;
      var selectedValues = $('input[id*=count][type=checkbox]:checked').map(function() {
        var id = $(this).attr('id');
        var text = $('p#'+id).text();
        return text;
      }).get();
      //
      tableHeadEl1.innerHTML = '';
      tableBodyEl1.innerHTML = '';
      var headRow1 = document.createElement('tr');
      var headCell0 = document.createElement('th');
      // cell đầu tiên trong thead 
      headCell0.textContent = "";
      headRow1.appendChild(headCell0);
      selectedValues.forEach(option => {
        var headCell1 = document.createElement('th');
        // cell tiêps theo theo option lựa chọn trong thead 
        for (let i = 0; i < selectedValues.length; i++) {
          headCell1.textContent = option;
          headRow1.appendChild(headCell1);
        }
        tableHeadEl1.append(headRow1);
        //
        var row1= document.createElement('tr');
        var cell1 = document.createElement('td');
        cell1.textContent = option;
        row1.appendChild(cell1);
        for (let i = 0; i < selectedValues.length; i++) {
          //
          var inputCell1 = document.createElement('td');
          var inputEl1 = document.createElement('input');
          inputEl1.className = 'text-center';
          inputEl1.type = 'text';
          inputEl1.setAttribute('id',id);
          //
          inputEl1.setAttribute('data-row', count);
          inputEl1.setAttribute('data-col', i);
          //
          inputEl1.classList.add('form-control');
          if ((i) == count) {
            inputEl1.readOnly = true;
          }
          inputEl1.setAttribute("value", 1);
          inputCell1.appendChild(inputEl1);
          row1.appendChild(inputCell1);
        }
        count++;
        //
        tableBodyEl1.append(row1);
        table.append(tableHeadEl1);
        table.append(tableBodyEl1);
      });
      divroot.append(tagh6);
      divroot.append(table);
      divroot.append(divcanvas);
      divroot.append(div);
      showChartPA(id);
    });
  }
  // ######## Hiển thị phần tử có ID là "section2"
  $('button#btncontinue').click(function () {
    // Hiển thị phần tử có ID là "section2"
    $('#section2').show();
    // Cuộn trang đến phần tử có ID là "section2"
    $('html, body').animate({
      scrollTop: $('#section2').offset().top
    }, 800);
  });

  // ############# Xử lý sự kiện khi dữ liệu ô input thay đổi
  $(document).on('input','input#comparison-table',function(){
    var arr = getDataToArrayTC();
    console.log(arr);
    console.log("---- ARR ----")
    var devidedtotal = CalcForDivideTotal();
    console.log(devidedtotal);
    console.log("----  ----")
    var CW = CalcCriteriaWeight(devidedtotal);
    console.log(CW);
    console.log("---- CW ----")
    var CR = CalcTheConsistencyRate(arr,CW);
    console.log(CR);
    console.log("---- CR ----")
    var WS = calcWeightedSum(CR);
    console.log(WS);
    console.log("---- WS ----")
    var CV = CalcConsistencyVector(WS,CW);
    console.log(CV);
    console.log("---- CV ----")
    var CI = CalcCI(CV)
    console.log(CI);
    console.log("---- CI ----")
    console.log("----------------------------------")
    var CR = 0;
    switch(arr[0].length)
    {
      case 1: CR = (CI/0);$('h6#cr').text('Consistency Ratio = '+CR.toFixed(5)); break;
        case 2:CR = (CI/0);$('h6#cr').text('Consistency Ratio = '+CR.toFixed(5)); break;
          case 3:CR = (CI/0.58);$('h6#cr').text('Consistency Ratio = '+CR.toFixed(5)); break;
            case 4:CR = (CI/0.9);$('h6#cr').text('Consistency Ratio = '+CR.toFixed(5)); break;
              case 5:CR = (CI/0.12);$('h6#cr').text('Consistency Ratio = '+CR.toFixed(5)); break;
                case 6:CR = (CI/0.24);$('h6#cr').text('Consistency Ratio = '+CR.toFixed(5)); break;
                  case 7:CR = (CI/0.32);$('h6#cr').text('Consistency Ratio = '+CR.toFixed(5)); break;
                    case 8:CR = (CI/0.41);$('h6#cr').text('Consistency Ratio = '+CR.toFixed(5)); break;
                      
    }
    if(CR <= 0.1 && CR>=0)
                    {
                      $('h6#cr').addClass('text-success').removeClass('text-danger');
                    }else{
                      $('h6#cr').addClass('text-danger').removeClass('text-success');
                    }
  });

  // Xử lý tính toán khi nhấn nút tính toán
  $(document).on('click','button#calculate-btn',function(){
    var arr = getDataToArrayTC();
    console.log(arr);
    console.log("---- ARR ----")
    var devidedtotal = CalcForDivideTotal();
    console.log(devidedtotal);
    console.log("----  ----")
    var CW = CalcCriteriaWeight(devidedtotal);
    console.log(CW);
    console.log("---- CW ----")
    var CR = CalcTheConsistencyRate(arr,CW);
    console.log(CR);
    console.log("---- CR ----")
    var WS = calcWeightedSum(CR);
    console.log(WS);
    console.log("---- WS ----")
    var CV = CalcConsistencyVector(WS,CW);
    console.log(CV);
    console.log("---- CV ----")
    var CI = CalcCI(CV)
    console.log(CI);
    console.log("---- CI ----")
    console.log("----------------------------------")
    var CR = 0;
    switch(arr[0].length)
    {
      case 1: CR = (CI/0);$('h6#cr').text('Consistency Ratio = '+CR.toFixed(5)); break;
        case 2:CR = (CI/0);$('h6#cr').text('Consistency Ratio = '+CR.toFixed(5)); break;
          case 3:CR = (CI/0.58);$('h6#cr').text('Consistency Ratio = '+CR.toFixed(5)); break;
            case 4:CR = (CI/0.9);$('h6#cr').text('Consistency Ratio = '+CR.toFixed(5)); break;
              case 5:CR = (CI/0.12);$('h6#cr').text('Consistency Ratio = '+CR.toFixed(5)); break;
                case 6:CR = (CI/0.24);$('h6#cr').text('Consistency Ratio = '+CR.toFixed(5)); break;
                  case 7:CR = (CI/0.32);$('h6#cr').text('Consistency Ratio = '+CR.toFixed(5)); break;
                    case 8:CR = (CI/0.41);$('h6#cr').text('Consistency Ratio = '+CR.toFixed(5)); break;     
    }
    if(CR <= 0.1)
                    {
                      $('h6#cr').addClass('text-success').removeClass('text-danger');
                    }else{
                      $('h6#cr').addClass('text-danger').removeClass('text-success');
                    }
                    executeArrayTable();
});

  function executeArrayTable()
  {
    $('table[id*=otp]').each(function(){
      console.log('--------------------- PA'+id+' -----------------------');
      var id = $(this).attr('id');
      var arr = getDataToArrayOfPA(id);
      console.log(arr);
      console.log("---- ARR ----")
      var devidedtotal = CalcForDivideTotalOfPA(id);
      console.log(devidedtotal);
      console.log("----  ----")
      var CW = CalcCriteriaWeight(devidedtotal);
      console.log(CW);
      console.log("---- CW ----")
      var CR = CalcTheConsistencyRate(arr,CW);
      console.log(CR);
      console.log("---- CR ----")
      var WS = calcWeightedSum(CR);
      console.log(WS);
      console.log("---- WS ----")
      var CV = CalcConsistencyVector(WS,CW);
      console.log(CV);
      console.log("---- CV ----")
      var CI = CalcCI(CV)
      console.log(CI);
      console.log("---- CI ----")
      console.log("----------------------------------")
      var CR = 0;
      switch(arr[0].length)
      {
        case 1: CR = (CI/0);break;
          case 2:CR = (CI/0);break;
            case 3:CR = (CI/0.58);break;
              case 4:CR = (CI/0.9);break;
                case 5:CR = (CI/0.12);break;
                  case 6:CR = (CI/0.24);break;
                    case 7:CR = (CI/0.32);break;
                      case 8:CR = (CI/0.41);break;
                        
      }
      console.log(CR);
});
  }


  function getDataToArrayTC()
  {
    var inputValues = [];
    // Lặp qua từng hàng của bảng
    $('#comparison-table tbody tr').each(function(row, tr) {
      // Khởi tạo một mảng con để lưu giá trị các input trong hàng đó
      inputValues[row] = [];
      // Lặp qua từng ô của hàng đó
      $(tr).find('td input').each(function(col, td) {
        // Lưu giá trị của input vào mảng con
        inputValues[row][col] = parseFloat(eval($(td).val())).toFixed(2);
      });
    });
    return inputValues;
  }

  function getDataToArrayOfPA(idTable)
  {
    var inputValues = [];
    // Lặp qua từng hàng của bảng
    $('#'+idTable+' tbody tr').each(function(row, tr) {
      // Khởi tạo một mảng con để lưu giá trị các input trong hàng đó
      inputValues[row] = [];
      // Lặp qua từng ô của hàng đó
      $(tr).find('td input').each(function(col, td) {
        // Lưu giá trị của input vào mảng con
        inputValues[row][col] = parseFloat(eval($(td).val())).toFixed(2);
      });
    });
    return inputValues;
  }

  function calcSumforColumn(array)
  {
    var result = [];
  for (var i = 0; i < array[0].length; i++) {
    var sum = 0;
    for (var j = 0; j < array.length; j++) {
      sum += array[j][i];
    }
    result.push(sum);
  }
  return result;
  }

  function CalcForDivideTotal()
  {
  var values = [];
  var table = $('#comparison-table');
  // Lấy tổng của mỗi cột
  var columnTotals = [];
  table.find('tbody tr').each(function(row, tr) {
    $(tr).find('td input').each(function(col, td) {
      var value = parseFloat(eval($(td).val()));
      if (!columnTotals[col]) {
        columnTotals[col] = value;
      } else {
        columnTotals[col] += value;
      }
    });
  });
  // Tính toán giá trị của mỗi phần tử và lưu trữ vào mảng values
  table.find('tbody tr').each(function(row, tr) {
    values[row] = [];
    $(tr).find('td input').each(function(col, td) {
      var value = parseFloat(eval($(td).val()));
      var rowTotal = 0;
      if (columnTotals[col]) {
        rowTotal = (value / parseFloat(columnTotals[col])).toFixed(4);
      }
      values[row][col] = rowTotal;
    });
  });
  return values;
  }

  // function CalcForDivideTotalOfPA(idTable)
  // {
  // var values = [];
  // var table = $('#'+idTable);
  // // Lấy tổng của mỗi cột
  // var columnTotals = [];
  // table.find('tbody tr').each(function(row, tr) {
  //   $(tr).find('td input').each(function(col, td) {
  //     var value = parseFloat(eval($(td).val()));
  //     if (!columnTotals[col]) {
  //       columnTotals[col] = value;
  //     } else {
  //       columnTotals[col] += value;
  //     }
  //   });
  // });
  // // Tính toán giá trị của mỗi phần tử và lưu trữ vào mảng values
  // table.find('tbody tr').each(function(row, tr) {
  //   values[row] = [];
  //   $(tr).find('td input').each(function(col, td) {
  //     var value = parseFloat(eval($(td).val()));
  //     var rowTotal = 0;
  //     if (columnTotals[col]) {
  //       rowTotal = (value / parseFloat(columnTotals[col])).toFixed(4);
  //     }
  //     values[row][col] = rowTotal;
  //   });
  // });
  
  // return values;
  // }

  function CalcCriteriaWeight(array)
  {
    var result = [];
    for (var i = 0; i < array[0].length; i++) {
      var avegrage = 0;
      for (var j = 0; j < array.length; j++) {
        avegrage += parseFloat(array[i][j]);
      }
      avegrage = (avegrage / array[0].length).toFixed(4);
      result.push(avegrage);
    }
    return result;
  }

  function CalcTheConsistencyRate(arr,arrCR)
  {
  var n = arr[0].length;
  var m = arr.length;
  var result = new Array(n);
    for (var i = 0; i < arr[0].length; i++) {
      result[i] = new Array(m).fill(0);
      for (var j = 0; j < arr.length; j++) {
        result[i][j] = (arr[i][j] * arrCR[j]).toFixed(4);
      }
      //
    }
    return result;
  }

  function calcWeightedSum(arrCR)
  {
    var result = [];
    for (var i = 0; i < arrCR[0].length; i++) {
      var sum = 0;
      for (var j = 0; j < arrCR.length; j++) {
        sum += parseFloat(arrCR[i][j]);
      }
      result.push(sum.toFixed(4));
    }
    return result;
  }

  function CalcConsistencyVector(arrWS,arrCW)
  {
    var result = [];
    var devided = 0;
    for (var i = 0; i < arrWS.length; i++) {
      devided = arrWS[i]/ arrCW[i];
      result.push(devided.toFixed(4));
    }
    return result;
  }

  function CalcCI(arrCV)
  {
    var result = [];
    var averge = 0;
    var ci = 0;
    for (var i = 0; i < arrCV.length; i++) {
      averge += parseFloat(arrCV[i]);
    }
    averge = (averge / arrCV.length).toFixed(4);
    ci = (averge - arrCV.length)/(arrCV.length -1);
    return ci.toFixed(5);
  }