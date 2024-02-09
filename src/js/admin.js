jQuery(document).ready(function () {
 
  jQuery(document).on('click', '.towtones',function(){ 
    $(".towtones").addClass("active");
    $(".firstones").addClass("bgwhite");
    jQuery(".student-health-card").hide();
    jQuery(".records").show();
  
  });
  
  jQuery(document).on('click', '.firstones',function(){ 
    $(".towtones").removeClass("active");
    $(".firstones").removeClass("bgwhite");
  jQuery(".records").hide();
  jQuery(".student-health-card").show();
  
  });





 
jQuery(document).on('click', 'input[type="checkbox"]#swich-list',function(){ 
  if (jQuery(this).is(":checked")) {
    jQuery(".filter-grap").hide();
    jQuery(".list-view").show();}
    else {
      jQuery(".filter-grap").show();
      jQuery(".list-view").hide();
  }
});













/***********************************assign modal***************************************** */
jQuery(document).on('click', "#assign-button",function(){  
    
  jQuery("#Assign-File").hide();
  jQuery("#Upload-File").show();

}); 

jQuery(document).on('click', ".closepopup",function(){  
  
jQuery("#Assign-File").show();
jQuery("#Upload-File").hide();

}); 

jQuery(document).on('click', ".tab-export",function(){   
jQuery(".none-class").addClass('hidden');

}); 

jQuery(document).on('click', ".show-swich",function(){   
jQuery(".none-class").removeClass('hidden');

}); 
/***********************************assign modal***************************************** */
/***********************************my modal***************************************** */

jQuery(document).on('click', '.openinnermyfolder',function(){  
  
jQuery("#myfolderone").hide();
jQuery(".myfolderenner").show();

}); 

jQuery(document).on('click', ".closebuttonmyfolder",function(){  
  
jQuery("#myfolderone").show();
jQuery(".myfolderenner").hide();

}); 




/***********************************my modal***************************************** */

 ////////////////////////////////select/////////////////////////////
  
  var aeDropdown = $('.ae-dropdown');
      aeDropdown.click(function() {
        $('.dropdown-menu').toggleClass('ae-hide');
      });
  

  
  $('.toggle-filter').click(function(){
    $('.filtermenu').toggleClass('hidden');
  });



///////////////////////sidebar/////////////////////////	
jQuery(document).on("click", "button.logo-sidebar" , function() {
  jQuery('.mobileview').toggleClass("hidden-menu"); 
  jQuery('#sidebar-backdrop').toggleClass("hidden"); 
});
jQuery(document).on("click", "#sidebar-backdrop" , function() {
  jQuery('.mobileview').toggleClass("hidden-menu"); 
  jQuery('#sidebar-backdrop').toggleClass("hidden"); 
});
jQuery(document).on("click", "button#close-sidebar" , function() {
  jQuery('.mobileview').toggleClass("hidden-menu"); 
  jQuery('#sidebar-backdrop').toggleClass("hidden"); 
});
jQuery(document).on("click", "#dropdown-default-button" , function() {
  jQuery("#dropdown").slideToggle(); 
  });
jQuery(document).on("click", "#dropdown-default-button + #dropdown a" , function() {
    jQuery("#dropdown").slideUp();  
});
///////////////////////Sidebar End/////////////////////////

/////////////////////////timetable Chart ////////////////////////////////
jQuery(document).on("click", "button[data-tab='timetable-day']" , function() {
    jQuery('#day-week button').removeClass('bg-dark-blue');  
    jQuery(this).addClass('bg-dark-blue');
    jQuery('.tab-content').addClass('hidden');
    jQuery('#timetable-day').removeClass('hidden');
  });
jQuery(document).on("click", "button[data-tab='timetable-week']" , function() {
    jQuery('#day-week button').removeClass('bg-dark-blue');
    jQuery(this).addClass('bg-dark-blue');
    jQuery('.tab-content').addClass('hidden');
    jQuery('#timetable-week').removeClass('hidden');
});

jQuery(document).on("click", "button[data-tab='timetable-gird']" , function() {
  jQuery('#clender-grid button').removeClass('bg-dark-blue');  
  jQuery(this).addClass('bg-dark-blue');
  jQuery('.tab-contents').addClass('hidden');
  jQuery('#timetable-gird').removeClass('hidden');
});
jQuery(document).on("click", "button[data-tab='timetable-list']" , function() {
  jQuery('#clender-grid button').removeClass('bg-dark-blue');
  jQuery(this).addClass('bg-dark-blue ');
  jQuery('.tab-contents').addClass('hidden');
  jQuery('#timetable-list').removeClass('hidden');
});

$(function() {
  $("#container").highcharts({
   
    title: {
      text: "Historical Attendance Analysis",
      style:{
        align:'left',
      }
      
    },
   
    xAxis: [{
      categories: ['2013-2014', '2014-2015', '2016-2017', '2018-1019', '2020-2021',                  '2013-2014', '2014-2015', '2016-2017','2014-2015', '2016-2017',                    '2014-2015', '2016-2017']
    }],
    yAxis: [{ //Primary yAxis
      labels: {
        format: '{value}%',
        style: {
          color: '#89A54E'
        }
      },
      title: {
        text: 'Temperature',
        style: {
          color: '#89A54E'
        }
      }
    }, {//Secondary yAxis
      title: {
        text: 'Rainfall',
        style: {
          color: '#4572A7'
        }
      },
      labels: {
        format: '{value} %',
        style: {
          color: '#4572A7'
        }
      },
      opposite: false
    }],
    tooltip: {
      shared: true,
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 120,
      verticalAlign: 'top',
      y: 100,
      floating: true
    },
    series: [{
      name: 'Rainfall',
      color: '#4572A7',
      type: 'column',
      yAxis: 1,
      data: [40, 50, 60, 70, 80, 90,              40, 50, 90, 50, ],
      tooltip: {
        valueSuffix: ' %'
      }
    }, ]
  });
});

//////////////////////////////////////////////////////

jQuery(document).ready(function() {
  jQuery(".accordion-item").on("click", function() {
    if (jQuery(this).hasClass("active")) {
      jQuery(this).removeClass("active");
      jQuery(this).siblings(".content").slideUp();  } 
      else {
        jQuery(".accordion-item").removeClass("active");
        jQuery(this).addClass("active");
        jQuery(".content").slideUp();
        jQuery(this).siblings(".content") .slideDown(); ;
    }
  });
});

/////////////////////////end////////////////////////////////

//////////////////////////Add Fee Head////////////////////////////    
   jQuery(document).on("click", "#dropdown-divider-button" , function() {
    jQuery("#dropdown-divider").slideToggle();
   });
   jQuery(document).on("click", "#dropdown-divider-button + #dropdown-divider label" , function() {
    jQuery("#dropdown-divider").slideUp();
   });
//////////////////////////DRP////////////////////////////

jQuery(document).on("click", "#dropdown-divider-button-two" , function() {
  jQuery("#dropdown-divider-two").slideToggle();
 });
 jQuery(document).on("click", "#dropdown-divider-button-two + #dropdown-divider-two label" , function() {
  jQuery("#dropdown-divider-two").slideUp();
 });
 jQuery(document).on("click", "#apply" , function() {
  jQuery("#applyconcession").slideToggle();
 });

 jQuery(document).on('click', ".drowpdown-bt",function(){ 
  if (jQuery(this).hasClass("sliding")) {
    jQuery(this).removeClass("sliding");  
  } else {
    jQuery(".drowpdown-bt").removeClass("sliding");
    jQuery(this).addClass("sliding"); 
  }
}); 

jQuery(document).on("click", ".drowpdown-content" , function() {
  jQuery(".drowpdown-bt").removeClass("sliding");
 });
 jQuery(document).on("click", "#one-grade" , function() {
  jQuery("#one-tow-grade").slideToggle();

 });
 jQuery(document).on("click", "label" , function() {
  jQuery("#one-tow-grade").slideUp();
  
 });

///////////////////////////////Drp End///////////////////////////


jQuery(document).on("click", ".add-fee-head" , function() {
  jQuery(".add-fee-head-toggle").slideToggle(); 
  });
   
///////////////////////Performance Chart////////////////////////// 

jQuery(document).on('click', ".log-pay-student",function(){ 
  if (jQuery(this).hasClass("show-block")) {
    jQuery(this).removeClass("show-block"); 
    jQuery(".payment-save").removeClass("show-buttons");
  } else {
    jQuery(".log-pay-student ").removeClass("show-block");
    jQuery(this).addClass("show-block"); 
    jQuery(".payment-save").addClass("show-buttons");
  }
}); 


jQuery(document).on('click', ".applied-button",function(){ 
  if (jQuery(this).hasClass("show-up")) {
    jQuery(this).removeClass("show-up"); 
  } else {
    jQuery(".applied-button").removeClass("show-up");
    jQuery(this).addClass("show-up"); 
  }
}); 

jQuery(document).on('click', "a",function(){  
    jQuery(".applied-button").removeClass("show-up");  
}); 

jQuery(document).on('click', 'input[type="checkbox"]#togglebtn',function(){ 
  if (jQuery(this).is(":checked")) {
    jQuery(".details1").hide();
    jQuery(".details2").show();}
    else {
      jQuery(".details1").show();
      jQuery(".details2").hide();
  }
});

$('input[type="checkbox"]#tableview').change(function() {
  if ($(this).is(":checked")) {
    $(".viewjsn").hide();
    $(".Syscalls").show();
    $(".nocheked").text("Table View");
    $(".nocheked").removeClass("text-[#4F4F4F]");
  } else {
    $(".nocheked").text("JSON View");
    $(".nocheked").addClass("text-[#4F4F4F]");
    $(".viewjsn").show();
    $(".Syscalls").hide();
}
});


/*********************************************************** */
jQuery(document).on('click', ".accordian-btn",function(){ 
  if (jQuery(".accordianes").hasClass("block-accordian")) {
    jQuery(this).removeClass("block-accordian"); 
    jQuery(".accordianes").removeClass("block-accordian");
  } else {
    jQuery(".accordianes").addClass("block-accordian");
    jQuery(this).addClass("block-accordian"); 
  }
}); 
/**************************************************************************** */



var row=1;
$(document).on("click", "#add-grades", function () {
var new_row = '<div class="flex flex-wrap my-5 items-center row justify-between"><div class="md:w-1/3 md:my-0 my-3 w-full"><div class="dropdown-w-full w-full custmeselect relative"><select><option>Apply Concession to</option><option>One Time Charge</option><option>Yearly Charge</option><option>Monthly Charge</option><option>Miscellaneous Charge</option></select></div></div><div class=" md:w-1/3 w-full md:my-0 my-3 md:px-3 px-0"><input type="text" id="first_name" class="w-full px-5 py-3 font-urbanist font-medium text-sm bg-transparent rounded-lg border border-white-grey " placeholder="Enter Amount" required=""/></div><div class="flex md:w-1/3 md:my-0 my-3 w-full items-center justify-between"><button type="button" id="remove-grade" class="border flex items-center text-red text-sm font-urbanist font-bold border-red rounded-lg py-3 px-4"><svg width="14" height="2" class="mr-3" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H0V0H14V2Z" fill="#F7284A"/></svg>Remove Grade</button></div></div>';
$('#new-gread').append(new_row);
row++;

jQuery(".apply-to-grades").removeClass("bg-dark-blue");
jQuery(".apply-to-grades").addClass("bg-soft-peach");
jQuery(".apply-submit").removeClass("bg-soft-peach");
jQuery(".apply-submit").addClass("bg-dark-blue");
return false;



});







/*********************Student Dossier************************ */
jQuery(document).on("click", ".student-dossier" , function() {
  jQuery(".student-dossier-toggle").slideToggle(); 
  });

var row=1;
$(document).on("click", "#student-dossier-grades", function () {
var new_row = '<div class="flex flex-wrap my-5 items-center row justify-between"><div class="md:w-1/3 md:my-0 my-3 w-full"><div class="dropdown-w-full w-full custmeselect relative"><select><option>Apply Concession to</option><option>One Time Charge</option><option>Yearly Charge</option><option>Monthly Charge</option><option>Miscellaneous Charge</option></select></div></div><div class="flex md:w-1/3 md:my-0 my-3 md:px-3 px-0 w-full items-center justify-between"><button type="button" id="remove-student-grade" class="border flex items-center text-red text-sm font-urbanist font-bold border-red rounded-lg py-3 px-4"><svg width="14" height="2" class="mr-3" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H0V0H14V2Z" fill="#F7284A"/></svg>Remove Grade</button></div><div class=" md:w-1/3 w-full md:my-0 my-3 "></div></div>';
$('#student-dossier').append(new_row);
row++;

jQuery(".apply-to-grades").removeClass("bg-dark-blue");
jQuery(".apply-to-grades").addClass("bg-soft-peach");
jQuery(".apply-submit").removeClass("bg-soft-peach");
jQuery(".apply-submit").addClass("bg-dark-blue");
return false;



});


$(document).on("click", "#remove-student-grade", function () {
  if(row>1) {
    $(this).closest('.row').remove();
    row--;
  }
return false;
});

/*********************Student Dossier************************ */




/*********************Parent Dossier************************ */



jQuery(document).on("click", ".parent-dossier" , function() {
  jQuery(".parent-dossier-toggle").slideToggle(); 
  });




  var row=1;
$(document).on("click", "#add-parent-dossier", function () {
var new_row = '<div class="flex flex-wrap my-5 items-center row justify-between"><div class="md:w-1/3 md:my-0 my-3 w-full"><div class="dropdown-w-full w-full custmeselect relative"><select><option>Apply Concession to</option><option>One Time Charge</option><option>Yearly Charge</option><option>Monthly Charge</option><option>Miscellaneous Charge</option></select></div></div><div class="flex md:w-1/3 md:my-0 my-3 md:px-3 px-0 w-full items-center justify-between"><button type="button" id="remove-parent" class="border flex items-center text-red text-sm font-urbanist font-bold border-red rounded-lg py-3 px-4"><svg width="14" height="2" class="mr-3" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H0V0H14V2Z" fill="#F7284A"/></svg>Remove Grade</button></div><div class=" md:w-1/3 w-full md:my-0 my-3 "></div></div>';
$('#new-parent').append(new_row);
row++;

jQuery(".apply-to-grades").removeClass("bg-dark-blue");
jQuery(".apply-to-grades").addClass("bg-soft-peach");
jQuery(".apply-submit").removeClass("bg-soft-peach");
jQuery(".apply-submit").addClass("bg-dark-blue");
return false;
});
$(document).on("click", "#remove-parent", function () {
  if(row>1) {
    $(this).closest('.row').remove();
    row--;
  }
return false;
});



/*********************Parent Dossier************************ */




/*********************Employee Dossier************************ */


jQuery(document).on("click", ".employee-dossier" , function() {
  jQuery(".employee-dossier-toggle").slideToggle(); 
  });




  var row=1;
$(document).on("click", "#add-employee-dossier", function () {
var new_row = '<div class="flex flex-wrap my-5 items-center row justify-between"><div class="md:w-1/3 md:my-0 my-3 w-full"><div class="dropdown-w-full w-full custmeselect relative"><select><option>Apply Concession to</option><option>One Time Charge</option><option>Yearly Charge</option><option>Monthly Charge</option><option>Miscellaneous Charge</option></select></div></div><div class="flex md:w-1/3 md:my-0 my-3 md:px-3 px-0 w-full items-center justify-between"><button type="button" id="remove-employee-dossier" class="border flex items-center text-red text-sm font-urbanist font-bold border-red rounded-lg py-3 px-4"><svg width="14" height="2" class="mr-3" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H0V0H14V2Z" fill="#F7284A"/></svg>Remove Grade</button></div><div class=" md:w-1/3 w-full md:my-0 my-3 "></div></div>';
$('#new-employee-dossier').append(new_row);
row++;

jQuery(".apply-to-grades").removeClass("bg-dark-blue");
jQuery(".apply-to-grades").addClass("bg-soft-peach");
jQuery(".apply-submit").removeClass("bg-soft-peach");
jQuery(".apply-submit").addClass("bg-dark-blue");
return false;
});
$(document).on("click", "#remove-employee-dossier", function () {
  if(row>1) {
    $(this).closest('.row').remove();
    row--;
  }
return false;
});



/*********************Employee Dossier************************ */






/************************************************************************************************ */














$(document).on("click", "#remove-grade", function () {
  if(row>1) {
    $(this).closest('.row').remove();
    row--;
  }
return false;
});

$(document).on("click", ".toggle-password", function () { 
  jQuery(this).toggleClass("fa-eye fa-eye-slash");
  var input = jQuery(jQuery(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});









/*********************************************end************** */
var ctx = document.getElementById('performance').getContext('2d');
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'line', // also try bar or other graph types

	// The data for our dataset
	data: {
		labels: ['0', '1', '2', '3', '4', '5', '6', '7'],
    // Information about the dataset
    datasets: [{
			label: "Rainfall",
			backgroundColor: '#ebe8fe',
			borderColor: '#8975f9',
      data: [150, 250, 130, 310, 250, 180, 400, 150, 190,],
      borderWidth: 2,
		}]
	},
	// Configuration options
	options: {
    layout: {
      padding: 10,
    },
		legend: {
      display: false,
			position: 'bottom',
		}, 
		scales: {
			yAxes: [{
				scaleLabel: {
					display: false, 
				},
        gridLines: {
          color: '#fff',
        }

			}],
			xAxes: [{
				scaleLabel: {
					display: false,
				},
        gridLines: {
          color: '#fff',
        }

			}]
		}
	}
});
 ///////////////////////Timetable day Chart//////////////////////////  
 var ctx = document.getElementById('timetable-week');
 var myChart = new Chart(ctx, {
   type: 'bar',
   data: {
     labels: ['P0', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7'],
     datasets: [
       {
         label: 'Day',
         data: [110],
         backgroundColor: '#D6E9C6',
       },
       {
         label: 'week',
         data: [50],
         backgroundColor: '#FAEBCC',
       }, 
     ]
   },
   options: {
     scales: {
       xAxes: [{ 
        stacked: true ,
        position: 'top',
      }],
       yAxes: [{ stacked: true }]
     }
   }
 });
///////////////////////Timetable day Chart////////////////////////// 
var ctx = document.getElementById('timetable-day');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['P0', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7'],
    datasets: [
      {
        label: 'Day',
        data: [100],
        backgroundColor: '#D6E9C6',
      },
      {
        label: 'week',
        data: [50],
        backgroundColor: '#FAEBCC',
      }, 
    ]
  },
  options: {
    scales: {
      xAxes: [{ 
       stacked: true ,
       display: false,
       position: 'top',
     }],
      yAxes: [{ stacked: true }]
    }
  }
});

/////////

});





