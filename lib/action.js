"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "@/lib/meals";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  "use server";
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    image: formData.get("image"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    isInvalidText(meal.creator) ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "invalid input." };
  }
  await saveMeal(meal);
  redirect("/meals");
}
