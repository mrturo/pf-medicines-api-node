import { Pool as PgPool } from 'pg';
export class DatabasePool {
  private _user!: string;
  private _host!: string;
  private _database!: string;
  private _password!: string;
  private _port!: number;
  private _ssl!: boolean | any | undefined;
  constructor(
    host: string,
    database: string,
    credentials: { user: string; password: string },
    port: number = 5432,
    ssl: boolean | any | undefined = undefined
  ) {
    this.user = credentials.user;
    this.host = host;
    this.database = database;
    this.password = credentials.password;
    this.port = port;
    this.ssl = ssl;
  }
  public get user(): string {
    return this._user;
  }
  public set user(user: string) {
    this._user = user;
  }
  public get host(): string {
    return this._host;
  }
  public set host(host: string) {
    this._host = host;
  }
  public get database(): string {
    return this._database;
  }
  public set database(database: string) {
    this._database = database;
  }
  public get password(): string {
    return this._password;
  }
  public set password(password: string) {
    this._password = password;
  }
  public get port(): number {
    return this._port;
  }
  public set port(port: number) {
    this._port = port;
  }
  public get ssl(): boolean | any | undefined {
    return this._ssl;
  }
  public set ssl(value: boolean | any | undefined) {
    this._ssl = value;
  }
  public get get(): PgPool {
    return new PgPool({
      user: this.user,
      host: this.host,
      database: this.database,
      password: this.password,
      port: this.port,
      ssl: this.ssl
    });
  }
}