/////////////////calendar//////////////////////





document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
var today=new Date();
var current_year=today.getFullYear();
var current_month=today.getMonth();
var current_date=today.getDate();
var current_time=today.getTime();
  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
    header: {
      right: 'prev,next',
      ltft: 'title',
      center:''
    },
    select: function(arg) {
  var data=arg.start;
  var year=data.getFullYear();
  var month=data.getMonth();
  var date=data.getDate();
  
      calendar.unselect()
    },
    
  });

  calendar.render();
});



///////////////////calendar end/////////////////




///////circle graph///////////////////////////////////

document.addEventListener("DOMContentLoaded", (_) => {
  let progressBar = document.querySelectorAll(".progress-bar");

  const time = 1500;

  function calculateTime(time, dataCount) {
    return time / dataCount;
  }

  progressBar.forEach((i) => {
    let count = 0;

    let label = i.children[0];
    let line = i.children[1];

    let dataCount = parseInt(label.getAttribute("data-count"));

    let lineCount = line.children[0];
  

    let runTime = calculateTime(time, dataCount);

    let animationLineCount = setInterval((_) => {
      if (count < dataCount) {
        count++;

        label.innerHTML = count + "%";
        lineCount.style.width = count + "%";

        if (count < 30) {
          lineCount.style.background = "#F7284A";
          label.style.color = "#F7284A";
        } else if (count < 70) {
          lineCount.style.background = "#F7284A";
          label.style.color = "#F7284A";
        }
        else if (count < 80) {
          lineCount.style.background = "#F7284A";
          label.style.color = "#F7284A";
        }
        else if (count < 90) {
          lineCount.style.background = "#D88913";
          label.style.color = "#D88913";
        }  else if (count === 100) {
          lineCount.style.background = "#8DB776";
          label.style.color = "#8DB776";
        } else {
          lineCount.style.background = "#8DB776";
          label.style.color = "#8DB776";
        }
      }
    }, runTime);
  });
});


