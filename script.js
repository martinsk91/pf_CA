const television = {
    brand: "Samsung",
    model: "QLED Q90T",
    screenSizeInches: 65,
    isSmartTV: true,
    buttons: ["volumeUp", "volumeDown", "channalUp", "cahnalDown", "source"],
    isTurnedOn: false,

    
     togglePower: function() {
        if (this.isTurnedOn === false) {
            this.isTurnedOn = true;

            console.log(`Turning on the ${this.brand} TV...`);
           
        } else {
            this.isTurnedOn = false;
            console.log(`Turning off the ${this.brand} TV...`);
          
           
        }


    }
}