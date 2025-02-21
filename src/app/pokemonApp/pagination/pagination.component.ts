import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  template: `
    <section class="pagination">
      <div class="pagination-results">
        Showing {{ start }} to {{ end }} of {{ total }} results
      </div>
      <div class="pagination-controls">
        <button (click)="handlePrevious()">Previous</button>
        <button (click)="handleNext()">Next</button>
      </div>
    </section>
  `,
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() offset = 0;
  @Input() limit = 0;
  @Input() total? = 0;
  @Output() offsetChange = new EventEmitter<number>();
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  handleNext() {
    if (this.total && this.offset < this.total) {
      this.offset += this.limit;
      this.offsetChange.emit(this.offset);
      this.next.emit();
    }
  }

  handlePrevious() {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.offsetChange.emit(this.offset);
      this.previous.emit();
    }
  }

  get start() {
    return this.offset + 1;
  }
  get end() {
    return this.offset + this.limit;
  }
}
