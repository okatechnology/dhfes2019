import { RouteComponentProps } from 'react-router';
import { LoadableComponent } from '@loadable/component';

declare global {
  type OneOfUrlParamKey = 'id';
  interface PageComponentProps extends RouteComponentProps<Record<OneOfUrlParamKey, string | undefined>> {}

  type PageComponent = React.FunctionComponent<PageComponentProps>;
  type LoadablePageComponent = LoadableComponent<PageComponentProps>;

  interface BaseButtonProps {
    className?: string;
    children: JSX.Element | string;
    external?: boolean;
    to: string | React.MouseEventHandler;
    fontSize: string | undefined;
  }
}
