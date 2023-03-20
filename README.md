# PorkyPrints-Backend

![PorkyPrints](/images/porky_prints_full_pink.svg)

## Setup

This project is the backend repository of PorkyPrints. It is to be run with [PorkyPrints-Frontend](https://github.com/Nyx92/3D-Model-Ecommerce-Frontend). Before running the server locally, be sure to perform these steps

1. Clone repo
2. Install packages by running `npm i`

3. Create a .env file with these set of configurations

```
POSTGRES_USERNAME=<username>
POSTGRES_PASSWORD=<password>
POSTGRES_HOST=127.0.0.1
POSTGRES_DATABASE=3d-model-ecommerce-development
SALT=3d-model
STRIPE_SECRET_KEY=<stripe_sk>
```

4. Create DB and run migrations

```
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

5. Run server with

```
nodemon index.mjs
```

Alternatively, if nodemon is not installed, `node index.mjs` will also work.

6. Optionally configure node.json to watch for certain file extensions (.js / .mjs)

7. Other Sequelize commands

- Use these commands to generate migrations and seeders

```
npx sequelize migration:generate --name create-tables
npx sequelize seed:generate --name seed-data
```

- Destructive actions to undo a migration/seeding/drop table

```
npx sequelize db:migrate:undo
npx sequelize db:seed:undo
npx sequelize db:drop
```

## Models

![](/images/erd.png)

[ERD Diagram](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#R7V1tb9s2F%2F01AbYPLWzJspOPs9O1W9MtSx5g3b4ErEXbbGVRo%2Bgm7q9%2FSInyGylFihXKJgkEiEVTtHTP5TkUea944U%2BWT%2B8JSBafcAijC68XPl341xee1%2FeCAfvHS9Z5yWg0ygvmBIWi0rbgHv2AorAnSlcohOleRYpxRFGyXzjFcQyndK8MEIIf96vNcLT%2FqwmYQ6ngfgoiufRvFNJFXnrpjbblHyCaL4pf7g%2Bv8m%2BWoKgs7iRdgBA%2F7hT57y78CcGY5p%2BWTxMYceMVdsnP%2B7Xk282FERjTOicMh3%2F48cfk%2B28f7lez91%2F%2FCNB%2Ff70RrXwH0Urc8CqFJBVXTNeFGdjFJ%2FwjBV940TilgFCBlt9jBcz%2BFKAYElbQz46jCCQpyqrnJQsUhTdgjVe0aKg4Gs%2FQEwzvcrB4XYbbDWuMH%2FLGZ6zxe3Ex%2FGsQoXnMPk%2FZrfNfHBOYsmu5ASkVNWTjFHcKCYVPO0XCWO8hXkJK1qyK%2BHYgcBOO64vDx60XeIEoW%2Bx4gF%2BcB4TnzTctb8FhHwQ%2BDbDyJKyqYbrj3jZeYIJ%2BcHAiYcxd6LLjR7SMQMzcGIQHRWOcddsMAhRFExxhjm%2BMYyhBzCuFBCf%2FA2QOqShIMIppZodgzP6YZSa9t8FFwK51wo7722P2x6sTOsFxSglzJd4GZIg%2BQo7qmOJENBrBWdE%2BEXbnn79gSvGyFP9K93%2FeKZp6wWs5gS85we3HUjdg908RiO4YMYJ4HuWgZTwJtqApkFXaemPfQ8Mf9k7MzDmLMqpboDCEcX08vNp47ADgN7S%2FaGxrlcatgYjRTgwo6yCrOEwlUDfX%2BXKcBxLOrLrX%2B4n3C9Z3GNyQMGh%2F7hj7gonzuuM0AVMUz2%2FyM4cHzhHoco6n8s7qteostZrT4C2Bk4Za0tB7RWkYdi0Nw%2FpOoIccYIiK9o7UhaA2GKbrwkgCGS4B4qf9xPoG496TVwQtbmCdAlw6BehcAa66VoArcxXgsjYYpitAMTO2g3IC0vQRk9AOFajvCiarwO%2FRPV6n0eT6R3obfyS318MFLSjLkb4%2B0u97GllfCfpZknyV%2B9pF8kpLyNN8M0RS%2BhCDJTSO5Y%2F0BetYfuBYXjvLB12zfGAMyw9qG990lpdn7CJgFcnXdwWTSV5NUfLSvKN97bR%2F2fWUTt%2Br7wYnLATVLm6VEqhNIQ%2F4eSCOkUpwrC%2BYLAWrL6sP%2F16nV7NP0fLzX9ffJv98TDa2ccxfxvyS19QVg1Lm3wQg6mB%2BNepnQ%2FTPWL%2FCp40mevV9y0QPwpDANDWC59t0Bet4%2FtLRvHaaH3RN81cms%2FylpSSvWKJdcHBspfgSPzCZ4ZXzXSPH8LqncLxR1zP35bJ%2BYgz%2F7HTtqLbxDWJ4pSXkSKspgewXwwdAOcuH7PMZc3yLnmAdxxfi70heH8n7va5JvmKO7txYfjN6dTSvWH1ZJaFFPN%2FAF0wmenU%2BmvyUh0nosqdzPF6YPu0FwfEMrYbLLajXE%2BoG%2BdNefXo4lQRqT6Z0ozKo3Zr6xhTyUovIoQ6tTaF2q%2BzltpFT7p0%2BHPkg11wfOs%2Bi9hrk0p%2Fwk121iztx8OTY22zw%2FhBCNhKPstV4ZiN68uqgxx3sUwM50d6pgXY16Dyj2muQV392amDlco7aFIr1nFXKAGCCkD8zzL7lzwyspxgtCW5hp9Q2vu8UQLsC1E%2Bvfq15Q7883fLcGL%2Fw4BYYv8LaL2D8g9Z0dGb5MQ8s2a9lqzrMvMBomm%2FgCE1p%2FsWOUas5HZ4xdDSvn%2BaLZZ%2FuXqxaHpt3djQ%2FrG1%2B0wf2vvz8xjoqXZmRbdGmJ5g8nFeHNpRH3juefzWev9TI8%2Bq3JZWH550wz1d6sF08r0ZVDu6wKyC3gS9Yx%2FRu6r4DpmdD%2Bq6Zvny%2B7tyYvvBgx%2FSqMA27mL6BL5jM9OrnHXkdZ8m3pHIhueybgThDEPSgbs7EprD1OZciRtgtsrcXkuvXHwieSkjuQB68mxSSO6g%2FdjJIvNWm8CSkbQ%2FJbeAd1sn5QI7gdvpw5JNcc33oPCR30CAy%2B4Sf7Kpd3InDQF6SzwbvZr4P91hvsE8MGuxv5sTgtcSg84jcQYPA7LMTA7dwvzGFvHCfi0EI0ylBCUU4tkQT3Bp%2BqW0CJwH6JUDrjkdq2M9yZafSgx3lvwkUKzvsB%2BeYrO1KwmjgEyYzPsJ%2FDx9Wv8D72TWTfv%2F%2Bz7vPX90Od10Qvs7Nj5Son%2BUQv8p%2F7aJ7pSXkud2EoCl8SCB5WMXIuESMI93BZKZXR7S5dLsOqF7nhkdq2M8y3a7Sg%2B0ie7Up5Ll9u6K2GviCfUzvMu70M73WDY7UsJ9lxl2lBzumf9OXJ%2B4te2Wum68vpamRvHhXpGMe%2BoNg7ov9YCsO3n7cLTt%2F%2Bm0Td7snEv0DkfCGezXu%2BZmFc2TxtrcFtv2Dok%2Fgaa%2BiCMztSeLBT1wy4UDxeNf3pPje7J7yq2ID3lbCe4cHb9xVrNT2hwo36BcO2%2Fo0%2FUiRfLv6skSUkYEEOH%2FZWoYXwd%2FgQedW9Pf9LjvYltyJOxuU9GKCmcPtcEmLyr4Lqldfu0f137lTaPewHrSvtgAzkuPsUfyQEDzPd7Jz2L4Y26BrbIsZgN1HNbxMIuh67XHIXnaOrDyjBsM5LLSV2WiB5zgG0bttKbM8GwzA4oFqW%2BcGZyMuLnhfIaVrYUKwopirLF0WCgyfEP288%2Fkf3tTbQBxdF8KaHRQPacz0ZL05iR%2FsnMUPt6dlR8V5mdr%2FQkjmPO%2FuhNPxwl9RFG1OCbdVliBe52U7NUrVOMUrMoUVJhbTHNyslS5BYAQo%2Bg73Wm9%2FC9nSFVUETUmJemY7umdSonr7Y6baOVGbjts%2BZg3eP2z17EhtF6joGqVcrTMnSn19crTrGeVEvQiRQI2IQRMm6vuWn4kNz4lq0ztMnkJRG6LBG4mt1ofecf5WrQ86c6LU1yc%2FgXdMEK%2B6kXTf0p2kFXuMbWIijUmLatMhrNMDz%2B0prZ%2F%2BdWZBqVE%2Fm02lX2L93KctZHtZ1M2LiWzTIaxj%2B%2BInHdtrZHutCU9q2M9md%2BmXmD83m31073vy4N6koMg2fcE%2BppeDIk99sW5zUG%2Bxru463MFi2ssW5kRXo4VSldYrGWnoWbBTbEKgA%2FQ2AMy5ZR%2B%2FWsuxLYIcKFBuNJusCWX5zfM6UX7Te9vrX%2B1D3RuOngWbHd1CgpgNshVgCeD42eV2nGTq8GqdvODMZ3t5Hr%2FUPv7skGBMd5WAgGTxib%2B5ghX%2BHw%3D%3D)

- category: Product Category of 3D model
- model: 3D Model information
- order: Purchase details of customer's orders
- user: Customer login and information

## Router and Controllers

All routes are maintained in `routes.mjs`

- create an api in the desired controller file, and then expose an endpoint route for the api
