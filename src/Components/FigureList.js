import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './FigureList.css';
import FigureListQuickInfo from "./FigureListQuickInfo";

import { useTranslation } from 'react-i18next';

function FigureList(props) {

  	const { t, i18n } = useTranslation();

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
					<div class="container w-50 mt-5 mb-2 bg-dark border border-info rounded">
						<div class="row">
							<form class="navbar-search">
								<div class="container">
									<div class="row">
										<div class="col-sm">
											<div class="form-group mt-3 mb-3">
													<label for="mainList" class="form-label text-info">{t("label-writers-list")}</label>
												<input type="text" class="search-query" placeholder={t("search-field")} id="elastic" onChange={(event) => change(event.target.value)}/>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="row" id="mainList">
							<div class="mx-auto">
								<ul class="list-group list-group-flush elastic">
									{props.writers.map((wr,i) =>
										<Container>
											<Row>
												<Col>
													<li class="list-group-item border rounded bg-light mb-3">
														<FigureListQuickInfo writer={wr} index={i}/>
													</li>
												</Col>
											</Row>
										</Container>
									)}
								</ul>
							</div>
						</div>
					</div>
        </>
    );
  }
	export default FigureList;