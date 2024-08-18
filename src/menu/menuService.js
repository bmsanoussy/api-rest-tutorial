const Dish = require('./menuModel');

const menuDishes = [];

exports.getAllDishes = () => {
    return menuDishes; 
};

exports.createDish = (dishData) => {
    const newDish = new Dish(dishData);
    newDish.id = menuDishes.length + 1;
    menuDishes.push(newDish);
    return menuDishes; 
};

exports.getDishById = (dishId) => {
    return menuDishes.find(dish => dish.id === dishId);
};

exports.updateDish = (id, dishData) => {
    const dishIndex = menuDishes.findIndex(dish => dish.id === id);

    if(dishIndex === -1) return null;

    const updatedDish = new Dish({
        id,
        ...menuDishes[dishIndex],
        ...dishData
    });

    menuDishes[dishIndex] = updatedDish;
    return updatedDish;
};

exports.deleteDish = (dishId) => {
    const dishIndex = menuDishes.findIndex(dish => dish.id === dishId);

    if(dishIndex === -1) return null;

    const dish = menuDishes.splice(dishIndex, 1);
    return dish[0]; 
};