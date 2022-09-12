// Destination categories
export enum CategoryNames {
  SEASIDE = 'seaside',
  MOUNTAIN = 'mountain',
  CITY = 'city',
  ADVENTURE = 'adventure'
}

export interface DestinationFormDataI {
  destinationName: string
  cityName: string
  country: string
  agency: string
  minPerson: number
  maxPerson: number
  minPrice: number
  maxPrice: number
  onStock: boolean
}

export enum BrowserStorage {
  TOKEN = 'token-camp-king',
  LANG = 'lang-camp-king',
  FONTSIZE = 'fontSize-camp-king',
  THEME = 'theme-camp-king',
  CART = 'cart-camp-king',
}

export enum AvatarNames {
  BULBASAUR = 'bulbasaur',
  CHARMANDER = 'charmander',
  PIKACHU = 'pikachu',
  GEODUDE = 'geodude',
  SOMETHING = 'something',
}

export enum AvatarIDs {
  BULBASAUR = 1,
  CHARMANDER = 2,
  GEODUDE = 3,
  PIKACHU = 4,
  SOMETHING = 5,
}

export enum UISettingsFonts {
  FONT_SMALL = 'small',
  FONT_MIDDLE = 'middle',
  FONT_BIG = 'big',
  FONT_HUGE = 'huge',
}

export enum UISettingsThemes {
  THEME_DARK = 'dark',
  THEME_NORMAL = 'normal',
}

export enum UISettingsLangs {
  LANG_ENG = 'eng',
  LANG_HUN = 'hun',
}

export enum UISettingSectionNames {
  UI = 'ui',
  USER_DATA = 'userData',
  ORDERS = 'orders',
}
