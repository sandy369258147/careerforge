import { cpSync, readdirSync } from 'node:fs'
import path from 'node:path'
import ghpages from 'gh-pages'

const dist = path.resolve('dist')

await new Promise((resolve, reject) => {
  ghpages.publish(
    dist,
    {
      add: true,
      beforeAdd: (git) =>
        git
          .exec('rm', '--cached', '-r', '-f', '--ignore-unmatch', '--', '.')
          .then(() => git.exec('clean', '-f', '-d', '-x'))
          .then(() => {
            for (const entry of readdirSync(dist)) {
              cpSync(path.join(dist, entry), path.join(git.cwd, entry), {
                recursive: true,
              })
            }
          }),
    },
    (error) => (error ? reject(error) : resolve()),
  )
})
