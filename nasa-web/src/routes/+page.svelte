<div class="header-container">
	<h1>Cero C02: Hacia un futuro sostenible</h1>
</div>

<section class="planetary-boundaries">
	<h2 class="title">Limites planetarios</h2>
	<div class="timeline">
		<div class="timeline-item left">
			<div class="content">
				<p>
					Identificaron nueve límites planetarios, de los cuales consideran que ya hemos
					transgredido tres: el aumento de CO₂, la pérdida de biodiversidad y el ciclo del
					nitrógeno. Estos límites son interdependientes, lo que significa que superar uno puede
					provocar que otros también se vean afectados.
				</p>
			</div>
		</div>
		<div class="timeline-item right">
			<div class="content">
				<h2>Grafica de limites planetarios</h2>
				<div style="height: 400px;">
					<img
						src="/limites-planetarios.jpg"
						alt="limites planetarios"
						style="width: 575px; height: 400px;"
					/>
				</div>
			</div>
		</div>
		<div class="timeline-item center">
			<div class="content">
				<h2>Resolucion</h2>
				<p>
					La actividad humana ha alcanzado un punto crítico que podría provocar un cambio global
					repentino. Los científicos sugieren establecer límites biofísicos que no debemos exceder
					para evitar procesos no lineales con consecuencias catastróficas.
				</p>
			</div>
		</div>
	</div>
</section>
<section>
	<p>
		Al considerar los límites del planeta como un marco fundamental para la sostenibilidad, es
		crucial que estos principios se utilicen en contextos como naciones y sus respectivos estados.
	</p>
	<iframe
		title="CO2 Entidades mapa"
		src="http://127.0.0.1:5000/static/co2_entidades_map.html"
		frameborder="0"
		width="200"
		height="200"
	></iframe>
</section>

<section>
	<div>
		<p>Querétaro</p>
	</div>
	<div>
		<p>
			El informe de Calidad del Aire de 2021 del Gobierno del Estado de Querétaro indica que las
			concentraciones de CO2 y otros contaminantes varían según la estación, con un aumento notable
			durante los meses en los que hay más vehículos, las tendencias muestran un aumento en las
			emisiones debido a la actividad industrial y vehicular.
		</p>
	</div>
</section>

<section>
	<div>
		<p>Querétaro</p>
	</div>
	<iframe
		title="Queretaro mapa"
		src="http://127.0.0.1:5000/static/queretaro_map.html"
		frameborder="0"
		width="400"
		height="400"
	></iframe>
	<div>
		<p>
			Querétaro tiene la intención de reducir o compensar 2 millones de toneladas de CO2 para 2023.
			La dependencia estatal ha identificado a 400 empresas industriales que emiten directamente a
			la atmósfera y ha iniciado capacitaciones para ayudarlas a obtener el sello de compensación.
		</p>
	</div>
</section>

<section>
	<div>
		<p>CDMX</p>
	</div>
	<img src="CO2-Totales-Por-Ano-CDMX.jpg" alt="CO2 Totales por ano cdmx" />
	<div>
		<p>
			Se determinaron las emisiones adicionales de dióxido de carbono (CO₂) provocadas por las obras
			en el CETRAM Indios Verdes, que obstruyeron la vialidad en el norte de la Ciudad de México.
			Utilizando factores de emisión, se estimó el CO₂ emitido por los vehículos en el tránsito
			generado.
		</p>
	</div>
</section>

<section>
	<div>
		<p>CDMX</p>
	</div>
	<iframe src="http://127.0.0.1:5000/static/cdmx_map.html" frameborder="0" width="400" height="400"
	></iframe>
	<div>
		<p>
			Los resultados indican que, debido a una planificación ambiental y urbana deficiente, así como
			a la falta de medidas de prevención y control, se emitieron más de 17 millones de kilogramos
			de CO₂. Además, se estima que se perdieron más de 48 millones de horas-hombre en el tránsito y
			se consumieron adicionalmente más de 1.5 millones de litros de gasolina y más de 900 mil
			litros de diésel. Este crecimiento descontrolado de la ciudad y la falta de planeación
			ambiental tienen importantes repercusiones.
		</p>
	</div>
</section>
<section>
	<h2 class="title">Sectores con mayor contribución porcentual</h2>
	<hr />
	<h3>Los sectores con mayor contribución porcentual de emisiones de CO2 en el 2010 son:</h3>
</section>

<section>
	<div>
		<p>
			transporte, 31.1%; generación eléctrica, 23.3%; manufactura y construcción, 11.4%; consumo
			propio de la industria energética, 9.6%; conversión de bosques y pastizales, 9.2%, y otros
			(residencial, comercial y agropecuario), 6.7%.
		</p>
	</div>
</section>

<section>
	<p>
		Las emisiones de CO 2 fueron de 493,450.6 Gg en 2010, contribuyeron en 65.9% al total del
		inventario y tuvieron un incremento de 23.6% con respecto a 1990. Las emisiones de CO 2 en el
		país provienen principalmente de la quema de combustibles fósiles, USCUSS y Procesos
	</p>

	<p>
		Para 2010 en unidades de CO 2 equivalente,4 se estimaron en gigagramos (Gg) Las emisiones de CO
		2 fueron de 493,450.6 Gg en 2010, contribuyeron en 65.9% al total del inventario y tuvieron un
		incremento de 23.6% con respecto a 1990.
	</p>

	<img src="toneladas_co2_por_entidad.png" alt="Toneladas CO2 por entidad" />
	<img src="toneladas_de_gei.png" alt="Toneladas de GEI por entidad" />
</section>

<style lang="scss">
	.header-container {
		text-align: center;
		h1 {
			font-size: 4em;
		}
	}

	.planetary-boundaries {
		text-align: center;
		padding: 2rem;
	}

	.title {
		font-size: 4rem;
		margin-bottom: 2rem;
		color: #aaa; /* Color de título gris claro */
	}

	.timeline {
		position: relative;
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 0;

		&::before {
			content: '';
			position: absolute;
			width: 2px;
			background-color: #555;
			top: 0;
			bottom: 0;
			left: 50%;
			margin-left: -1px;
		}

		.timeline-item {
			padding: 1rem;
			position: relative;
			width: 50%;
			background-color: #222;
			box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
			border-radius: 8px;
			margin-bottom: 2rem;

			h2 {
				font-size: 1.5rem;
				color: #fff;
			}

			p {
				color: #bbb;
			}

			&.left {
				left: 0;
				text-align: right;
				margin-left: 0;
			}

			&.right {
				left: 50%;
				text-align: left;
				margin-left: 1rem;
			}

			&.center {
				left: 25%;
				width: 50%;
				text-align: center;
				margin-left: 0;
			}

			.content {
				position: relative;
				padding: 1rem;
			}
		}
	}
</style>
