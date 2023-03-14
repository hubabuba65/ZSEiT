Barman class
The Barman class represents a bartender who can create drinks using specified ingredients.

Methods
`createDrink`
def createDrink(self, name1: str, amount1: int, name2: str, amount2: int, name3: str, amount3: int) -> Drink:
This method creates a Drink object using three ingredients and their respective amounts. It takes six arguments:

-name1: a string representing the name of the first ingredient
-amount1: an integer representing the amount of the first ingredient, in milliliters (ml)
-name2: a string representing the name of the second ingredient
-amount2: an integer representing the amount of the second ingredient, in milliliters (ml)
-name3: a string representing the name of the third ingredient
-amount3: an integer representing the amount of the third ingredient, in milliliters (ml)

The method returns a Drink object representing the created drink.

`printDrink`
def printDrink(self, drink: Drink) -> None:

This method prints out information about a Drink object in the following format:
Składniki drinka to: NAME1, NAME2, NAME3 w proporcjach PROPORTION1, PROPORTION2, PROPORTION3. Jego pojemność to VOLUME ml.
where NAME1, NAME2, and NAME3 are the names of the three ingredients in the drink, PROPORTION1, PROPORTION2, and PROPORTION3 are their respective proportions in the drink, and VOLUME is the total volume of the drink in milliliters (ml).

The method takes one argument:
-`drink`: a `Drink` object representing the drink to print information about
Ingredient class
The Ingredient class represents an ingredient used in a drink.

Attributes
`name`
A string representing the name of the ingredient.

`amount`
An integer representing the amount of the ingredient, in milliliters (ml).

Drink class
The Drink class represents a drink made up of three ingredients.

Attributes
`ingredient1`, `ingredient2`, `ingredient3`
Ingredient objects representing the three ingredients in the drink.

Methods
getProportions
where NAME1, NAME2, and NAME3 are the names of the three ingredients in the drink, PROPORTION1, PROPORTION2, and PROPORTION3 are their respective proportions in the drink, and VOLUME is the total volume of the drink in milliliters (ml).

The method takes one argument:

drink: a Drink object representing the drink to print information about
Ingredient class
The Ingredient class represents an ingredient used in a drink.

Attributes
`name`
A string representing the name of the ingredient.

`amount`
An integer representing the amount of the ingredient, in milliliters (ml).

Drink class
The Drink class represents a drink made up of three ingredients.

Attributes
`ingredient1`, `ingredient2`, `ingredient3`
Ingredient objects representing the three ingredients in the drink.

Methods
`getProportions`
def getProportions(self) -> Tuple[float, float, float]:

This method calculates the proportions of the three ingredients in the drink and returns them as a tuple of three floats.

`getVolume`
def getVolume(self) -> int:

This method calculates the total volume of the drink and returns it as an integer representing the volume in milliliters (ml).