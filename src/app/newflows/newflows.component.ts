import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-flow-performance',
  template: `
    @if (isLoggedIn) {
      <div>
        <p>Welcome, user!</p>
        <ul>
          @for (item of items; track item) {
            <li>
              {{ item }}
            </li>
          }
        </ul>
      </div>
    } @else {
      <p>Please log in to continue.</p>
    }
  `,
})
export class NewflowsComponent implements OnInit {
  isLoggedIn = false;
  items: string[] = [];
  startTime: number = 0;

  ngOnInit(): void {
    this.startTime = performance.now();

    const checkTime = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 22 && now.getMinutes() === 23) {
        clearInterval(checkTime); // Stop checking after condition is met

        this.items = ['Item 1', 'Item 2', 'Item 3'];
        this.isLoggedIn = true;

        const endTime = performance.now();
        console.log(
          `New Flow Rendering Time: ${(endTime - this.startTime).toFixed(2)}ms`
        );
      }
    }, 1000); // Check every second
  }
}
