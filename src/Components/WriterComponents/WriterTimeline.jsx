import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "./timeline.css";

function Timeline(props) {
    return (
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
    );
}

export default Timeline;