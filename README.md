# astrotype

## How To Play

This game is adapted from the popular Facebook game called Typing Maniac.

There are words coming down from the top of your screen, and you have to clear them by typing the word and press Enter or Space before it reaches the base.

You have 10 lives, in a form of on switches, in each level, and it will be reset when you advance to the next level. Once all switches are turned off, the game is over.

You can advance to the next level when you have filled the bar required in that level.

There are words with different colors, and clearing these words will give you special ability:

- red-colored words give you FIRE, which clears all the words on the screen once you activate it
- blue-colored words give you ICE, which freezes the words for 6 seconds
- green-colored words give you HEAL, which reset all your lives
- purple-colored words give you SLOW, which slows down the falling speed of the words

To use these special abilities, you can type "FIRE", "ICE", "HEAL", and "SLOW" and press Enter or Space. You can only stack 7 abilities at any time, so choose wisely.
![astrotype intro](/assets/astrotype-2.png "astrotype intro")
![astrotype gameplay](/assets/astrotype-1.png "astrotype gameplay")

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)

## Approach Taken

- Creation of words are handled in JavaScript using the function `createWordDiv(level)`. It takes `level` input, which filters the `commonWords` array based on the minimum and maximum length per word (defined in `minMaxLength` variable). This will be used later on to randomize the word that the user need to type. `div` elements for the word are created using this function, and 40% of the time, word that carries the special abilities are created.
-

## Learning Points

#### Technical skills

1. I discovered dynamic styling while trying to find out how to make the word to fall faster. By using dynamic styling, I can add additional CSS Object Model to the DOM, create other and use it for each word that needs to fall faster
2. However, for the slow function in the game, dynamic styling might not be helpful because: 1. I need to slow down newly created words, too, 2. The words have to return back to its original falling speed. In CSS animation, you can animate the container to one direction at a faster pace and the element in the container to the other direction at a slower pace to make it seems like it slows down. In my case, I animated `.container` div which contains `.type-word` (the words that user need to type) to the opposite direction at a slower pace from the `.type-word`.

## Unsolved Problems

Yes, there are still bugs in a lot of places in my code (of course). Here are the list that I can find for now:

1. Slow function: The words are created with `animationend` event listener, which makes the word div disappear after the animation ended. This causes the base to seem like it is shifting up. This functionality can probably be implemented by dynamically modifying the class of the element, and more research need to be done

Please report an issue if you find other bugs!

## Further Improvement

1. Improved slow function
2. Leaderboard
3. More animations and sounds, especially when the word reaches the bottom and when the special abilities are activated
4. Different shapes for the words

## Epilogue

That's all for now. Stay tuned for more updates... if I ever have time 🥲
