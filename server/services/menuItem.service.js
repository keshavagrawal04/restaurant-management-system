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

const getMenuItem = async (menuItemId) => {
    try {
        const menuItems = await MenuItem.findById({ _id: menuItemId });
        return menuItems;
    } catch (error) {
        return false;
    }
};

const updateMenuItem = async ({ menuItemId, ...payload }) => {
    try {
        const menuItems = await MenuItem.findOneAndUpdate({ _id: menuItemId }, payload, { new: true });
        return menuItems;
    } catch (error) {
        return false;
    }
};

const deleteMenuItem = async (menuItemId) => {
    try {
        const menuItems = await MenuItem.findByIdAndDelete({ _id: menuItemId });
        return menuItems;
    } catch (error) {
        return false;
    }
};

module.exports = {
    saveMenuItem,
    getMenuItems,
    getMenuItem,
    updateMenuItem,
    deleteMenuItem,
}
