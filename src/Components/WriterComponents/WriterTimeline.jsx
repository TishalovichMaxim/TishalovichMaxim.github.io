import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "./timeline.css";
import { Container } from "react-bootstrap";

function Timeline(props) {
    return (
			<Container>
				<MDBContainer className="py-5">
				<MDBRow>
					<MDBCol md="12">
						<div id="content">
							<ul className="timeline-1 text-black">
																{props.timeline.map((event, i) =>
								<li className="event" data-date={event.date}>
									<h4 className="mb-3">{event.name}</h4>
									<p>
																											{event.description}
									</p>
																		</li>
															)}
							</ul>

						</div>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</Container>
    );
}

export default Timeline;