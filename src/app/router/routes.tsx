import React from 'react';
import loadable from '@loadable/component';
import Loading from '../templates/Loading';

type OneOfPageName = typeof PAGE_NAMES[number];
const PAGE_NAMES = ['Events'] as const;

const create = (name: typeof PAGE_NAMES[number]) =>
  loadable<PageComponentProps>(() => import(/* webpackChunkName: "[request]" */ `../pages/${name}.tsx`), {
    fallback: <Loading />,
  });

const pages = PAGE_NAMES.reduce<Record<string, LoadablePageComponent>>((acc, name) => {
  acc[name] = create(name);
  return acc;
}, {}) as Record<OneOfPageName, LoadablePageComponent>;

export default pages;
