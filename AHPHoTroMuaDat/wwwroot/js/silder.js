// Tiêu chí
$(document).on('input', 'input#slider', function () {
  var currentValue = parseFloat($(this).val());
  var a, b;
  if (currentValue === 0) {
    a = 1;
    b = 1;
  } else if (currentValue > 0) {
    b = currentValue + 1;
    a = '1 / ' + (currentValue + 1);
  } else {
    b = '1 / ' + (Math.abs(currentValue) + 1);
    a = Math.abs(currentValue) + 1;
  }
  var classTag = $('#valueB').attr('class');
  var rowA = $('#valueA').attr('data-row');
  var colA = $('#valueA').attr('data-col');
  $('table#' + classTag + ' > tbody > tr > td > input[data-row=' + rowA + '][data-col=' + colA + ']').attr("value", a);
  //
  var rowB = $('#valueB').attr('data-row');
  var colB = $('#valueB').attr('data-col');
  // table#comparison-table > tbody > tr > td > 
  $('table#' + classTag + ' > tbody > tr > td > input[data-row=' + rowB + '][data-col=' + colB + ']').attr("value", b);
  showValue();
  updateChart();
  $('#valueA').text(a);
  $('#valueB').text(b);
});
$(document).ready(function () {
  $("#comparisonModal").draggable();
  $("div[id*=modal]").draggable();
});

$(document).on('click', 'input#comparison-table', function () {
  var row = $(this).attr('data-row');
  var col = $(this).attr('data-col');
  var textB = $('table#comparison-table > thead > tr').find('th').eq(Number(col) + 1).text();
  var textA = $('table#comparison-table > tbody > tr').eq(row).find('td:first-child').text();
  var inputel = $('table#comparison-table > tbody > tr > td > input[data-row=' + col + '][data-col=' + row + ']').val();
  if (row !== col) {
    switch ($(this).val()) {
      case '1': $('input#slider').val(0); break;
      case '2': $('input#slider').val(-1); break;
      case '3': $('input#slider').val(-2); break;
      case '4': $('input#slider').val(-3); break;
      case '5': $('input#slider').val(-4); break;
      case '6': $('input#slider').val(-5); break;
      case '7': $('input#slider').val(-6); break;
      case '8': $('input#slider').val(-7); break;
      case '9': $('input#slider').val(-8); break;
      case '1 / 2': $('input#slider').val(1); break;
      case '1 / 3': $('input#slider').val(2); break;
      case '1 / 4': $('input#slider').val(3); break;
      case '1 / 5': $('input#slider').val(4); break;
      case '1 / 6': $('input#slider').val(5); break;
      case '1 / 7': $('input#slider').val(6); break;
      case '1 / 8': $('input#slider').val(7); break;
      case '1 / 9': $('input#slider').val(8); break;
    }
    $('#valueA').text($(this).val());
    $('#textA').text(textA);
    $('#textB').text(textB);
    $('#valueA').attr('data-row', row).attr('data-col', col).removeClass().addClass('comparison-table');
    $('#valueB').text(inputel);
    $('#valueB').attr('data-row', col).attr('data-col', row).removeClass().addClass('comparison-table');
    $('#comparisonModal').modal("show");
  }
});

function cutString(id) {
  var kyTuChia = "sliderr";

  // Sử dụng phương thức indexOf() để tìm vị trí của chuỗi "sliderr"
  var viTri = id.indexOf(kyTuChia);
  // Kiểm tra nếu tìm thấy chuỗi "sliderr"
  if (viTri !== -1) {
    // Sử dụng phương thức slice() để cắt chuỗi từ đầu đến vị trí tìm thấy
    var ketQua = id.slice(0, viTri);
    return ketQua
  }
}
// ##################  PHuong An  ####################
$(document).on('input', 'input[id*=sliderr]', function () {
  var id = $(this).attr('id');
  var cutId = cutString(id);
  id = cutId;
  //
  var currentValue = parseFloat($(this).val());
  var a, b;
  if (currentValue === 0) {
    a = 1;
    b = 1;
  } else if (currentValue > 0) {
    b = currentValue + 1;
    a = '1 / ' + (currentValue + 1);
  } else {
    b = '1 / ' + (Math.abs(currentValue) + 1);
    a = Math.abs(currentValue) + 1;
  }
  var classTag = $('#' + id + 'B').attr('class');
  var rowA = $('#' + id + 'A').attr('data-row');
  var colA = $('#' + id + 'A').attr('data-col');
  $('table#' + classTag + ' > tbody > tr > td > input[data-row=' + rowA + '][data-col=' + colA + ']').attr("value", a);
  //
  var rowB = $('#' + id + 'B').attr('data-row');
  var colB = $('#' + id + 'B').attr('data-col');
  // table#comparison-table > tbody > tr > td > 
  $('table#' + classTag + ' > tbody > tr > td > input[data-row=' + rowB + '][data-col=' + colB + ']').attr("value", b);
  updateChartPA(id);
  $('#' + id + 'A').text(a);
  $('#' + id + 'B').text(b);
});


