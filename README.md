# Dota 2 stats

Project website: [dotaz](https://dotaz.netlify.app/)

This is a [Next.js](https://nextjs.org/) project with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

You can check any match ID using this web application.
More features are planned for the future.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Todo](#todo)

## Installation

1. Start by cloning this repository:

```bash
git clone https://github.com/kaveh2k/dotaz.git
```

2. Navigate to the project directory:

```bash
cd dotaz
```

3. Install the dependencies:

```bash
npm install
```

## Features

- Pick Ban: You can find pick ban details.
- Score and Time: You can see the score, time, and the winning side.
- In this project, I used the Fuse Algorithm to find pictures based on the given name.
- There is a backend coded on Express to fetch data from [Stratz API](https://stratz.com/), which is a GraphQL API. It returns the response on a RESTful API. You can find the backend [project here](https://github.com/kaveh2k/dotaz-backend).

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch: git checkout -b my-feature.
3. Make your changes and commit them: git commit -m 'Add some feature'.
4. Push to the branch: git push origin my-feature.
5. Submit a pull request.
6. Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions, feedback, or suggestions, please feel free to contact us at hidemek@duck.com.

## Todo

### Some additional features are shown below:

    - Create:
        - Create an AI that can help you improve your skills.
        - Create a Discord bot.
        - Create a Twitch bot.
    - Add:
        - Add login with Discord, Twitch, and Steam.
        - Add more components to display more detailed information.
        - Add Mongodb database
    - And many more features to come.
