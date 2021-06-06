class SyntaxCompiler{
    constructor(syntax){
        this.syntax = syntax || {};
    }
    run(){
        var scripts = Array.from(document.scripts || document.getElementsByTagName("script") || document.querySelectorAll("script"));
    var HSs = scripts.filter(s => s.type == "text/es" || s.type == "text/emojiscript");
    HSs.forEach(script => {
        var JSCode;
        var HSString = script.innerHTML || script.innerText || script.textContent || "";
        Object.keys(HSSyntax).forEach(keyword => {
            var HSRegexp = new RegExp(keyword, "gmi");
            HSString = HSString.replace(HSRegexp, HSSyntax[keyword]);
        });
        var JSCode = document.createElement("script");
        JSCode.innerHTML = HSString;
        JSCode.setAttribute("type","text/javascript");
        script.replaceWith(JSCode);
    });
    }
}
