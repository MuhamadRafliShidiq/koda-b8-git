exports.vdt = {
    description:{
        error: true,
        message:'Success',
        returnValue:null
    },
    isArrayNumber: function(arr){
        if(!Array.isArray(arr)){
            this.description.error = true,
            this.description.message = 'Parameter is not an array'
            this.description.returnValue = arr
            return false
        } 
        const isArrayNumber = arr.every((item) => typeof item === 'number');
        let res = []
        arr.forEach((item) => {
            if(typeof item !== 'number'){
               res = [...res, item]
            }
        })
        if (!isArrayNumber) {
            this.description.error = true,
            this.description.message = 'Array tipe is not array of number'
            this.description.returnValue = res
            return false
        } else {
            this.description.returnValue = arr
            return true
        }
    },
    isNumber: function(...arr){
        let res = []
        res = arr.filter((item) => typeof item !== 'number')
        if (res.length > 0) {
            this.description.error = true,
            this.description.message = 'Value is not a valid number'
            this.description.returnValue = res
            return false
        } else {
            this.description.returnValue = arr
            return true
        }
    }
}