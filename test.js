import install from './lib/install.js'
import { isWindows, shouldDownload } from './lib/utils.js'
import { execSync } from 'child_process'

const fail = (text) => {
  console.warn(text)
  process.exit(1)
}

if (isWindows) {
  let _shouldDownload = await shouldDownload()
  if (!_shouldDownload) fail('shouldDonwload needs to be true')
  await install()
  _shouldDownload = await shouldDownload()
  if (!_shouldDownload) fail('shouldDonwload needs to be false')

  execSync('rm -rf ./bin')
  if (!_shouldDownload) fail('bin removed, shouldDonwload needs to be true')
}
