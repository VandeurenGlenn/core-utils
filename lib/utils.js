import { dirname, join, sep } from 'path';
import { fileURLToPath } from 'url';
import {readdir} from 'fs/promises'

console.log(process.argv0);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const isWindows = /win32/.test(process.platform)
export const BIN_PATH = join(__dirname, '..', 'bin')

export const isInPath = (cmd) => process.env.PATH.includes(`${cmd};`)

export const shouldDownload = async () => {
  try {
    await readdir(BIN_PATH)
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
  console.log(download);
  const url = 'https://downloads.sourceforge.net/project/gnuwin32/coreutils/5.3.0/coreutils-5.3.0-bin.zip?ts=gAAAAABlR8YHT5hNdwfb_MkHyd-D4H142KjwxALoXNozekw5tJ3jvxNKPwUvXkV9TUDa6cHr0O4KF385MqNqVUB8k54AEK9BBw%3D%3D&r=https%3A%2F%2Fsourceforge.net%2Fprojects%2Fgnuwin32%2Ffiles%2Fcoreutils%2F5.3.0%2Fcoreutils-5.3.0-bin.zip%2Fdownload%3Fuse_mirror%3Dnetix%26download%3D'

  await download(url, './bin', {
    extract: true,
    filter: file => file.path.startsWith('bin'),
    map: file => {
      file.path = file.path.replace('bin', '')
      return file
    }
  })  
}