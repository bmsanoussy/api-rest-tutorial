const menuService = require('./menuService');

exports.getAllDishes = (req, res) => {
    const menuDishes = menuService.getAllDishes();
    res.send(menuDishes);
}

exports.createDish = (req, res) => {
    const newDish = menuService.createDish(req.body);
    res.status(201).send(newDish);
};

exports.getDish = (req, res) => {
    const dishId = parseInt(req.params.id);
    const dish = menuService.getDishById(dishId);
    if (!dish) {
        return res.status(404).send(`Plat non trouvé ${dishId}`);
    }
    res.status(200).send(dish);
};

exports.updateDish = (req, res) => {
    const dishId = parseInt(req.params.id);
    const updatedDish = menuService.updateDish(dishId, req.body);
    if (!updatedDish) {
        return res.status(404).send(`Plat non trouvé ${dishId}`);
    }
    res.status(200).send(updatedDish);
};

exports.deleteDish = (req, res) => {
    const dishId = parseInt(req.params.id);
    const deletedDish = menuService.deleteDish(dishId);
    if (!deletedDish) {
        return res.status(404).send(`Plat non trouvé ${dishId}`);
    }
    res.status(200).send(deletedDish);
};