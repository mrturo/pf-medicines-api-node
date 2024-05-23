import { Domain as DomainError } from '../error/domain.error';
import { Environment as EnvironmentUtil } from './environment.util';
import { Logger as LoggerUtil } from './logger.util';
import { Random as RandomUtil } from './random.util';
export class Configuration {
  public static valueToDate(c: Configuration): Date | undefined {
    let result: Date | undefined = undefined;
    const sDate = c.value;
    try {
      if (sDate.length === 8) {
        let year = parseInt(sDate.substring(0, 4));
        year = Number.isNaN(year) ? -1 : year;
        let month = parseInt(sDate.substring(4, 6));
        month = Number.isNaN(month) ? -1 : month;
        let day = parseInt(sDate.substring(6, 8));
        day = Number.isNaN(day) ? -1 : day;
        if (year < 0 || month < 0 || day < 0) {
          throw new DomainError('Invalid date values');
        }
        result = new Date(year, month - 1, day, 0, 0, 0, 0);
      } else {
        throw new DomainError(`Invalid date length (${sDate.length})`);
      }
    } catch (error) {
      // Empty block statement
    }
    return result;
  }
  public static valueToNumber(c: Configuration, def = 0): number {
    const parsed = parseInt(c.value);
    return Number.isNaN(parsed) ? def : parsed;
  }
  public static hideCharacters(s: string): string {
    return '*'.repeat(s.length);
  }
  public static isTrue(value: string): boolean {
    return (
      value === '' ||
      value === 'YES' ||
      value === 'Y' ||
      value === 'TRUE' ||
      value === 'T' ||
      value === 'SI' ||
      value === 'S' ||
      value === 'VERDADERO' ||
      value === 'V'
    );
  }
  public static nodeEnv(): string {
    return new Configuration(process.env.NODE_ENV).value;
  }
  public static packageName(): string {
    return new Configuration(process.env.npm_package_name).value;
  }
  public static port(): number {
    return Configuration.valueToNumber(
      new Configuration(process.env.PORT),
      3000
    );
  }
  public static postgresql(): {
    personalFinance: {
      database: string;
      host: string;
      password: string;
      port: number;
      user: string;
    };
  } {
    return {
      personalFinance: {
        database: new Configuration(process.env.POSTGRESQL_PF_DATABASE).value,
        host: new Configuration(process.env.POSTGRESQL_PF_HOST).value,
        password: new Configuration(process.env.POSTGRESQL_PF_PASSWORD).value,
        port: Configuration.valueToNumber(
          new Configuration(process.env.POSTGRESQL_PF_PORT)
        ),
        user: new Configuration(process.env.POSTGRESQL_PF_USER).value
      }
    };
  }
  public static showValues(
    preLog: number | string | undefined | null = undefined
  ): void {
    preLog = RandomUtil.get(preLog);
    const currentEnv: EnvironmentUtil = EnvironmentUtil.init();
    LoggerUtil.debug([
      preLog,
      `Environment Variables: ${Configuration.packageName()} (${
        currentEnv.value
      } - ${currentEnv.file})`
    ]);
    LoggerUtil.debug([preLog, ` * nodeEnv: ${Configuration.nodeEnv()}`]);
    LoggerUtil.debug([preLog, ` * port: ${Configuration.port()}`]);
    LoggerUtil.debug([
      preLog,
      ` * postgresql.personalFinance.database: ${Configuration.postgresql().personalFinance.database}`
    ]);
    LoggerUtil.debug([
      preLog,
      ` * postgresql.personalFinance.host: ${Configuration.postgresql().personalFinance.host}`
    ]);
    LoggerUtil.debug([
      preLog,
      ` * postgresql.personalFinance.password: ${Configuration.postgresql().personalFinance.password}`
    ]);
    LoggerUtil.debug([
      preLog,
      ` * postgresql.personalFinance.port: ${Configuration.postgresql().personalFinance.port}`
    ]);
    LoggerUtil.debug([
      preLog,
      ` * postgresql.personalFinance.user: ${Configuration.postgresql().personalFinance.user}`
    ]);
  }
  private _value!: string;
  constructor(value: string | null | undefined = undefined) {
    this.value = value;
  }
  public get value(): string {
    return this._value;
  }
  private set value(value: string | null | undefined) {
    this._value =
      !value ||
      value === null ||
      (typeof value === 'string' &&
        value.startsWith('${') === true &&
        value.endsWith('}') === true)
        ? ''
        : value.trim();
  }
}