////////////////////////////circle graph//////////////////





jQuery(document).on("click", ".next" , function() {
  jQuery("#first-step").removeClass('active'); 
  jQuery("#secsecond-step, .progressbar  .onestep ").addClass('active'); 
  jQuery(".progressbar .towstep ").addClass('progres'); 

  })
  jQuery(document).on("click", ".previoustow" , function() {
    jQuery("#first-step").addClass('active'); 
    jQuery("#secsecond-step, .progressbar  .onestep ").removeClass('active'); 
    jQuery(".progressbar .towstep ").removeClass('progres'); 
  
    })
  jQuery(document).on("click", ".next" , function() {
    jQuery("#secsecond-step").removeClass('active'); 
    jQuery("#secsecond-step ").addClass('active'); 
  
    })



    jQuery(document).on("click", ".nexttow" , function() {
      jQuery("#secsecond-step").removeClass('active'); 
      jQuery("#three-step, .progressbar  .towstep ").addClass('active'); 
      jQuery(".progressbar .threestep ").addClass('progres'); 
    
      })


      jQuery(document).on("click", ".previousthree" , function() {
        jQuery("#secsecond-step").addClass('active');  
        jQuery("#three-step, .progressbar  .towstep ").removeClass('active'); 
        jQuery(".progressbar .threestep ").removeClass('progres'); 
      
        });



 

        $('input[type="checkbox"]').change(function() {
          if ($(this).is(":checked")) {
            $('.users-add').append('<button class="withdraw  userwidth flex px-1.5 py-2.5 mr-5 mb-5 items-center text-xs font-urbanist font-semibold text-dark-black border border-dark-blue rounded bg-crystal-blue "><img src="src/images/cdedewe.png" class="mr-2"> Robin Hood<div class="ml-2 "><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.875 1.125L1.125 10.875M1.125 1.125L10.875 10.875" stroke="#6A6A6A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div></button>');
          } else { 
           
        }
        });
        jQuery(document).on("click", ".withdraw" , function() {
          jQuery(this).remove();    
          if(!$(this).is(":checked"))
          ('input' + $(this).val());
          // $('input:checked').prop('checked',false);
          });








          $(document) .ready (function(){
            var row=1;
            $(document).on("click", ".add-grades", function () { 
              var new_row ='<div class="flex flex-wrap row my-5 items-center  "><div class=" md:w-5/12 md:my-0 sm:pr-3 pr-0 my-3 w-full"><div class="dropdown-w-full w-full custmeselect relative"><select><option>Apply Concession to</option><option>One Time Charge</option><option>Yearly Charge</option><option>Monthly Charge</option><option>Miscellaneous Charge</option></select></div></div> <div class="flex md:w-7/12 w-full md:my-0 my-3 md:px-3 p-0 items-center "><button type="button" class="remove-assign border justify-center sm:min-w-removebuttonw sm:w-auto w-full flex items-center text-red text-sm font-urbanist font-bold border-red rounded-lg py-3 px-3"><svg width="14" height="2" class="mr-3" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H0V0H14V2Z" fill="#F7284A"></path></svg>Remove Grade</button></div></div>';
            $('.assign-subject').append(new_row);
            row++;
             
            return false; 
            });
            
            $(document).on("click", ".remove-assign", function () {
              if(row>1) {
                $(this).closest('.row').remove();
                row--;
              }
            return false;
            });
          });





