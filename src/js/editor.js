let editor;

// https://github.com/ajaxorg/ace/wiki/Configuring-Ace

window.onload = function() {
    editor = ace.edit("editor")
    editor.setTheme("ace/theme/pastel_on_dark")
    editor.session.setMode("ace/mode/javascript")
    editor.renderer.setOption("fontSize", 20)
}