import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    // Emite o evento do tipo featureSelected para a classe pai receber o parametro feature
    this.featureSelected.emit(feature);
  }
}
