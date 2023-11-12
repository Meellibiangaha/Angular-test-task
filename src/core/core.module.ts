import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AuthService } from './services'
import { AuthGuard } from './guards/auth-guard'

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AuthService,
        AuthGuard
    ]
})
export class CoreModule { }
