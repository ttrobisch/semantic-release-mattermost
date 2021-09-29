# semantic-release-mattermost

semantic-release plugin to get release notifications on mattermost via webhooks

## Install

Add the plugin to your npm-project

### NPM

```shell
npm install semantic-release-mattermost
```

### Yarn

```shell
yarn add semantic-release-mattermost
```

## Usage

Add the plugin to your semantic-release config:

```json
{
  "plugins": [
    "@semantic-release/release-notes-generator",
    [
      "semantic-release-slack-bot",
      {
        "webhook": "https://mattermost.example.com"
      }
    ]
  ]
}
```

### Environment variable

If the ```MATTERMOST_WEBHOOK``` environment variable is defined in your environment,
it will be used instead of the webhook provided in the config.
