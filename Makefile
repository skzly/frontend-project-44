say:
	echo "Hello, World"
	
install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

readline:
	node src/cli.js
	
lint:
	npx eslint .

fix:
	npx eslint . --fix

evengame:
	node bin/brain-even.js

calcgame:
	node bin/brain-calc.js

divisiongame:
	node bin/brain-maxdivision.js

progressiongame:
	node bin/brain-progression.js

primegame:
	node bin/brain-prime.js