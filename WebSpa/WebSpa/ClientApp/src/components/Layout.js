import {Layout,Menu,Breadcrumb,Icon} from "antd";
import React, {Component} from "react";
import {connect} from "dva";

import {Link,routerRedux} from "dva/router";

import './Layout.css';

const {
    Header, Content, Footer, Sider
} = Layout;

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
const BreadcrumbItem = Breadcrumb.Item;

class LayoutComponent extends Component {
    state = {
        collapsed: false,
    };

    gotopage = (item) => {
        //this.props.gotopage(path);
        this.props.gotopage(item.key);
    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <Menu theme={"dark"} defaultSelectedKeys={['1']} mode={"inline"}>
                        <MenuItem key="/" onClick={this.gotopage}>
                            <Icon type={'pie-chart'} />
                            <span>Home</span>
                        </MenuItem>
                        <MenuItem key="/counter" onClick={this.gotopage}>
                            <Icon type={'desktop'}/>
                            <span>Counter</span>
                        </MenuItem>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type={'user'}/><span>User</span></span>}
                        >
                            <MenuItem key='/fetch-data' onClick={this.gotopage}>fetch-data</MenuItem>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team"/><span>Team</span></span>}
                        >
                            <MenuItem key='6'>Team 1</MenuItem>
                            <MenuItem key='7'>Team 2</MenuItem>
                        </SubMenu>
                        <MenuItem key='9'>
                            <Icon type="file"/>
                            <span>File</span>
                        </MenuItem>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}/>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <BreadcrumbItem>User</BreadcrumbItem>
                            <BreadcrumbItem>Bill</BreadcrumbItem>
                        </Breadcrumb>
                        {this.props.children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch) {
    return ({
        gotopage : (path) => {
            dispatch(routerRedux.push(path));
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);
// import React, { Component } from 'react';
// import { Container } from 'reactstrap';
// import { NavMenu } from './NavMenu';
//
// export class Layout extends Component {
//   static displayName = Layout.name;
//
//   render () {
//     return (
//       <div>
//         <NavMenu />
//         <Container>
//           {this.props.children}
//         </Container>
//       </div>
//     );
//   }
// }
