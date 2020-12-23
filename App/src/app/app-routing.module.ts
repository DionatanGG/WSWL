import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
	},
	{
		path: '',
		redirectTo: 'votacao',
		pathMatch: 'full',
		canActivate: [AuthGuard],
	},
	{
		path: 'votacao',
		loadChildren: () => import('./votacao/votacao.module').then((m) => m.VotacaoModule),
		canActivate: [AuthGuard],
	},
	{
		path: 'resultados',
		loadChildren: () => import('./resultados/resultados.module').then((m) => m.ResultadosModule),
		canActivate: [AuthGuard],
	},
	{ path: '**', redirectTo: 'votacao' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
