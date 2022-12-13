import React from "react";
import writersInfos from "./WriterComponents/WritersInfos";

function FigureListQuickInfo() {
		let writer = writersInfos.kupala;
    return (
        <>
					<div class="card">
						<img class="card-img-top" src={writer.image}/>
						<div class="card-body">
							<h5 class="card-title">Янка Купала</h5>
							<p class="card-text">Some quick information about writer.</p>
							<a href="#" class="btn btn-primary">Go on writer page</a>
						</div>
					</div>
        </>
    );
  }
	export default FigureListQuickInfo;