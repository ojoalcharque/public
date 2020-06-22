$(function() {
    "use strict";

		var ctx = document.getElementById("garea2020-001").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ["DESARROLLO HUMANO","ECONOMÍAS ALTERNATIVAS","EMERGENCIAS SANITARIAS Y DESASTRES NATURALES","INSTITUCIONALIDAD DEMOCRÁTICA","MEDIO AMBIENTE Y HÁBITAT","ORDENAMIENTO TERRITORIAL Y TRANSPORTE","OTROS ","RESILIENCIA"," SEGURIDAD Y SISTEMA ALIMENTARIO"],
					datasets: [{
						backgroundColor: [
							"#ffffff",
							"rgba(255, 255, 255, 0.70)",
							"rgba(255, 255, 255, 0.60)",
							"rgba(255, 255, 255, 0.50)",
							"rgba(255, 255, 255, 0.40)",
							"rgba(255, 255, 255, 0.30)",
							"rgba(255, 255, 255, 0.20)",
							"rgba(255, 255, 255, 0.10)"
						],
						data: [927,6,66,331,48,481,33,242],
						borderWidth: [0, 0, 0, 0]
					}]
				},
			options: {
				maintainAspectRatio: false,
			   legend: {
				 position :"bottom",	
				 display: false,
				    labels: {
					  fontColor: '#ddd',  
					  boxWidth:15
				   }
				}
				,
				tooltips: {
				  displayColors:false
				}
			   }
			});
			var ctx = document.getElementById("garea2019-001").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ["DESARROLLO HUMANO","ECONOMÍAS ALTERNATIVAS","INSTITUCIONALIDAD DEMOCRÁTICA","MEDIO AMBIENTE Y HÁBITAT","ORDENAMIENTO TERRITORIAL Y TRANSPORTE","OTROS ","RESILIENCIA"," SEGURIDAD Y SISTEMA ALIMENTARIO"],
					datasets: [{
						backgroundColor: [
							"#ffffff",
							"rgba(255, 255, 255, 0.70)",
							"rgba(255, 255, 255, 0.60)",
							"rgba(255, 255, 255, 0.50)",
							"rgba(255, 255, 255, 0.40)",
							"rgba(255, 255, 255, 0.30)",
							"rgba(255, 255, 255, 0.20)",
							"rgba(255, 255, 255, 0.10)"
						],
						data: [4281,8,1230,246,3356,294,905],
						borderWidth: [0, 0, 0, 0]
					}]
				},
			options: {
				maintainAspectRatio: false,
			   legend: {
				 position :"bottom",	
				 display: false,
				    labels: {
					  fontColor: '#ddd',  
					  boxWidth:15
				   }
				}
				,
				tooltips: {
				  displayColors:false
				}
			   }
			});



			var ctx = document.getElementById("garea2020-002").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ["COVID-19","DEPORTES","DESARROLLO TECNOLÓGICO E INVESTIGACIÓN","DESARROLLO TERRITORIAL","DESARROLLO TURÍSTICO","EDUCACIÓN Y CONOCIMIENTO","EMPRENDEDURISMO E INNOVACIÓN","EQUILIBRIO AMBIENTAL","GESTIÓN DE LAS CULTURAS","GESTIÓN INTEGRAL DE RIESGOS","GOBERNABILIDAD DEMOCRÁTICA","INCLUSIVA Y EQUITATIVA","INSTITUCIONALIDAD Y VALOR PÚBLICO","MOVILIDAD","OTROS","SALUD Y SANIDAD","SEGURIDAD ALIMENTARIA","SEGURIDAD CIUDADANA","VIVIENDA Y HÁBITAT"],
					datasets: [{
						backgroundColor: [
							"#ffffff",
							"rgba(255, 255, 255, 0.90)",
							"rgba(255, 255, 255, 0.85)",
							"rgba(255, 255, 255, 0.80)",
							"rgba(255, 255, 255, 0.75)",
							"rgba(255, 255, 255, 0.70)",
							"rgba(255, 255, 255, 0.65)",
							"rgba(255, 255, 255, 0.60)",
							"rgba(255, 255, 255, 0.55)",
							"rgba(255, 255, 255, 0.50)",
							"rgba(255, 255, 255, 0.45)",
							"rgba(255, 255, 255, 0.40)",
							"rgba(255, 255, 255, 0.35)",
							"rgba(255, 255, 255, 0.30)",
							"rgba(255, 255, 255, 0.25)",
							"rgba(255, 255, 255, 0.20)",
							"rgba(255, 255, 255, 0.15)",
							"rgba(255, 255, 255, 0.10)",
							"rgba(255, 255, 255, 0.05)",
						],
						data: [66,56,28,424,2,168,4,48,53,17,10,252,293,45,33,398,181,44,12],
						borderWidth: [0, 0, 0, 0]
					}]
				},
			options: {
				maintainAspectRatio: false,
			   legend: {
				 position :"bottom",	
				 display: false,
				    labels: {
					  fontColor: '#ddd',  
					  boxWidth:15
				   }
				}
				,
				tooltips: {
				  displayColors:false
				}
			   }
			});
			var ctx = document.getElementById("garea2019-002").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ["DEPORTES","DESARROLLO TECNOLÓGICO E INVESTIGACIÓN","DESARROLLO TERRITORIAL","DESARROLLO TURÍSTICO","EDUCACIÓN Y CONOCIMIENTO","EMPRENDEDURISMO E INNOVACIÓN","EQUILIBRIO AMBIENTAL","GESTIÓN DE LAS CULTURAS","GESTIÓN INTEGRAL DE RIESGOS","GOBERNABILIDAD DEMOCRÁTICA","INCLUSIVA Y EQUITATIVA","INSTITUCIONALIDAD Y VALOR PÚBLICO","MOVILIDAD","OTROS","SALUD Y SANIDAD","SEGURIDAD ALIMENTARIA","SEGURIDAD CIUDADANA","VIVIENDA Y HÁBITAT"],
					datasets: [{
						backgroundColor: [
							"#ffffff",
							"rgba(255, 255, 255, 0.90)",
							"rgba(255, 255, 255, 0.85)",
							"rgba(255, 255, 255, 0.80)",
							"rgba(255, 255, 255, 0.75)",
							"rgba(255, 255, 255, 0.70)",
							"rgba(255, 255, 255, 0.65)",
							"rgba(255, 255, 255, 0.60)",
							"rgba(255, 255, 255, 0.55)",
							"rgba(255, 255, 255, 0.50)",
							"rgba(255, 255, 255, 0.45)",
							"rgba(255, 255, 255, 0.40)",
							"rgba(255, 255, 255, 0.35)",
							"rgba(255, 255, 255, 0.30)",
							"rgba(255, 255, 255, 0.25)",
							"rgba(255, 255, 255, 0.20)",
							"rgba(255, 255, 255, 0.15)",
							"rgba(255, 255, 255, 0.10)",
							"rgba(255, 255, 255, 0.05)",
						],
						data: [454,41,3048,4,1227,4,246,332,74,19,146,1170,243,294,2122,389,442,65],
						borderWidth: [0, 0, 0, 0]
					}]
				},
			options: {
				maintainAspectRatio: false,
			   legend: {
				 position :"bottom",	
				 display: false,
				    labels: {
					  fontColor: '#ddd',  
					  boxWidth:15
				   }
				}
				,
				tooltips: {
				  displayColors:false
				}
			   }
			});

		
		
   });	 
   