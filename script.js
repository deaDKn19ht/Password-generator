Vue.createApp({
    data() {
        return {
            pass: '',  
            checkedLowerCase: true,
            checkedUpperCase: false,
            checkedNumber: false,
            checkedSymbol:false,
            lowerCase: "abcdefghijklmnopqrstuvwxyz",
            upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            number: "0123456789",
            symbol: "!\"'@#$%^&*()_+~\\`|}{[]:;?><,./-=",    
            passLength: 8,        
        }
    },
    methods: {
        passGen(){
            let string = ''
            this.pass = ''
            if(this.checkedLowerCase) {
                string+= this.lowerCase
            }
            if(this.checkedUpperCase) {
                string+= this.upperCase
            }
            if(this.checkedNumber) {
                string+= this.number
            }
            if(this.checkedSymbol) {
                string+= this.symbol
            }

            for(let i = 0; i < this.passLength; i++) {
                this.pass += string.charAt(Math.floor(Math.random()*string.length))
            }            
        }
        
    },    
}).mount('#app')