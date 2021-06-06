class SyntaxCompiler{
    constructor(type, syntax){
        this.type = type || "custom";
        this.syntax = syntax || {};
        if(typeof(this.syntax) !== "string"){this.type="custom"}
    }
    run(){
        var scripts = Array.from(document.scripts || document.getElementsByTagName("script") || document.querySelectorAll("script"));
    var HSs = scripts.filter(s => s.type == this.type);
    HSs.forEach(script => {
        var JSCode;
        var HSString = script.innerHTML || script.innerText || script.textContent || "";
        Object.keys(this.syntax).forEach(keyword => {
            var HSRegexp = new RegExp(keyword, "gmi");
            HSString = HSString.replace(HSRegexp, this.syntax[keyword]);
        });
        var JSCode = document.createElement("script");
        JSCode.innerHTML = HSString;
        JSCode.setAttribute("type","text/javascript");
        script.replaceWith(JSCode);
    });
    }
}
