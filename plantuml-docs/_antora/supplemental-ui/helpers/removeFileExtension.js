'use strict'

module.exports = (string) => {
  return string.replace(/\.[^/.]+$/, "")
}
