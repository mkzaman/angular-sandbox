import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrls: ['./chart-component.component.scss']
})


export class ChartComponentComponent {
  chart : any;

  ngOnInit(){
    this.createChart();
  }

  createChart(): void {
    
    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart

      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 60
        }]
      },
      options: {
        aspectRatio:2.5,
        radius: '90%',
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const clickedIndex = elements[0].index;
            const selectedLabel = this.chart.data.labels[clickedIndex];
            const selectedValue = this.chart.data.datasets[0].data[clickedIndex];
  
            console.log('Selected:', selectedLabel, selectedValue);
        }
      }
    }
    });
  };

  onClick(event : any) : void{
    console.log(event);
  }
}
