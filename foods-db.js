var FOODS = [
  // Proteins
  { name: 'Chicken Breast (cooked)', cal: 165, protein: 31, carbs: 0, fat: 3.6, serving: 150, unit: 'g' },
  { name: 'Turkey Breast (cooked)', cal: 135, protein: 29, carbs: 0, fat: 1.6, serving: 150, unit: 'g' },
  { name: 'Salmon', cal: 208, protein: 20.4, carbs: 0, fat: 13.4, serving: 140, unit: 'g' },
  { name: 'Tuna (canned in water)', cal: 116, protein: 25.5, carbs: 0, fat: 0.8, serving: 120, unit: 'g' },
  { name: 'Cod', cal: 82, protein: 18, carbs: 0, fat: 0.7, serving: 150, unit: 'g' },
  { name: 'Prawns', cal: 99, protein: 24, carbs: 0.2, fat: 0.3, serving: 150, unit: 'g' },
  { name: 'Eggs (whole)', cal: 143, protein: 12.6, carbs: 0.7, fat: 9.5, serving: 120, unit: 'g' },
  { name: 'Egg Whites', cal: 52, protein: 10.9, carbs: 0.7, fat: 0.2, serving: 150, unit: 'g' },
  { name: 'Beef Steak (lean)', cal: 187, protein: 29, carbs: 0, fat: 7, serving: 180, unit: 'g' },
  { name: 'Beef Mince (5% fat)', cal: 137, protein: 21, carbs: 0, fat: 5, serving: 150, unit: 'g' },
  { name: 'Pork Loin', cal: 172, protein: 27, carbs: 0, fat: 6, serving: 150, unit: 'g' },
  { name: 'Greek Yoghurt (0% fat)', cal: 59, protein: 10.3, carbs: 3.6, fat: 0.4, serving: 170, unit: 'g' },
  { name: 'Cottage Cheese', cal: 98, protein: 11.1, carbs: 3.4, fat: 4.3, serving: 150, unit: 'g' },
  { name: 'Whey Protein Powder', cal: 400, protein: 80, carbs: 8, fat: 7, serving: 30, unit: 'g' },
  { name: 'Tofu (firm)', cal: 83, protein: 9.4, carbs: 2.3, fat: 4.8, serving: 150, unit: 'g' },
  { name: 'Tempeh', cal: 193, protein: 20.3, carbs: 7.6, fat: 10.8, serving: 120, unit: 'g' },
  { name: 'Skyr', cal: 63, protein: 11, carbs: 4, fat: 0.2, serving: 170, unit: 'g' },

  // Carbs
  { name: 'White Rice (cooked)', cal: 130, protein: 2.7, carbs: 28.2, fat: 0.3, serving: 180, unit: 'g' },
  { name: 'Brown Rice (cooked)', cal: 123, protein: 2.7, carbs: 25.6, fat: 1, serving: 180, unit: 'g' },
  { name: 'Pasta (cooked)', cal: 157, protein: 5.8, carbs: 30.9, fat: 0.9, serving: 180, unit: 'g' },
  { name: 'Quinoa (cooked)', cal: 120, protein: 4.4, carbs: 21.3, fat: 1.9, serving: 185, unit: 'g' },
  { name: 'Oats (dry)', cal: 389, protein: 16.9, carbs: 66.3, fat: 6.9, serving: 50, unit: 'g' },
  { name: 'Granola', cal: 471, protein: 10, carbs: 64, fat: 20, serving: 50, unit: 'g' },
  { name: 'Sweet Potato (baked)', cal: 90, protein: 2, carbs: 20.7, fat: 0.2, serving: 200, unit: 'g' },
  { name: 'White Potato (baked)', cal: 93, protein: 2.5, carbs: 21.2, fat: 0.1, serving: 250, unit: 'g' },
  { name: 'Bread (white)', cal: 265, protein: 8.7, carbs: 49, fat: 3.2, serving: 30, unit: 'g' },
  { name: 'Bread (wholemeal)', cal: 247, protein: 12.5, carbs: 41.2, fat: 4.2, serving: 30, unit: 'g' },
  { name: 'Banana', cal: 89, protein: 1.1, carbs: 22.8, fat: 0.3, serving: 120, unit: 'g' },
  { name: 'Apple', cal: 52, protein: 0.3, carbs: 13.8, fat: 0.2, serving: 180, unit: 'g' },
  { name: 'Rice Cakes', cal: 387, protein: 8, carbs: 81, fat: 3, serving: 18, unit: 'g' },
  { name: 'Bagel', cal: 250, protein: 10, carbs: 49, fat: 1.5, serving: 90, unit: 'g' },
  { name: 'Wrap (plain tortilla)', cal: 310, protein: 8, carbs: 52, fat: 7, serving: 60, unit: 'g' },

  // Fats & Nuts
  { name: 'Avocado', cal: 160, protein: 2, carbs: 8.5, fat: 14.7, serving: 100, unit: 'g' },
  { name: 'Olive Oil', cal: 884, protein: 0, carbs: 0, fat: 100, serving: 15, unit: 'g' },
  { name: 'Peanut Butter', cal: 588, protein: 25, carbs: 20, fat: 50, serving: 20, unit: 'g' },
  { name: 'Almond Butter', cal: 614, protein: 21, carbs: 19, fat: 56, serving: 20, unit: 'g' },
  { name: 'Almonds', cal: 579, protein: 21.2, carbs: 21.6, fat: 49.9, serving: 30, unit: 'g' },
  { name: 'Walnuts', cal: 654, protein: 15.2, carbs: 13.7, fat: 65.2, serving: 30, unit: 'g' },
  { name: 'Cashews', cal: 553, protein: 18.2, carbs: 30.2, fat: 43.8, serving: 30, unit: 'g' },
  { name: 'Coconut Oil', cal: 892, protein: 0, carbs: 0, fat: 100, serving: 15, unit: 'g' },
  { name: 'Mixed Nuts', cal: 607, protein: 20, carbs: 18, fat: 54, serving: 30, unit: 'g' },

  // Dairy
  { name: 'Whole Milk', cal: 64, protein: 3.4, carbs: 4.7, fat: 3.6, serving: 250, unit: 'ml' },
  { name: 'Semi-skimmed Milk', cal: 47, protein: 3.6, carbs: 4.8, fat: 1.7, serving: 250, unit: 'ml' },
  { name: 'Skimmed Milk', cal: 34, protein: 3.6, carbs: 5, fat: 0.2, serving: 250, unit: 'ml' },
  { name: 'Cheddar Cheese', cal: 402, protein: 25, carbs: 1.3, fat: 33, serving: 30, unit: 'g' },
  { name: 'Mozzarella', cal: 252, protein: 24, carbs: 2.6, fat: 16, serving: 50, unit: 'g' },
  { name: 'Butter', cal: 717, protein: 0.9, carbs: 0.1, fat: 81.1, serving: 10, unit: 'g' },
  { name: 'Cream Cheese (light)', cal: 160, protein: 7, carbs: 6, fat: 11, serving: 30, unit: 'g' },

  // Vegetables
  { name: 'Broccoli', cal: 34, protein: 2.8, carbs: 6.6, fat: 0.4, serving: 100, unit: 'g' },
  { name: 'Spinach', cal: 23, protein: 2.9, carbs: 3.6, fat: 0.4, serving: 80, unit: 'g' },
  { name: 'Kale', cal: 49, protein: 4.3, carbs: 8.8, fat: 0.9, serving: 80, unit: 'g' },
  { name: 'Green Beans', cal: 31, protein: 1.8, carbs: 7, fat: 0.2, serving: 100, unit: 'g' },
  { name: 'Peppers (bell)', cal: 31, protein: 1, carbs: 6, fat: 0.3, serving: 100, unit: 'g' },
  { name: 'Tomatoes', cal: 18, protein: 0.9, carbs: 3.9, fat: 0.2, serving: 100, unit: 'g' },
  { name: 'Mushrooms', cal: 22, protein: 3.1, carbs: 3.3, fat: 0.3, serving: 100, unit: 'g' },
  { name: 'Carrots', cal: 41, protein: 0.9, carbs: 9.6, fat: 0.2, serving: 80, unit: 'g' },
  { name: 'Cucumber', cal: 15, protein: 0.7, carbs: 3.6, fat: 0.1, serving: 100, unit: 'g' },
  { name: 'Onion', cal: 40, protein: 1.1, carbs: 9.3, fat: 0.1, serving: 80, unit: 'g' },

  // Common Meals & Snacks
  { name: 'Protein Bar (average)', cal: 370, protein: 30, carbs: 35, fat: 10, serving: 60, unit: 'g' },
  { name: 'Grenade Fudged Up Bar', cal: 350, protein: 36, carbs: 32, fat: 13, serving: 60, unit: 'g' },
  { name: 'Nature Valley Protein (Peanut & Choc)', cal: 489, protein: 25.6, carbs: 27.5, fat: 28.3, serving: 40, unit: 'g' },
  { name: 'Dark Chocolate (70%)', cal: 598, protein: 7.8, carbs: 45.9, fat: 42.6, serving: 25, unit: 'g' },
  { name: 'Hummus', cal: 166, protein: 7.9, carbs: 14.3, fat: 9.6, serving: 50, unit: 'g' },
  { name: 'Baked Beans', cal: 78, protein: 4.7, carbs: 12.9, fat: 0.2, serving: 200, unit: 'g' },
  { name: 'Porridge with Milk (prepared)', cal: 84, protein: 3.3, carbs: 12.3, fat: 2.2, serving: 250, unit: 'g' },
  { name: 'Overnight Oats', cal: 126, protein: 5.2, carbs: 16.5, fat: 4.1, serving: 200, unit: 'g' },
  { name: 'Chicken Sandwich', cal: 235, protein: 17, carbs: 23, fat: 8, serving: 180, unit: 'g' },

  // Drinks
  { name: 'Orange Juice', cal: 45, protein: 0.7, carbs: 10.4, fat: 0.2, serving: 250, unit: 'ml' },
  { name: 'Protein Shake (typical)', cal: 80, protein: 15, carbs: 4, fat: 0.8, serving: 330, unit: 'ml' },
  { name: 'Oat Milk', cal: 46, protein: 1, carbs: 6.7, fat: 1.5, serving: 250, unit: 'ml' },
  { name: 'Almond Milk', cal: 13, protein: 0.4, carbs: 0.3, fat: 1.1, serving: 250, unit: 'ml' },
  { name: 'WillPowders Keto Protein Shake (12.5g + whole milk)', cal: 80, protein: 6.5, carbs: 4.7, fat: 4.4, serving: 262, unit: 'ml' },
  { name: 'WillPowders Bone Broth Shake (25g + 300ml whole milk)', cal: 101, protein: 8, carbs: 5.3, fat: 4.8, serving: 325, unit: 'ml' },
  { name: 'WillPowders Bone Broth Shake (25g + 300ml skimmed milk)', cal: 74.5, protein: 8, carbs: 5.3, fat: 1.7, serving: 325, unit: 'ml' },
  { name: 'Coca-Cola Zero', cal: 1, protein: 0, carbs: 0, fat: 0, serving: 330, unit: 'ml' },
  { name: 'Electrolyte Drink', cal: 24, protein: 0, carbs: 5.9, fat: 0, serving: 500, unit: 'ml' },
  { name: 'Itsu Ginger & Lime Zen\'Water', cal: 3, protein: 0.2, carbs: 0.2, fat: 0.2, serving: 250, unit: 'ml' },

  // Itsu Snacks
  { name: 'Itsu 60% Dark Chocolate Moons', cal: 535, protein: 7.5, carbs: 42.5, fat: 35, serving: 40, unit: 'g' },
  { name: 'Itsu Sweet Chilli Toasted Cashews', cal: 590, protein: 18, carbs: 30, fat: 42.5, serving: 40, unit: 'g' },

  // Homemade
  { name: 'Sourdough Cracker (homemade)', cal: 480, protein: 7.5, carbs: 53.9, fat: 25.6, serving: 4, unit: 'g' },
  { name: 'Salted Popcorn', cal: 500, protein: 9, carbs: 50, fat: 28, serving: 50, unit: 'g' },
  { name: 'Movies Star Popcorn Sel de Guérande (100g box)', cal: 416, protein: 10, carbs: 70, fat: 13, serving: 100, unit: 'g' },
  { name: 'Vico Lentil Crisps (Fromage du Jura)', cal: 458, protein: 13, carbs: 57, fat: 19, serving: 20, unit: 'g' },
  { name: 'M&S Olive Oil & Sea Salt Crisps', cal: 523, protein: 5.9, carbs: 52.1, fat: 31.4, serving: 40, unit: 'g' },
  { name: 'Romana Pizza Dough (1 ball)', cal: 245, protein: 6.3, carbs: 47.5, fat: 2.5, serving: 220, unit: 'g' },
  { name: 'Sourdough Neapolitan Dough (1 ball)', cal: 241, protein: 6.6, carbs: 50.2, fat: 0.7, serving: 250, unit: 'g' },
  { name: 'Fior di Latte Mozzarella', cal: 280, protein: 22, carbs: 0, fat: 22, serving: 70, unit: 'g' },
  { name: 'Mozzarella di Bufala', cal: 288, protein: 17, carbs: 0.4, fat: 24, serving: 90, unit: 'g' },

  // Fruit
  { name: 'Blueberries', cal: 57, protein: 0.7, carbs: 14.5, fat: 0.3, serving: 80, unit: 'g' },
  { name: 'Raspberries', cal: 52, protein: 1.2, carbs: 12, fat: 0.6, serving: 80, unit: 'g' },
  { name: 'Strawberries', cal: 32, protein: 0.7, carbs: 7.7, fat: 0.3, serving: 80, unit: 'g' },

  // Adam's Kitchen
  { name: 'Homemade Granola', cal: 503, protein: 12.8, carbs: 40.7, fat: 34.6, serving: 50, unit: 'g' },
  { name: 'Protein Bar (homemade)', cal: 443, protein: 21, carbs: 43, fat: 22, serving: 35, unit: 'g' },
  { name: 'Bean Mix (homemade)', cal: 135, protein: 8.2, carbs: 23.5, fat: 1, serving: 400, unit: 'g' },
  { name: 'Chocolate Chip Cookie (homemade)', cal: 473, protein: 7.5, carbs: 60, fat: 22.5, serving: 40, unit: 'g' },
  { name: 'WW Oat Choc Chip Cookie (Smitten)', cal: 496, protein: 7.4, carbs: 61, fat: 27, serving: 40, unit: 'g' },
  { name: 'Scrambled Eggs', cal: 148, protein: 10.6, carbs: 1.6, fat: 11, serving: 120, unit: 'g' },
  { name: 'Buttermilk Pancakes (half batch)', cal: 200, protein: 6, carbs: 28, fat: 7, serving: 225, unit: 'g' },

  // Branded / Specific
  { name: 'Greek Yoghurt (full fat)', cal: 97, protein: 9, carbs: 3.6, fat: 5, serving: 150, unit: 'g' },
  { name: 'WillPowders Bone Broth Protein', cal: 547, protein: 63.5, carbs: 11.2, fat: 19.8, serving: 25, unit: 'g' },
  { name: 'Dark Chocolate (80%)', cal: 580, protein: 12, carbs: 33, fat: 46, serving: 10, unit: 'g' },
  { name: 'Cachet Almonds & Orange Dark Choc', cal: 532, protein: 6.8, carbs: 43, fat: 35, serving: 8, unit: 'g' },
  { name: 'Sourdough Seeded Toast (1 slice)', cal: 260, protein: 9, carbs: 43, fat: 5, serving: 50, unit: 'g' },
  { name: 'Grass-Fed Butter (unsalted)', cal: 717, protein: 0.9, carbs: 0.1, fat: 81, serving: 10, unit: 'g' },
  { name: 'Streaky Bacon (cooked)', cal: 541, protein: 37, carbs: 1.4, fat: 42, serving: 25, unit: 'g' },
  { name: 'Maple Syrup', cal: 260, protein: 0, carbs: 67, fat: 0.1, serving: 60, unit: 'g' },
  { name: 'Green Tea', cal: 1, protein: 0, carbs: 0.3, fat: 0, serving: 250, unit: 'ml' },

  // French
  { name: 'Galette Complète (ham & cheese)', cal: 190, protein: 10, carbs: 17, fat: 9, serving: 220, unit: 'g' },
  { name: 'Crêpe au Nutella', cal: 290, protein: 5.5, carbs: 38, fat: 13, serving: 120, unit: 'g' },
  { name: 'Beignet au Chocolat', cal: 360, protein: 6, carbs: 42, fat: 19, serving: 80, unit: 'g' },

  // WillPowders variants
  { name: 'WillPowders Dark Protein Shake (12g + water)', cal: 25.2, protein: 2.9, carbs: 0.5, fat: 0.9, serving: 262, unit: 'ml' },
  { name: 'WillPowders Dark Protein Shake (12g + skimmed milk)', cal: 54.8, protein: 5.7, carbs: 5, fat: 1, serving: 312, unit: 'ml' },
  { name: 'WillPowders Dark Protein Shake (12g + whole milk)', cal: 86.3, protein: 6.1, carbs: 5.1, fat: 4.3, serving: 262, unit: 'ml' },

  // Dairy
  { name: 'Skimmed Milk (lait écrémé)', cal: 35, protein: 3.4, carbs: 4.8, fat: 0.2, serving: 300, unit: 'ml' },

  // Biscuits
  { name: 'McVities Dark Choc Digestive (1 biscuit)', cal: 500, protein: 6.5, carbs: 65.9, fat: 23.5, serving: 17, unit: 'g' },

  // Pasta meals
  { name: 'White Pasta (dry)', cal: 355, protein: 12.5, carbs: 71, fat: 1.5, serving: 125, unit: 'g' },

  // Eating out
  { name: 'itsu Katsu Curry Noodles', cal: 117, protein: 3.4, carbs: 14.9, fat: 4.3, serving: 385, unit: 'g' },
  { name: 'Zizzi Rustica Pepperoni Pizza', cal: 253, protein: 11, carbs: 32.3, fat: 9.3, serving: 390, unit: 'g' },
  { name: 'Côte Burger & Frites', cal: 274, protein: 13.7, carbs: 19, fat: 15.6, serving: 403, unit: 'g' },
  { name: 'Côte Steak Frites (5oz)', cal: 156, protein: 9.7, carbs: 9.2, fat: 8.6, serving: 360, unit: 'g' },
  { name: 'Giggling Squid Prawn Crackers', cal: 426, protein: 7.1, carbs: 53, fat: 16, serving: 40, unit: 'g' },
  { name: 'Giggling Squid Cloudy Lemonade', cal: 40, protein: 0, carbs: 10, fat: 0, serving: 300, unit: 'ml' },
  { name: 'Giggling Squid Beef Massaman Curry', cal: 234, protein: 5.1, carbs: 12.9, fat: 14.6, serving: 350, unit: 'g' },
  { name: 'Giggling Squid Jasmine Rice', cal: 131, protein: 2.7, carbs: 28.6, fat: 0.3, serving: 290, unit: 'g' },
  { name: 'Giggling Squid Chicken Satay Skewers', cal: 278, protein: 16, carbs: 20.7, fat: 14, serving: 150, unit: 'g' },
  { name: 'Giggling Squid Roti', cal: 352, protein: 4.1, carbs: 46.7, fat: 14.7, serving: 150, unit: 'g' },
  { name: 'Gail\'s Porridge (plain, oat milk)', cal: 98, protein: 3, carbs: 16, fat: 2.1, serving: 300, unit: 'g' },
  { name: 'Gail\'s Sourdough Toast (2 slices)', cal: 224, protein: 7.4, carbs: 49, fat: 0.9, serving: 90, unit: 'g' },
  { name: 'Tortilla Beef Burrito (rice, beans, lettuce, cheese, sour cream)', cal: 163, protein: 8.3, carbs: 17.7, fat: 6.6, serving: 575, unit: 'g' },
  { name: 'Tortilla Beef Burrito Bowl (rice, beans, lettuce, cheese, sour cream)', cal: 146, protein: 8.3, carbs: 13.7, fat: 6.6, serving: 515, unit: 'g' },
  { name: 'Santa Maria Margherita Pizza', cal: 240, protein: 10, carbs: 32, fat: 8.4, serving: 300, unit: 'g' },

  // Kings Head, Teddington
  { name: 'Kings Head Bread, Olives & Oil', cal: 160, protein: 2.5, carbs: 16, fat: 8, serving: 200, unit: 'g' },
  { name: 'Kings Head Burger & Fries', cal: 230, protein: 9, carbs: 17, fat: 11.6, serving: 500, unit: 'g' },
  { name: 'Kings Head Sticky Toffee Pudding & Ice Cream', cal: 288, protein: 3, carbs: 34.4, fat: 14.8, serving: 250, unit: 'g' },

  // Snacks & Supplements
  { name: 'MyProtein Brownie Chocolate Chip', cal: 383, protein: 30.7, carbs: 38.7, fat: 12.9, serving: 75, unit: 'g' },
  { name: 'M&S Baked Potato with Cheese & Beans', cal: 100, protein: 4.1, carbs: 15, fat: 2.5, serving: 435, unit: 'g' },

  // BA First Class Lounge (estimates)
  { name: 'BA Lounge Caesar Salad', cal: 143, protein: 4.3, carbs: 6.4, fat: 10, serving: 280, unit: 'g' },
  { name: 'BA Lounge Burger & Chunky Chips', cal: 220, protein: 8, carbs: 20, fat: 11, serving: 500, unit: 'g' },

  // Tinned / Convenience
  { name: 'John West Tuna Steak in Spring Water', cal: 97, protein: 23, carbs: 0, fat: 0.4, serving: 60, unit: 'g' },

  // Chocolate
  { name: 'Green & Blacks Dark Chocolate & Ginger', cal: 512, protein: 6, carbs: 51, fat: 30, serving: 11, unit: 'g' },
  { name: 'Forest Feast Dark Choc Salted Almonds (3 almonds)', cal: 566, protein: 12, carbs: 31, fat: 43, serving: 10, unit: 'g' },
  { name: 'Island Bakery Chocolate Ginger (1 biscuit)', cal: 449, protein: 4.7, carbs: 65, fat: 19, serving: 17, unit: 'g' }
];