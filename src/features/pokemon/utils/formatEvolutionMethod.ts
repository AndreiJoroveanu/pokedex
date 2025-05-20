import type { EvolutionDetail } from "pokedex-promise-v2";

import { capitalize } from "@/utils/capitalize.ts";

const formatEvolutionMethod = (details: EvolutionDetail[]) => {
  if (!details.length) return "";

  // prettier-ignore
  return details.map((detail) => {
    const conditions: string[] = [];

    // Evolution trigger lookup
    const triggerConditions: Record<string, string> = {
      "level-up": "when leveled up",
      "strong-style-move": "when leveled up", // Overqwil
      trade: "when traded",
      shed: "at level 20, alongside Ninjask", // Shedinja
      spin: "while holding a Sweet when the player spins and strikes a pose or gets dizzy", // Alcremie
      "tower-of-darkness": "when shown the Scroll of Darkness", // Urshifu Single Strike Style
      "tower-of-waters": "when shown the Scroll of Waters", // Urshifu Rapid Strike Style
      "three-critical-hits": "after landing three critical hits in a single battle", // Sirfetch'd
      "take-damage": "after taking 49 HP damage and traveling under the rock arch in Dusty Bowl", // Runerigus
      "recoil-damage": "after losing at least 294 HP from recoil damage without fainting", // Basculegion
    };

    // Apply trigger condition if it exists
    if (detail.trigger.name in triggerConditions) conditions.push(triggerConditions[detail.trigger.name]);

    // Level-based evolutions
    if (detail.min_level) conditions.push(`at level ${detail.min_level}`);

    // Item-based evolutions
    if (detail.item) conditions.push(`when exposed to a ${capitalize(detail.item.name)}`);
    if (detail.held_item) conditions.push(`while holding a ${capitalize(detail.held_item.name)}`);

    // Gender-based evolutions
    if (detail.gender === 1) conditions.push("while being female");
    else if (detail.gender === 2) conditions.push("while being male");

    // Stat-based evolutions
    if (detail.min_happiness) conditions.push(`with high happiness`);
    if (detail.min_affection) conditions.push(`with high affection`);
    if (detail.min_beauty) conditions.push(`with its Beautiful condition high enough`);

    // Move-based evolutions
    if (detail.known_move) conditions.push(`while knowing ${capitalize(detail.known_move.name)}`);
    if (detail.known_move_type) conditions.push(`while knowing a ${capitalize(detail.known_move_type.name)}-type move`);

    // Party-based evolutions
    if (detail.party_species) conditions.push(`with a ${capitalize(detail.party_species.name)} in the party`);
    if (detail.party_type) conditions.push(`with a ${capitalize(detail.party_type.name)}-type Pokémon in the party`);

    if (detail.trade_species) conditions.push(`for a ${capitalize(detail.trade_species.name)}`);
    if (detail.location) conditions.push(`in ${capitalize(detail.location.name)}`);
    if (detail.time_of_day) conditions.push(`during ${detail.time_of_day}`);
    if (detail.needs_overworld_rain) conditions.push(`when raining`);

    // Special case (Malamar)
    if (detail.turn_upside_down) conditions.push(`when leveled up while holding the console upside down`);

    return conditions.join(" ");
  })
  .join(" or ");
};
export default formatEvolutionMethod;
