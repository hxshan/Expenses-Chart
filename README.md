# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot



### Links

- Solution URL: [https://github.com/hxshan/Expenses-Chart]
- Live Site URL: [https://expenseschartcomponet.netlify.app]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Chart.js](https://www.chartjs.org) - JS library

### What I learned
I learned a new library calls Chart.js where i can genrate all types of charts and customise them to my liking. 

```js
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
```


### Continued development
I would like to further learn this js library and use it moving forward and one day I can connect this component with and database and backed to create a full web aplication
