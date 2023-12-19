const { menuItemService } = require('../services');

const saveMenuItem = async (req, res) => {
    try {
        let payload = req.body;
        let menuItem = await menuItemService.saveMenuItem(payload);
        return res.status(201).json({ message: 'Menu Item Saved Successfully', data: menuItem });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getMenuItems = async (req, res) => {
    try {
        let menuItems = await menuItemService.getMenuItems();
        return res.status(200).json({ message: 'Menu Items Retrieved Successfully', data: menuItems });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getMenuItem = async (req, res) => {
    try {
        let menuItemId = req.params.id;
        let menuItem = await menuItemService.getMenuItem(menuItemId);
        return res.status(200).json({ message: 'Menu Item Retrieved Successfully', data: menuItem });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateMenuItem = async (req, res) => {
    try {
        let menuItemId = req.params.id;
        let payload = req.body;
        let menuItem = await menuItemService.updateMenuItem(menuItemId, payload);
        return res.status(200).json({ message: 'Menu Item Updated Successfully', data: menuItem });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteMenuItem = async (req, res) => {
    try {
        let menuItemId = req.params.id;
        let menuItem = await menuItemService.deleteMenuItem(menuItemId);
        return res.status(200).json({ message: 'Menu Item Deleted Successfully', data: menuItem });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    saveMenuItem,
    getMenuItems,
    getMenuItem,
    updateMenuItem,
    deleteMenuItem
};
