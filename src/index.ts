import chalk from 'chalk';

export interface NotifyProps {
  message?: string;
  error?: Error;
}

export class Notify {
  private constructor() {}

  static info(props: NotifyProps): void {
    const message = props.message;

    if (message) {
      console.log(`${chalk.black.bgBlueBright(' Info ')} ${message}`);
    }
  }

  static success(props: NotifyProps): void {
    const message = props.message;

    if (message) {
      console.log(`${chalk.black.bgGreenBright(' Success ')} ${message}`);
    }
  }

  static warning(props: NotifyProps): void {
    const message = props.message;

    if (message) {
      console.log(`${chalk.black.bgYellowBright(' Warning ')} ${message}`);
    }
  }

  static error(props: NotifyProps): void {
    const message = props.message;

    if (message) {
      console.log(`${chalk.black.bgRedBright(' Error ')} ${message}`);
    }

    const error = props.error;

    if (error) {
      console.error(error);
    }
  }
}