// ######## Click input co id chua opt
$(document).on('click', 'input[id*=opt]', function () {
  var id = $(this).attr('id'); //
  if (id != (id + 'slider')) {
    var row = $(this).attr('data-row');
    var col = $(this).attr('data-col');
    var textB = $('table#' + id + ' > thead > tr').find('th').eq(Number(col) + 1).text();
    var textA = $('table#' + id + ' > tbody > tr').eq(row).find('td:first-child').text();
    var inputel = $('table#' + id + ' > tbody > tr > td > input[data-row=' + col + '][data-col=' + row + '][id=' + id + ']').val();
    if (row !== col) {
      switch ($(this).val()) {
        case '2': $('input#' + id + 'sliderr').val(-1); break;
        case '3': $('input#' + id + 'sliderr').val(-2); break;
        case '4': $('input#' + id + 'sliderr').val(-3); break;
        case '5': $('input#' + id + 'sliderr').val(-4); break;
        case '6': $('input#' + id + 'sliderr').val(-5); break;
        case '7': $('input#' + id + 'sliderr').val(-6); break;
        case '8': $('input#' + id + 'sliderr').val(-7); break;
        case '9': $('input#' + id + 'sliderr').val(-8); break;
        case '1 / 2': $('input#' + id + 'sliderr').val(1); break;
        case '1 / 3': $('input#' + id + 'sliderr').val(2); break;
        case '1 / 4': $('input#' + id + 'sliderr').val(3); break;
        case '1 / 5': $('input#' + id + 'sliderr').val(4); break;
        case '1 / 6': $('input#' + id + 'sliderr').val(5); break;
        case '1 / 7': $('input#' + id + 'sliderr').val(6); break;
        case '1 / 8': $('input#' + id + 'sliderr').val(7); break;
        case '1 / 9': $('input#' + id + 'sliderr').val(8); break;
      }
      $('#' + id + 'A').text($(this).val());
      $('#' + id + 'textA').text(textA);
      $('#' + id + 'textB').text(textB);
      $('#' + id + 'A').attr('data-row', row).attr('data-col', col).removeClass().addClass(id);
      $('#' + id + 'B').text(inputel);
      $('#' + id + 'B').attr('data-row', col).attr('data-col', row).removeClass().addClass(id);
      $('#' + id + 'modal').modal("show");
    }
  }
});
// #########################
// ### Result #######
$(document).on('click', 'button#result-btn', function () {
    $("html, body").animate({ scrollTop: $(document).height() }, "smooth");
    var chartTC = Chart.getChart('myChart');
    var chartTCData = chartTC.data.datasets[0].data;
    console.log('ARR tieu chi: ' + chartTCData);

    for (var i = 0; i < chartTCData.length; i++) {
        chartTCData[i] = (Number(chartTCData[i]) / 100).toFixed(4);
    }
    var selectedValues = $('input[id*=count][type=checkbox]:checked').length;
    var chart_Tich_TC_PA = Array(selectedValues).fill(0); // Khởi tạo với giá trị ban đầu là 0

    $('canvas[id*=myChart]').each(function (index, element) {
        if (index !== 0) {
            var chart = Chart.getChart(element.id);
            if (chart.data.datasets.length > 0) { // Kiểm tra độ dài của mảng datasets
                var chartData = chart.data.datasets[0].data;
                console.log('ARR phuong an: ' + index + '' + chartData);
                for (var j = 0; j < chartData.length; j++) {
                    chartData[j] = (Number(chartData[j]) / 100).toFixed(4);
                }
                console.log(chartData);
                for (var k = 0; k < chartData.length; k++) {
                    chart_Tich_TC_PA[k] += (Number(chartData[k]) * Number(chartTCData[k]));
                }
            }
        }
    });

    // Sử dụng dữ liệu tổng hợp
    console.log(chart_Tich_TC_PA);
    var divcanvas = '<div class="col-12 mb-2 mt-2">' + '<canvas id="newChart" style="height: 100% !important;"></canvas>' + '</div>';
    $('#section2').append(divcanvas);
    //
    const footer = (tooltipItems) => {
        let sum = 0;

        tooltipItems.forEach(function (tooltipItem) {
            sum += tooltipItem.parsed.y;
        });
        return 'Tổng: 1';
    };
    var arrLabelss = [];
    var arrColorr = [];
    var count = $('table[id*="opt"]:eq(0) > thead > tr > th').length;
    count--;
    var countColor = 0;
    $('table[id*="opt"]:eq(0) > thead > tr > th').each(function (i) {
        var text = $(this).text();
        if (text !== '' && text !== null) {
            arrLabelss.push(text);
            arrColorr.push(arrColors[countColor]);
            countColor++;
        }
    });


    var ctx = document.getElementById('newChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrLabelss,
            datasets: [{
                label: 'Điểm số',
                backgroundColor: arrColorr,
                borderColor: 'rgba(0, 123, 255, 1)',
                data: chart_Tich_TC_PA
            }]
        },
        options: {
            scales: {
                y: {
                    max: 1,
                    beginAtZero: true,
                    ticks: {
                        precision: 2 // Đặt số thập phân tối đa là 2
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Điểm số các phương án',
                },
                tooltip: {
                    callbacks: {
                        footer: footer,
                    }
                }
            }
        }
    });
});




