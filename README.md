# astrotype

## How To Play

This game is adapted from the popular Facebook game called Typing Maniac.

Try playing the game [here](https://orlinromy.github.io/typing-game/)

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
- Displays on the sidebars are controlled in JavaScript
- Animations are done mostly on CSS, while some other animations (e.g. speed up falling speed) are defined using dynamic styling
- Popup and overlay are controlled in JavaScript using `openPopup()`, `closePopup()`, `openOverlay()`, and `removeOverlay()`

## Learning Points

Dynamic styling is used to store additional keyframes, which can be used to alter the animation. I thought I can just modify the `animation-duration` to create the speeding up effect for the falling word, but the animation resets and the word fall from the top of the screen instead of continuing from where it was.

However, for the slow function in the game, dynamic styling might not be helpful because: 1. I need to slow down newly created words, too, 2. The words have to return back to its original falling speed. In CSS animation, you can animate the container to one direction at a faster pace and the element in the container to the other direction at a slower pace to make it seems like it slows down. In my case, I animated `.container` div which contains `.type-word` (the words that user need to type) to the opposite direction at a slower pace from the `.type-word` to achieve the slowing down effect.

More research will definitely be needed to effectively

## Unsolved Problems

1. Slow function: The words are created with `animationend` event listener, which makes the word div disappear after the animation ended. This causes the base to seem like it is shifting up. This functionality can probably be implemented by dynamically modifying the class of the element, and more research need to be done

Do let me know if you find other bugs!

## Further Improvement

1. Improve slow function
2. Leaderboard
3. More animations and sounds, especially when the word reaches the bottom and when the special abilities are activated
4. Different shapes for the words

## Credit

- GA SEI-37 and instructors
- astronaut icon on popup: [Designed by catalyststuff / Freepik](https://www.freepik.com/free-vector/cute-astronaut-holding-boba-milk-tea-cartoon-vector-icon-illustration-space-food-drink-icon_10411711.htm#query=astronaut%20helmet&position=22&from_view=keyword)
- switch graphic: [here](https://pixabay.com/vectors/switch-button-power-off-on-toggle-297791/)
- Stack Overflow
- Google Fonts
- [CSS Box-Shadow](https://getcssscan.com/css-box-shadow-examples)
- [YouTube Tutorial](https://www.youtube.com/watch?v=AF6vGYIyV8M&ab_channel=EasyTutorials)
