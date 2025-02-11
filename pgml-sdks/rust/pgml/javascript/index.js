const os = require("os")

const type = os.type()
const arch = os.arch()

try {
  const pgml = require("./index.node")
  module.exports = pgml
} catch (e) {
  if (type == "Darwin" && arch == "x64") {
    const pgml = require("./dist/x86_64-apple-darwin-index.node")
    module.exports = pgml
  } else if (type == "Windows" && arch == "x64") {
    const pgml = require("./dist/x86_64-pc-windows-gnu-index.node")
    module.exports = pgml
  } else if (type == "Linux" && arch == "x64") {
    const pgml = require("./dist/x86_64-unknown-linux-gnu-index.node")
    module.exports = pgml
  } else if (type == "Linux" && arch == "arm64") {
    const pgml = require("./dist/aarch64-unknown-linux-gnu-index.node")
    module.exports = pgml
  } else {
    console.log("UNSUPPORTED TYPE OR ARCH:", type, arch)
  }
}
