const MenuItem = require('../models/menuItem.model');

const saveMenuItem = async (payload) => {
    try {
        const menuItem = new MenuItem(payload);
        await menuItem.save();
        return menuItem;
    } catch (error) {
        return false;
    }
};

const getMenuItems = async (payload) => {
    try {
        const menuItems = await MenuItem.find();
        return menuItems;
    } catch (error) {
        return false;
    }
};

const getMenuItem = async (payload) => {
    try {
        const menuItems = await MenuItem.find();
        return menuItems;
    } catch (error) {
        return false;
    }
};
