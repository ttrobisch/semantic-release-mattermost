# semantic-release-discord

semantic-release plugin to get release notifications on discord via webhooks

## Install

Add the plugin to your npm-project

### NPM

```shell
npm install semantic-release-discord
```

## Usage

Add the plugin to your semantic-release config:

```json
{
  "plugins": [
    "@semantic-release/release-notes-generator",
    [
      "semantic-release-discord",
      {
        "custom_message": "my custom message",
        "webhook": "https://discord.example.com",
        "username": "semantic-release"
      }
    ]
  ]
}
```

### Environment variable

If the ```DISCORD_WEBHOOK``` environment variable is defined in your environment,
it will be used instead of the `webhook` provided in the config.

If the ```DISCORD_CUSTOM_MESSAGE``` environment variable is defined in your environment,
it will be used instead of `the custom_message` provided in the config.

### Thanks

- @ttrobisch/semantic-release-mattermost