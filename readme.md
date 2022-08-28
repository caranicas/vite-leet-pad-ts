## VITE LEET PAD - TS

Your one stop shop to write and test typescipt code.

### Inspiration

I was really sick using the leet code editor to do problems, and or using an in-flight project repo to edit in comfort. I build this as way to edit code, and get more immedate feed back for tests, and keep them all in one place.

### Tooling

I built this using Vite. I didn't want to incur the bloat of a framework for this, but I also didn't want to struggle with the webpack configs for too much.

It uses the vanilla-ts vite stater, that was then modified to include jest and the accompanies ts libraries to faciliate testing.

### How to use

Make a new folder in the tests directory. Create your index file, mocks and test file. There is a BaseTest class you can extend from to make things more consistent.

For your inital testing you should modify the TestRunner Component. It is set up for HMR and console output. Once you are happy you can run the jest command to run any or all of your tests.
