import Knex from 'knex';
export async function up(knex: Knex){
     //Create table items
return knex.schema.createTable('items',table=>{
    table.increments('id').primary();
    table.string('image').notNullable;
    table.string('title').notNullable;
 
   
})

}

export async function down(knex:Knex){
//voltar atras deletando a tabela criada
return knex.schema.dropTable('items');

}