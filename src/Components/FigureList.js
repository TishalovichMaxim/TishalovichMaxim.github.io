import React from "react";
import './FigureList.css';
import FigureListQuickInfo from "./FigureListQuickInfo";

function FigureList(props) {
		function change(val) {
			var check = document.querySelector('#elastic');
			var canLink = check ? check.href : "";
			if (canLink !== "") {
					val = val.trim().toLowerCase();
					let elasticItems = document.querySelectorAll('.elastic li');
					if(val !== '') {
							elasticItems.forEach(elem => {
								let elemH = elem.querySelector('h5');
								let elemtext = elemH.innerText.toLowerCase();
								if (elemtext.search(val) === -1) {
									elem.classList.add('hide');
									elemH.innerHTML = elemH.innerText;
								}
								else {
									elem.classList.remove('hide');
									let str = elemH.innerText;
									elemH.innerHTML = insertMark(str, elemtext.search(val), val.length);
								}
							});
					}
					else {
						elasticItems.forEach(elem => {
							elem.classList.remove('hide');
							let elemH = elem.querySelector('h5');
							elemH.innerHTML = elemH.innerText;
						})
					}	
			}
		}
		
		function insertMark(string, pos, len){
			return string.slice(0, pos)+'<mark>' + string.slice(pos, pos+len) + '</mark>' + string.slice(pos+len);
		}

    return (
        <>
					<div class="container w-50 mt-5 mb-5 bg-warning border border-info rounded">
						<div class="row mt-3">
							<form class="navbar-search">
								<div class="container">
									<div class="row">
										<div class="col-sm">
											<div class="form-group mt-3 mb-3">
												<input type="text" class="search-query" placeholder="Search" id="elastic" onChange={(event) => change(event.target.value)}/>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="row mb-2">
							<div class="mx-auto bg-secondary">
								<ul class="list-group list-group-flush elastic mt-2">
									{props.writers.map((wr,i) =>
										<li class="list-group-item border rounded">
											<FigureListQuickInfo writer={wr} index={i}/>
										</li>
									)}
								</ul>
							</div>
						</div>
					</div>
        </>
    );
  }
	export default FigureList;