import {http, HttpResponse} from "msw";
import {BASE_URL} from "../constants/api.ts";

export const handlers = [
  http.get(`${BASE_URL}/en/collection`, () => {
    return HttpResponse.json({
      artObjects: [
        {
          "links": {
            "self": "http://www.rijksmuseum.nl/api/en/collection/SK-A-3580",
            "web": "http://www.rijksmuseum.nl/en/collection/SK-A-3580",
          },
          "id": "en-SK-A-3580",
          "objectNumber": "SK-A-3580",
          "title": "The Singel Bridge at the Paleisstraat in Amsterdam",
          "hasImage": true,
          "principalOrFirstMaker": "George Hendrik Breitner",
          "longTitle": "The Singel Bridge at the Paleisstraat in Amsterdam, George Hendrik Breitner, 1898",
          "showImage": true,
          "permitDownload": true,
          "webImage": {
            "guid": "cd15e2fa-b1f6-41f4-9e9e-c2ca87abcca3",
            "offsetPercentageX": 0,
            "offsetPercentageY": 0,
            "width": 5805,
            "height": 3825,
            "url": "https://lh3.googleusercontent.com/Bawo7r1nPZV6sJ4OHZJHdKV_4Ky59vquAR7KoUXcNZgx9fqTaOW-QaOM9qoyYhOTAopzjt9OIfW06RMwa-9eJW9KjQw=s0",
          },
          "headerImage": {
            "guid": "fef39f74-9783-44c9-acae-69eac3a76b01",
            "offsetPercentageX": 0,
            "offsetPercentageY": 0,
            "width": 1920,
            "height": 460,
            "url": "https://lh3.googleusercontent.com/jR6y5a8lFvgYe37WxLPQJZTjBAaBB6aIFYMsFw9gGP1y69TltkVQdWQVoZhSyGN9ZnPKR5taEJPbGhUBSDxlOmNqoyI=s0",
          },
          "productionPlaces": [
            "Amsterdam"
          ],
        },
        {
          "links": {
            "self": "http://www.rijksmuseum.nl/api/en/collection/SK-A-3584",
            "web": "http://www.rijksmuseum.nl/en/collection/SK-A-3584",
          },
          "id": "en-SK-A-3584",
          "objectNumber": "SK-A-3584",
          "title": "Girl in a White Kimono",
          "hasImage": true,
          "principalOrFirstMaker": "George Hendrik Breitner",
          "longTitle": "Girl in a White Kimono, George Hendrik Breitner, 1894",
          "showImage": true,
          "permitDownload": true,
          "webImage": {
            "guid": "5dea6805-8cf3-4d6e-b334-89adfdd6f341",
            "offsetPercentageX": 0,
            "offsetPercentageY": 0,
            "width": 4543,
            "height": 4678,
            "url": "https://lh3.googleusercontent.com/0bgOiMrBM2GuhW_pNeQW711GuB3kD7Gq7AILGHaJGeWKa1Fu1hUJGpOjvSpiP_XpgRlC4jVmH0Z1233PEPMJTfNRR7Q=s0",
          },
          "headerImage": {
            "guid": "ca275add-7098-4726-94df-4743cc5f1ef2",
            "offsetPercentageX": 0,
            "offsetPercentageY": 0,
            "width": 1920,
            "height": 460,
            "url": "https://lh3.googleusercontent.com/DbySiXwDdYlhl0r-fmM1CdLfro5aC1S0KdapBqWJyboOCgWYO1v50-8B2xWRRbqrv8rqKDyLsojkPv0h2-XKjmJbLyoV=s0",
          },
          "productionPlaces": [
            "Amsterdam"
          ],
        }
      ],
    });
  })
];
