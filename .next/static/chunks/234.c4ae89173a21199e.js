(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[234,293,297],{42848:function(e,b,a){"use strict";a.r(b),a.d(b,{PhantomAdapter:function(){return k}});var f=a(4942),c=a(41436),g=a(44445),d=a(2043),h=a.n(d);function i(a,b,c){return new Promise((d,e)=>{c>0?setTimeout(async()=>{let f=await a();f&&d(f),f||i(a,b,c-1).then(a=>(d(a),a)).catch(a=>e(a))},b):d(!1)})}let j=async function(){var a;let b=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{interval:1e3,count:3},c="undefined"!=typeof window&&!!(null!==(a=window.solana)&& void 0!==a&&a.isPhantom);if(c)return window.solana;let d=await i(()=>{var a;return null===(a=window.solana)|| void 0===a?void 0:a.isPhantom},b.interval,b.count);return d?window.solana:null};class k extends c.J5{constructor(){let a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{};super(),(0,f.Z)(this,"name",c.rW.PHANTOM),(0,f.Z)(this,"adapterNamespace",c.yk.SOLANA),(0,f.Z)(this,"currentChainNamespace",c.EN.SOLANA),(0,f.Z)(this,"type",c.hN.EXTERNAL),(0,f.Z)(this,"status",c.MP.NOT_READY),(0,f.Z)(this,"_wallet",null),(0,f.Z)(this,"phantomProvider",null),(0,f.Z)(this,"rehydrated",!1),(0,f.Z)(this,"_onDisconnect",()=>{this._wallet&&(this._wallet.off("disconnect",this._onDisconnect),this.rehydrated=!1,this.status=this.status===c.MP.CONNECTED?c.MP.READY:c.MP.NOT_READY,this.emit(c.n2.DISCONNECTED))}),this.chainConfig=a.chainConfig||null}get isWalletConnected(){var a;return!!(null!==(a=this._wallet)&& void 0!==a&&a.isConnected&&this.status===c.MP.CONNECTED)}get provider(){var a;return(null===(a=this.phantomProvider)|| void 0===a?void 0:a.provider)||null}set provider(a){throw Error("Not implemented")}setAdapterSettings(a){}async init(b){if(super.checkInitializationRequirements(),this.chainConfig||(this.chainConfig=(0,c.h2)(c.EN.SOLANA,"0x1")),this._wallet=await j({interval:500,count:3}),!this._wallet)throw c.Ty.notInstalled();this.phantomProvider=new g.PhantomInjectedProvider({config:{chainConfig:this.chainConfig}}),this.status=c.MP.READY,this.emit(c.n2.READY,c.rW.PHANTOM);try{b.autoConnect&&(this.rehydrated=!0,await this.connect())}catch(a){h().error("Failed to connect with cached phantom provider",a),this.emit("ERRORED",a)}}async connect(){var e=this;try{if(super.checkConnectionRequirements(),this.status=c.MP.CONNECTING,this.emit(c.n2.CONNECTING,{adapter:c.rW.PHANTOM}),!this._wallet)throw c.Ty.notInstalled();if(this._wallet.isConnected)await this.connectWithProvider(this._wallet);else{let d=this._wallet._handleDisconnect;try{await new Promise((f,a)=>{let b=async()=>{await this.connectWithProvider(this._wallet),f(this.provider)};if(!this._wallet)return a(c.Ty.notInstalled());this._wallet.once("connect",b),this._wallet._handleDisconnect=function(){a(c.Ty.windowClosed());for(var f=arguments.length,g=Array(f),b=0;b<f;b++)g[b]=arguments[b];return d.apply(e._wallet,g)},this._wallet.connect().catch(b=>{a(b)})})}catch(a){if(a instanceof c.up)throw a;throw c.RM.connectionError(null==a?void 0:a.message)}finally{this._wallet._handleDisconnect=d}}if(!this._wallet.publicKey)throw c.RM.connectionError();return this._wallet.on("disconnect",this._onDisconnect),this.provider}catch(b){throw this.status=c.MP.READY,this.rehydrated=!1,this.emit(c.n2.ERRORED,b),b}}async disconnect(){let d=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{cleanup:!1};if(!this.isWalletConnected)throw c.RM.notConnectedError("Not connected with wallet");try{var a;await (null===(a=this._wallet)|| void 0===a?void 0:a.disconnect()),d.cleanup&&(this.status=c.MP.NOT_READY,this.phantomProvider=null,this._wallet=null),this.emit(c.n2.DISCONNECTED)}catch(b){this.emit(c.n2.ERRORED,c.RM.disconnectionError(null==b?void 0:b.message))}}async getUserInfo(){if(!this.isWalletConnected)throw c.RM.notConnectedError("Not connected with wallet, Please login/connect first");return{}}async connectWithProvider(a){if(!this.phantomProvider)throw c.RM.connectionError("No phantom provider");return await this.phantomProvider.setupProvider(a),this.status=c.MP.CONNECTED,this.emit(c.n2.CONNECTED,{adapter:c.rW.PHANTOM,reconnected:this.rehydrated}),this.provider}}},22399:function(){},78848:function(){}}])