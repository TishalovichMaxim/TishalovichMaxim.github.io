import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


function FigureListQuickInfo(props) {
	const { t, i18n } = useTranslation();
    return (
        <>
			<div class="card bg-light mt-4 mb-3">
						<img class="card-img-top" src={props.writer.photo[0]}/>
				<div class="card-body">
					<h5 class="card-title">{t(props.writer.name)}</h5>
					<p class="card-text">{props.writer.smallDescription}</p>
					<Link to={"/writerPage/" + props.index}>{t("writer-link")}</Link>
						</div>
					</div>
        </>
    );
  }
	export default FigureListQuickInfo;