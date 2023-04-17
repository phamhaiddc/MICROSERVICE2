import { BaseServer, ServerOptions } from "./core";
import { HttpExceptionFilter } from "./filters/http-exception.filter";

export class Server extends BaseServer {
  protected async bootstrap(appModule: unknown): Promise<void> {
    await this.defaultBootstrap(appModule);

    this.app.useGlobalFilters(new HttpExceptionFilter());
  }

  public static create(appModule: unknown, options: ServerOptions): Server {
    return new Server(appModule, options);
  }
}
