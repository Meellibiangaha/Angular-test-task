import { Component } from '@angular/core';
import { HomePageService } from '../services';

const ELEMENT_DATA = [
    { name: 'admin', email: 'admin@gmail.com', password: 'admin' },
    { name: 'user', email: 'user@mail.ru', password: 'user123'},
];

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.less'],
    providers: [HomePageService]
})
export class HomePageComponent {
    displayedColumns: string[] = ['name', 'email', 'password'];
    dataSource = ELEMENT_DATA;
}
