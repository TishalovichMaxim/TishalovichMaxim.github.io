import React from "react";
import { Link } from "react-router-dom";


function FigureListQuickInfo(props) {
    return (
        <>
			<div class="card">
						<img class="card-img-top" src={props.writer.photo[0]}/>
						<div class="card-body">
						<h5 class="card-title">{props.writer.name}</h5>
					<p class="card-text">{props.writer.smallDescription}</p>
					<Link to={"/writerPage/" + props.index}>полная информация</Link>
						</div>
					</div>
        </>
    );
  }
	export default FigureListQuickInfo;