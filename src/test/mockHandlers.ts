import { http, HttpResponse } from "msw";
import { BASE_URL } from "../constants/api.ts";

export const handlers = [
  http.get(`${BASE_URL}/en/collection`, () => {
    return HttpResponse.json({
      artObjects: [
        {
          id: "en-SK-A-3580",
          objectNumber: "SK-A-3580",
          title: "The Singel Bridge at the Paleisstraat in Amsterdam",
          hasImage: true,
          principalOrFirstMaker: "George Hendrik Breitner",
          longTitle:
            "The Singel Bridge at the Paleisstraat in Amsterdam, George Hendrik Breitner, 1898",
          showImage: true,
          webImage: {
            width: 5805,
            height: 3825,
            url: "https://lh3.googleusercontent.com/Bawo7r1nPZV6sJ4OHZJHdKV_4Ky59vquAR7KoUXcNZgx9fqTaOW-QaOM9qoyYhOTAopzjt9OIfW06RMwa-9eJW9KjQw=s0",
          },
          productionPlaces: ["Amsterdam"],
        },
        {
          id: "en-SK-A-3584",
          objectNumber: "SK-A-3584",
          title: "Girl in a White Kimono",
          hasImage: true,
          principalOrFirstMaker: "George Hendrik Breitner",
          longTitle: "Girl in a White Kimono, George Hendrik Breitner, 1894",
          showImage: true,
          webImage: {
            width: 4543,
            height: 4678,
            url: "https://lh3.googleusercontent.com/0bgOiMrBM2GuhW_pNeQW711GuB3kD7Gq7AILGHaJGeWKa1Fu1hUJGpOjvSpiP_XpgRlC4jVmH0Z1233PEPMJTfNRR7Q=s0",
          },
          productionPlaces: ["Amsterdam"],
        },
      ],
    });
  }),
];
