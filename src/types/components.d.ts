import { RouteComponentProps } from 'react-router';
import { LoadableComponent } from '@loadable/component';

declare global {
  type OneOfUrlParamKey = 'id';
  interface PageComponentProps extends RouteComponentProps<Record<OneOfUrlParamKey, string | undefined>> {}

  type PageComponent = React.FunctionComponent<PageComponentProps>;
  type LoadablePageComponent = LoadableComponent<PageComponentProps>;
}
