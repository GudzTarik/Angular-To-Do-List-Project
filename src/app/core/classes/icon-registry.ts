import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export class IconRegistry {
  public static register(
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer): void {
    matIconRegistry.addSvgIcon(
      'add-icon',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/add-icon.svg'));

    matIconRegistry.addSvgIcon(
      'delete-icon',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete-icon.svg'));

    matIconRegistry.addSvgIcon(
      'edit-icon',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit-icon.svg'));

    matIconRegistry.addSvgIcon(
      'close-icon',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/close-icon.svg'));
  }
}
