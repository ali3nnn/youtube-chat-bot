# Get started

1. Run `npm ci`
2. Go to `/Users/alexbarbu/PersonalProjects/youtube-chat-bot/node_modules/@autoclickpro/rpa/dist/index.cjs` and update as follows:

   - from: var nutJs = require('@nut-tree/nut-js');
   - to: var nutJs = require('@nut-tree-fork/nut-js');

   - from: var _ = require('lodash-es');
   - to: var _ = require('lodash');

   - go to line 451 and add this method in return object:
       `async getMouse() {
         return nutJs.mouse.getPosition()
       }`

3. Run `npm run pos` to find you cursor getPosition
4. Put the cursor on the textbox.
5. Stop the script
6. Copy the x and y position and update in index.js the constants: textBoxPos and sendButtonPos
7. You can update the messages array as you wish
8. Happy spamming!
