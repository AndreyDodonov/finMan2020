### Styleguides

WIP
##### Git Commit Messages
- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- When only changing documentation, include [ci skip] in the commit title
- Consider starting the commit message with an applicable emoji:

:pen: when improving the format/structure of the code

:racehorse: when improving performance

:hammer: when add logic

:iphone: when add adaptive to phones/tablets

:non-potable_water: when plugging memory leaks

:memo: when writing docs 

:penguin: when fixing something on Linux

:apple: when fixing something on macOS

:checkered_flag: when fixing something on Windows

:bug: when fixing a bug

:fire: when removing code or files

:green_heart: when fixing the CI build

:white_check_mark: when adding tests

:lock: when dealing with security

:arrow_up: when upgrading dependencies

:arrow_down: when downgrading dependencies

:shirt: when removing linter warnings

#### JavaScript Styleguide

All JavaScript must adhere to  [JavaScript Standard Style](https://standardjs.com "JavaScript Standard Style").

Prefer the object spread operator ({...anotherObj}) to Object.assign()
Inline exports with expressions whenever possible
// Use this:
export default class ClassName {

}

// Instead of:
class ClassName {

}
export default ClassName
Place requires in the following order:
Built in Node Modules (such as path)
Built in Atom and Electron Modules (such as atom, remote)
Local Modules (using relative paths)
Place class properties in the following order:
Class methods and properties (methods starting with static)
Instance methods and properties
Avoid platform-dependent code
