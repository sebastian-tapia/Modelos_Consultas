module.exports=(sequelize,dataTypes)=>{
    const alias ='GENRE'
    const cols={
        id:{
            type:dataTypes.INTEGER.UNSIGNED,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        created_at:{
            type:dataTypes.DATE
            
        },
        updated_at:{
            type:dataTypes.DATE
            
        },
        name:{
            type:dataTypes.STRING(100),
            allowNull:false,
        },
        ranking:{
            type:dataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            unique:true
        },
        active:{
            type:dataTypes.BOOLEAN,
            allowNull:false,
        }

    }
    const config={
        tableName:'genres',
        timestamp:true,
        underscored:true 
 }
 const Genre=sequelize.define(alias,cols,config)
 return Genre
}