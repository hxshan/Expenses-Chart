var canvasElement = document.querySelector(".bar-chart")
var total_text =document.querySelector(".total-text")

var days=[]
var amounts=[]
var colors=["hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(186, 34%, 60%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)"]
var hover_colors=[" hsl(10, 93%, 82%)"," hsl(10, 93%, 82%)","hsl(186, 65%, 82%)"," hsl(10, 93%, 82%)"," hsl(10, 93%, 82%)"," hsl(10, 93%, 82%)"," hsl(10, 93%, 82%)"]


//get data from json and plot the chart and also diplay total
async function GetData(){
    const response = await fetch("data.json")
    const data = await response.json();   

    for(var i =0;i<7;i++){
        days.push(data[i].day)
        console.log(days[i])
        amounts[i]=data[i].amount
        
    }
    generateChart();
    addTotal()
}

//get the total from the values taken from json
addTotal=()=>{
    var total = 0;
    for(var i =0;i<7;i++){      
        total+=amounts[i]
    }
    total_text.textContent=total;
}

// create the chart
let generateChart=()=>{
    var config ={
        type:"bar",
        data:{
            labels:days,
            datasets:[
                {
                    label:"",
                    data:amounts,
                    backgroundColor:colors,
                    borderRadius:2,
                   hoverBackgroundColor:hover_colors,
                }],
        
        },
        options:{
            responsive: true,
            scales:{
                y:{
                   display:false,
                  /* grid:{
                    display:false,
                    drawBorder:false,
                    drawOnChartArea:false,
                    drawTicks:false,
                   }  */
                },
                x:{
                    grid:{
                        display:false, 
                        drawBorder:false,
                        drawOnChartArea:false,
                    }
                }
            },
            plugins:{
                legend:{
                    display:false
                },
                tooltip:{
                    yAlign:"bottom",
                    displayColors:false,
                  
                },
            },
            
            interaction :{
                
            }

        }
       
    };
    var chart = new Chart(canvasElement,config);
}
GetData();








