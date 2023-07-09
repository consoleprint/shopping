const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});
var db = {}
async function setupDB() {
    try {
        db.Product = sequelize.define('Product', {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            desc: {
                type: DataTypes.STRING,
                allowNull: false
            },
        });

        db.Order = sequelize.define('Order', {
            date: {
                type: DataTypes.DATE,
                allowNull: false
            },
        });
        db.Order.belongsToMany(db.Product, { through: 'OrderProduct' });

        await sequelize.sync({ force: true });
        await db.Product.create({ name: "Book", desc: "a readable product" });
        await db.Product.create({ name: "Phone", desc: "a rice phone" });
        await db.Product.create({ name: "Helmet", desc: "something protect your head" });

    } catch (error) {
        console.error(error);
    }
}

async function startServer() {
    try {
        await setupDB()
        const port = 3001
        const express = require('express')
        const app = express()

        app.get('/', (req, res) => {
            res.send('hello world')
        })
        app.get('/api/products', (req, res) => {
            db.Product.findAll().then(products => {
                res.json(products)
            })
        })
        app.get('/api/products/:id', (req, res) => {
            db.Product.findOne({
                where: {
                    id: req.params.id
                },
            }).then(p => {
                res.json(p)
            });
        })
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.error(error);
    }
}

startServer()