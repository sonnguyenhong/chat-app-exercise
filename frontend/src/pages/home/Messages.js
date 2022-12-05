import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Form } from 'react-bootstrap';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

function Messages() {
    const [content, setContent] = useState('');

    const submitMessage = (e) => {
        e.preventDefault();
    };

    return (
        <Col xs={10} md={8} className="p-0">
            <div className="messages-box d-flex flex-column-reverse p-3">selectedChatMarkup</div>
            <div className="mb-4 px-3 py-2">
                <Form onSubmit={submitMessage}>
                    <Form.Group className="d-flex align-items-center m-0">
                        <Form.Control
                            type="text"
                            className="message-input rounded-pill bg-secondary border-0 px-4"
                            placeholder="Type a message ..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <FontAwesomeIcon icon={faPaperPlane} className="sent-icon" onClick={submitMessage} />
                    </Form.Group>
                </Form>
            </div>
        </Col>
    );
}

export default Messages;
