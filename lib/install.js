import { downloadCommands, isWindows, shouldDownload } from './utils.js';

isWindows && await shouldDownload() && await downloadCommands()