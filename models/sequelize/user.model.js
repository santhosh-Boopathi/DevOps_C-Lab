module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'user', // table name
		{
			// Model attributes are defined here
			id: {
				type: DataTypes.STRING(50),
				allowNull: false,
				primaryKey: true,
			},
			fullname: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
		},
		{
			tableName: 'user',// Other model options go here
			timestamps: true,
		}
	);

	return User;
};
