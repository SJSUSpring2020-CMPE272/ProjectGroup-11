import React, { Component } from 'react';
import Footer from './footer';
import Headers from './header';
import { Layout, Row, Col } from 'antd';
import "antd/dist/antd.css";


const { Content } = Layout;


class WelcomePage extends Component {
    constructor() {
        super();
        this.state = {
            redirect: ''
        };
    }

    componentDidMount() {
    }


    render() {

        return (
            <div>
                {this.state.redirect}
                <div>
                    <Row >
                        <Layout className="layout">
                            <Headers selectedKey={['1']} />
                            <Content>
                                <div style={{ background: '#fff' }}>
                                    <br></br>
                                    <Row>
                                        <Col span={14}>
                                            <img src={require('../images/music.jpg')} style={{ maxWidth: '100%', minHeight: '100%', maxHeight: '0%' }} />
                                        </Col>

                                        <Col span={2}></Col>
                                        <Col span={6}>
                                            <h1>Welcome!!</h1>

                                        </Col>
                                    </Row>
                                    <Row>

                                    </Row>
                                </div>

                            </Content>
                            <Footer />
                        </Layout>
                    </Row>
                </div>
            </div>
        );
    }
}

export default WelcomePage;