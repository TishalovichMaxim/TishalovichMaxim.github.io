import React from "react";
import './FigureList.css';

function FigureList() {
		function change(val) {
			var check = document.querySelector('#elastic');
			var canLink = check ? check.href : "";
			if (canLink !== "") {
					val = val.trim().toLowerCase();
					let elasticItems = document.querySelectorAll('.elastic li');
					if(val !== '') {
							elasticItems.forEach(elem => {
								let elemtext = elem.innerText.toLowerCase();
								if (elemtext.search(val) === -1) {
									elem.classList.add('hide');
									elem.innerHTML = elem.innerText;
								}
								else {
									elem.classList.remove('hide');
									let str = elem.innerText;
									elem.innerHTML = insertMark(str, elemtext.search(val), val.length);
								}
							});
					}
					else {
						elasticItems.forEach(elem => {
							elem.classList.remove('hide');
							elem.innerHTML = elem.innerText;
						})
					}	
			}
		}
		
		function insertMark(string, pos, len){
			return string.slice(0, pos)+'<mark>' + string.slice(pos, pos+len) + '</mark>' + string.slice(pos+len);
		}

    return (
        <>
					<div class="container w-25 mt-5 border-top border-bottom border-info rounded">
						<div class="row mt-3">
							<form class="navbar-search">
								<div class="container">
									<div class="row">
										<div class="col-sm">
											<div class="form-group">
												<input type="text" class="search-query" placeholder="Search" id="elastic" onChange={(event) => change(event.target.value)}/>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="row mb-2">
							<div class="mx-auto">
								<ul class="list-group list-group-flush elastic">
									<li class="list-group-item">Янка Купала</li>
									<li class="list-group-item">Якуб Колас</li>
									<li class="list-group-item">Василь Быков</li>
									<li class="list-group-item">Иван Шамякин</li>
									<li class="list-group-item">Рыгор Барадулин</li>
									<li class="list-group-item">Иван Мележ</li>
									<li class="list-group-item">Янка Брыль</li>
								</ul>
							</div>
						</div>
					</div>
        </>
    );
  }
	export default FigureList;