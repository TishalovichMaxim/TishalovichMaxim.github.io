import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

const Videos = (props) => {
    return (
        <div class="center-block">
            {props.videoUrls.map((url, i) =>
                <Container>
									<Row>
										<Col>
									  		<iframe src={url} title="Writer video" allowFullScreen></iframe>
										</Col>
									</Row>
								</Container>
						)}
        </div>
    );
};

export default Videos;