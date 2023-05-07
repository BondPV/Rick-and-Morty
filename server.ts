import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express, { Request, Response, NextFunction } from 'express';
import { createServer as createViteServer, ViteDevServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = 3000;

const createServer = async (): Promise<void> => {
  const app = express();

  const vite: ViteDevServer = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    const url: string = req.originalUrl;

    try {
      let template: string = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      const html = template.split('<!--ssr-outlet-->');
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      const { pipe }: { pipe: (res: Response) => void } = await render(url, {
        onShellReady(): void {
          res.write(html[0]);
          pipe(res);
        },
        onAllReady(): void {
          res.write(html[1]);
          res.end();
        },
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    }
  });

  app.listen(PORT, () => console.log('Server started at http://localhost:' + PORT));
};

createServer();
