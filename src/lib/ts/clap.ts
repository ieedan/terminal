import { commands } from './commands';

export type stdout = (str: string) => void;
export type clapOptions = {
	history: string[];
	clearHistory: () => void;
};

const clap = (input: string, options: clapOptions, logger: stdout) => {
	if (input == '') return;
	const args: string[] = [];

	let i = 0;
	let start = 0;
	const escapeStack: string[] = [];

	while (i < input.length) {
		const char = input[i];
		if ((escapeStack.length == 0 && char == ' ') || i == input.length - 1) {
			if (i == input.length - 1) {
				args.push(input.slice(start, i + 1));
			} else {
				args.push(input.slice(start, i));
			}
			start = i + 1;
		} else if (char == '"') {
			const top = escapeStack[escapeStack.length - 1];

			if (top == char) {
				escapeStack.pop();
			} else {
				escapeStack.push(char);
			}
		}

		i++;
	}

	const cmd = commands[args[0]];

	if (!cmd) {
		logger(`Couldn't find command identified by ${args[0]}`);
		return;
	}

	cmd.fn({ args, options, logger });
};

export default clap;
