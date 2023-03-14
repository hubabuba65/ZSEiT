class Ingredient:
    def __init__(self, name, amount):
        self.name = name
        self.amount = amount
        
class Drink:
    def __init__(self, ingredients, volume):
        self.ingredients = ingredients
        self.volume = volume

class Barman:
    def createDrink(self, name1, amount1, name2, amount2, name3, amount3):
        total_amount = amount1 + amount2 + amount3
        proportion1 = amount1 / total_amount
        proportion2 = amount2 / total_amount
        proportion3 = amount3 / total_amount
        
        ingredients = [
            Ingredient(name1, amount1),
            Ingredient(name2, amount2),
            Ingredient(name3, amount3)
        ]
        
        drink = Drink(ingredients, total_amount)
        
        return drink
    
    def printDrink(self, drink):
        ingredient_names = [ingredient.name for ingredient in drink.ingredients]
        proportions = [ingredient.amount / drink.volume for ingredient in drink.ingredients]
        
        print("Składniki drinka to: ", end="")
        print(", ".join(ingredient_names), end=" ")
        print(f"w proporcjach {proportions[0]:.2f}, {proportions[1]:.2f}, {proportions[2]:.2f}.", end=" ")
        print(f"Jego pojemność to {drink.volume}ml.")


barman = Barman()

drink = barman.createDrink("Sok ananasowy", 100, "Likier Malibu", 50, "Mleko kokosowe", 100)

barman.printDrink(drink)