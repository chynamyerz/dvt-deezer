/**
 *
 * Page names
 *
 */
export const HOME = "Home";
export const ARTIST = "Artist";

/**
 *
 * Number formatters
 *
 */
export const TWO_DECIMAL = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export const NO_DECIMAL = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
