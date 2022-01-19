import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    { title: "Lâmpadas", Image: "lampadas.svg" },
    { title: "Pilhas e Baterias", Image: "baterias.svg" },
    { title: "Papéis e Papelão", Image: "papeis-papelao.svg" },
    { title: "Resíduos Eletrônicos", Image: "eletronicos.svg" },
    { title: "Resídous Orgânicos", Image: "organicos.svg" },
    { title: "Óleo de Cozinha", Image: "oleo.svg" },
  ]);
}
