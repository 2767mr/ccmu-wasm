export default class Modmanager extends Plugin {
    constructor(mod) {
        super(mod)
        this.basePath = mod.baseDirectory;
    }

    prestart() {
        this.prestartAsync() //Run async
    }

    async prestartAsync() {
        await this._loadScript(this.basePath.substr(7) + 'wasm_exec.js')
        const go = new Go();
        const result = await WebAssembly.instantiateStreaming(fetch(this.basePath.substr(7) + 'ccmu.wasm'), go.importObject)
        const inst = result.instance;
        try {
            go.run(inst);
        } catch(e) {
            console.error("Error while running ccmu (go):", e);
        }
    }

    _loadScript(url){
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            document.body.appendChild(script);
            script.onload = () => resolve();
            script.onerror = err => reject(err);
            script.type = 'text/javascript';
            script.src = url;
        });
    }
}