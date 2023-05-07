import { Provider } from 'react-redux';
import { renderToPipeableStream, PipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './App';
import store from './store';

export const render = (url: string, options?: object): PipeableStream => {
  return renderToPipeableStream(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
    options
  );
};
