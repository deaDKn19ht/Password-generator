Vue.createApp({
    data() {
        return {
            pass: '',
            string: '',
            checkedLowerCase: true,
            checkedUpperCase: false,
            checkedNumber: false,
            checkedSymbol:false,
            lowerCase: "abcdefghijklmnopqrstuvwxyz",
            upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            number: "0123456789",
            symbol: "!\"'@#$%^&*()_+~\\`|}{[]:;?><,./-=",    
            passLength: 6,        
        }
    },
    methods: {
        passGen(){
            if(this.checkedLowerCase) this.string+= this.lowerCase
            if(this.checkedUpperCase) this.string+= this.upperCase
            if(this.checkedNumber) this.string+= this.number
            if(this.checkedSymbol) this.string+= this.symbol

            for(let i = 0; i < this.passLength; i++) {
                this.pass += this.string.charAt(Math.floor(Math.random()*this.string.length))
            }
        }
        
    },    
}).mount('#app')