var name = "komal"

function normal() {
    console.log(this.name)
}

arro = () => {
    console.log(this.name)
}

arro()

module.exports = {normal,arro}

   




