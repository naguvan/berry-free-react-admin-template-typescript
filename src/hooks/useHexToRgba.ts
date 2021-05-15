import * as React from 'react';
interface Color {
    r: number;
    g: number;
    b: number;
}
function hexToRgb(hex:string): Color | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}
const useHexToRgba = (hexColor: string, opacity: string) => {
  const [rgbColor, setRgbColor] = React.useState<string>('');
  function handleColorChange(color:string) {
    setRgbColor(color);
  }
  React.useEffect(() => {
    const isOk = /^#[0-9A-F]{6}$/i.test(hexColor);
    const opOK = /^(0(\.\d+)?|1(\.0+)?)$/.test(opacity);
    if (isOk && opOK) {
      const newRGBObj = hexToRgb(hexColor);
      const newRGBColor =   newRGBObj ? `(${newRGBObj.r}, ${newRGBObj.g}, ${newRGBObj.b}, ${opacity})` : `(255, 255, 255, 0)`;
      handleColorChange(newRGBColor);
    } else {
      handleColorChange(`(255, 255, 255, 0)`);
    }
  }, [hexColor, opacity]);
  return rgbColor;
};
export default useHexToRgba;
