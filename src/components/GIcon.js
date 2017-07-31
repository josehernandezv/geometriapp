/**
 * GIcon icon set component.
 * Usage: <GIcon name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
const glyphMap = {
  "decagon": 109,
  "heptagon": 106,
  "hexagon": 105,
  "nonagon": 108,
  "octagon": 107,
  "oval": 110,
  "parallelogram": 103,
  "pentagon": 104,
  "rectangle": 100,
  "rhombus": 101,
  "square": 99,
  "trapezoid": 102,
  "triangle": 98,
  "circle": 97
};

const iconSet = createIconSet(glyphMap, 'gicon', 'GIcon.ttf');

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;