/************************************************************** */


/***************************************************** */

$(function() {
  var option = function(i, j) {
    return $("<option>").append(j + 1900);
  };

  var options = (new Array(150) + "").split(",").map(option);

  $("select#dyear").append(options);
});



jQuery(document).on("click", " .readmore" , function() {
  if(jQuery(window).width() <=768 ) {

  //  jQuery(".mobaileviewfees").toggleClass('hidden'); 
   jQuery(".mobaileviewfees").slideToggle(); 
 };
  });

          
         jQuery(document).on("click", " .mobile-dots ul li a" , function() {
           if(jQuery(window).width() <=768 ) {

            jQuery(".mobile-list").slideUp(); 
          };
           });

            jQuery(document).on("click", ".dromenufee" , function() {
              jQuery(".mobile-list").slideDown(); 
             }); 





             jQuery('.owl-day').owlCarousel({
              loop:true,
              margin:29,
              nav:true,
              navText: [
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0001 19.9201L8.48009 13.4001C7.71009 12.6301 7.71009 11.3701 8.48009 10.6001L15.0001 4.08008" stroke="#2A2A2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008" stroke="#2A2A2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            ],
              responsive:{
                  0:{
                      items:1
                  },
                  600:{
                      items:2
                  },
                  1000:{
                    items:3
                },
                1101:{
                  items:3.5
              }
              }
            })
            
            
            jQuery('.owl-yesterday').owlCarousel({
              loop:true,
              margin:29,
              nav:true,
              navText: [
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0001 19.9201L8.48009 13.4001C7.71009 12.6301 7.71009 11.3701 8.48009 10.6001L15.0001 4.08008" stroke="#2A2A2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008" stroke="#2A2A2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            ],
              responsive:{
                  0:{
                      items:1
                  },
                  600:{
                      items:2
                  },
                  1000:{
                      items:3
                  },
                  1101:{
                    items:3.5
                }
              }
            })
            jQuery(document).ready(function () { 
              jQuery(".owl-carousel .owl-nav").removeClass("disabled");
            });










          
           $(document) .ready( function() {
            $('#sortable').sortable();
          });
        

          jQuery(document).ready(function() {
            var table = jQuery('.departmentlist').DataTable( {
                scrollY:        "850px",
                scrollX:        true, 
                scrollCollapse: true,
                paging:         false,
                fixedColumns:   {
                    left: 2
                }
            } );
        } );

        jQuery(document).ready(function() {
          var table = jQuery('.departmentlistands').DataTable( {
              scrollY:        "850px",
              scrollX:        true, 
              scrollCollapse: true,
              paging:         false,
              fixedColumns:   {
                  left: 1
              }
          } );
      } );


      new DataTable('#export', {
        fixedColumns: {
            left: 2,
        },
        scrollY:  "850px",
        scrollX:        true, 
        scrollCollapse: true,
        paging:         false,
    });






 
        $(document) .ready (function(){
          var newitems=1;
          $(document).on("click", ".newsubject", function () { 
            var new_newitems =' <div  class="bg-gramshair newitems my-4 rounded-xl relative p-5"> <div class="assign-subject"><a href="javascript:void(0)" class="p-2 absolute right-3 top-3 romove-sebject"> <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 18.5C2.45 18.5 1.97933 18.3043 1.588 17.913C1.196 17.521 1 17.05 1 16.5V3.5C0.716667 3.5 0.479 3.40433 0.287 3.213C0.0956668 3.021 0 2.78333 0 2.5C0 2.21667 0.0956668 1.979 0.287 1.787C0.479 1.59567 0.716667 1.5 1 1.5H5C5 1.21667 5.096 0.979 5.288 0.787C5.47933 0.595667 5.71667 0.5 6 0.5H10C10.2833 0.5 10.521 0.595667 10.713 0.787C10.9043 0.979 11 1.21667 11 1.5H15C15.2833 1.5 15.5207 1.59567 15.712 1.787C15.904 1.979 16 2.21667 16 2.5C16 2.78333 15.904 3.021 15.712 3.213C15.5207 3.40433 15.2833 3.5 15 3.5V16.5C15 17.05 14.8043 17.521 14.413 17.913C14.021 18.3043 13.55 18.5 13 18.5H3ZM3 3.5V16.5H13V3.5H3ZM5 13.5C5 13.7833 5.096 14.0207 5.288 14.212C5.47933 14.404 5.71667 14.5 6 14.5C6.28333 14.5 6.521 14.404 6.713 14.212C6.90433 14.0207 7 13.7833 7 13.5V6.5C7 6.21667 6.90433 5.979 6.713 5.787C6.521 5.59567 6.28333 5.5 6 5.5C5.71667 5.5 5.47933 5.59567 5.288 5.787C5.096 5.979 5 6.21667 5 6.5V13.5ZM9 13.5C9 13.7833 9.096 14.0207 9.288 14.212C9.47933 14.404 9.71667 14.5 10 14.5C10.2833 14.5 10.521 14.404 10.713 14.212C10.9043 14.0207 11 13.7833 11 13.5V6.5C11 6.21667 10.9043 5.979 10.713 5.787C10.521 5.59567 10.2833 5.5 10 5.5C9.71667 5.5 9.47933 5.59567 9.288 5.787C9.096 5.979 9 6.21667 9 6.5V13.5Z" fill="#F7284A"></path> </svg> </a> <div  class="flex flex-wrap    items-center  "> <div class=" md:w-5/12 md:my-0 sm:pr-3 sm:mt-0 mt-5 pr-0 my-3 w-full"><div class="dropdown-w-full w-full custmeselect relative"><select><option>Apply Concession to</option><option>One Time Charge</option><option>Yearly Charge</option><option>Monthly Charge</option><option>Miscellaneous Charge</option></select></div></div><div class="flex md:w-7/12 w-full items-center justify-between"> </div> </div><div class="flex flex-wrap row my-5 items-center  "><div class=" md:w-5/12 md:my-0 sm:pr-3 pr-0 my-3 w-full"> <div class="dropdown-w-full w-full custmeselect relative"><select><option>Apply Concession to</option><option>One Time Charge</option><option>Yearly Charge</option><option>Monthly Charge</option><option>Miscellaneous Charge</option></select></div></div><div class="flex md:w-7/12 w-full md:my-0 my-3 md:px-3 p-0 items-center "><button  type="button" class="remove-assign border justify-center sm:min-w-removebuttonw sm:w-auto w-full flex items-center text-red text-sm font-urbanist font-bold border-red rounded-lg py-3 px-3"> <svg width="14" height="2" class="mr-3" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H0V0H14V2Z" fill="#F7284A"></path></svg>Remove Grade</button></div></div></div><div class="flex flex-wrap   items-center justify-between"> <div class=" md:w-5/12 md:my-0 sm:pr-3 pr-0 my-3 w-full"> <div class="dropdown-w-full w-full custmeselect relative"><select><option>Apply Concession to</option><option>One Time Charge</option><option>Yearly Charge</option><option>Monthly Charge</option><option>Miscellaneous Charge</option></select></div></div> <div class="sm:flex flex-wrap md:w-7/12 w-full md:my-0 my-3 md:px-3 p-0 items-center  "><button type="button" class="border justify-center sm:min-w-removebuttonw sm:w-auto w-full  flex items-center text-red text-sm    sm:mr-10 font-urbanist font-bold border-red rounded-lg py-3 px-3"><svg width="14" height="2" class="mr-3" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14 2H0V0H14V2Z" fill="#F7284A"></path></svg>Remove Grade</button><button   type="button"  class="xl:mt-0 mt-3 add-grades border sm:min-w-removebuttonw sm:w-auto w-full justify-center flex items-center text-light-green text-sm font-urbanist font-bold border-light-green rounded-lg py-3 px-3"> <svg width="14" height="14" class="mr-3" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 14V8H0V6H6V0H8V6H14V8H8V14H6Z" fill="#8DB776"></path> </svg> Add Grade </button></div> </div></div>';
            $('.itemser').append(new_newitems);
            newitems++;
             
            return false; 
            });
            
            $(document).on("click", ".romove-sebject", function () {
              if(newitems>1) {
                $(this).closest('.newitems').remove();
                newitems--;
              }
            return false;
            });
          });
 

          $(document) .ready (function(){
            var row=1;
            $(document).on("click", ".add-grades", function () { 
              var new_row ='';
              $('.itemser').append(new_newitems);
              newitems++;
               
              return false; 
              });
              
              $(document).on("click", ".romove-sebject", function () {
                if(newitems>1) {
                  $(this).closest('.newitems').remove();
                  newitems--;
                }
              return false;
              });
            });

 
            $(document) .ready (function(){
              var newrow=1;
              $(document).on("click", ".add-subject", function () { 
                var new_row ='<div class="flex newrow flex-wrap my-5 items-center justify-between"><div class=" md:w-1/2 md:my-0 pr-3 my-3 w-full"><div class="dropdown w-full relative"><button class="drowpdown-bt relative   inline-flex justify-between items-center w-full px-5 py-3 font-urbanist font-medium text-sm bg-white rounded-lg text-secondary border border-white-grey" type="button">Select Teacher  <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button><div class="drowpdown-content absolute  z-10  left-0 top-10 w-full "><div class="shadow-sm relative z-10  bg-white divide-y  divide-gray-100 rounded-lg border-dark-blue border w-full "><ul class="py-2 px-2.5 text-sm "><li><input id="onerowers" type="radio" value="onerowers" name="rediobutton" class="butchekd hidden peer"><label for="onerowers" class=" relative block px-4 py-2 peer-checked:bg-crystal-blue rounded-lg font-urbanist font-normal text-sm text-dark-black ">One Time Charge</label></li><li><input id="towrowers" type="radio" value="towrowers" name="rediobutton" class=" butchekd hidden peer"><label for="towrowers" class=" relative block px-4 py-2 peer-checked:bg-crystal-blue rounded-lg font-urbanist font-normal text-sm text-dark-black ">Tow</label></li><li><input id="threerowers" type="radio" value="threerowers" name="rediobutton" class="butchekd hidden peer"><label for="threerowers" class=" relative block px-4 py-2 peer-checked:bg-crystal-blue rounded-lg font-urbanist font-normal text-sm text-dark-black ">Three</label></li><li><input id="fourrowers" type="radio" value="fourrowers" name="rediobutton" class="butchekd hidden peer"><label for="fourrowers" class=" relative block px-4 py-2 peer-checked:bg-crystal-blue rounded-lg font-urbanist font-normal text-sm text-dark-black ">Four</label></li></ul></div></div></div></div><div class="flex md:w-1/2 w-full md:my-0 my-3 md:px-3 p-0 items-center justify-between"><button  type="button" class="remove-subject border justify-center min-w-removebuttonw flex items-center text-red text-sm font-urbanist font-bold border-red rounded-lg py-3 px-3"><svg width="14" height="2" class="mr-3" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H0V0H14V2Z" fill="#F7284A"></path></svg> Remove Grade</button></div></div>';
              $('.let-subject').append(new_newrow);
              newrow++;
               
              return false; 
              });
              
              $(document).on("click", ".remove-subject", function () {
                if(newrow>1) {
                  $(this).closest('.newrow').remove();
                  newrow--;
                }
              return false;
              });
            });

 

          $(document).ready(function() {
            var table = $('.subjectlist').DataTable( {
                scrollY:        "300px",
                scrollX:        true,
                scrollCollapse: true,
                paging:         false,
                fixedColumns:   {
                    left: 2,
                }
            } );
        } ); 


         $(document) .ready (function(){
          var checkelist=1;
          $(document).on("click", ".addchecklist", function () { 
            var new_checkelist =' <div class="flex flex-wrap checkelist my-4  items-center"><div class="lg:w-1/2 pr-5 w-full"><div class="flex items-center"><a href="javascript:void(0)" class="p-2 removechecklist"><svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 18.5C2.45 18.5 1.97933 18.3043 1.588 17.913C1.196 17.521 1 17.05 1 16.5V3.5C0.716667 3.5 0.479 3.40433 0.287 3.213C0.0956668 3.021 0 2.78333 0 2.5C0 2.21667 0.0956668 1.979 0.287 1.787C0.479 1.59567 0.716667 1.5 1 1.5H5C5 1.21667 5.096 0.979 5.288 0.787C5.47933 0.595667 5.71667 0.5 6 0.5H10C10.2833 0.5 10.521 0.595667 10.713 0.787C10.9043 0.979 11 1.21667 11 1.5H15C15.2833 1.5 15.5207 1.59567 15.712 1.787C15.904 1.979 16 2.21667 16 2.5C16 2.78333 15.904 3.021 15.712 3.213C15.5207 3.40433 15.2833 3.5 15 3.5V16.5C15 17.05 14.8043 17.521 14.413 17.913C14.021 18.3043 13.55 18.5 13 18.5H3ZM3 3.5V16.5H13V3.5H3ZM5 13.5C5 13.7833 5.096 14.0207 5.288 14.212C5.47933 14.404 5.71667 14.5 6 14.5C6.28333 14.5 6.521 14.404 6.713 14.212C6.90433 14.0207 7 13.7833 7 13.5V6.5C7 6.21667 6.90433 5.979 6.713 5.787C6.521 5.59567 6.28333 5.5 6 5.5C5.71667 5.5 5.47933 5.59567 5.288 5.787C5.096 5.979 5 6.21667 5 6.5V13.5ZM9 13.5C9 13.7833 9.096 14.0207 9.288 14.212C9.47933 14.404 9.71667 14.5 10 14.5C10.2833 14.5 10.521 14.404 10.713 14.212C10.9043 14.0207 11 13.7833 11 13.5V6.5C11 6.21667 10.9043 5.979 10.713 5.787C10.521 5.59567 10.2833 5.5 10 5.5C9.71667 5.5 9.47933 5.59567 9.288 5.787C9.096 5.979 9 6.21667 9 6.5V13.5Z" fill="#F7284A"></path></svg></a><h4 class=" font-urbanist font-medium  bg-soft-peach border border-white-grey text-secondary text-sm rounded-lg block w-full px-5 py-3 ml-10 mr-10">Grade Nursery</h4></div></div><div class=" lg:w-1/2 lg:my-0 my-3 w-full"><div class="xs:flex flex-wrap"><div class="flex items-center xl:mt-0 mt-3 mr-4"><input  checked id="inline-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"><label for="inline-checkbox" class="ml-2 text-sm font-medium text-dark-black font-urbanist">Section A</label></div><div class="flex items-center xl:mt-0 mt-3 mr-4"><input checked id="inline-2-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"><label for="inline-2-checkbox" class="ml-2 text-sm font-medium text-dark-black font-urbanist">Section B</label></div><div class="flex xl:mt-0 mt-3 items-center mr-4"><input checked id="inline-checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"><label for="inline-checked-checkbox" class="ml-2 text-sm font-medium text-dark-black font-urbanist">Section C</label></div><div class="flex xl:mt-0 mt-3 items-center"><input  id="inline-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"><label for="inline-checkbox" class="ml-2 text-sm font-medium text-dark-black font-urbanist">Section D</label></div></div></div></div>';
            $('.gread-list').append(new_checkelist);
            checkelist++;
             
            return false; 
            });
            
            $(document).on("click", ".removechecklist", function () {
              if(checkelist>1) {
                $(this).closest('.checkelist').remove();
                checkelist--;
              }
            return false;
            });
          });




$(document).ready(function () {
      $('.unselectedstudentstable').DataTable({
        scrollY: '100vh',
        padding: 0,
      });
});
 

$(document) .ready (function(){
  var assignlist=1;
  $(document).on("click", ".assign-subjectadd", function () { 
    var new_assignlist ='<div class="listfist my-5 assignlist"> <div class="flex items-start borafter relative bg-wash px-2 border-white-grey border py-4 rounded-lg"><a href="javascript:void(0)" class="removeassignlist p-3 w-16 "> <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 18.5C2.45 18.5 1.97933 18.3043 1.588 17.913C1.196 17.521 1 17.05 1 16.5V3.5C0.716667 3.5 0.479 3.40433 0.287 3.213C0.0956668 3.021 0 2.78333 0 2.5C0 2.21667 0.0956668 1.979 0.287 1.787C0.479 1.59567 0.716667 1.5 1 1.5H5C5 1.21667 5.096 0.979 5.288 0.787C5.47933 0.595667 5.71667 0.5 6 0.5H10C10.2833 0.5 10.521 0.595667 10.713 0.787C10.9043 0.979 11 1.21667 11 1.5H15C15.2833 1.5 15.5207 1.59567 15.712 1.787C15.904 1.979 16 2.21667 16 2.5C16 2.78333 15.904 3.021 15.712 3.213C15.5207 3.40433 15.2833 3.5 15 3.5V16.5C15 17.05 14.8043 17.521 14.413 17.913C14.021 18.3043 13.55 18.5 13 18.5H3ZM3 3.5V16.5H13V3.5H3ZM5 13.5C5 13.7833 5.096 14.0207 5.288 14.212C5.47933 14.404 5.71667 14.5 6 14.5C6.28333 14.5 6.521 14.404 6.713 14.212C6.90433 14.0207 7 13.7833 7 13.5V6.5C7 6.21667 6.90433 5.979 6.713 5.787C6.521 5.59567 6.28333 5.5 6 5.5C5.71667 5.5 5.47933 5.59567 5.288 5.787C5.096 5.979 5 6.21667 5 6.5V13.5ZM9 13.5C9 13.7833 9.096 14.0207 9.288 14.212C9.47933 14.404 9.71667 14.5 10 14.5C10.2833 14.5 10.521 14.404 10.713 14.212C10.9043 14.0207 11 13.7833 11 13.5V6.5C11 6.21667 10.9043 5.979 10.713 5.787C10.521 5.59567 10.2833 5.5 10 5.5C9.71667 5.5 9.47933 5.59567 9.288 5.787C9.096 5.979 9 6.21667 9 6.5V13.5Z" fill="#F7284A"></path></svg></a><div class="listyling w-11/12	"><div class="flex  flex-wrap items justify-between w-full"><div class="no "><div class="flex items-center"><p class=" font-ibmplex text-sm pl-2 font-medium text-secondary ">Subject</p> <div class="bg-soft-peach mx-5 text-center font-ibmplex text-sm font-semibold text-secondary rounded p-2.5 min-w-m60">  Subject name</div><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.699804 11.3008C0.516471 11.1174 0.424805 10.8841 0.424805 10.6008C0.424805 10.3174 0.516471 10.0841 0.699804 9.90078L4.5998 6.00078L0.699804 2.10078C0.516471 1.91745 0.424805 1.68411 0.424805 1.40078C0.424805 1.11745 0.516471 0.884114 0.699804 0.700781C0.883138 0.517448 1.11647 0.425781 1.3998 0.425781C1.68314 0.425781 1.91647 0.517448 2.0998 0.700781L6.6998 5.30078C6.7998 5.40078 6.8708 5.50911 6.9128 5.62578C6.95414 5.74245 6.9748 5.86745 6.9748 6.00078C6.9748 6.13411 6.95414 6.25911 6.9128 6.37578C6.8708 6.49245 6.7998 6.60078 6.6998 6.70078L2.0998 11.3008C1.91647 11.4841 1.68314 11.5758 1.3998 11.5758C1.11647 11.5758 0.883138 11.4841 0.699804 11.3008Z" fill="#5E44F8"/></svg></div></div><div class="sm:mx-3 mx-0 sm:my-0 my-3"> <div class="flex items-center"><p class=" font-ibmplex text-sm font-medium text-secondary ">Period Count</p><div class="dropdown relative mx-5"><button class="drowpdown-bt relative inline-flex justify-between items-center px-5 py-3 font-urbanist min-w-m35 font-medium text-sm bg-white rounded-lg text-secondary border border-white-grey" type="button">08 <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button><div class="drowpdown-content absolute  z-10  left-0 top-10 w-full "><div class="shadow-sm relative z-10  bg-white divide-y  divide-gray-100 rounded-lg border-dark-blue border w-full "><ul class="py-2 px-2.5 text-sm "><li><input id="onerowes" type="radio" value="onerowes" name="rediobutton" class="butchekd hidden peer"><label for="onerowes" class=" relative block px-4 py-2 peer-checked:bg-crystal-blue rounded-lg font-urbanist font-normal text-sm text-dark-black ">05</label> </li> <li><input id="towrowes" type="radio" value="towrowes" name="rediobutton" class=" butchekd hidden peer"><label for="towrowes" class=" relative block px-4 py-2 peer-checked:bg-crystal-blue rounded-lg font-urbanist font-normal text-sm text-dark-black ">08</label></li></ul></div></div></div><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.699804 11.3008C0.516471 11.1174 0.424805 10.8841 0.424805 10.6008C0.424805 10.3174 0.516471 10.0841 0.699804 9.90078L4.5998 6.00078L0.699804 2.10078C0.516471 1.91745 0.424805 1.68411 0.424805 1.40078C0.424805 1.11745 0.516471 0.884114 0.699804 0.700781C0.883138 0.517448 1.11647 0.425781 1.3998 0.425781C1.68314 0.425781 1.91647 0.517448 2.0998 0.700781L6.6998 5.30078C6.7998 5.40078 6.8708 5.50911 6.9128 5.62578C6.95414 5.74245 6.9748 5.86745 6.9748 6.00078C6.9748 6.13411 6.95414 6.25911 6.9128 6.37578C6.8708 6.49245 6.7998 6.60078 6.6998 6.70078L2.0998 11.3008C1.91647 11.4841 1.68314 11.5758 1.3998 11.5758C1.11647 11.5758 0.883138 11.4841 0.699804 11.3008Z" fill="#5E44F8"/></svg> </div></div><div class="no"><div class="flex items-center"> <p class=" font-ibmplex text-sm font-medium text-secondary ">Teacher</p><div class="bg-soft-peach mx-3 text-center font-ibmplex text-sm font-semibold text-secondary rounded p-2.5 min-w-m35">Teacher</div><button class="flex add-parallel  items-center font-ibmplex text-sm font-semibold text-dark-blue"><svg width="24" height="24" class="mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1518_69362)"><mask id="mask0_1518_69362" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="-1" y="-1" width="26" height="26"><path d="M11.4003 2.10213L2.20685 11.2946C2.01938 11.4822 1.91406 11.7365 1.91406 12.0016C1.91406 12.2668 2.01938 12.5211 2.20685 12.7086L11.4003 21.9016C11.4932 21.9945 11.6035 22.0682 11.7248 22.1185C11.8462 22.1688 11.9762 22.1947 12.1076 22.1947C12.239 22.1947 12.369 22.1688 12.4904 22.1185C12.6117 22.0682 12.722 21.9945 12.8148 21.9016L22.0068 12.7091C22.1943 12.5216 22.2996 12.2673 22.2996 12.0021C22.2996 11.737 22.1943 11.4827 22.0068 11.2951L12.8143 2.10163C12.7215 2.00873 12.6112 1.93503 12.4899 1.88475C12.3685 1.83447 12.2385 1.80859 12.1071 1.80859C11.9757 1.80859 11.8457 1.83447 11.7243 1.88475C11.603 1.93503 11.4927 2.00873 11.3998 2.10163L11.4003 2.10213Z" fill="white" stroke="white" stroke-width="4" stroke-linejoin="round"/><path d="M12.0221 7.76953V16.2415M7.78613 12.0055H16.2581" stroke="black" stroke-width="4" stroke-linecap="round"/></mask> <g mask="url(#mask0_1518_69362)"><path d="M0 0H24V24H0V0Z" fill="#5E44F8"/></g> </g><defs><clipPath id="clip0_1518_69362"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>Add Parallel</button></div> </div></div><div class="hidden contentlidt"><div class="mainlistwer pt-7"> <div class="pl-12 flex items-center flex-wrap"><p class="text-sm font-ibmplex font-medium text-secondary mr-3">Parallel Section</p> <div class="flex"><div class="flex items-center mr-4"><input checked="" id="inline-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"><label for="inline-checkbox" class="ml-2 text-sm font-medium text-dark-black font-urbanist"> A</label></div><div class="flex items-center mr-4"><input checked="" id="inline-2-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"> <label for="inline-2-checkbox" class="ml-2 text-sm font-medium text-dark-black font-urbanist"> B</label></div><div class="flex items-center mr-4"><input checked="" id="inline-checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"><label for="inline-checked-checkbox" class="ml-2 text-sm font-medium text-dark-black font-urbanist"> C</label></div><div class="flex items-center"><input id="inline-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"><label for="inline-checkbox" class="ml-2 text-sm font-medium text-dark-black font-urbanist"> D</label></div></div></div> </div><div class="mainlistwer pt-3 "><div class="flex flex-wrap items-center"><div class="md:w-3/4 w-full"><div class="sm:flex flex-wrap"><div class="flex items-center"><div class="pl-3 relative -top-10"><img src="./src/images/lsizeimg.png"></div><p class="pl-4 font-ibmplex text-sm font-medium text-secondary ">Parallel with Subject</p><div class="dropdown relative mx-5"><button class="drowpdown-bt relative inline-flex justify-between items-center px-5 py-3 font-urbanist   font-medium text-sm bg-white rounded-lg text-secondary border border-white-grey" type="button">Subject <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button><div class="drowpdown-content absolute  z-10  left-0 top-10 w-full "><div class="shadow-sm relative z-10  bg-white divide-y  divide-gray-100 rounded-lg border-dark-blue border w-full "><ul class="py-2 px-2.5 text-sm "><li><input id="onero" type="radio" value="onero" name="rediobutton" class="butchekd hidden peer"><label for="onero" class=" relative block px-4 py-2 peer-checked:bg-crystal-blue rounded-lg font-urbanist font-normal text-sm text-dark-black ">05</label></li><li><input id="towr" type="radio" value="towr" name="rediobutton" class=" butchekd hidden peer"><label for="towr" class=" relative block px-4 py-2 peer-checked:bg-crystal-blue rounded-lg font-urbanist font-normal text-sm text-dark-black ">08</label></li></ul></div></div></div><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.699804 11.3008C0.516471 11.1174 0.424805 10.8841 0.424805 10.6008C0.424805 10.3174 0.516471 10.0841 0.699804 9.90078L4.5998 6.00078L0.699804 2.10078C0.516471 1.91745 0.424805 1.68411 0.424805 1.40078C0.424805 1.11745 0.516471 0.884114 0.699804 0.700781C0.883138 0.517448 1.11647 0.425781 1.3998 0.425781C1.68314 0.425781 1.91647 0.517448 2.0998 0.700781L6.6998 5.30078C6.7998 5.40078 6.8708 5.50911 6.9128 5.62578C6.95414 5.74245 6.9748 5.86745 6.9748 6.00078C6.9748 6.13411 6.95414 6.25911 6.9128 6.37578C6.8708 6.49245 6.7998 6.60078 6.6998 6.70078L2.0998 11.3008C1.91647 11.4841 1.68314 11.5758 1.3998 11.5758C1.11647 11.5758 0.883138 11.4841 0.699804 11.3008Z" fill="#5E44F8"></path></svg></div><div class="flex items-center mx-3"><p class=" font-ibmplex text-sm font-medium text-secondary ">Teacher</p><div class="bg-soft-peach mx-3 text-center font-ibmplex text-sm font-semibold text-white-grey rounded p-2.5 min-w-m35">Unaasigned</div></div></div></div><div class="md:w-1/4 w-full"><div class="md:text-right text-left"><button class="text-sm font-urbanist font-bold text-red border border-red rounded-lg px-4 py-2.5">Remove </button></div></div></div> </div><div class="mainlistwer "><div class="flex flex-wrap items-center"> <div class="md:w-3/4 w-full"><div class="sm:flex flex-wrap"><div class="flex items-center"><div class="pl-3 relative -top-10"> <img src="./src/images/lsizeimg.png"></div> <p class="pl-4 font-ibmplex text-sm font-medium text-secondary ">Parallel with Subject</p><div class="dropdown relative mx-5"><button class="drowpdown-bt relative inline-flex justify-between items-center px-5 py-3 font-urbanist   font-medium text-sm bg-white rounded-lg text-secondary border border-white-grey" type="button">Subject <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <div class="drowpdown-content absolute  z-10  left-0 top-10 w-full "><div class="shadow-sm relative z-10  bg-white divide-y  divide-gray-100 rounded-lg border-dark-blue border w-full "> <ul class="py-2 px-2.5 text-sm "> <li><input id="oneroert" type="radio" value="oneroert" name="rediobutton" class="butchekd hidden peer"><label for="oneroert" class=" relative block px-4 py-2 peer-checked:bg-crystal-blue rounded-lg font-urbanist font-normal text-sm text-dark-black ">05</label></li><li> <input id="towrerty" type="radio" value="towrerty" name="rediobutton" class=" butchekd hidden peer"><label for="towrerty" class=" relative block px-4 py-2 peer-checked:bg-crystal-blue rounded-lg font-urbanist font-normal text-sm text-dark-black ">08</label> </li></ul></div></div> </div> <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.699804 11.3008C0.516471 11.1174 0.424805 10.8841 0.424805 10.6008C0.424805 10.3174 0.516471 10.0841 0.699804 9.90078L4.5998 6.00078L0.699804 2.10078C0.516471 1.91745 0.424805 1.68411 0.424805 1.40078C0.424805 1.11745 0.516471 0.884114 0.699804 0.700781C0.883138 0.517448 1.11647 0.425781 1.3998 0.425781C1.68314 0.425781 1.91647 0.517448 2.0998 0.700781L6.6998 5.30078C6.7998 5.40078 6.8708 5.50911 6.9128 5.62578C6.95414 5.74245 6.9748 5.86745 6.9748 6.00078C6.9748 6.13411 6.95414 6.25911 6.9128 6.37578C6.8708 6.49245 6.7998 6.60078 6.6998 6.70078L2.0998 11.3008C1.91647 11.4841 1.68314 11.5758 1.3998 11.5758C1.11647 11.5758 0.883138 11.4841 0.699804 11.3008Z" fill="#5E44F8"></path></svg></div><div class="flex items-center mx-3 "><p class=" font-ibmplex text-sm font-medium text-secondary ">Teacher</p><div class="bg-soft-peach mx-3 text-center font-ibmplex text-sm font-semibold text-white-grey rounded p-2.5 min-w-m35"> Unaasigned</div></div></div></div><div class="md:w-1/4 w-full"><div class="md:text-right text-left"> <button class="text-sm font-urbanist font-bold text-red border border-red rounded-lg px-4 py-2.5">Remove </button></div></div></div> </div></div></div></div> </div>';
    $('.assignlistmemengemt').append(new_assignlist);
    assignlist++;
     
    return false; 
    });
    
    $(document).on("click", ".removeassignlist", function () {
      if(assignlist>1) {
        $(this).closest('.assignlist').remove();
        assignlist--;
      }
    return false;
    });
  });




  $(document) .ready( function() {
    $('#classgreades').sortable();
  });


  




   /*********************************************************** */
jQuery(document).on('click', ".add-parallel",function(){ 
  if (jQuery(".contentlidt").hasClass("hidden")) {
    jQuery(this).removeClass("hidden"); 
    jQuery(".contentlidt").removeClass("hidden");
  } else {
    jQuery(".contentlidt").addClass("hidden");
    jQuery(this).addClass("hidden"); 
  }
}); 

$(document).ready(function() {
  // Add item to the list
  $('body').on('click', '.addsectiones', function() { 
    var newItem = $('<div class=" flex mr-5 removeaddsr items-center"><div class="m-0"><h2 class="text-sm font-bold text-dark-black font-urbanist ">Section E</h2></div><a href="javascript:void(0)" class="p-2 removess"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#F7284A"/></svg> </a> </div>');
    $('#addandremoveone').append(newItem);
  });
  // Delete item from the list
});

$(document).ready(function() {
  // Add item to the list
  $('body').on('click', '.addsectow', function() { 
    var newItem = $('<div class=" flex mr-5 removeaddsr items-center"><div class="m-0"><h2 class="text-sm font-bold text-dark-black font-urbanist ">Section E</h2></div><a href="javascript:void(0)" class="p-2 removess"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#F7284A"/></svg> </a> </div>');
    $('#addandremovetow').append(newItem);
  });
  
});
 

$(document).ready(function() {
  // Add item to the list
  $('body').on('click', '.buttonaddsthree', function() { 
    var newItem = $('<div class=" flex mr-5 removeaddsr items-center"><div class="m-0"><h2 class="text-sm font-bold text-dark-black font-urbanist ">Section E</h2></div><a href="javascript:void(0)" class="p-2 removess"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#F7284A"/></svg> </a> </div>');
    $('#addandremovethree').append(newItem);
  }); 
});

$(document).ready(function() {
  // Add item to the list
  $('body').on('click', '.buttonaddsfoure', function() { 
    var newItem = $('<div class=" flex mr-5 removeaddsr items-center"><div class="m-0"><h2 class="text-sm font-bold text-dark-black font-urbanist ">Section E</h2></div><a href="javascript:void(0)" class="p-2 removess"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#F7284A"/></svg> </a> </div>');
    $('.addandremovefoure').append(newItem);
  }); 
});


$(document).ready(function() {
  // Add item to the list
  $('body').on('click', '.buttonaddsfive', function() { 
    var newItem = $('<div class=" flex mr-5 removeaddsr items-center"><div class="m-0"><h2 class="text-sm font-bold text-dark-black font-urbanist ">Section E</h2></div><a href="javascript:void(0)" class="p-2 removess"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#F7284A"/></svg> </a> </div>');
    $('.addandremovefive').append(newItem);
  }); 
});


$(document).ready(function() {
  // Add item to the list
  $('body').on('click', '.buttonaddsix', function() { 
    var newItem = $('<div class=" flex mr-5 removeaddsr items-center"><div class="m-0"><h2 class="text-sm font-bold text-dark-black font-urbanist ">Section E</h2></div><a href="javascript:void(0)" class="p-2 removess"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#F7284A"/></svg> </a> </div>');
    $('.addandremovesix').append(newItem);
  }); 
});

$(document).ready(function() {
  // Add item to the list
  $('body').on('click', '.buttonaddsseven', function() { 
    var newItem = $('<div class=" flex mr-5 removeaddsr items-center"><div class="m-0"><h2 class="text-sm font-bold text-dark-black font-urbanist ">Section E</h2></div><a href="javascript:void(0)" class="p-2 removess"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#F7284A"/></svg> </a> </div>');
    $('.addandremoveseven').append(newItem);
  }); 
});
$(document).ready(function() {
  // Add item to the list
  $('body').on('click', '.buttonaddseight', function() { 
    var newItem = $('<div class=" flex mr-5 removeaddsr items-center"><div class="m-0"><h2 class="text-sm font-bold text-dark-black font-urbanist ">Section E</h2></div><a href="javascript:void(0)" class="p-2 removess"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#F7284A"/></svg> </a> </div>');
    $('.addandremoveight').append(newItem);
  }); 
});




$(document).ready(function() {
  // Add item to the list
  $('body').on('click', '.buttonaddsnine', function() { 
    var newItem = $('<div class=" flex mr-5  removeaddsr items-center"><div class="m-0"><h2 class="text-sm font-bold text-dark-black font-urbanist ">Section E</h2></div><a href="javascript:void(0)" class="p-2 removess"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#F7284A"/></svg> </a> </div>');
    $('.addandremovenine').append(newItem);
  }); 
});





$(document).ready(function() {
  // Add item to the list
  $('body').on('click', '.tenbuttons', function() { 
    var newItem = $('<div class=" flex mr-5 removeaddsr items-center"><div class="m-0"><h2 class="text-sm font-bold text-dark-black font-urbanist ">Section E</h2></div><a href="javascript:void(0)" class="p-2 removess"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#F7284A"/></svg> </a> </div>');
    $('.tenadd').append(newItem);
  }); 
});



// Delete item from the list
  jQuery(document).on("click", ".removeaddsr" , function() {
          jQuery(this).remove();    
          if(!$(this).is(" "))
          ('.addandremove .removeaddsr' + $(this).val());
          });




      




        

