const generateSignatureImage = async (name, fontFamily, fontSize = 56) => {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
    // Set canvas size based on text length and font size
    ctx.font = `${fontSize}px ${fontFamily}`;
    const textWidth = ctx.measureText(name).width;
    canvas.width = textWidth;
    canvas.height = fontSize + 5; // Adding some padding
  
    // Set font properties
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'black';
  
    // Draw text on canvas
    ctx.fillText(name, 0, canvas.height / 2);
  
    // Convert canvas to base64 image
    const base64Image = canvas.toDataURL();
  
    return base64Image;
  };
  
  export default generateSignatureImage;
  