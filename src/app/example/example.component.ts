import { Component } from '@angular/core';
import { TestPipe } from "../test.pipe";

@Component({
    selector: 'app-example',
    standalone: true,
    templateUrl: './example.component.html',
    styleUrl: './example.component.scss',
    imports: [TestPipe]
})
export class ExampleComponent {

}
