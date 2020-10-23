/**
 *  @file Parse a string into a longitude-latitude pair suitable for geojson.
 *  © 2020 Redifish Group LLC
 */

/**
 *
 * ### Supported Formats:
 * * DD°MM.MMMM’
 * * DD.DDDDDD°
 * * DD° MM' SS"
 *
 * ### Example:
 * ```
 * parse(`35°25'01"N, 106°58'50"W`) // >> (2) [-106.98055555555555, 35.41694444444444]
 * parse("35.3434, -106.3434") // >> (2) [-106.3434, 35.3434]
 * ```
 * @author Cody Smith
 * @module parseLatLon
 * @export parse
 * @param {String} inputString
 * @returns {Number[]} [longitude, latitude]
 */
export function parse(inputString) {
  const [lat, lon] = inputString.split(",");
  if (
    lon.toLowerCase().search("n") >= 0 ||
    lon.toLowerCase().search("s") >= 0
  ) {
    //swap if in lon,lat order
    const tmp = lat;
    lat = lon;
    lon = tmp;
  }
  return [parseCoor(lon), parseCoor(lat)];
}

function parseCoor(coor) {
  const pf = parseFloat;
  const coor2 = normalize(coor);
  let result;
  try {
    const [a, b] = coor2.split("°");
    const [c, d] = b.split(`'`);
    // Deg: DD°MM.MMMM’
    result = pf(a) + pf(b) / 60;
    if (d) {
      // DMS: DD° MM' SS"
      result += pf(d) / 3600;
    }
  } catch (err) {
    const coor3 = coor2.replace("°", "");
    // Dec: DD.DDDDDD°
    if (isNaN(pf(coor2))) {
      throw err;
    }
    result = pf(coor2);
  }
  if (coor.toLowerCase().search("s") >= 0) result = result * -1;
  if (coor.toLowerCase().search("w") >= 0) result = result * -1;

  return result;
}

function normalize(coor) {
  const result = coor
    .replace(/\s+/gi, "")
    .replace(/[swenNEWS]/gi, "")
    .replace(/"/, "''")
    .replace(/[°]$/gi, "");
  return result;
}

//
// test
//
// console.log([-120, 41], parse("41°N, 120°W"));
// console.log([-120, 41], parse("-41, 120"));
// console.log(
//   [-120.98055555555555, 41.41694444444444],
//   parse(`41°25'01"N, 120°58'50"W`)
// );
