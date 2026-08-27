export const waterSplashAnimation = {
  config: {
    url: 'https://example.com/assets/animations/waterSplash.webp',
    width: 400,
    height: 400,
    frameCount: 30,
    fps: 24
  },
  lottieFallback: {
    "v": "5.7.0",
    "fr": 30,
    "ip": 0,
    "op": 60,
    "w": 400,
    "h": 400,
    "nm": "Water Splash Fallback",
    "ddd": 0,
    "assets": [],
    "layers": [
      {
        "ddd": 0,
        "ind": 1,
        "ty": 4,
        "nm": "Drop",
        "sr": 1,
        "ks": {
          "o": { "a": 1, "k": [{ "t": 0, "s": [100] }, { "t": 60, "s": [0] }] },
          "r": { "a": 0, "k": 0 },
          "p": {
            "a": 1,
            "k": [
              { "t": 0, "s": [200, 200, 0] },
              { "t": 60, "s": [200, 300, 0] }
            ]
          },
          "a": { "a": 0, "k": [0, 0, 0] },
          "s": { "a": 0, "k": [100, 100, 100] }
        },
        "ao": 0,
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "ty": "el",
                "d": 1,
                "s": { "a": 0, "k": [20, 20] },
                "p": { "a": 0, "k": [0, 0] },
                "nm": "Circle",
                "hd": false
              },
              {
                "ty": "fl",
                "c": { "a": 0, "k": [0, 0.5, 1, 1] },
                "nm": "Fill",
                "hd": false
              },
              {
                "ty": "tr",
                "p": { "a": 0, "k": [0, 0] },
                "nm": "Transform"
              }
            ],
            "nm": "Group",
            "hd": false
          }
        ],
        "ip": 0,
        "op": 60,
        "st": 0,
        "bm": 0
      }
    ],
    "markers": []
  }
};
