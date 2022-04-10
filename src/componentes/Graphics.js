import React from 'react';
import {Line} from 'react-chartjs-2';
import '../assets/css/Graphics.css'; //importacion del archivo css

function Graphics(props) {
    const data={
        labels:["Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"],
        datasets:[
            {
            label:"Horas de Visualización por Mes",
            fill: false,
            backgroundColor: 'rgba(73,155,234,1)', //colores de la grafica
            borderColor:'rgba(73,155,234,1)',
            pointBorderColor:'rgba(73,155,234,1)',// puntos que se muestran en la grafica
            pointBorderWidth:1,
            pointHoverRadius:5,
            pointHoverBackgroundColor:'rgba(73,155,234,1)',
            pointHoverBorderColor:'rgba(73,155,234,1)',
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0.17, 19, 156, 357, 565, 1149] // data es la informacion de los meses
            }
        ]
    }
    return (
        <div className="containerGrafica"> {/* clase importada del archivo css */}
            <Line data={data}/>
        </div>
    );
}

export default Graphics;

