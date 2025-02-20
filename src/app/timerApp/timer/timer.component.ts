import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerInputComponent } from '../timer-input/timer-input.component';

const DEFAULT_TIME = 5 * 60; // 5 minutes

@Component({
  selector: 'app-timer',
  imports: [CommonModule, TimerInputComponent],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent {
  currentTime = signal<number>(DEFAULT_TIME);
  timerIntervalId = this.timerInterval();

  constructor() {
    effect(() => {
      if (this.isTimeComplete()) this.handleStop();
    });
  }

  timerInterval() {
    return setInterval(() => this.currentTime.update((time) => time - 1), 1000);
  }

  isTimeComplete = computed(() => this.currentTime() === 0);

  formattedTime = computed(() => {
    const minutes = Math.floor(this.currentTime() / 60);
    const seconds = (this.currentTime() % 60).toFixed(0);
    return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`;
  });

  handleSetTime(timeValueSeconds: number) {
    this.handleStop();
    this.currentTime.set(timeValueSeconds);
  }

  handleStart() {
    if (this.isTimeComplete()) this.handleReset();
    this.timerIntervalId = this.timerInterval();
  }
  handleStop() {
    clearInterval(this.timerIntervalId);
  }
  handleReset() {
    this.handleStop();
    this.currentTime.set(DEFAULT_TIME);
  }
}
