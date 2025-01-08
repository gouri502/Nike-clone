import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <div
      style={{
        height: '100%', // Sidebar height matches the container
        width: '100%', // Full width of the sidebar container
        background: '#fff',
        overflowY: 'auto',
      }}
    >
      <Menu mode="inline" style={{ height: '100%', borderRight: 0 }} defaultOpenKeys={['sub1']}>
        <SubMenu key="gender" icon={<MailOutlined />} title="Gender">
          <Menu.Item key="1">Men</Menu.Item>
          <Menu.Item key="2">Women</Menu.Item>
          <Menu.Item key="3">Unisex</Menu.Item>
        </SubMenu>

        <SubMenu key="kids" icon={<AppstoreOutlined />} title="Kids">
          <Menu.Item key="4">Boys</Menu.Item>
          <Menu.Item key="5">Girls</Menu.Item>
        </SubMenu>

        <SubMenu key="price" icon={<SettingOutlined />} title="Shop by Price">
          <Menu.Item key="6">Under $50</Menu.Item>
          <Menu.Item key="7">$50 - $100</Menu.Item>
          <Menu.Item key="8">$100 - $200</Menu.Item>
          <Menu.Item key="9">Above $200</Menu.Item>
        </SubMenu>

        <SubMenu key="color" icon={<MailOutlined />} title="Color">
          <Menu.Item key="10">Red</Menu.Item>
          <Menu.Item key="11">Blue</Menu.Item>
          <Menu.Item key="12">Black</Menu.Item>
          <Menu.Item key="13">White</Menu.Item>
        </SubMenu>

        <SubMenu key="brand" icon={<AppstoreOutlined />} title="Brand">
          <Menu.Item key="14">Nike</Menu.Item>
          <Menu.Item key="15">Adidas</Menu.Item>
          <Menu.Item key="16">Puma</Menu.Item>
          <Menu.Item key="17">Reebok</Menu.Item>
        </SubMenu>

        <SubMenu key="sports" icon={<SettingOutlined />} title="Sports">
          <Menu.Item key="18">Football</Menu.Item>
          <Menu.Item key="19">Basketball</Menu.Item>
          <Menu.Item key="20">Tennis</Menu.Item>
          <Menu.Item key="21">Running</Menu.Item>
        </SubMenu>

        <SubMenu key="features" icon={<MailOutlined />} title="Features">
          <Menu.Item key="22">Waterproof</Menu.Item>
          <Menu.Item key="23">Breathable</Menu.Item>
          <Menu.Item key="24">Lightweight</Menu.Item>
          <Menu.Item key="25">Slip-resistant</Menu.Item>
        </SubMenu>

        <SubMenu key="technology" icon={<AppstoreOutlined />} title="Technology">
          <Menu.Item key="26">Smart Shoes</Menu.Item>
          <Menu.Item key="27">Sensor Technology</Menu.Item>
          <Menu.Item key="28">Energy Return</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Sidebar;
