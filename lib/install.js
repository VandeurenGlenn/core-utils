import { downloadCommands, extract, isWindows, shouldDownload, shouldExtract } from './utils.js';

if (isWindows)
  await shouldDownload() && await downloadCommands()
  await shouldExtract() && await extract('./bin', {
    filter: file => file.path.startsWith('bin'),
    map: file => {
      file.path = file.path.replace('bin', '')
      return file
    }
  })