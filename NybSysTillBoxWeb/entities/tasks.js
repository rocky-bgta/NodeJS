/**
 * Created by nybsys on 9/6/17.
 */

module.exports = (sequelize, DataType) => {

    const Tasks = sequelize.define("Tasks", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
         },
        title: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        done: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: (entities) => {
                Tasks.belongsTo(entities.Users);
                }
            }
        });
    return Tasks;
};