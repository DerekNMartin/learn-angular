import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timer-input',
  imports: [FormsModule],
  template: `
    <div>
      <input
        type="text"
        [(ngModel)]="timeInputValue"
        placeholder="Minutes..."
      />
      <button (click)="handleSetTime()">Set Time</button>
    </div>
  `,
  styleUrl: './timer-input.component.css',
})
export class TimerInputComponent {
  @Output() setTime = new EventEmitter();
  timeInputValue = '';

  handleSetTime() {
    const seconds = Number(this.timeInputValue) * 60;
    this.setTime.emit(seconds);
    this.timeInputValue = '';
  }
}
