import React from 'react';
import { Radio, Input, Row, Col } from 'antd';
import { Button } from 'antd';
import { BackArrowSVG } from '../../utilities/svg';
import { useNavigate } from 'react-router-dom';
import { verificationPoints } from '../../utilities/data';

const { TextArea } = Input;



const VerificationForm: React.FC = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = React.useState<Record<string, string>>({});

    const handleRadioChange = (key: string, value: string) => {
        setFormState(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="VerificationPoints">
            <Row justify="center">
                <Col lg={16} md={16} sm={24} xs={24} >
                    <div className="backarrow">
                        <div className="backarrow-svg" onClick={() => navigate(-1)}><BackArrowSVG /></div>
                        <h6>Back</h6>
                    </div>

                    <div className="VerificationPoints-container ">
                        <div className="VerificationPoints-title">
                            <h2>Verification Points</h2>
                            <ul>
                                <li>Verified</li>
                                <li>Not-verified</li>
                            </ul>
                        </div>
                        {verificationPoints.map((point, index) => (
                            <div className="VerificationPoints-radio" key={index}>
                                <div className="VerificationPoints-radio-title">{point}</div>
                                <div className="VerificationPoints-radio-input">
                                    <Radio.Group
                                        onChange={(e) => handleRadioChange(point, e.target.value)}
                                        value={formState[point]}
                                    >
                                        <Radio value="Verified"></Radio>
                                        <Radio value="Not-verified"></Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                        ))}


                        <div className="VerificationPoints-comment">
                            <h4>Comment</h4>
                            <TextArea
                                rows={4}
                                placeholder="Write description here..."
                                value={formState['comment'] || ''}
                                onChange={(e) => setFormState(prev => ({ ...prev, comment: e.target.value }))}
                            />
                        </div>

                        <div className="VerificationPoints-comment">
                            <h4>Attach document</h4>
                            <TextArea
                                rows={4}
                                placeholder="Write description here..."
                                value={formState['comment'] || ''}
                                onChange={(e) => setFormState(prev => ({ ...prev, comment: e.target.value }))}
                            />
                        </div>
                        <div className="VerificationPoints-button">
                            <Button className="btn-approve" type="primary">
                                Approve
                            </Button>
                            <Button className="btn-reject" type="primary">
                                Reject
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default VerificationForm;
