let editor;

// https://github.com/ajaxorg/ace/wiki/Configuring-Ace

window.onload = function() {
    editor = ace.edit("editor")
    editor.setTheme("ace/theme/tomorrow_night")
    editor.session.setMode("ace/mode/javascript")
    editor.renderer.setOption("fontSize", 20)
}