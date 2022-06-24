import React, { useState } from 'react';
import { Form, Input, Row, Col } from 'antd';

function FirstTask() {
    const [data, setdata] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNum: '',
    });


    const handleChange = (e) => {
        const value = e.target.value;
        setdata({
            ...data,
            [e.target.name]: value,
        });
    };
    const handleSubmit = () => {
        const userData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNum: data.phoneNum,
        };
        console.log(userData);
    };
    return (<>
        <div className="container">
            <Form
                name="basic"
                initialValues={data}
                onFinish={handleSubmit}
                autoComplete="off"
            >
                <Row className="yor-info-row justify-between ">
                    <Col span={12} className="your-info-input responsive-width-set">
                        <Form.Item
                            label="First Name"

                            rules={[{
                                required: true,
                                message: 'Please enter First Name'
                            }
                            ]}
                        >
                            <Input maxLength="30" name="firstName" onChange={handleChange} value={data.firstName} />
                        </Form.Item>
                    </Col>
                    <Col span={12} className="your-info-input responsive-width-set">
                        <Form.Item
                            label="Last Name"

                            rules={[{ required: true, message: 'Please enter Last Name' }
                            ]}
                        >
                            <Input name="lastName" onChange={handleChange} value={data.lastName} />
                        </Form.Item>
                    </Col>
                    <Col span={12} className="your-info-input responsive-width-set">
                        <Form.Item
                            label="Email Address"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter your E-mail',
                                }]}
                        >
                            <Input name="email" onChange={handleChange} value={data.email} />
                        </Form.Item>
                    </Col>
                    <Col span={12} className="your-info-input responsive-width-set">
                        <Form.Item
                            label="Cell Phone Number"

                            rules={[{ required: true, message: 'Please enter Cell Number' }
                            ]}
                        >
                            <Input maxLength="10" name="phoneNum" onChange={handleChange} value={data.phoneNum} />
                        </Form.Item>
                    </Col>
                </Row>

                <div className="text-center">
                    <button type="submit" className="mt-4 btn btn-primary">Submit</button>
                </div>
            </Form>


            <h2>Output</h2>
            <h3>First Name:- {data.firstName}</h3>
            <h3>Last Name:- {data.lastName}</h3>
            <h3>Email:- {data.email}</h3>
            <h3>Phone No:- {data.phoneNum}</h3>
        </div>
    </>);
}

export default FirstTask;