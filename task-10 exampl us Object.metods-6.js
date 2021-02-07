// в теле документа <svg width="300" height="300"></svg>
// задание
var sample = {
    name: "canvas sample",
    canvas: document.querySelector("svg"),
    draw: function(){
        this.fugure ? this.canvas.innerHTML += this.figure : null
    }
}
Object,defineProperties (sample, {
    figure: {
        get: () => this.figure,
        set: newFigure => {
            let figures = {
                circle: `<circle cx = "150"
                    cy = "150"
                    r = "100"
                    stroke = "orange"
                    stroke-width = "3"
                    fill = "yellow" />
                `,
                rect: `<rect width = "200"
                    height = "100"
                    stroke = "blue"
                    stroke-width = "4"
                    fill = "yellow" />
                `,
                line: `<line x1 = "0" y1 = "0"
                x2 = "200" y2 = "200"
                stroke = "#f0f"
                stroke-width = "5"/>
                `
            }
            this.figure = figure [...]?
                        figure[...] : figure["line"]
        }
    }
})
// вариант решения
var sample = {
    name: "canvas sample",
    canvas: document.querySelector("svg"),
    draw: function(){
        this.fugure ? this.canvas.innerHTML += this.figure : null
    }
}
Object,defineProperties (sample, {
    figure: {
        get: () => this.figure,
        set: newFigure => {
            let figures = {
                circle: `<circle cx = "150"
                    cy = "150"
                    r = "100"
                    stroke = "orange"
                    stroke-width = "3"
                    fill = "yellow" />
                `,
                rect: `<rect width = "200"
                    height = "100"
                    stroke = "blue"
                    stroke-width = "4"
                    fill = "yellow" />
                `,
                line: `<line x1 = "0" y1 = "0"
                x2 = "200" y2 = "200"
                stroke = "#f0f"
                stroke-width = "5"/>
                `
            }
            this.figure = figure [newFigure] ?
                        figure[newFigure] : figure["line"]
        }
    }
})