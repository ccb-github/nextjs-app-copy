`npm install next-i18next react-i18next i18next`

# Default language resource directory structure will like this  
.
└── public
    └── locales
        ├── en
        |   └── common.json
        └── de
            └── common.json

1. create your i18next config 

   `touch next.i18next.config.js`

   And the content is

```
module.exports = { 
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
}
```

2. include the i18n setting to **next.config.js** file


| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |
