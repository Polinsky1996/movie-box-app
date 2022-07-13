import * as Vibrant from 'node-vibrant'
import { getImages } from './api';

const getColorPalette = async (id) => {
  const url = await getImages(id, 300);

  if (url) {
    const colorPalette = await Vibrant.from(url).getPalette();

    return colorPalette
  }

  return null
}

const getGradientBackground = async (id) => {
  const colors = await getColorPalette(id)
    .then( response => {
      if (response) {
        return {
          one_color: response.DarkVibrant.hex,
          two_color: response.Vibrant.hex,
          text_color: response.DarkVibrant.titleTextColor
        }
      }
      
      return null
    });


  return colors
}

export {
  getGradientBackground
}
