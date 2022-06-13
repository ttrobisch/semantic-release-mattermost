import { Config } from "./Config";
import { Context } from "semantic-release";

import { webhook } from './webhook';

function preparemessage(config: Config, context: Context) {
  const { env, nextRelease, logger } = context;
  logger.log('prepare message.');
  if (!env.DISCORD_CUSTOM_MESSAGE || !config.custom_message) {
    logger.log('prepare custom message.');
    const message = {
      text: config.custom_message,
      username: config.username
    }
    return message;
  }
  else {
    logger.log('prepare default message.');
    const message = {
      text: `The ${nextRelease.type} version "${nextRelease.version}" has been released.\n\n${nextRelease.notes}`,
      username: config.username
    }
    return message;
  }
}

export async function success(config: Config, context: Context) {
  const { logger } = context;
  logger.log('Executing webhook.');

  const hook = context.env.DISCORD_WEBHOOK || config.webhook;
  const message = preparemessage(config, context);

  await webhook({
    hook,
    message,
    logger
  })
}
