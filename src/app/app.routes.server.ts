import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    // projects view info
    path: 'projects/view/:name',
    renderMode: RenderMode.Client
  },
];
