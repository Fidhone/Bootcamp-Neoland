import './style.css'

const COLOR_PALETTE = {
  '#28262C': 'Raisin Black',
  '#998FC7': 'Blue Bell',
  '#D4C2FC': 'Lavender Blue',
  '#F9F5FF': 'Magnolia',
  '#000000': 'Black',
  '#14248A': 'Resolution Blue',
  '#14213D': 'Oxford Blue',
  '#FCA311': 'Orange Web',
  '#E5E5E5': 'Platinum',
  '#FFFFFF': 'White',
  
};

Object.keys(COLOR_PALETTE).forEach((color) => {
  const option = document.createElement("option");
  option.value = color;
  option.innerText = COLOR_PALETTE[color];
});

const addOptionsToColorPicker = () => {
const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  })
}

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  colorPickerSelect.addEventListener("change", (event) => {
    const colorName = document.querySelector("#color-name");
    const newColor = event.target.value; 
    document.body.style.backgroundColor = newColor;
    colorName.innerText = COLOR_PALETTE[newColor];
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}` 
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";
  });
};


addOptionsToColorPicker();
addEventListenerToColorPicker();