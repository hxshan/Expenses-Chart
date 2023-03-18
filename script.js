var canvasElement = document.querySelector(".bar-chart")
var days=[]
var amounts=[]
var colors=["hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(186, 34%, 60%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)"]

async function GetData(){
    const response = await fetch("data.json")
    const data = await response.json();   

    for(var i =0;i<7;i++){
        days.push(data[i].day)
        console.log(days[i])
        amounts[i]=data[i].amount
        
    }
    generateChart();
}
generateChart=()=>{
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
                }],
        
        },
        options:{
            responsive: true,
            scales:{
                y:{
                    ticks:{
                        display:false
                    },
                   grid:{
                    display:false,
                    drawBorder:false,
                    drawOnChartArea:false,
                    drawTicks:false,
                   }  
                },
                x:{
                    grid:{
                        display:false, 
                        drawBorder:false,
                        
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
                }
            },
        }
       
    };
    var chart = new Chart(canvasElement,config);
}
GetData();








