import { Injectable }    from '@angular/core';
import { CanDeactivate} from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
 
 
@Injectable({
  providedIn: 'root',
})

export class ExitContactGuard implements CanDeactivate<ContactComponent> {
  canDeactivate(
    component: ContactComponent
    ): boolean {
  
      if (!component.checked) {
        return true;
      }

      alert("To exit the page you need to uncheck the editMode mark.");
      return false;
    }
}
