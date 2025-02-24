import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise(async (resolve) => setTimeout(resolve, 1000));
  //throw new Error("Meals not found");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
