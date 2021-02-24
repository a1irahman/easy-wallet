import React from 'react';
import { Tabs, Icon, Layout } from 'antd';
import WalletsContent from './wallets.content.component';
// import StatsContent from './stats.content.component';
import TransactionsContent from './payments.content.component.jsx';

const { Header, Content } = Layout;

class App extends React.Component {


    render() {
        return (
            <Layout>
                <Header className="Header" style={{ backgroundColor: 'ghostwhite' }}>
                    <img style={{ marginTop: '10px', height: '40px', width: 'auto', float: 'left', marginRight: '18px' }}
                        src="./images/Bitcoin-Logo.png"
                        alt="Bitcoin Logo" />

                    <h3> Easy Wallet </h3>
                </Header>
                <Content>
                    <div className="App">
                        <Tabs defaultActiveKey="2" style={{ padding: '16px' }}>
                            {/* <Tabs.TabPane tab={<span><Icon type="line-chart" />Price Charts</span>} key="1">
                                <StatsContent />
                            </Tabs.TabPane> The API here is deprecated, will update soon! */ }
                            <Tabs.TabPane tab={<span><Icon type="wallet" />Wallets</span>} key="2">
                                <WalletsContent />
                            </Tabs.TabPane>
                            <Tabs.TabPane tab={<span><Icon type="credit-card" />Payments</span>} key="3">
                                <TransactionsContent />
                            </Tabs.TabPane>
                        </Tabs>
                    </div>
                </Content>
            </Layout>

        );
    }
}

export default App;
