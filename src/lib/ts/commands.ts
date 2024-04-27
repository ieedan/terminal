import { mode, setMode } from 'mode-watcher';
import type { clapOptions, stdout } from './clap';
import { get } from 'svelte/store';

export type Commands = {
	[key: string]: {
		fn: (options: { args: string[]; options: clapOptions; logger: stdout }) => Promise<void>;
	};
};

export const commands: Commands = {
	help: {
		fn: async ({ logger }) => {
			logger('Command list:');
			logger('');
			logger('    creator: info about the creator of this project');
			logger('    echo [msg]');
			logger('    date: displays the current date');
			logger('        --utc: displays as utc');
			logger('    mode: toggle the light/dark mode');
			logger('        --dark: change to dark mode');
			logger('        --light: change to light mode');
			logger('    clear/cls: clears the terminal');
			logger('    history: displays command history');
			logger('        --clr: clears command history');
			logger('');
			logger('More commands coming soon!');
		}
	},
	echo: {
		fn: async ({ args, logger }) => {
			const msg = args[1];

			if (!msg) {
				logger("Didn't find the message argument!");
				return;
			}

			logger(msg);
		}
	},
	date: {
		fn: async ({ args, logger }) => {
			if (args.includes('--utc')) {
				logger(new Date().toUTCString());
			} else {
				logger(new Date().toString());
			}
		}
	},
	creator: {
		fn: async ({ logger }) => {
			logger('This was created by Aidan Bleser on 4/26/2024');
			logger("It's just a fun little project to play around with when I'm bored.");
		}
	},
	mode: {
		fn: async ({ args }) => {
			if (args.includes('--dark')) {
				setMode('dark');
				return;
			} else if (args.includes('--light')) {
				setMode('light');
				return;
			}

			const currentMode = get(mode);

			if (currentMode == 'dark') {
				setMode('light');
			} else {
				setMode('dark');
			}
		}
	},
	history: {
		fn: async ({ args, options: { history, clearHistory }, logger }) => {
			if (args.includes('--clr')) {
				clearHistory();
			} else {
				history.forEach((entry) => {
					logger(`${entry}`);
				});
			}
		}
	}
};
