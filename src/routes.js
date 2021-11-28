import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Navigate, Route, BrowserRouter } from 'react-router-dom';
import LoadingScreen from '../src/components/LoadingScreen';
import NotFoundView from 'views/errors/NotFountView';
import MainView from 'views/main/MainView';
import LoginView from 'views/auth/LoginView';
import RegisterView from 'views/auth/RegisterView';
// 레이아웃, 게스트가드, 어스가드(component)

export const renderRoutes = (routes) => (
  <Suspense fallback={<LoadingScreen />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            element={route.element}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes = [
  {
    exact: true,
    path: '/404',
    element: <NotFoundView />,
  },
  {
    exact: true,
    path: '/',
    element: <MainView />,
  },
  {
    exact: true,
    path: '/login',
    element: <LoginView />,
  },
  {
    exact: true,
    path: '/register',
    element: <RegisterView />,
  },
  // {
  //   exact: true,
  //   guard: GuestGuard,
  //   path: '/login',
  //   component: lazy(() => import('src/views/auth/LoginView'))
  //   // component: lazy(() => import('src/components/SignUp'))
  // },
  // // {
  // //   exact: true,
  // //   path: '/login-unprotected',
  // //   component: lazy(() => import('src/views/auth/LoginView'))
  // //   // component: lazy(() => import('src/views/editor/TemplateGalleryView'))
  // // },
  // {
  //   exact: true,
  //   guard: GuestGuard,
  //   path: '/register',
  //   component: lazy(() => import('src/views/auth/RegisterView'))
  // },
  // // {
  // //   exact: true,
  // //   path: '/register-unprotected',
  // //   component: lazy(() => import('src/views/auth/RegisterView'))
  // // },
  // {
  //   exact: true,
  //   guard: AuthGuard,
  //   path: '/workspace/templates',
  //   layout: MainLayout,
  //   component: lazy(() => import('src/views/workspace/TemplateGalleryView'))
  // },
  // {
  //   exact: true,
  //   guard: AuthGuard,
  //   path: '/workspace/recommend-templates',
  //   layout: MainLayout,
  //   component: lazy(() => import('src/views/workspace/TemplateRecommendView'))
  // },
  // {
  //   exact: true,
  //   guard: AuthGuard,
  //   path: '/workspace/overview',
  //   layout: MainLayout,
  //   component: lazy(() => import('src/views/workspace/OverView'))
  // },
  // {
  //   exact: true,
  //   guard: AuthGuard,
  //   path: '/workspace/iam-analytics-list',
  //   layout: MainLayout,
  //   component: lazy(() => import('src/views/workspace/IAMAnalyticsListView'))
  // },
  // {
  //   exact: true,
  //   guard: AuthGuard,
  //   path: '/workspace/recommend-contact-templates',
  //   layout: MainLayout,
  //   component: lazy(() => import('src/views/workspace/WorkInProgressView'))
  // },
  // {
  //   exact: true,
  //   guard: AuthGuard,
  //   path: '/workspace/recommend',
  //   layout: MainLayout,
  //   component: lazy(() => import('src/views/workspace/RecommendView'))
  // },
  // {
  //   exact: true,
  //   guard: AuthGuard,
  //   path: '/settings',
  //   layout: MainLayout,
  //   component: lazy(() => import('src/views/settings/SettingsView'))
  // },
  // {
  //   exact: true,
  //   guard: AuthGuard,
  //   path: '/help',
  //   layout: MainLayout,
  //   component: lazy(() => import('src/views/settings/HelpView'))
  // },
  // {
  //   exact: true,
  //   path: '/error',
  //   component: lazy(() => import('src/views/errors/NotSupportedView'))
  // },
  // {
  //   path: '/workspace/iam-analytics',
  //   guard: AuthGuard,
  //   routes: [
  //     {
  //       exact: true,
  //       path: '/workspace/iam-analytics/view',
  //       layout: MainLayout,
  //       component: lazy(() =>
  //         import('src/views/workspace/analytics/AnalyticsView')
  //       )
  //     },
  //     {
  //       component: () => <Navigate to="/404" />
  //     }
  //   ]
  // },
  // {
  //   path: '/editor',
  //   guard: AuthGuard,
  //   routes: [
  //     {
  //       exact: true,
  //       path: '/editor/full-card-slide/:id?',
  //       layout: FullCardSlideLayout,
  //       component: lazy(() => import('src/views/editor/FullCardSlideView'))
  //     },
  //     {
  //       exact: true,
  //       path: '/editor/full-countdown/:id?',
  //       layout: FullCountdownLayout,
  //       component: lazy(() => import('src/views/editor/FullCountdownView'))
  //     },
  //     {
  //       exact: true,
  //       path: '/editor/half-top-image/:id?',
  //       layout: HalfTopImageLayout,
  //       component: lazy(() => import('src/views/editor/HalfTopImageView'))
  //     },
  //     {
  //       exact: true,
  //       path: '/editor/modal-paging-slide/:id?',
  //       layout: ModalPagingSlideLayout,
  //       component: lazy(() => import('src/views/editor/ModalPagingSlideView'))
  //     },
  //     {
  //       exact: true,
  //       path: '/editor/modal-slick-contents/:id?',
  //       layout: ModalSlickContentsLayout,
  //       component: lazy(() => import('src/views/editor/ModalSlickContentsView'))
  //     },
  //     {
  //       exact: true,
  //       path: '/editor/modal-slide-image/:id?',
  //       layout: ModalSlideImageLayout,
  //       component: lazy(() => import('src/views/editor/ModalSlideImageView'))
  //     },
  //     {
  //       exact: true,
  //       path: '/editor/full-dual-image/:id?',
  //       layout: FullDualImageLayout,
  //       component: lazy(() => import('src/views/editor/FullDualImageView'))
  //     },
  //     {
  //       exact: true,
  //       path: '/editor/full-survey/:id?',
  //       layout: FullSurvey4QLayout,
  //       component: lazy(() => import('src/views/editor/FullSurvey4QView'))
  //     },
  //     {
  //       exact: true,
  //       path: '/editor/modal-top-image/:id?',
  //       layout: ModalTopImageLayout,
  //       component: lazy(() => import('src/views/editor/ModalTopImageView'))
  //     },
  //     {
  //       exact: true,
  //       path: '/editor/single-modal-top/:id?',
  //       layout: SingleModalTopLayout,
  //       component: lazy(() => import('src/views/editor/SingleModalTopView'))
  //     },
  //     {
  //       exact: true,
  //       path: '/editor/half-slide-up/:id?',
  //       layout: HalfSlideUpLayout,
  //       component: lazy(() => import('src/views/editor/HalfSlideUpView'))
  //     },
  //     {
  //       exact: true,
  //       path: '/editor/half-slide-up-imgs/:id?',
  //       layout: HalfSlideUpImgsLayout,
  //       component: lazy(() => import('src/views/editor/HalfSlideUpImgsView'))
  //     },
  //     {
  //       component: () => <Navigate to="/404" />
  //     }
  //   ]
  // },
  // {
  //   path: '/catalog',
  //   guard: AuthGuard,
  //   routes: [
  //     {
  //       exact: true,
  //       path: '/catalog/modal-slick-contents/:id?',
  //       layout: ModalSlickContentsCatalog,
  //       component: lazy(() =>
  //         import('src/views/catalog/ModalSlickContentsView')
  //       )
  //     },
  //     {
  //       component: () => <Navigate to="/404" />
  //     }
  //   ]
  // },
  {
    path: '/',
    routes: [
      {
        exact: true,
        path: '/',
        element: <MainView />,
      },
      {
        element: () => <Navigate to="/404" />,
      },
    ],
  },
];

export default routes;