//  #######################

// ######## CHART ##########
// Tạo biểu đồ
function updateChart() {
  // Lấy tham chiếu đến biểu đồ
  var chart = Chart.getChart('myChart');

  // Cập nhật dữ liệu
  var newData = avergareArray(arrCW);;
  chart.data.datasets[0].data = newData;

  // Vẽ lại biểu đồ
  chart.update();
}
// update chart phuương án
function updateChartPA(id) {
  // Lấy tham chiếu đến biểu đồ
  executeTable(id);
  var chart = Chart.getChart('myChart' + id);
  // Cập nhật dữ liệu
  console.log(ARRCWW);
  var newData = avergareArray(ARRCWW);
  chart.data.datasets[0].data = newData;
  // Vẽ lại biểu đồ
  chart.update();
}

function avergareArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  for (var i = 0; i < arr.length; i++) {
    arr[i] = ((Number(arr[i]) / sum) * 100).toFixed(2);
  }
  return arr;
}



/// #####################################

var arrCW = [];

function showValue() {
  arrCW = [];
  var arr = getDataToArrayTC();
  console.log(arr);
  console.log("---- ARR ----")
  var devidedtotal = CalcForDivideTotal();
  console.log(devidedtotal);
  console.log("----  ----")
  var CW = CalcCriteriaWeight(devidedtotal);
  arrCW = CW;
  console.log(CW);
  console.log("---- CW ----")
  var CR = CalcTheConsistencyRate(arr, CW);
  console.log(CR);
  console.log("---- CR ----")
  var WS = calcWeightedSum(CR);
  console.log(WS);
  console.log("---- WS ----")
  var CV = CalcConsistencyVector(WS, CW);
  console.log(CV);
  console.log("---- CV ----")
  var CI = CalcCI(CV)
  console.log(CI);
  console.log("---- CI ----")
  console.log("----------------------------------")
  var CR = 0;
  switch (arr[0].length) {
    case 1: CR = (CI / 0); $('h6#cr').text('Consistency Ratio = ' + CR.toFixed(5)); break;
    case 2: CR = (CI / 0); $('h6#cr').text('Consistency Ratio = ' + CR.toFixed(5)); break;
    case 3: CR = (CI / 0.58); $('h6#cr').text('Consistency Ratio = ' + CR.toFixed(5)); break;
    case 4: CR = (CI / 0.9); $('h6#cr').text('Consistency Ratio = ' + CR.toFixed(5)); break;
    case 5: CR = (CI / 0.12); $('h6#cr').text('Consistency Ratio = ' + CR.toFixed(5)); break;
    case 6: CR = (CI / 0.24); $('h6#cr').text('Consistency Ratio = ' + CR.toFixed(5)); break;
    case 7: CR = (CI / 0.32); $('h6#cr').text('Consistency Ratio = ' + CR.toFixed(5)); break;
    case 8: CR = (CI / 0.41); $('h6#cr').text('Consistency Ratio = ' + CR.toFixed(5)); break;

  }
  if (CR <= 0.1) {
      $('h6#cr').addClass('text-success').removeClass('text-danger');
      $('button#result-btn').prop('disabled', false);
  } else {
      $('h6#cr').addClass('text-danger').removeClass('text-success');
      $('button#result-btn').prop('disabled', true);
  }
}



// ######################################

function getDataToArrayTC() {
  var inputValues = [];

  // Lặp qua từng hàng của bảng
  $('#comparison-table tbody tr').each(function (row, tr) {
    // Khởi tạo một mảng con để lưu giá trị các input trong hàng đó
    inputValues[row] = [];

    // Lặp qua từng ô của hàng đó
    $(tr).find('td input').each(function (col, td) {
      // Lưu giá trị của input vào mảng con
      inputValues[row][col] = parseFloat(eval($(td).val())).toFixed(2);
    });
  });
  return inputValues;

}

