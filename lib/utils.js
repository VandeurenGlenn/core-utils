import { dirname, join, sep } from 'path';
import { fileURLToPath } from 'url';
import {readFile, readdir} from 'fs/promises'
import { gnuwin32Version, url } from './constants.js';
import decompress from 'decompress';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const isWindows = /win32/.test(process.platform)
export const BIN_PATH = join(__dirname, '..', 'bin')
export const CACHE_PATH = join(__dirname, '..', '.cache')
export const MAN_PATH = join(__dirname, '..', 'man')

export const isInPath = (cmd) => process.env.PATH.includes(`${cmd};`)

export const shouldDownload = async () => {
  try {
    await readdir(CACHE_PATH)
    await readFile(join(CACHE_PATH, `coreutils-${gnuwin32Version}-bin.zip`))
    return false
  } catch (error) {
    return true
  }
}

export const shouldExtract = async () => {
  try {
    await readdir(BIN_PATH)
    return false
  } catch (error) {
    return true
  }
}

export const shouldExtractManual = async () => {
  try {
    await readdir(MAN_PATH)
    return false
  } catch (error) {
    return true
  }
}


export const getBinPathFor = (cmd) => {
  if (!isWindows) return cmd
  if (isInPath(cmd)) return cmd
  return join(BIN_PATH, `${cmd}.exe`)
}

export const execute = (cmd, params = []) =>
  execFileSync(getBinPathFor(cmd), params.join(' '))

export const downloadCommands = async () => {
  const download = (await import('download')).default

  await download(url, './.cache') 
}

export const extract = (dest, options) => decompress(join(CACHE_PATH, 'coreutils-5.3.0-bin.zip'), dest, options)