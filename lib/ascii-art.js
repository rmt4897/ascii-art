const {CompositeDisposable} = require('atom')

module.exports = {
  subscriptions: null,

  activate () {
    this.subscriptions = new CompositeDisposable()
    this.subscriptions.add(atom.commands.add('atom-workspace',
      {'ascii-art:convert': () => this.convert()})
    )
  },

  deactivate () {
    this.subscriptions.dispose()
  },

  convert() {
    // console.log('Convert text!')
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
    editor.insertText('Hello, World!')
    }
  }
}