function getDataToArrayOfPA(idTable) {
  var inputValues = [];

  // Lặp qua từng hàng của bảng
  $('#' + idTable + ' tbody tr').each(function (row, tr) {
    // Khởi tạo một mảng con để lưu giá trị các input trong hàng đó
    inputValues[row] = [];

    // Lặp qua từng ô của hàng đó
    $(tr).find('td input').each(function (col, td) {
      // Lưu giá trị của input vào mảng con
      inputValues[row][col] = parseFloat(eval($(td).val())).toFixed(2);
    });
  });
  return inputValues;

}

function calcSumforColumn(array) {
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

function CalcForDivideTotal() {
  var values = [];
  var table = $('table#comparison-table');

  // Lấy tổng của mỗi cột
  var columnTotals = [];
  table.find('tbody tr').each(function (row, tr) {
    $(tr).find('td input').each(function (col, td) {
      var value = parseFloat(eval($(td).val()));
      if (!columnTotals[col]) {
        columnTotals[col] = value;
      } else {
        columnTotals[col] += value;
      }
    });
  });

  // Tính toán giá trị của mỗi phần tử và lưu trữ vào mảng values
  table.find('tbody tr').each(function (row, tr) {
    values[row] = [];
    $(tr).find('td input').each(function (col, td) {
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

function CalcForDivideTotalOfPA(idTable) {
  var values = [];
  var table = $('table#' + idTable);

  // Lấy tổng của mỗi cột
  var columnTotals = [];
  table.find('tbody tr').each(function (row, tr) {
    $(tr).find('td input').each(function (col, td) {
      var value = parseFloat(eval($(td).val()));
      if (!columnTotals[col]) {
        columnTotals[col] = value;
      } else {
        columnTotals[col] += value;
      }
    });
  });

  // Tính toán giá trị của mỗi phần tử và lưu trữ vào mảng values
  table.find('tbody tr').each(function (row, tr) {
    values[row] = [];
    $(tr).find('td input').each(function (col, td) {
      var value = parseFloat(eval($(td).val()));
      var rowTotal = 0;
      if (columnTotals[col]) {
        rowTotal = (value / parseFloat(columnTotals[col])).toFixed(4);
      }
      values[row][col] = rowTotal;
    });
  });
  console.log('Value' + values);
  return values;
}

function CalcCriteriaWeight(array) {
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

function CalcTheConsistencyRate(arr, arrCR) {
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
function calcWeightedSum(arrCR) {
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
function CalcConsistencyVector(arrWS, arrCW) {
  var result = [];
  var devided = 0;
  for (var i = 0; i < arrWS.length; i++) {
    devided = arrWS[i] / arrCW[i];
    result.push(devided.toFixed(4));
  }
  return result;
}
function CalcCI(arrCV) {
  var result = [];
  var averge = 0;
  var ci = 0;
  for (var i = 0; i < arrCV.length; i++) {
    averge += parseFloat(arrCV[i]);
  }
  averge = (averge / arrCV.length).toFixed(4);
  ci = (averge - arrCV.length) / (arrCV.length - 1);
  return ci.toFixed(5);
}

var ARRCWW = [];
// 
function executeTable(id) {
  console.log('Tabe Phương Án id:' + id);
  // $('table[id*=otp]').each(function(){
  console.log('--------------------- PA' + id + ' -----------------------');
  var arr = getDataToArrayOfPA(id);
  console.log(arr);
  console.log("---- ARR ----")
  var devidedtotal = CalcForDivideTotalOfPA(id);
  console.log(devidedtotal);
  console.log("----  ----")
  var CW = CalcCriteriaWeight(devidedtotal);
  console.log(CW);
  ARRCWW = CW;
  console.log("---- CW ----")
  var CR = CalcTheConsistencyRate(arr, CW);
  console.log(CR);
  console.log("---- CR ----")
  var WS = calcWeightedSum(CR);
  console.log(WS);
  console.log("---- WS ----")
  var CV = CalcConsistencyVector(WS, CW);
  console.log(CV);
  console.log("---- CV ----")
  var CI = CalcCI(CV)
  console.log(CI);
  console.log("---- CI ----")
  console.log("----------------------------------")
  var CR = 0;
  switch (arr[0].length) {
    case 1: CR = (CI / 0); break;
    case 2: CR = (CI / 0); break;
    case 3: CR = (CI / 0.58); break;
    case 4: CR = (CI / 0.9); break;
    case 5: CR = (CI / 0.12); break;
    case 6: CR = (CI / 0.24); break;
    case 7: CR = (CI / 0.32); break;
    case 8: CR = (CI / 0.41); break;

  }
  console.log(CR);
  // });
}